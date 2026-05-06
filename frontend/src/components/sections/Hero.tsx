"use client";

import Image from "next/image";

const STATS = [
  { value: "2+", label: "Years exp" },
  { value: "10+", label: "Projects" },
  { value: "M.Sc.", label: "CS Degree" },
];

function PhotoFrame({
  src,
  label,
  className,
}: {
  src?: string;
  label: string;
  className: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-white/15 shadow-xl ${className}`}>
      {src ? (
        <Image src={src} alt={label} fill className="object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#0353A4]/40 to-[#001844] flex flex-col items-center justify-center gap-2 p-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(100,181,246,0.5)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-white/30 text-[10px] text-center leading-tight">{label}</span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#001233] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at 75% 20%, rgba(0, 133, 255, 0.14) 0%, transparent 55%)",
            "radial-gradient(ellipse at 10% 80%, rgba(3, 83, 164, 0.18) 0%, transparent 50%)",
            "linear-gradient(rgba(100, 181, 246, 0.055) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(100, 181, 246, 0.055) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "auto, auto, 52px 52px, 52px 52px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 space-y-6">

            {/* Animated badge */}
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0085FF]/35 bg-[#0085FF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF] animate-pulse" />
                <span className="text-[#64B5F6] text-xs font-semibold tracking-[0.18em] uppercase">
                  AI / ML Engineer
                </span>
              </span>
            </div>

            {/* Name */}
            <div className="hero-animate" style={{ animationDelay: "120ms" }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                Napat<br />
                <span className="text-[#0085FF]">Seelpipat</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="hero-animate" style={{ animationDelay: "240ms" }}>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                Building intelligent systems that solve real problems.
                This site is a live demo — the AI chatbot answers questions
                about me from my personal documents.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="hero-animate flex flex-wrap gap-3"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white text-[#001233] rounded-xl text-sm font-semibold hover:bg-[#D4ECFF] transition-colors"
              >
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById("chat-trigger")?.click()}
                className="px-6 py-3 border border-white/20 text-white rounded-xl text-sm font-semibold hover:border-[#0085FF] hover:text-[#64B5F6] transition-colors"
              >
                Ask My AI →
              </button>
            </div>

            {/* Social + quick stats */}
            <div
              className="hero-animate flex flex-wrap items-center gap-5"
              style={{ animationDelay: "480ms" }}
            >
              <a
                href="https://github.com/PNapat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/napat-seelpipat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <div className="h-4 w-px bg-white/15" />
              <div className="flex gap-5">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <span className="text-white text-sm font-bold">{s.value}</span>
                    <span className="text-white/35 text-xs ml-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: photo collage ── */}
          <div
            className="hero-animate relative flex-shrink-0 w-72 h-[420px]"
            style={{ animationDelay: "200ms" }}
          >
            {/* Main profile photo */}
            <div className="absolute top-10 left-4 w-52 h-64 relative">
              <div className="absolute -inset-2 rounded-3xl bg-[#0085FF]/12 blur-xl" />
              <div className="absolute -inset-0.5 rounded-2xl border border-[#0085FF]/25" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Napat Seelpipat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Frame 2 — top right: future photo placeholder */}
            <PhotoFrame
              label={"Add a\nphoto here"}
              className="absolute top-0 right-0 w-28 h-36"
            />

            {/* Frame 3 — bottom right: future photo placeholder */}
            <PhotoFrame
              label={"Add a\nphoto here"}
              className="absolute bottom-0 right-2 w-40 h-28"
            />

            {/* Floating stat chip — top left */}
            <div className="absolute top-4 -left-2 bg-white/8 backdrop-blur-md rounded-xl px-3.5 py-2.5 border border-white/12 shadow-lg">
              <p className="text-white text-sm font-bold leading-none">KPMG</p>
              <p className="text-white/45 text-[11px] mt-0.5">2+ yrs consulting</p>
            </div>

            {/* Floating stat chip — bottom left */}
            <div className="absolute bottom-6 left-0 bg-[#0085FF]/20 backdrop-blur-md rounded-xl px-3.5 py-2.5 border border-[#0085FF]/30 shadow-lg">
              <p className="text-white text-sm font-bold leading-none">Chula</p>
              <p className="text-white/45 text-[11px] mt-0.5">M.Sc. Computer Sci.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-animate absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animationDelay: "900ms" }}
      >
        <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/25 to-transparent" />
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
