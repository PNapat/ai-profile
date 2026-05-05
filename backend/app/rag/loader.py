from pathlib import Path
from typing import Any

from pypdf import PdfReader

DOCUMENTS_DIR = Path(__file__).parent.parent.parent / "data" / "documents"


def load_documents() -> list[dict[str, Any]]:
    docs: list[dict[str, Any]] = []
    if not DOCUMENTS_DIR.exists():
        return docs

    for path in sorted(DOCUMENTS_DIR.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() == ".pdf":
            docs.extend(_load_pdf(path))
        elif path.suffix.lower() == ".md":
            docs.append(_load_markdown(path))

    return docs


def _load_pdf(path: Path) -> list[dict[str, Any]]:
    reader = PdfReader(path)
    pages = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if text.strip():
            pages.append(
                {
                    "text": text,
                    "metadata": {
                        "filename": path.name,
                        "file_type": "pdf",
                        "page_number": i + 1,
                    },
                }
            )
    return pages


def _load_markdown(path: Path) -> dict[str, Any]:
    return {
        "text": path.read_text(encoding="utf-8"),
        "metadata": {
            "filename": path.name,
            "file_type": "md",
            "page_number": 1,
        },
    }
