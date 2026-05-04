export default function Resume() {
  return (
    <section id="resume" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Resume</h2>
      <div className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold mb-1">AI/ML Engineer</h3>
          <p className="text-sm text-gray-500">
            2+ years experience · Python, PyTorch, LangChain · M.Sc. Computer Science
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition whitespace-nowrap"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
