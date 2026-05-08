"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: "2+", label: "Years Credit Risk" },
  { value: "2", label: "Journal Publications" },
  { value: "B.Eng.", label: "Industrial Engineering (First Class Honours)" },
  { value: "M.Eng.", label: "Industrial Engineering (Thesis: Very Good)" },
];

const COLLAGE_WIDTH = 480;
const COLLAGE_HEIGHT = 560;

function pct(value: number, base: number) {
  return `${(value / base) * 100}%`;
}

function badgeStyle(style: Record<string, number>) {
  return {
    ...(style.top !== undefined ? { top: pct(style.top, COLLAGE_HEIGHT) } : {}),
    ...(style.bottom !== undefined ? { bottom: pct(style.bottom, COLLAGE_HEIGHT) } : {}),
    ...(style.left !== undefined ? { left: pct(style.left, COLLAGE_WIDTH) } : {}),
    ...(style.right !== undefined ? { right: pct(style.right, COLLAGE_WIDTH) } : {}),
  };
}

// Profile sits at z-[20]. Photos at z-[10] slide under it at the edges.
// Profile bounds approx: top=154 left=146 right=334 bottom=386
const PHOTOS = [

  // ── loikratong ──
  { src: "/photo-extra.JPG",    w:  96, h: 120, top:  40, left: 170, tilt:  3.5, float: "a", dur: 4.5, delay:  0   },
  // ── bell tower ──
  { src: "/photo-peking1.jpg",  w: 130, h:  88, top:  80, left:  48, tilt: -4.5, float: "b", dur: 5.2, delay: -1.5 },
  // ── stand small group ──
  { src: "/photo-extra3.JPG",   w: 112, h:  78, top:  80, left: 284, tilt:  3.5, float: "c", dur: 4.8, delay: -3   },
  // ── solo stand ──
  { src: "/photo-extra5.JPG",   w:  92, h: 120, top: 355, left: 122, tilt: -2.5, float: "b", dur: 5.8, delay: -1   },
  // ── tainanmen ──
  { src: "/photo-peking2.jpg",  w:  84, h: 106, top: 182, left:  68, tilt: -5,   float: "d", dur: 5.5, delay: -0.8 },
  // ── solo2 ──
  { src: "/photo-extra6.JPG",   w:  80, h: 104, top: 370, left: 264, tilt:  3.5, float: "a", dur: 4.9, delay: -2.8 },
  // ── impark ──
  { src: "/photo-extra11.jpg",  w:  90, h: 115, top: 420, left: 180, tilt: -2,   float: "d", dur: 5.0, delay: -1.2 },
  // ── voa promote ──
  { src: "/photo-extra7.jpeg",  w:  86, h: 110, top: 300, left:  18, tilt:  3,   float: "a", dur: 4.3, delay: -2.2 },
  // ── voa ──
  { src: "/photo-extra8.JPG",   w:  90, h: 114, top: 172, left: 340, tilt: -3,   float: "c", dur: 4.6, delay: -3.5 },
  // ── walkie ──
  { src: "/photo-extra10.jpg",   w:  76, h:  98, top: 130, left: 400, tilt:  3.5, float: "a", dur: 4.4, delay: -2.5 },
  // ── football film ──
  { src: "/photo-extra4.JPG",   w:  80, h: 102, top: 295, left: 372, tilt:  5,   float: "d", dur: 5.1, delay: -0.5 },
  // ── krabi ──
  { src: "/photo-extra9.jpeg",  w: 120, h:  84, top: 460, left:  38, tilt:  4,   float: "c", dur: 4.7, delay: -3.2 },
  // ── stand group ──
  { src: "/photo-extra2.JPG",   w: 118, h:  82, top: 452, left: 306, tilt: -3.5, float: "b", dur: 5.3, delay: -1.8 },
];

// Badge positions: scattered like sticky notes, aggressive tilts, not symmetric
const BADGES = [
  {
    title: "KPMG Thailand", sub: "Credit Risk Consultant",
    style: { top: 28, right: 10 }, tilt: 0,
    bg: "bg-white/10 border-white/20",
  },
  {
    title: "Peking University", sub: "Teaching Assistant",
    style: { top: 145, left: -20}, tilt: 0,
    bg: "bg-white/[0.08] border-white/15",
  },
  {
    title: "Chulalongkorn", sub: "M.Eng. B.Eng IE (1st Class)",
    style: { bottom: 110, left: -30 }, tilt: 0,
    bg: "bg-[rgba(0,133,255,0.18)] border-[#0085FF]/30",
  },
  {
    title: "2 Journal Publications", sub: "Springer · Fuji Technology Press",
    style: { top: 400, right: -60 }, tilt: 0,
    bg: "bg-white/[0.08] border-white/15",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen bg-[#001233] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at 75% 20%, rgba(0,133,255,0.14) 0%, transparent 55%)",
            "radial-gradient(ellipse at 10% 80%, rgba(3,83,164,0.18) 0%, transparent 50%)",
            "linear-gradient(rgba(100,181,246,0.055) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(100,181,246,0.055) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "auto, auto, 52px 52px, 52px 52px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 space-y-6">
            <div className="hero-animate flex flex-wrap items-center gap-4" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0085FF]/35 bg-[#0085FF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF] animate-pulse" />
                <span className="text-[#64B5F6] text-xs font-semibold tracking-[0.18em] uppercase">AI / ML Engineer</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A855F7]/35 bg-[#A855F7]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
                <span className="text-[#D8B4FE] text-xs font-semibold tracking-[0.18em] uppercase">Data Scientist</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#22C55E]/35 bg-[#22C55E]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[#86EFAC] text-xs font-semibold tracking-[0.18em] uppercase">Credit Risk Consultant</span>
              </span>
            </div>

            <div className="hero-animate" style={{ animationDelay: "120ms" }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                Napat<br /><span className="text-[#0085FF]">Seelpipat</span>
              </h1>
            </div>

            <div className="hero-animate" style={{ animationDelay: "240ms" }}>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                From a foundation in modeling, the journey now carries AI impact beyond experimentation.
                This site is a live demo — the AI chatbot answers questions
                about me from my personal documents.
              </p>
            </div>

            <div className="hero-animate flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <a href="/Napat_Seelpipat_Resume.pdf" download className="px-6 py-3 bg-white text-[#001233] rounded-xl text-sm font-semibold hover:bg-[#D4ECFF] transition-colors">
                Download Resume
              </a>
              {mounted ? (
                <button
                  onClick={() => document.getElementById("chat-trigger")?.click()}
                  className="btn-bounce px-6 py-3 border border-white/35 text-white rounded-xl text-sm font-semibold hover:border-[#0085FF] hover:text-[#64B5F6] transition-colors"
                >
                  Ask My AI →
                </button>
              ) : (
                <span className="px-6 py-3 border border-white/20 text-white rounded-xl text-sm font-semibold invisible" aria-hidden>Ask My AI →</span>
              )}
            </div>

            <div className="hero-animate flex flex-wrap items-center gap-5" style={{ animationDelay: "480ms" }}>

              <a href="https://www.linkedin.com/in/napat-seelpipat-205415280/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm transition-colors">LinkedIn</a>
              <div className="h-4 w-px bg-white/15" />
              <a href="https://scholar.google.com/citations?user=grEnfs4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm transition-colors">Google Scholar Profile</a>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <span className="text-white text-sm font-bold">{s.value}</span>
                    <span className="text-white/35 text-xs ml-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: scattered photo stack ── */}
          <div className="hero-animate relative flex-shrink-0 w-full max-w-[480px] aspect-[6/7]" style={{ animationDelay: "200ms" }}>

            {/* Scattered photos — z-[10], slide under profile */}
            {PHOTOS.map((p) => (
              <div
                key={p.src}
                className="absolute z-[10]"
                style={{
                  top: pct(p.top, COLLAGE_HEIGHT),
                  left: pct(p.left, COLLAGE_WIDTH),
                  width: pct(p.w, COLLAGE_WIDTH),
                  height: pct(p.h, COLLAGE_HEIGHT),
                  transform: `rotate(${p.tilt}deg)`,
                }}
              >
                <div style={{
                  width: "100%", height: "100%",
                  animationName: `float-${p.float}`,
                  animationDuration: `${p.dur}s`,
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${p.delay}s`,
                }}>
                  <div style={{
                    position: "relative", width: "100%", height: "100%",
                    borderRadius: "8px", overflow: "hidden",
                    opacity: 0.65,
                    border: "1px solid rgba(100,181,246,0.18)",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.55)",
                  }}>
                    <Image src={p.src} alt="" fill className="object-cover object-center" sizes={`${p.w}px`} />
                  </div>
                </div>
              </div>
            ))}

            {/* Profile photo — z-[20], sits on top of scattered frames */}
            <div
              className="absolute z-[20]"
              style={{
                top: pct(154, COLLAGE_HEIGHT),
                left: pct(146, COLLAGE_WIDTH),
                width: pct(188, COLLAGE_WIDTH),
                height: pct(232, COLLAGE_HEIGHT),
              }}
            >
              <div className="absolute rounded-2xl bg-[#0085FF]/15 blur-2xl" style={{ inset: "-18px" }} />
              <div className="relative w-full h-full overflow-hidden" style={{
                borderRadius: "14px",
                border: "1.5px solid rgba(0,133,255,0.38)",
                boxShadow: "0 0 48px rgba(0,133,255,0.16), 0 8px 32px rgba(0,0,0,0.5)",
              }}>
                <Image src="/profile.jpg" alt="Napat Seelpipat" fill className="object-cover" priority sizes="188px" />
              </div>
            </div>

            {/* Badges — z-[30], scattered like sticky notes */}
            {BADGES.map((b) => (
              <div
                key={b.title}
                className={`absolute z-[30] max-w-[42%] backdrop-blur-xl rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-2.5 border shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${b.bg}`}
                style={{ ...badgeStyle(b.style), transform: `rotate(${b.tilt}deg)` }}
              >
                <p className="text-white text-[10px] sm:text-sm font-bold leading-none">{b.title}</p>
                <p className="text-white/50 text-[9px] sm:text-[11px] mt-1 leading-tight">{b.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
