"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const PROJECTS = [
  {
    title: "AI Profile Website",
    description:
      "A RAG-powered personal portfolio with a chatbot that answers questions about me from personal documents using LangChain and Qdrant.",
    tech: ["Next.js", "FastAPI", "LangChain", "Qdrant"],
    status: "Live",
  },
  {
    title: "Document Q&A System",
    description:
      "Enterprise document question-answering system using retrieval-augmented generation with multi-turn conversation memory.",
    tech: ["Python", "LangGraph", "ChromaDB", "OpenAI"],
    status: null,
  },
  {
    title: "ML Pipeline Orchestrator",
    description:
      "End-to-end ML pipeline for training, evaluation, and deployment of NLP models with experiment tracking and versioning.",
    tech: ["Python", "MLflow", "Docker", "FastAPI"],
    status: null,
  },
];

export default function Projects() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="fade-section bg-[#EBF3FA] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#0085FF]" />
          <span className="text-[#0085FF] text-xs font-semibold tracking-[0.2em] uppercase">
            Selected work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#001233] mb-14 leading-tight">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative border border-[#D4ECFF] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0085FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Thumbnail placeholder */}
              <div className="h-36 bg-[#D4ECFF]/50 flex items-center justify-center border-b border-[#D4ECFF] group-hover:bg-[#D4ECFF] transition-colors duration-200">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-white mx-auto flex items-center justify-center mb-2 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0085FF" strokeWidth="1.8">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="text-[#94A3B8] text-xs">Preview</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-[#001233] group-hover:text-[#0353A4] transition-colors">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="px-2 py-0.5 bg-[#D4ECFF] text-[#0353A4] text-xs rounded-full whitespace-nowrap font-semibold flex-shrink-0">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#D4ECFF]/70 text-[#0353A4] rounded-md text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
