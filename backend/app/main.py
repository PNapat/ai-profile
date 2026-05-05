from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.config import get_settings
from app.routers import chat, ingest, profile


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings = get_settings()
    print(f"Backend starting | LLM: {settings.llm_model}")
    print(f"Qdrant: {settings.qdrant_host}:{settings.qdrant_port}")
    yield
    print("Shutting down")


app = FastAPI(
    title="AI Profile API",
    version="0.1.0",
    lifespan=lifespan,
)

settings = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.backend_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(ingest.router, prefix="/api/ingest", tags=["ingest"])
app.include_router(profile.router, prefix="/api/profile", tags=["profile"])


@app.get("/health")
async def health():
    return {"status": "ok", "service": "ai-profile-backend"}
