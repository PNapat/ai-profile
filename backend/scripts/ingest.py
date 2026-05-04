"""CLI entry point: docker compose exec backend python scripts/ingest.py"""

import sys
from pathlib import Path

# Ensure the app package is importable when run as a plain script
sys.path.insert(0, str(Path(__file__).parent.parent))

from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.rag import retriever
from app.rag.embedder import embed_texts
from app.rag.loader import load_documents


def main() -> None:
    print("Loading documents...")
    docs = load_documents()
    if not docs:
        print("No documents found in data/documents/ — add PDFs or Markdown files and retry.")
        return

    print(f"Loaded {len(docs)} document page(s)")

    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks: list[str] = []
    metadatas: list[dict] = []
    for doc in docs:
        for chunk in splitter.split_text(doc["text"]):
            chunks.append(chunk)
            metadatas.append(doc["metadata"])

    print(f"Created {len(chunks)} chunks — embedding...")
    vectors = embed_texts(chunks)

    print("Upserting to Qdrant...")
    retriever.ingest(chunks, vectors, metadatas)

    print(f"Done. {len(docs)} document page(s), {len(chunks)} chunks ingested.")


if __name__ == "__main__":
    main()
