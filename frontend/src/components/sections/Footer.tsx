export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>Built with Next.js, FastAPI, and LangChain</p>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" className="hover:text-gray-600 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-600 transition">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-600 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
