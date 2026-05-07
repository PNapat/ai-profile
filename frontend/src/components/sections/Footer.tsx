export default function Footer() {
  return (
    <footer className="bg-[#001233] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <p className="text-white font-bold text-lg mb-1">Napat Seelpipat</p>
            <p className="text-white/40 text-sm">
              AI Engineer · Bangkok, Thailand
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="https://linkedin.com/in/napat-seelpipat-205415280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <div className="h-4 w-px bg-white/15" />
            <a
              href="mailto:napat.seelpipat@gmail.com"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              napat.seelpipat@gmail.com
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © 2026 Napat Seelpipat. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with Next.js, FastAPI &amp; LangChain
          </p>
        </div>
      </div>
    </footer>
  );
}
