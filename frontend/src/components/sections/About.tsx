export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">About me</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
        <p>
          I&apos;m an AI/ML Engineer passionate about building production-grade machine
          learning systems. My expertise spans natural language processing,
          retrieval-augmented generation, and end-to-end ML pipelines.
        </p>
        <p>
          I specialize in turning research prototypes into reliable, scalable
          services — from model training and evaluation through API design and
          deployment. This website itself is a live demo: the chatbot uses RAG
          over my personal documents to answer your questions about my background.
        </p>
      </div>
    </section>
  );
}
