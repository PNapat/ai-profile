"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

export default function About() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="about" ref={ref} className="fade-section bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0085FF]" />
              <span className="text-[#0085FF] text-xs font-semibold tracking-[0.2em] uppercase">
                About me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001233] mb-8 leading-tight">
              Engineer by trade,<br />builder at heart.
            </h2>
            <div className="space-y-5 text-[#334155] leading-relaxed text-base">
              <p>
                I hold a Master's and Bachelor's degree in Industrial Engineering from 
                Chulalongkorn University, with two journal publications — on explainable 
                machine learning (Springer) and NLP-based sentiment analysis (Fuji Technology Press).
              </p>
              <p>
              As a Credit Risk Consultant at KPMG Thailand, I built, deployed, and validated 
              credit scorecards (A/B/C-Score) and Expected Credit Loss models (PD/LGD/EAD) 
              under TFRS 9 and Bank of Thailand standards for banks and financial institutions 
              across retail, SME, and specialized lending portfolios.
              </p>
              <p>
              I'm moving beyond modeling and documentation to design, build, and deploy end-to-end 
              AI systems — actively building skills in generative AI, LLMs, RAG pipelines, and MLOps 
              through Certificates and hands-on projects.
              </p>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="lg:w-80 flex-shrink-0 w-full">
            <div className="rounded-2xl bg-[#EBF3FA] border border-[#D4ECFF] p-8 space-y-6">
              {[
                { label: "Experience", value: "2+ Years Credit Risk Consultant" },
                { label: "Education", value: "M.Eng · B.Eng (1st Class)\nChulalongkorn University" },
                { label: "Specialization", value: "Credit Risk Modeling · Explainable AI\nGenerative AI & LLMs · NLP" },
                { label: "Languages", value: "Thai · Native\nEnglish · TOEIC 890" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[#001233] font-bold text-lg whitespace-pre-line">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
