"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL || "";

export function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "blog_newsletter" }),
        });
      } catch {
        // Silently fail
      }
    }

    setLoading(false);
    setSuccess(true);
    form.reset();
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 text-emerald-400">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">
          Pronto! Você vai receber nosso conteúdo em breve.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        name="email"
        required
        placeholder="Seu melhor e-mail"
        className="flex-1 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-black font-semibold rounded-lg px-6 py-3 text-sm hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {loading ? "Enviando..." : "Inscrever-se"}
      </button>
    </form>
  );
}
