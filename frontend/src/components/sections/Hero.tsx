"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: "2+", label: "Years Credit Risk" },
  { value: "2", label: "Journal Publications" },
  { value: "7+", label: "Professional Certificates" },
  { value: "M.Eng.", label: "Industrial Engineering" },
];

// All uploaded photos, ordered so the most striking ones land at the top of the orbit
const ORBIT_PHOTOS = [
  "/photo-extra8.JPG",   // 12 o'clock — concert hall saxophone
  "/photo-extra5.JPG",   // ~33°       — close-up portrait
  "/photo-extra7.jpeg",  // ~65°       — studio saxophone
  "/photo-extra.JPG",    // ~98°       — stage performance
  "/photo-extra4.JPG",   // ~131°      — stadium solo
  "/photo-peking2.jpg",  // ~164°      — rainy Beijing gate
  "/photo-peking1.jpg",  // ~196°      — Peking group
  "/photo-extra2.JPG",   // ~229°      — large group
  "/photo-extra3.JPG",   // ~262°      — small group
  "/photo-extra6.JPG",   // ~295°      — casual stadium
  "/photo-extra9.jpeg",  // ~327°      — C.U. Band outdoor
];

const ORBIT_R = 205;   // orbit radius
const PHOTO_SZ = 52;   // orbit photo diameter
const CX = 240;        // center x in container
const CY = 270;        // center y in container
const DURATION = 70;   // seconds per revolution

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen bg-[#001233] flex items-center overflow-hidden">
      {/* Background grid */}
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

            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0085FF]/35 bg-[#0085FF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF] animate-pulse" />
                <span className="text-[#64B5F6] text-xs font-semibold tracking-[0.18em] uppercase">
                  AI / ML Engineer
                </span>
              </span>
            </div>

            <div className="hero-animate" style={{ animationDelay: "120ms" }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                Napat<br />
                <span className="text-[#0085FF]">Seelpipat</span>
              </h1>
            </div>

            <div className="hero-animate" style={{ animationDelay: "240ms" }}>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                Building intelligent systems that solve real problems.
                This site is a live demo — the AI chatbot answers questions
                about me from my personal documents.
              </p>
            </div>

            <div className="hero-animate flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white text-[#001233] rounded-xl text-sm font-semibold hover:bg-[#D4ECFF] transition-colors"
              >
                Download Resume
              </a>
              {mounted ? (
                <button
                  onClick={() => document.getElementById("chat-trigger")?.click()}
                  className="px-6 py-3 border border-white/20 text-white rounded-xl text-sm font-semibold hover:border-[#0085FF] hover:text-[#64B5F6] transition-colors"
                >
                  Ask My AI →
                </button>
              ) : (
                <span className="px-6 py-3 border border-white/20 text-white rounded-xl text-sm font-semibold invisible" aria-hidden>
                  Ask My AI →
                </span>
              )}
            </div>

            <div className="hero-animate flex flex-wrap items-center gap-5" style={{ animationDelay: "480ms" }}>
              <a href="https://github.com/PNapat" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/napat-seelpipat" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm transition-colors">LinkedIn</a>
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

          {/* ── Right: orbital photo ring ── */}
          <div
            className="hero-animate relative flex-shrink-0 w-[480px] h-[560px]"
            style={{ animationDelay: "200ms" }}
          >
            {/* Orbit ring path */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: ORBIT_R * 2,
                height: ORBIT_R * 2,
                top: CY - ORBIT_R,
                left: CX - ORBIT_R,
                border: "1px dashed rgba(100,181,246,0.07)",
              }}
            />

            {/* Orbiting photos — each anchor rotates, inner photo counter-rotates to stay upright */}
            {ORBIT_PHOTOS.map((src, i) => {
              // delay places photo i at its initial angle (12 o'clock = 270° in CSS rotate space)
              const delay = -(((270 + (i / ORBIT_PHOTOS.length) * 360) % 360) / 360) * DURATION;
              return (
                <div
                  key={src}
                  className="absolute"
                  style={{
                    top: CY,
                    left: CX,
                    width: 0,
                    height: 0,
                    animationName: "orbit-cw",
                    animationDuration: `${DURATION}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationDelay: `${delay}s`,
                  }}
                >
                  {/* Static translateX — moves along the rotating X axis → circular orbit */}
                  <div style={{ transform: `translateX(${ORBIT_R}px)` }}>
                    <div
                      style={{
                        position: "relative",
                        width: PHOTO_SZ,
                        height: PHOTO_SZ,
                        marginLeft: -(PHOTO_SZ / 2),
                        marginTop: -(PHOTO_SZ / 2),
                        borderRadius: "50%",
                        overflow: "hidden",
                        opacity: 0.55,
                        border: "1px solid rgba(0,133,255,0.3)",
                        animationName: "orbit-ccw",
                        animationDuration: `${DURATION}s`,
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                        animationDelay: `${delay}s`,
                      }}
                    >
                      <Image src={src} alt="" fill className="object-cover object-center" sizes="52px" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Profile photo — centered, above orbit photos */}
            <div
              className="absolute z-[30]"
              style={{ width: 188, height: 188, top: CY - 94, left: CX - 94 }}
            >
              {/* Glow ring */}
              <div
                className="absolute rounded-full bg-[#0085FF]/20 blur-2xl"
                style={{ inset: "-20px" }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#0085FF]/45 shadow-[0_0_48px_rgba(0,133,255,0.22)]">
                <Image src="/profile.jpg" alt="Napat Seelpipat" fill className="object-cover" priority sizes="188px" />
              </div>
            </div>

            {/* Badge: KPMG — top-right */}
            <div className="absolute top-[96px] right-[6px] z-[40] -rotate-[1deg] bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <p className="text-white text-sm font-bold leading-none">KPMG Thailand</p>
              <p className="text-white/50 text-[11px] mt-1">Credit Risk Consultant</p>
            </div>

            {/* Badge: Peking Uni — top-left */}
            <div className="absolute top-[96px] left-[6px] z-[40] rotate-[1deg] bg-white/[0.08] backdrop-blur-xl rounded-2xl px-4 py-2.5 border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
              <p className="text-white text-sm font-bold leading-none">Peking University</p>
              <p className="text-white/50 text-[11px] mt-1">Teaching Assistant</p>
            </div>

            {/* Badge: Chula — bottom-left */}
            <div className="absolute bottom-[90px] left-[6px] z-[40] rotate-[1.5deg] bg-[rgba(0,133,255,0.18)] backdrop-blur-xl rounded-2xl px-4 py-3 border border-[#0085FF]/30 shadow-[0_4px_24px_rgba(0,133,255,0.15)]">
              <p className="text-white text-sm font-bold leading-none">Chulalongkorn Univ.</p>
              <p className="text-white/50 text-[11px] mt-1">M.Sc. CS · B.Eng IE (1st Class)</p>
            </div>

            {/* Badge: Publications — bottom-right */}
            <div className="absolute bottom-[90px] right-[6px] z-[40] -rotate-[1.5deg] bg-white/[0.08] backdrop-blur-xl rounded-2xl px-4 py-2.5 border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
              <p className="text-white text-sm font-bold leading-none">2 Publications</p>
              <p className="text-white/50 text-[11px] mt-1">Springer · Fuji Technology Press</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
