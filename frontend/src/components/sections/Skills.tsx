const skillCategories = [
  {
    name: "AI/ML",
    skills: ["Python", "PyTorch", "LangChain", "RAG Systems", "NLP", "Transformers"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "PostgreSQL", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "AWS", "CI/CD"],
  },
  {
    name: "Tools",
    skills: ["Git", "MLflow", "Weights & Biases"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Skills &amp; tech stack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
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
