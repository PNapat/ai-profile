"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, FileText, X } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  link?: string;
  previewFile?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Twitter Sentiment Analysis of Bangkok Tourism During COVID-19",
    description:
      "Built an NLP sentiment analysis pipeline using support vector machines to classify tourism-related Twitter data during the COVID-19 lockdown and extract public sentiment insights from social media.",
    tech: ["NLP", "Sentiment analysis", "SVM", "Twitter data"],
    status: "Publication",
    link: "https://doi.org/10.20965/jdr.2021.p0024",
  },
  {
    title: "Analyzing Adolescents’ E-cigarette Initiation Tendency using Explainable Machine Learning",
    description:
      "Applied explainable machine learning and SHAP analysis to compare key predictors of adolescent e-cigarette curiosity and susceptibility before and after COVID-19 using national survey data.",
    tech: ["Explainable AI", "Random Forest", "XGBoost", "SHAP"],
    status: "Publication",
    link: "https://doi.org/10.1007/s42001-025-00423-6",
  },
  {
    title: "Predicting E-cigarette Curiosity and Susceptibility Among Students",
    description:
      "Developed multiclass machine learning pipelines using XGBoost, feature selection, oversampling, and one-vs-rest strategies to predict varying levels of adolescent e-cigarette curiosity and susceptibility.",
    tech: ["Machine learning", "Public health", "Feature analysis", "Thesis"],
    status: "Thesis",
    previewFile: "/Thesis Report.pdf",
  },
];

function encodeAssetPath(path: string) {
  return path
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : part))
    .join("/");
}

export default function Projects() {
  const ref = useFadeIn<HTMLElement>();
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const previewFile = useMemo(
    () => (previewProject?.previewFile ? encodeAssetPath(previewProject.previewFile) : ""),
    [previewProject]
  );

  useEffect(() => {
    if (!previewProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewProject(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewProject]);

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
          {PROJECTS.map((project) => {
            const isPreview = Boolean(project.previewFile);
            const CardTag = project.link ? "a" : "button";
            const cardProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {
                  type: "button" as const,
                  onClick: () => setPreviewProject(project),
                };

            return (
              <CardTag
                key={project.title}
                {...cardProps}
                className="group relative text-left border border-[#D4ECFF] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0085FF] focus-visible:ring-offset-2"
                aria-label={
                  isPreview
                    ? `Preview ${project.title} thesis PDF`
                    : `Open ${project.title} DOI`
                }
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0085FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="h-36 bg-[#D4ECFF]/50 flex items-center justify-center border-b border-[#D4ECFF] group-hover:bg-[#D4ECFF] transition-colors duration-200">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-white mx-auto flex items-center justify-center mb-2 shadow-sm text-[#0085FF]">
                      {isPreview ? (
                        <FileText size={18} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={18} aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-[#94A3B8] text-xs">
                      {isPreview ? "Preview thesis" : "Open DOI"}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[#001233] group-hover:text-[#0353A4] transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-[#D4ECFF] text-[#0353A4] text-xs rounded-full whitespace-nowrap font-semibold flex-shrink-0">
                      {project.status}
                    </span>
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
              </CardTag>
            );
          })}
        </div>
      </div>

      {previewProject && (
        <div
          className="fixed inset-0 z-50 bg-[#001233]/75 px-4 py-6 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={() => setPreviewProject(null)}
        >
          <div
            className="w-full max-w-5xl h-[86vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0085FF]">
                  Thesis preview
                </p>
                <h3
                  id="project-modal-title"
                  className="text-lg font-bold text-[#001233] leading-snug mt-1"
                >
                  {previewProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewFile}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 px-3 rounded-md bg-[#0353A4] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#023E7D] transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Open
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="h-10 w-10 rounded-md border border-[#CBD5E1] text-[#334155] flex items-center justify-center hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Close thesis preview"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#F8FAFC] p-3 md:p-5">
              <iframe
                src={previewFile}
                title={`${previewProject.title} PDF preview`}
                className="h-full w-full rounded-md border border-[#CBD5E1] bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
