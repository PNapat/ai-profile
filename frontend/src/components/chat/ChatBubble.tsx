"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { ChatMessage } from "@/types";

const SUGGESTED_QUESTIONS = [
  "What are your top skills?",
  "Tell me about your projects",
  "What certificates do you have?",
  "Describe your ML experience",
];

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  );
}

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const latestSendMessage = useRef<(text: string) => void>(() => {});

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const { message } = (e as CustomEvent<{ message: string }>).detail;
      setIsOpen(true);
      setShowTooltip(false);
      setTimeout(() => latestSendMessage.current(message), 80);
    };
    window.addEventListener("ai-chat-prompt", handler);
    return () => window.removeEventListener("ai-chat-prompt", handler);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          thread: messages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, sources: data.sources },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  latestSendMessage.current = sendMessage;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div
          className="fixed bottom-[5.5rem] right-6 z-50 bg-[#001233] text-white text-xs px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap"
          style={{ transition: "opacity 0.4s", opacity: showTooltip ? 1 : 0 }}
        >
          Ask my AI about me ✦
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[#001233] rotate-45" />
        </div>
      )}

      {/* Floating bubble */}
      <button
        id="chat-trigger"
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        className="chat-pulse fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#0085FF] hover:bg-[#0353A4] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Open AI chat"
        suppressHydrationWarning
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[560px] h-[560px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="px-5 py-4 bg-[#001233] flex items-center justify-between flex-shrink-0">
            <div>
              <h3 className="font-bold text-white text-sm">Chat with my AI</h3>
              <p className="text-white/40 text-xs mt-0.5">RAG-powered · answers from my docs</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              suppressHydrationWarning
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAFB]">
            {messages.length === 0 && (
              <div className="pt-2">
                <p className="text-[#94A3B8] text-xs text-center mb-3">Try asking:</p>
                <div className="grid grid-cols-2 gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left px-3 py-2.5 text-xs border border-[#D4ECFF] bg-white rounded-xl hover:bg-[#EBF3FA] hover:border-[#64B5F6] text-[#334155] transition-colors leading-snug"
                      suppressHydrationWarning
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] space-y-1`}>
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#001233] text-white rounded-br-sm"
                        : "bg-white border border-gray-100 text-[#334155] rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold text-[#001233]">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 mb-2">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 mb-2">{children}</ol>,
                          li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                          h1: ({ children }) => <p className="font-bold text-[#001233] mb-1">{children}</p>,
                          h2: ({ children }) => <p className="font-bold text-[#001233] mb-1">{children}</p>,
                          h3: ({ children }) => <p className="font-semibold text-[#0353A4] mb-1">{children}</p>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                  {msg.sources && msg.sources.length > 0 && (
                    <p className="text-[10px] text-[#94A3B8] px-1">
                      Sources: {msg.sources.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1 items-center">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="w-1.5 h-1.5 bg-[#0085FF] rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 bg-[#F8FAFB] border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#0085FF] focus:bg-white transition-all text-[#334155] placeholder-[#94A3B8]"
                suppressHydrationWarning
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2.5 bg-[#0085FF] text-white rounded-xl text-sm font-semibold hover:bg-[#0353A4] disabled:opacity-40 transition-colors"
                suppressHydrationWarning
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
