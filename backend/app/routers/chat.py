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

Guidelines:
- Use bullet points or numbered lists when listing skills, projects, or achievements.
- Use short paragraphs (2-3 sentences max) — avoid long walls of text.
- Add a blank line between each section or list to improve readability.
- Bold key terms or titles where appropriate (e.g. **Project Name**, **Skill**).
- Be specific and highlight relevant experience and achievements.
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


@router.post("/")
async def chat(request: ChatRequest):
    settings = get_settings()
    client = AsyncOpenAI(api_key=settings.openai_api_key)

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
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
        tool_call = choice.message.tool_calls[0]
        query = json.loads(tool_call.function.arguments)["query"]

        query_vector = embed_texts([query])[0]
        hits = search(query_vector, top_k=5)
        context = "\n\n---\n\n".join(h["text"] for h in hits)
        sources = list({h["metadata"]["filename"] for h in hits})

        second = await client.chat.completions.create(
            model=settings.llm_model,
            messages=[
                *messages,
                choice.message,
                {"role": "tool", "tool_call_id": tool_call.id, "content": context},
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
