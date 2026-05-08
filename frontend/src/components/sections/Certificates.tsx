"use client";

import { useEffect, useMemo, useState } from "react";
import { Award, CalendarDays, ExternalLink, FileImage, FileText, X } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Certificate = {
  name: string;
  issuer: string;
  provider?: string;
  date: string;
  file: string;
  fileType: "pdf" | "image";
  logo: string;
  logoAlt: string;
  theme: string;
};

const CERTIFICATES: Certificate[] = [
  {
    name: "IBM Generative AI Engineering",
    issuer: "IBM",
    provider: "Coursera",
    date: "January 2026",
    file: "/certs/Coursera IBM Generative AI Engineering.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_logo.svg",
    logoAlt: "IBM logo",
    theme: "from-[#0F62FE]/10 to-[#0085FF]/5",
  },
  {
    name: "IBM AI Engineering",
    issuer: "IBM",
    provider: "Coursera",
    date: "January 2026",
    file: "/certs/Coursera IBM AI Engineering.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_logo.svg",
    logoAlt: "IBM logo",
    theme: "from-[#0F62FE]/10 to-[#6EA8FE]/5",
  },
  // {
  //   name: "Generative AI Engineering with LLMs",
  //   issuer: "IBM",
  //   provider: "Coursera",
  //   date: "November 2025",
  //   file: "/certs/Coursera Generative AI Engineering with LLMs.pdf",
  //   fileType: "pdf",
  //   logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_logo.svg",
  //   logoAlt: "IBM logo",
  //   theme: "from-[#0F62FE]/10 to-[#24A148]/5",
  // },
  {
    name: "IBM Data Science",
    issuer: "IBM",
    provider: "Coursera",
    date: "December 2025",
    file: "/certs/Coursera IBM Data Science.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_logo.svg",
    logoAlt: "IBM logo",
    theme: "from-[#0F62FE]/10 to-[#A56EFF]/5",
  },
  {
    name: "DevOps to MLOps Bootcamp: Build & Deploy ML",
    issuer: "Packt",
    provider: "Coursera",
    date: "February 2026",
    file: "/certs/Packt DevOps to MLOps Bootcamp– Build & Deploy ML.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Packt-Logo.png",
    logoAlt: "Packt logo",
    theme: "from-[#F05A28]/10 to-[#FFD166]/10",
  },
  {
    name: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM",
    provider: "Coursera",
    date: "January 2026",
    file: "/certs/IBM Introduction to HTML, CSS, & JavaScript.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_logo.svg",
    logoAlt: "IBM logo",
    theme: "from-[#0F62FE]/10 to-[#FF7EB6]/5",
  },
  {
    name: "R Programming",
    issuer: "Johns Hopkins University",
    provider: "Coursera",
    date: "January 2026",
    file: "/certs/John Hopkins R Programming.pdf",
    fileType: "pdf",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Johns_Hopkins_University_logo.png",
    logoAlt: "Johns Hopkins University logo",
    theme: "from-[#002D72]/10 to-[#68ACE5]/10",
  },
  {
    name: "SAS Credit Scorecard Development and Implementation",
    issuer: "SAS",
    date: "KPMG tenure",
    file: "/certs/SAS Credit Scorecard Development and Implementation.png",
    fileType: "image",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SAS_logo_horiz.svg",
    logoAlt: "SAS logo",
    theme: "from-[#0076D6]/10 to-[#34C6F4]/10",
  },
  {
    name: "SAS Programming 1: Essentials",
    issuer: "SAS",
    date: "KPMG tenure",
    file: "/certs/SAS Programming 1.png",
    fileType: "image",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SAS_logo_horiz.svg",
    logoAlt: "SAS logo",
    theme: "from-[#0076D6]/10 to-[#9BD7D1]/10",
  },
  {
    name: "SAS Programming 2: Data Manipulation Techniques",
    issuer: "SAS",
    date: "KPMG tenure",
    file: "/certs/SAS Programming 2.png",
    fileType: "image",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SAS_logo_horiz.svg",
    logoAlt: "SAS logo",
    theme: "from-[#0076D6]/10 to-[#00A6A6]/10",
  },
];

function encodeAssetPath(path: string) {
  return path
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : part))
    .join("/");
}

export default function Certificates() {
  const ref = useFadeIn<HTMLElement>();
  const [selected, setSelected] = useState<Certificate | null>(null);
  const selectedFile = useMemo(
    () => (selected ? encodeAssetPath(selected.file) : ""),
    [selected]
  );

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="certificates" ref={ref} className="fade-section bg-[#EBF3FA] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#0085FF]" />
          <span className="text-[#0085FF] text-xs font-semibold tracking-[0.2em] uppercase">
            Credentials
          </span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001233] leading-tight">
            Certificates
          </h2>
          <p className="max-w-xl text-sm leading-6 text-[#334155]">
            Verified course certificates across generative AI, data science, MLOps,
            front-end fundamentals, statistical programming, and credit risk scorecards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => {
            const FileIcon = cert.fileType === "pdf" ? FileText : FileImage;

            return (
              <button
                key={cert.file}
                type="button"
                onClick={() => setSelected(cert)}
                className={`group min-h-[218px] text-left bg-gradient-to-br ${cert.theme} border border-white/80 rounded-lg p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0085FF] focus-visible:ring-offset-2 transition-all duration-200`}
                aria-label={`Open ${cert.name} certificate`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="h-14 w-24 rounded-md bg-white border border-[#D4ECFF] px-3 py-2 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.logoAlt}
                      className="max-h-8 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="h-9 w-9 rounded-full bg-white/90 border border-[#D4ECFF] text-[#0353A4] flex items-center justify-center group-hover:bg-[#0353A4] group-hover:text-white transition-colors">
                    <ExternalLink size={16} aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-bold text-[#001233] text-base leading-snug mb-4">
                  {cert.name}
                </h3>

                <div className="space-y-2 text-xs text-[#334155]">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-[#0353A4]" aria-hidden="true" />
                    <span>
                      {cert.issuer}
                      {cert.provider ? ` via ${cert.provider}` : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-[#0353A4]" aria-hidden="true" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[#64748B]">
                    <FileIcon size={14} aria-hidden="true" />
                    <span>{cert.fileType === "pdf" ? "PDF certificate" : "Image certificate"}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#001233]/75 px-4 py-6 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onMouseDown={() => setSelected(null)}
        >
          <div
            className="w-full max-w-5xl h-[86vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0085FF]">
                  {selected.issuer}
                  {selected.provider ? ` via ${selected.provider}` : ""}
                </p>
                <h3
                  id="certificate-modal-title"
                  className="text-lg font-bold text-[#001233] leading-snug mt-1"
                >
                  {selected.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedFile}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 px-3 rounded-md bg-[#0353A4] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#023E7D] transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Open
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="h-10 w-10 rounded-md border border-[#CBD5E1] text-[#334155] flex items-center justify-center hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Close certificate preview"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#F8FAFC] p-3 md:p-5">
              {selected.fileType === "pdf" ? (
                <iframe
                  src={selectedFile}
                  title={`${selected.name} certificate preview`}
                  className="h-full w-full rounded-md border border-[#CBD5E1] bg-white"
                />
              ) : (
                <div className="h-full w-full overflow-auto rounded-md border border-[#CBD5E1] bg-white flex items-center justify-center p-4">
                  <img
                    src={selectedFile}
                    alt={`${selected.name} certificate`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
