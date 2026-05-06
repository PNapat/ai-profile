"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const SKILL_CATEGORIES = [
  {
    name: "AI / ML",
    skills: ["Python", "PyTorch", "LangChain", "LangGraph", "RAG Systems", "NLP", "Transformers", "OpenAI API"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    name: "Tools",
    skills: ["Git", "MLflow", "Weights & Biases", "Qdrant"],
  },
];

export default function Skills() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="fade-section bg-[#001233] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0085FF]" />
              <span className="text-[#64B5F6] text-xs font-semibold tracking-[0.2em] uppercase">
                Technical stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Skills &amp; tools
            </h2>
          </div>
          <button
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("ai-chat-prompt", {
                  detail: {
                    message:
                      "Give me a concise overview of Napat's technical skills and what makes him stand out as an engineer. Highlight his strongest areas and any unique combinations of expertise.",
                  },
                })
              )
            }
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 border border-[#0085FF]/40 text-[#64B5F6] text-sm rounded-xl hover:bg-[#0085FF]/10 transition-colors whitespace-nowrap group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF] group-hover:animate-pulse" />
            AI Summary
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-[#0085FF]/30 transition-colors"
            >
              <h3 className="text-[#64B5F6] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-[#64B5F6]/20 text-white/75 rounded-full text-sm hover:border-[#0085FF]/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
