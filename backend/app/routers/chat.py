from fastapi import APIRouter
from app.models.schemas import ChatRequest

router = APIRouter()


@router.post("/")
async def chat(request: ChatRequest):
    # TODO: Day 2 - wire up RAG pipeline + SSE streaming
    return {
        "response": f"Echo: {request.message} (RAG not yet connected)",
        "session_id": request.session_id or "default",
        "sources": [],
    }
