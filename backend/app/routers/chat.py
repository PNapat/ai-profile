import json

from fastapi import APIRouter
from openai import AsyncOpenAI

from app.config import get_settings
from app.models.schemas import ChatRequest
from app.rag.embedder import embed_texts
from app.rag.retriever import search

router = APIRouter()

SYSTEM_PROMPT = """You are an AI assistant on Napat's personal portfolio website.
Use the search_documents tool whenever you need information about Napat from his documents.
For simple conversational follow-ups that don't require document lookup, answer directly.

Formatting rules (the UI renders markdown):
- Use ### for section headings, never numbered headings like "1. Title".
- Use - for bullet points under each heading.
- Bold key terms with **term** inline within sentences or bullets.
- Keep paragraphs short (2-3 sentences max).
- Never mix numbered lists with nested bullet points — pick one style per response.
- If the documents don't contain enough information to answer, say so honestly."""

SEARCH_TOOL = {
    "type": "function",
    "function": {
        "name": "search_documents",
        "description": "Search Napat's personal documents (resume, projects, certificates, skills, etc.) to find relevant information.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "The search query"}
            },
            "required": ["query"],
        },
    },
}


@router.post("", include_in_schema=True)
async def chat(request: ChatRequest):
    settings = get_settings()
    client = AsyncOpenAI(api_key=settings.openai_api_key)

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        *([{"role": "system", "content": request.instructions}] if request.instructions else []),
        *[{"role": m.role, "content": m.content} for m in request.thread],
        {"role": "user", "content": request.message},
    ]

    first = await client.chat.completions.create(
        model=settings.llm_model,
        messages=messages,
        tools=[SEARCH_TOOL],
        tool_choice="auto",
    )

    choice = first.choices[0]
    sources: list[str] = []

    if choice.finish_reason == "tool_calls":
        # Handle ALL tool calls, not just the first one
        tool_messages = []
        for tool_call in choice.message.tool_calls:
            query = json.loads(tool_call.function.arguments)["query"]
            query_vector = embed_texts([query])[0]
            hits = search(query_vector, top_k=5)
            context = "\n\n---\n\n".join(h["text"] for h in hits)
            sources.extend([h["metadata"]["filename"] for h in hits])

            tool_messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": context,
            })

        # Deduplicate sources
        sources = list(set(sources))

        second = await client.chat.completions.create(
            model=settings.llm_model,
            messages=[
                *messages,
                choice.message,
                *tool_messages,
            ],
        )
        response_text = second.choices[0].message.content
    else:
        response_text = choice.message.content

    return {
        "response": response_text,
        "session_id": request.session_id or "default",
        "sources": sources,
    }
