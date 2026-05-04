from fastapi import APIRouter
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.models.schemas import IngestResponse
from app.rag import retriever
from app.rag.embedder import embed_texts
from app.rag.loader import load_documents

router = APIRouter()


@router.post("/", response_model=IngestResponse)
async def ingest_documents():
    docs = load_documents()
    if not docs:
        return IngestResponse(documents_processed=0, chunks_created=0, status="no documents found")

    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)

    chunks: list[str] = []
    metadatas: list[dict] = []
    for doc in docs:
        for chunk in splitter.split_text(doc["text"]):
            chunks.append(chunk)
            metadatas.append(doc["metadata"])

    vectors = embed_texts(chunks)
    retriever.ingest(chunks, vectors, metadatas)

    return IngestResponse(
        documents_processed=len(docs),
        chunks_created=len(chunks),
        status="ok",
    )
