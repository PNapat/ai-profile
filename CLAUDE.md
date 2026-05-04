# AI-Powered Personal Profile Website

## Overview
A modern professional portfolio website for an AI/ML Engineer, targeting recruiters.
The site itself is a live demo of AI agent and GenAI skills — featuring a RAG chatbot
that answers questions about the owner from uploaded personal documents.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                  Docker Compose                  │
│                                                  │
│  ┌──────────┐  REST/SSE  ┌──────────────────┐   │
│  │ Next.js  │ ◄────────► │    FastAPI        │   │
│  │ :3000    │            │    :8000          │   │
│  └──────────┘            │  ┌─────────────┐  │   │
│                          │  │ RAG pipeline │  │   │
│                          │  └──────┬──────┘  │   │
│                          └─────────┼─────────┘   │
│                                    │             │
│                          ┌─────────▼─────────┐   │
│                          │     Qdrant        │   │
│                          │     :6333         │   │
│                          └───────────────────┘   │
└─────────────────────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │  LLM API   │
                    │ (External) │
                    └─────────────┘
```

## Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: FastAPI, Python 3.12, LangChain, LangGraph
- **Vector DB**: Qdrant (Docker)
- **LLM**: OpenAI GPT-4o-mini (configurable)
- **Embeddings**: text-embedding-3-small
- **Deployment**: Docker Compose

## Page Layout (Single Page + Floating Chat)

### Sections (scroll order)
1. **Navbar** — sticky, name left, anchor links right (About | Skills | Projects | Certs | Resume)
2. **Hero** — name, "AI/ML Engineer", tagline, profile photo, GitHub/LinkedIn, 2 CTAs
3. **About** — 2-3 paragraph professional summary (static content from config)
4. **Skills** — categorized pill tags (AI/ML | Backend | Cloud | Tools), AI summary toggle
5. **Projects** — responsive card grid, click → detail modal, AI-summarized descriptions
6. **Certificates** — card grid with issuer logo, name, date; click → detail modal with PDF view
7. **Resume** — summary card (years exp, education, latest role) + download PDF button
8. **Footer** — contact email, social links, copyright

### Floating Chat (all pages)
- Coral circle button, bottom-right, fixed position
- Opens slide-up panel (400px wide, 600px tall)
- Header: "Ask me anything" + close button
- Message thread: user bubbles right, AI bubbles left
- Source citations below AI responses
- Suggested starter questions: "What are your skills?", "Tell me about projects", etc.
- Input bar with send button at bottom
- SSE streaming for real-time token display

## AI Features
1. **RAG Chatbot** — answers questions about owner from personal documents
2. **AI Skill Summary** — generates overview of technical strengths from docs
3. **AI Project Summary** — generates project descriptions from project docs
4. **Source Citations** — shows which documents were used for each answer

## API Endpoints
- `GET  /health` — health check
- `POST /api/chat` — send message, returns SSE stream
- `POST /api/ingest` — trigger document ingestion
- `GET  /api/profile` — returns profile data (skills, projects, certs) for frontend
- `POST /api/summarize` — AI-summarize skills or projects from docs

## Data Flow: Chat
1. User types question in chat overlay
2. Frontend POSTs to `/api/chat` with `{ message, session_id }`
3. FastAPI invokes RAG pipeline
4. Pipeline embeds query → Qdrant similarity search → top-k chunks
5. LLM generates response with system prompt + context + query
6. Response streams back as SSE tokens
7. Frontend renders token-by-token + shows source docs

## Data Flow: Document Ingestion
1. Place PDFs/markdown in `backend/data/documents/`
2. POST `/api/ingest` or run `python scripts/ingest.py`
3. Loader reads files (PyPDF for PDF, plain read for .md)
4. RecursiveCharacterTextSplitter chunks (1000 chars, 200 overlap)
5. Chunks embedded via OpenAI text-embedding-3-small
6. Upserted to Qdrant with metadata (filename, page, doc_type)

## Profile Content Configuration
All static profile content is configured in `backend/data/profile.yaml`:
- name, title, tagline, photo URL
- about paragraphs
- skills (categorized)
- projects (title, description, tech, links)
- certificates (name, issuer, date, logo, credential URL)
- resume (highlights + PDF path)
- social links

## Build Plan

### Day 1: Foundation
- [x] Project scaffold + Docker Compose
- [ ] FastAPI skeleton (health, CORS, config, routers)
- [ ] Document ingestion pipeline (load → chunk → embed → Qdrant)
- [ ] Profile data endpoint (serve profile.yaml)
- [ ] Next.js layout + all page sections (static rendering)

### Day 2: AI Features
- [ ] RAG chatbot (LangChain retriever + LLM chain)
- [ ] SSE streaming endpoint
- [ ] Chat overlay component (frontend)
- [ ] AI summarization endpoint (skills + projects)

### Day 3: Polish
- [ ] Certificate detail modals
- [ ] Project detail modals
- [ ] Suggested questions in chat
- [ ] Source citations display
- [ ] Responsive design pass
- [ ] Docker Compose health checks + final testing

## Key Decisions
- **Single page** over multi-page: recruiters want to scroll, not click tabs
- **Floating chat** over dedicated page: always accessible, doesn't break flow
- **Qdrant** over Chroma: proper Docker service, metadata filtering, persistent
- **SSE** over WebSocket: simpler for one-directional streaming
- **profile.yaml** over database: easy to edit, version-controllable, no migration hassle
- **No auth**: this is a public portfolio site, no login needed
