from fastapi import APIRouter
from openai import AsyncOpenAI
from app.models.schemas import ChatRequest
from app.config import get_settings

router = APIRouter()


@router.post("/")
async def chat(request: ChatRequest):
    settings = get_settings()
    client = AsyncOpenAI(api_key=settings.openai_api_key)

    completion = await client.chat.completions.create(
        model=settings.llm_model,
        messages=[
            {"role": "system", "content": "You are a helpful assistant on a personal portfolio website."},
            {"role": "user", "content": request.message},
        ],
    )

    return {
        "response": completion.choices[0].message.content,
        "session_id": request.session_id or "default",
        "sources": [],
    }
