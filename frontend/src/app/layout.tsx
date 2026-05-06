import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Napat Seelpipat — AI/ML Engineer",
  description: "AI/ML Engineer portfolio with RAG-powered chatbot. Ask the AI anything about my background, projects, and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#334155]">{children}</body>
    </html>
  );
}
