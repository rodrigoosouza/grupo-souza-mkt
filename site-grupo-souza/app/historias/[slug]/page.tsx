import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Quote,
  AlertTriangle,
  Search,
  Wrench,
  Sparkles,
} from "lucide-react";
import {
  CASES,
  getAllCaseSlugs,
  getCaseBySlug,
} from "@/content/cases";
import { CTAButton } from "@/components/forms/cta-button";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return { title: "Caso não encontrado" };
  return {
    title: c.seo_title,
    description: c.seo_description,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const currentIndex = CASES.findIndex((item) => item.slug === slug);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-500/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-28 pb-12">
          <Link
            href="/historias"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-emerald-400 transition-colors group font-mono mb-8"
          >
            <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
            TODAS AS HISTÓRIAS
          </Link>

          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll flex items-center gap-5 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-2xl" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                <c.icon className="w-9 h-9 text-emerald-300" />
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm text-neutral-300 ring-1 ring-white/10 px-3 py-1 text-[10px] uppercase tracking-[2px] font-mono mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Caso real · {c.period}
              </span>
              <div className="text-xs text-emerald-500 font-mono tracking-wider uppercase">
                {c.segment} · {c.size}
              </div>
            </div>
          </div>

          <h1 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.95] mb-8">
            {c.headline}
          </h1>

          {/* Tags de servicos */}
          <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll flex flex-wrap gap-2">
            {c.services.map((s) => (
              <span
                key={s}
                className="text-[10px] uppercase tracking-wider text-emerald-300 font-mono px-3 py-1.5 rounded-md bg-emerald-500/[0.05] border border-emerald-500/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* ============ METRICS HIGHLIGHT ============ */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[300px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Resultado em {c.period}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px] text-white">
            Os números
          </h2>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
          {c.metrics.map((m, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-500/30 via-emerald-500/10 to-transparent"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-5 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/[0.08] blur-[60px] rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-500/80 font-mono mb-3">
                    {m.label}
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <div className="text-xs text-neutral-600 line-through font-sans">
                      {m.before}
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white font-sans tracking-tight mb-3">
                    {m.after}
                  </div>
                  <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-bold text-emerald-300 font-mono">
                    {m.delta.startsWith("-") ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : (
                      <TrendingUp className="w-3 h-3" />
                    )}
                    {m.delta}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-5xl mx-auto" />

      {/* ============ NARRATIVE: 4 BLOCOS ============ */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28 space-y-6">
        {[
          {
            icon: AlertTriangle,
            label: "Cenário inicial",
            title: "O desafio",
            text: c.challenge,
            tone: "neutral" as const,
          },
          {
            icon: Search,
            label: "Diagnóstico",
            title: "O que descobrimos",
            text: c.diagnosis,
            tone: "neutral" as const,
          },
          {
            icon: Wrench,
            label: "Aplicação",
            title: "O que foi feito",
            text: c.application,
            tone: "neutral" as const,
          },
          {
            icon: Sparkles,
            label: "Resultado",
            title: "O que mudou",
            text: c.result,
            tone: "highlight" as const,
          },
        ].map((block, i) => (
          <div
            key={i}
            className={`[animation:animationIn_0.8s_ease-out_both] animate-on-scroll relative rounded-3xl p-[1px] ${
              block.tone === "highlight"
                ? "bg-gradient-to-br from-emerald-400/40 via-emerald-500/15 to-transparent shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)]"
                : "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div
              className={`relative rounded-3xl p-8 md:p-10 overflow-hidden ${
                block.tone === "highlight"
                  ? "bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black"
                  : "bg-gradient-to-br from-[#0A0A0A] to-black"
              }`}
            >
              {block.tone === "highlight" && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </>
              )}

              <div className="relative flex items-start gap-5">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                    block.tone === "highlight"
                      ? "bg-gradient-to-br from-emerald-400/30 to-emerald-600/10 border border-emerald-400/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                      : "bg-white/[0.04] border border-white/[0.08]"
                  }`}
                >
                  <block.icon
                    className={`w-5 h-5 ${block.tone === "highlight" ? "text-emerald-300" : "text-neutral-400"}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-[10px] uppercase tracking-[3px] font-mono font-bold mb-1 ${
                      block.tone === "highlight"
                        ? "text-emerald-500"
                        : "text-neutral-500"
                    }`}
                  >
                    {block.label}
                  </div>
                  <h3
                    className={`text-2xl font-bold tracking-tight mb-4 font-sans ${
                      block.tone === "highlight" ? "text-white" : "text-neutral-200"
                    }`}
                  >
                    {block.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed font-sans ${
                      block.tone === "highlight" ? "text-neutral-200" : "text-neutral-400"
                    }`}
                  >
                    {block.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ============ TESTIMONIAL ============ */}
      {c.testimonial && (
        <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-transparent p-10 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/[0.06] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              <Quote className="w-10 h-10 text-emerald-500/30 mb-5" />
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed font-sans mb-8 italic">
                &ldquo;{c.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-300 font-bold text-sm">
                    {c.testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {c.testimonial.name}
                  </div>
                  <div className="text-xs text-neutral-500">{c.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-5xl mx-auto" />

      {/* ============ CTA + NEXT CASE ============ */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CTA */}
        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/10 to-transparent shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)]">
          <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[10px] uppercase tracking-wider font-mono mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sem compromisso
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                Quer um resultado parecido?
              </h3>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                Agende um diagnóstico gratuito de 30 minutos. A gente audita
                seu funil e mostra o caminho.
              </p>
              <CTAButton variant="primary-glow">
                Agendar diagnóstico
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Next case */}
        {nextCase.slug !== c.slug && (
          <Link
            href={`/historias/${nextCase.slug}`}
            className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent hover:from-emerald-500/30 hover:via-emerald-500/10 transition-all duration-700"
          >
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-black p-10 overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/[0.08] blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[3px] block mb-6 group-hover:text-emerald-500 transition-colors">
                  Próximo caso →
                </span>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all">
                    <nextCase.icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-emerald-500">
                      {nextCase.segment}
                    </div>
                    <div className="text-xs text-neutral-500 font-mono">
                      {nextCase.size}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-3 line-clamp-2">
                  {nextCase.headline}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400 font-medium font-sans">
                  Ver caso
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.headline,
            description: c.seo_description,
            articleSection: "Case Study",
            inLanguage: "pt-BR",
            author: {
              "@type": "Organization",
              name: "Grupo Souza MKT",
              url: "https://gruposouza.com.br",
            },
            publisher: {
              "@type": "Organization",
              name: "Grupo Souza MKT",
              url: "https://gruposouza.com.br",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://gruposouza.com.br/historias/${c.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
