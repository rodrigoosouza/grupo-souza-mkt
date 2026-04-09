"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { HiddenFields } from "./hidden-fields";
import { pushDataLayerEvent } from "@/lib/tracking";

const REVENUE_OPTIONS = [
  { value: "ate-100k", label: "Até R$100 mil/mês" },
  { value: "100k-300k", label: "R$100-300 mil/mês" },
  { value: "300k-1m", label: "R$300 mil - 1 milhão/mês" },
  { value: "1m-5m", label: "R$1-5 milhões/mês" },
  { value: "acima-5m", label: "Acima de R$5 milhões/mês" },
];

const PAIN_OPTIONS = [
  { value: "gerar-leads", label: "Preciso gerar mais leads" },
  { value: "reduzir-custo", label: "Meu custo por lead é alto" },
  { value: "organizar-funil", label: "Não tenho controle do funil" },
  { value: "montar-do-zero", label: "Preciso montar do zero" },
  { value: "outro", label: "Outro" },
];

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || "";

const inputClass =
  "w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-colors";

export function DiagnosticForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    pushDataLayerEvent("form_submit", {
      form_name: "diagnostico",
      form_page: window.location.pathname,
    });

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // Silently fail — don't block the user
      }
    }

    router.push("/diagnostico/obrigado");
  }

  function handleFirstFocus() {
    if (!focused) {
      setFocused(true);
      pushDataLayerEvent("form_start", { form_name: "diagnostico" });
    }
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      onFocus={handleFirstFocus}
      className="space-y-4"
    >
      <HiddenFields formName="diagnostico" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="WhatsApp (00) 00000-0000"
          required
          className={inputClass}
        />
        <input
          type="url"
          name="website"
          placeholder="Site da empresa (opcional)"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select name="revenue" required className={`${inputClass} appearance-none`}>
          <option value="" disabled selected>
            Faturamento mensal
          </option>
          {REVENUE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-neutral-900">
              {opt.label}
            </option>
          ))}
        </select>

        <select name="pain" required className={`${inputClass} appearance-none`}>
          <option value="" disabled selected>
            Principal dor
          </option>
          {PAIN_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-neutral-900">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Conte um pouco mais sobre o que precisa (opcional)"
        rows={3}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-lg py-3 px-6 shadow-[0_4px_15px_rgba(16,185,129,0.4)] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {loading ? "Enviando..." : "Agendar diagnóstico gratuito"}
      </button>
    </form>
  );
}
