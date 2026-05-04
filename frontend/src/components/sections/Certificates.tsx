const certificates = [
  {
    name: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    date: "June 2024",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "January 2024",
  },
  {
    name: "LangChain for LLM Apps",
    issuer: "DeepLearning.AI",
    date: "March 2024",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-xs">
                Logo
              </div>
              <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
