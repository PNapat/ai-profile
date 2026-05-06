"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const TIMELINE = [
  {
    period: "2024 – 2025",
    role: "M.Sc. Computer Science (Thesis Assessment: Very Good)",
    place: "Chulalongkorn University",
    current: true,
  },
  {
    period: "June – July 2025",
    role: "Teaching Assistant",
    place: "Peking University, Beijing",
    current: false,
  },
  {
    period: "2024 – 2025",
    role: "Teaching Assistant",
    place: "Chulalongkorn University",
    current: false,
  },
  {
    period: "September 2021 – December 2023",
    role: "Credit Risk Consultant",
    place: "Financial Services Advisory, KPMG Thailand",
    current: false,
  },
  {
    period: "May – July 2020",
    role: "Research Intern",
    place: "DRMIS Research Group, Chulalongkorn University",
    current: false,
  },
  {
    period: "2017 – 2021",
    role: "B.Eng. Industrial Engineering (First Class Honours)",
    place: "Chulalongkorn University",
    current: false,
  },
];

export default function Resume() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="resume" ref={ref} className="fade-section bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#0085FF]" />
          <span className="text-[#0085FF] text-xs font-semibold tracking-[0.2em] uppercase">
            Background
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#001233] mb-14 leading-tight">
          Resume
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Highlights card */}
          <div className="lg:w-80 flex-shrink-0 bg-[#001233] rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {[
                // { label: "Current Role", value: "AI/ML Engineer" },
                // { label: "Experience", value: "2+ Years" },
                // { label: "Education", value: "M.Eng Industrial Engineering\nB.Eng Industrial Engineering" },
                // { label: "Specialization", value: "Financial Services\nCredit Scoring\nECL Modeling\nMachine Learning\nNLP" },
                // { label: "Technical Skills", value: "XAI\nMachine Learning\nNLP" },
                // { label: "Languages", value: "Thai • Native\nEnglish • TOEIC 890" },
                // { label: "Specialization", value: "NLP · RAG · LLMs" },
                { label: "Experience", value: "2+ Years\nCredit Risk Consulting" },
                { label: "Education", value: "M.Eng Industrial Engineering\nB.Eng Industrial Engineering\nChulalongkorn University" },
                { label: "Specialization", value: "Credit Scoring & ECL Modeling\nGenerative AI & LLMs\nMachine Learning & NLP" },
                { label: "Technical Skills", value: "Python • SQL • SAS • R\nPyTorch • LangChain • MLflow\nDocker • FastAPI • Git" },
                { label: "Languages", value: "Thai • Native\nEnglish • TOEIC 890" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#64B5F6] text-xs font-semibold tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-bold whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="mt-8 block text-center px-5 py-3 bg-[#0085FF] text-white rounded-xl text-sm font-semibold hover:bg-[#0353A4] transition-colors"
            >
              Download PDF ↓
            </a>
          </div>

          {/* Timeline */}
          <div className="flex-1">
            <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-8">
              Career timeline
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#D4ECFF]" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-6 pl-12 relative">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#EBF3FA] border-2 border-[#D4ECFF] flex items-center justify-center flex-shrink-0">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.current ? "bg-[#0085FF]" : "bg-[#94A3B8]"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs mb-0.5">{item.period}</p>
                      <p className="font-bold text-[#001233]">{item.role}</p>
                      <p className="text-[#334155] text-sm">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
