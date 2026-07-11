import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, Bot, Loader2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const suggestedQuestions = [
  "What does Georgy build?",
  "What AI services do you offer?",
  "Can you build my business website?",
  "Show me your full-stack skills",
];

const initialMessages = [
  {
    role: "assistant",
    content:
      "Hi, I am Georgy's portfolio assistant. Ask me about his work, AI services, projects, skills, or BOKAS Technologies.",
  },
];

const DEFAULT_AI_API_URL =
  "https://dondie52-github-io.onrender.com/api/ask-georgy";

const getApiEndpoint = () =>
  (import.meta.env.VITE_AI_API_URL || DEFAULT_AI_API_URL).trim();

const getHistory = (messages) =>
  messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .slice(-6)
    .map(({ role, content }) => ({ role, content }));

export default function HeroAIChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  const endpoint = useMemo(getApiEndpoint, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isLoading]);

  const sendMessage = async (rawQuestion) => {
    const question = rawQuestion.trim();
    if (!question || isLoading) return;

    const userMessage = { role: "user", content: question };
    const previousMessages = messages;

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          history: getHistory(previousMessages),
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await response.json().catch(() => ({}))
        : {};

      if (!response.ok || !payload.answer) {
        const serverError = typeof payload.error === "string" ? payload.error : "";

        if (serverError) {
          throw new Error(serverError);
        }

        if (response.status === 404 || response.status === 405) {
          throw new Error(
            "The AI assistant API is not reachable yet. Please try again in a moment."
          );
        }

        throw new Error("The AI service could not answer right now.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: payload.answer },
      ]);
    } catch (err) {
      setError(
        err?.message ||
          "Georgy's portfolio assistant is temporarily unavailable. Please try again soon."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.7 }}
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-950/55 p-4 shadow-2xl shadow-emerald-950/30 backdrop-blur-2xl sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
              <Bot size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-100">Ask Georgy's AI</p>
              <p className="truncate text-xs text-slate-400">Portfolio assistant</p>
            </div>
          </div>
          <div className="hidden items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 sm:flex">
            <Sparkles size={13} />
            AI
          </div>
        </div>

        <div className="max-h-52 min-h-40 space-y-3 overflow-y-auto pr-1" aria-live="polite">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950"
                    : "border border-slate-700/60 bg-slate-900/75 text-slate-300"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isLoading ? (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/60 bg-slate-900/75 px-3.5 py-2.5 text-sm text-slate-300">
                <Loader2 size={15} className="animate-spin text-cyan-300" />
                Thinking...
              </div>
            </div>
          ) : null}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => sendMessage(question)}
              disabled={isLoading}
              className="rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 text-left text-xs text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {question}
            </button>
          ))}
        </div>

        {error ? (
          <div className="flex items-start gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            <AlertCircle size={15} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <label htmlFor="hero-ai-question" className="sr-only">
            Ask about Georgy's work
          </label>
          <input
            id="hero-ai-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={isLoading}
            maxLength={500}
            placeholder="Ask about Georgy’s work..."
            className="min-w-0 flex-1 rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-emerald-400/60 focus:outline-none focus:ring-1 focus:ring-emerald-400/25 disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Send question"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
