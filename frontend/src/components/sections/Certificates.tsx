"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const CERTIFICATES = [
  {
    name: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    date: "June 2024",
    abbr: "AWS",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "January 2024",
    abbr: "DL",
  },
  {
    name: "LangChain for LLM Applications",
    issuer: "DeepLearning.AI",
    date: "March 2024",
    abbr: "LC",
  },
];

export default function Certificates() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="certificates" ref={ref} className="fade-section bg-[#EBF3FA] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#0085FF]" />
          <span className="text-[#0085FF] text-xs font-semibold tracking-[0.2em] uppercase">
            Credentials
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#001233] mb-14 leading-tight">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.name}
              className="bg-white border border-[#D4ECFF] rounded-2xl p-6 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4ECFF] flex items-center justify-center mb-5">
                <span className="text-[#0353A4] text-xs font-bold tracking-wide">{cert.abbr}</span>
              </div>
              <h3 className="font-bold text-[#001233] text-sm leading-snug mb-2">
                {cert.name}
              </h3>
              <p className="text-[#334155] text-xs mb-1">{cert.issuer}</p>
              <p className="text-[#94A3B8] text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
