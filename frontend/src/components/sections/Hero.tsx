"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your Name
          </h1>
          <p className="text-xl text-gray-500">AI/ML Engineer</p>
          <p className="text-lg text-gray-600 max-w-lg">
            Building intelligent systems that solve real problems.
            This site is a live demo — try the AI chatbot below.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="#resume"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
              Download resume
            </a>
            <button
              onClick={() => document.getElementById("chat-trigger")?.click()}
              className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Ask my AI about me →
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-600 text-sm transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-600 text-sm transition">
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          width={208}
          height={208}
          className="w-52 h-52 rounded-full object-cover"
        />
      </div>
    </section>
  );
}
