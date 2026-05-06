import uuid
from typing import Any

from qdrant_client import QdrantClient
from qdrant_client.models import Distance, PointStruct, VectorParams

from app.config import get_settings

VECTOR_SIZE = 1536


def _client() -> QdrantClient:
    s = get_settings()
    return QdrantClient(host=s.qdrant_host, port=s.qdrant_port)


def ingest(
    chunks: list[str],
    vectors: list[list[float]],
    metadatas: list[dict[str, Any]],
) -> None:
    s = get_settings()
    client = _client()
    collection = s.qdrant_collection

    existing = {c.name for c in client.get_collections().collections}
    if collection in existing:
        client.delete_collection(collection_name=collection)
    client.create_collection(
        collection_name=collection,
        vectors_config=VectorParams(size=VECTOR_SIZE, distance=Distance.COSINE),
    )

    points = [
        PointStruct(
            id=str(uuid.uuid4()),
            vector=vector,
            payload={"text": chunk, **metadata},
        )
        for chunk, vector, metadata in zip(chunks, vectors, metadatas)
    ]
    client.upsert(collection_name=collection, points=points)


def search(query_vector: list[float], top_k: int = 5) -> list[dict[str, Any]]:
    s = get_settings()
    client = _client()
    hits = client.search(
        collection_name=s.qdrant_collection,
        query_vector=query_vector,
        limit=top_k,
        with_payload=True,
    )
    return [
        {
            "text": hit.payload.get("text", ""),
            "metadata": {k: v for k, v in hit.payload.items() if k != "text"},
            "score": hit.score,
        }
        for hit in hits
    ]
