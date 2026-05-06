export default function Footer() {
  return (
    <footer className="bg-[#001233] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <p className="text-white font-bold text-lg mb-1">Napat Seelpipat</p>
            <p className="text-white/40 text-sm">AI / ML Engineer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/PNapat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/napat-seelpipat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:napat.seelpipat@gmail.com"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © 2025 Napat Seelpipat. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with Next.js, FastAPI &amp; LangChain
          </p>
        </div>
      </div>
    </footer>
  );
}
