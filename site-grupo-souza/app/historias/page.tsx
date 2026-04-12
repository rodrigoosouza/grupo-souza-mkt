import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, Quote } from "lucide-react";
import { getAllCases } from "@/content/cases";
import { CTAButton } from "@/components/forms/cta-button";

export const metadata: Metadata = {
  title: "Histórias de Clientes",
  description:
    "Cases reais de empresas que aplicaram a infraestrutura de aquisição do Grupo Souza. Antes, depois e os números — sem maquiagem.",
};

export default function HistoriasPage() {
  const cases = getAllCases();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-8 md:pt-12 pb-16">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-500/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm text-neutral-300 ring-1 ring-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[2px] font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Cases reais · números reais
            </span>
          </div>
          <h1 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-black tracking-[-3px] leading-[0.9] mb-8 max-w-5xl">
            Histórias de quem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">
              construiu sistema
            </span>{" "}
            com a gente
          </h1>
          <p className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            Cases anonimizados de clientes que transformaram o digital de aposta
            em sistema previsível. Antes, depois, e o que foi feito — sem
            maquiagem.
          </p>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* ============ CASES LIST ============ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-12">
        {cases.map((c, index) => (
          <Link
            key={c.slug}
            href={`/historias/${c.slug}`}
            className="[animation:animationIn_0.8s_ease-out_both] animate-on-scroll group block relative rounded-3xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent hover:from-emerald-500/40 hover:via-emerald-500/10 transition-all duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-black p-8 md:p-12 overflow-hidden">
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/60 transition-all duration-700" />
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/[0.08] blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12">
                {/* LEFT: meta + icon + headline */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-2xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        <c.icon className="w-7 h-7 text-emerald-300" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[3px] font-mono text-emerald-500 font-bold block">
                        {c.segment}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">
                        {c.size} · {c.period}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-5 group-hover:text-emerald-300 transition-colors">
                    {c.headline}
                  </h2>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                    {c.challenge}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] group-hover:border-emerald-500/15 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT: metrics grid */}
                <div className="grid grid-cols-2 gap-3 self-center">
                  {c.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 group-hover:border-emerald-500/15 group-hover:bg-emerald-500/[0.02] transition-all"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                        {m.label}
                      </div>
                      <div className="flex items-end justify-between gap-2 mb-1">
                        <div className="text-xs text-neutral-600 line-through font-sans">
                          {m.before}
                        </div>
                        <ArrowRight className="w-3 h-3 text-emerald-500/40 mb-0.5" />
                        <div className="text-base font-bold text-white font-sans">
                          {m.after}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-end gap-1 text-[11px] font-bold text-emerald-400 font-mono">
                        {m.delta.startsWith("-") ? (
                          <TrendingDown className="w-3 h-3" />
                        ) : (
                          <TrendingUp className="w-3 h-3" />
                        )}
                        {m.delta}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA strip */}
              <div className="relative mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-mono">
                  Período: {c.period}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Ler caso completo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-7xl mx-auto" />

      {/* ============ CTA FINAL ============ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/[0.08] blur-[120px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/10 to-transparent shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-12 md:p-16 text-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              <Quote className="w-10 h-10 text-emerald-500/30 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-[-1.5px] mb-5 text-white">
                Sua história pode ser a próxima
              </h2>
              <p className="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                Agende um diagnóstico gratuito de 30 minutos. A gente analisa
                seu funil atual e mostra exatamente o que muda em 60-90 dias.
              </p>
              <CTAButton variant="primary-glow" size="lg">
                Agendar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
