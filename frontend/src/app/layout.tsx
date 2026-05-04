import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Profile | Your Name",
  description: "AI/ML Engineer portfolio with RAG-powered chatbot",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
