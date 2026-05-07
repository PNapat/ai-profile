"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  LineChart,
  Rocket,
} from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: Code2,
    note: "Core programming stack from the resume, IBM Data Science, Johns Hopkins R Programming, SAS, and web fundamentals certificates.",
    skills: [
      "Python",
      "SQL",
      "R",
      "SAS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "AI / ML",
    icon: BrainCircuit,
    note: "Deep learning and classical ML toolkit from IBM AI Engineering, IBM Data Science, research work, and model-building experience.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "LangChain",
      "scikit-learn",
      "XGBoost",
      "NLTK",
      "Neural networks",
      "Deep learning",
      "Supervised learning",
      "Unsupervised learning",
      "Model evaluation",
    ],
  },
  {
    name: "Generative AI",
    icon: Bot,
    note: "LLM engineering skills covered by IBM Generative AI Engineering and Generative AI Engineering with LLMs.",
    skills: [
      "LLMs",
      "Transformers",
      "RAG",
      "Fine-tuning",
      "Prompt engineering",
      "AI agents",
      "Tokenization",
      "Attention mechanisms",
      "BERT",
      "GPT",
      "LLaMA",
    ],
  },
  {
    name: "Data Science",
    icon: Database,
    note: "Applied analytics skills from published ML research, IBM Data Science, and credit risk modeling work.",
    skills: [
      "Explainable AI",
      "NLP",
      "Sentiment analysis",
      "Statistical modeling",
      "Feature engineering",
      "Pandas",
      "Data analysis",
      "Data visualization",
      "Machine learning methodology",
      "Credit risk analytics",
    ],
  },
  {
    name: "Tools & MLOps",
    icon: Rocket,
    note: "Production-oriented tooling from the DevOps to MLOps bootcamp, IBM application courses, and portfolio project work.",
    skills: [
      "Docker",
      "Kubernetes",
      "Argo CD",
      "MLflow",
      "FastAPI",
      "Flask",
      "Streamlit",
      "CI/CD",
      "Git",
      "Jupyter",
      "Tableau",
      "Prometheus",
      "Grafana",
      "Model deployment",
      "Model monitoring",
    ],
  },
  {
    name: "Domain",
    icon: LineChart,
    note: "Financial risk management expertise from KPMG work and SAS scorecard development training.",
    skills: [
      "Credit scoring (A/B/C scorecards)",
      "Expected credit loss (ECL)",
      "PD / LGD / EAD modeling",
      "TFRS 9",
      "Model validation",
      "Model calibration",
      "Bank of Thailand standards",
      "SAS VDMML / DI",
    ],
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
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/62">
              Resume-aligned technical stack across programming, AI/ML, generative AI,
              data science, MLOps, and credit risk domain work.
            </p>
          </div>
          {mounted ? (
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
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#0085FF]/35 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-10 w-10 rounded-md bg-[#0085FF]/12 border border-[#64B5F6]/20 text-[#64B5F6] flex items-center justify-center">
                  <cat.icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-[#64B5F6] text-xs font-semibold tracking-[0.18em] uppercase">
                  {cat.name}
                </h3>
              </div>
              <p className="text-white/55 text-xs leading-5 mb-5 min-h-[60px]">
                {cat.note}
              </p>
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
