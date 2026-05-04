const projects = [
  {
    title: "AI Profile Website",
    description:
      "This website — a RAG-powered portfolio with a chatbot that answers questions about me from my personal documents.",
    tech: ["Next.js", "FastAPI", "LangChain", "Qdrant"],
  },
  {
    title: "Document Q&A System",
    description:
      "Enterprise document question-answering system using retrieval-augmented generation with multi-turn conversation.",
    tech: ["Python", "LangGraph", "ChromaDB", "OpenAI"],
  },
  {
    title: "ML Pipeline Orchestrator",
    description:
      "End-to-end ML pipeline for training, evaluation, and deployment of NLP models with experiment tracking.",
    tech: ["Python", "MLflow", "Docker", "FastAPI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition cursor-pointer"
          >
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
