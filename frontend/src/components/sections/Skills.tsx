"use client";

import { useEffect, useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    skills: ["Python", "SQL", "R", "SAS", "JavaScript", "HTML", "CSS"],
    cardClass: "border-[#38BDF8]/20 bg-[#38BDF8]/[0.055] hover:border-[#38BDF8]/45 hover:bg-[#38BDF8]/[0.085]",
    headingClass: "text-[#7DD3FC]",
    chipClass: "border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#E0F2FE] hover:border-[#38BDF8]/55",
  },
  {
    name: "AI / ML",
    skills: [
      "PyTorch", "TensorFlow", "Keras", "Hugging Face", "LangChain", "LangGraph",
      "scikit-learn", "XGBoost", "NLTK",
    ],
    cardClass: "border-[#818CF8]/20 bg-[#818CF8]/[0.055] hover:border-[#818CF8]/45 hover:bg-[#818CF8]/[0.085]",
    headingClass: "text-[#C4B5FD]",
    chipClass: "border-[#818CF8]/25 bg-[#818CF8]/10 text-[#EDE9FE] hover:border-[#818CF8]/55",
  },
  {
    name: "Generative AI",
    skills: [
      "LLMs", "Transformers", "RAG", "Fine-tuning", "Prompt engineering",
      "AI agents", "Tokenization", "Attention mechanisms", "BERT", "GPT",
    ],
    cardClass: "border-[#22D3EE]/20 bg-[#22D3EE]/[0.05] hover:border-[#22D3EE]/45 hover:bg-[#22D3EE]/[0.08]",
    headingClass: "text-[#67E8F9]",
    chipClass: "border-[#22D3EE]/25 bg-[#22D3EE]/10 text-[#CFFAFE] hover:border-[#22D3EE]/55",
  },
  {
    name: "Data Science",
    skills: [
      "Data analytics", "Feature engineering", "Data visualization",
      "Machine algorithms", "Risk modeling", "Explainable AI", "Sentiment analysis", "NLP",
    ],
    cardClass: "border-[#34D399]/20 bg-[#34D399]/[0.05] hover:border-[#34D399]/45 hover:bg-[#34D399]/[0.08]",
    headingClass: "text-[#86EFAC]",
    chipClass: "border-[#34D399]/25 bg-[#34D399]/10 text-[#DCFCE7] hover:border-[#34D399]/55",
  },
  {
    name: "Tools & MLOps",
    skills: [
      "Docker", "Kubernetes", "Argo CD", "MLflow", "FastAPI", "Flask",
      "Streamlit", "CI/CD", "Git", "Jupyter", "PowerBI", "Prometheus",
      "Grafana",
    ],
    cardClass: "border-[#F59E0B]/20 bg-[#F59E0B]/[0.05] hover:border-[#F59E0B]/45 hover:bg-[#F59E0B]/[0.08]",
    headingClass: "text-[#FCD34D]",
    chipClass: "border-[#F59E0B]/25 bg-[#F59E0B]/10 text-[#FEF3C7] hover:border-[#F59E0B]/55",
  },
  {
    name: "Domain",
    skills: [
      "Credit scoring (A/B/C scorecards)", "Expected credit loss (ECL)",
      "PD / LGD / EAD modeling", "TFRS 9", "Model validation",
      "Model calibration", "SAS VDMML / DI",
    ],
    cardClass: "border-[#0085FF]/25 bg-[#0085FF]/[0.065] hover:border-[#0085FF]/50 hover:bg-[#0085FF]/[0.095]",
    headingClass: "text-[#64B5F6]",
    chipClass: "border-[#0085FF]/30 bg-[#0085FF]/10 text-[#D4ECFF] hover:border-[#0085FF]/60",
  },
];

export default function Skills() {
  const ref = useFadeIn<HTMLElement>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/50">
            Technical skills across programming, AI/ML, generative AI, data science, MLOps, and credit risk, 
            shaped by professional work, research, and AI projects.      
            </p>
          </div>
          {mounted ? (
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("ai-chat-prompt", {
                    detail: {
                      message:
                        "Give a concise overview of Napat's technical skills, highlighting his strongest areas across AI, data science, MLOps, and his domain knowledge.",
                      instructions:
                        "Answer for an HR recruiter or technical reviewer. Keep the response professional, friendly, humble, and not too long. Make Napat appealing to hire without sounding exaggerated. Use skills-summary.md as the main source, group the answer according to its skill categories, and mention only the most appealing skills as examples rather than listing everything. Keep it concise but specific enough to be useful.",
                    },
                  })
                )
              }
              className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 border border-[#0085FF]/40 text-[#64B5F6] text-sm rounded-xl hover:bg-[#0085FF]/10 transition-colors whitespace-nowrap group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF] group-hover:animate-pulse" />
              AI Summary
            </button>
          ) : (
            <span className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 border border-[#0085FF]/40 text-[#64B5F6] text-sm rounded-xl whitespace-nowrap invisible" aria-hidden>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF]" />
              AI Summary
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-2xl p-6 border transition-all duration-200 ${cat.cardClass}`}
            >
              <h3 className={`${cat.headingClass} text-xs font-semibold tracking-[0.18em] uppercase mb-4`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors hover:text-white ${cat.chipClass}`}
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
