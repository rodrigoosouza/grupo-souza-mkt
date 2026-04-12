import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, X, Sparkles, AlertTriangle, TrendingUp } from "lucide-react";
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from "@/content/services";
import { CTAButton } from "@/components/forms/cta-button";
import { Accordion } from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  Metrics by service — hardcoded reasonable ranges                   */
/* ------------------------------------------------------------------ */
const METRICS_BY_SERVICE: Record<string, { value: string; label: string }[]> = {
  "trafego-pago": [
    { value: "-47%", label: "Redução no CPL" },
    { value: "3.4x", label: "ROAS médio" },
    { value: "+200%", label: "Aumento de leads" },
    { value: "14 dias", label: "Setup completo" },
  ],
  tracking: [
    { value: "+40%", label: "Eventos capturados" },
    { value: "98%", label: "Atribuição precisa" },
    { value: "-30%", label: "Redução no CPL" },
    { value: "2-4 sem", label: "Implementação" },
  ],
  "landing-pages": [
    { value: "5-12%", label: "Taxa de conversão" },
    { value: "<2.5s", label: "LCP (velocidade)" },
    { value: "-40%", label: "Redução de bounce" },
    { value: "100%", label: "Mobile otimizado" },
  ],
  automacao: [
    { value: "<5min", label: "Tempo de follow-up" },
    { value: "Ativo", label: "Lead scoring" },
    { value: "Ilimitados", label: "Fluxos automáticos" },
    { value: "Nativa", label: "Integração CRM" },
  ],
  crm: [
    { value: "Organizado", label: "Pipeline de vendas" },
    { value: "+50%", label: "MQL → SQL" },
    { value: "Central", label: "Dados unificados" },
    { value: "-60%", label: "Tempo operacional" },
  ],
  "dados-dashboards": [
    { value: "Real-time", label: "Dados ao vivo" },
    { value: "Por canal", label: "ROI detalhado" },
    { value: "Visível", label: "CAC por origem" },
    { value: "100%", label: "Decisão em dados" },
  ],
  "aieo-geo": [
    { value: "+40%", label: "Visibilidade em IA" },
    { value: "Citações", label: "ChatGPT e Perplexity" },
    { value: "Completo", label: "Schema markup" },
    { value: "Ativo", label: "llms.txt" },
  ],
  "email-marketing": [
    { value: "25-45%", label: "Taxa de abertura" },
    { value: "Própria", label: "Plataforma inclusa" },
    { value: "Automáticos", label: "Fluxos de nutrição" },
    { value: "R$0", label: "Custo de ferramenta" },
  ],
};

const STAT_PILLS_BY_SERVICE: Record<string, string[]> = {
  "trafego-pago": ["-47% CPL", "+291% MQLs", "ROI 3.4x"],
  tracking: ["+40% eventos", "98% atribuição", "-30% CPL"],
  "landing-pages": ["Conv. 5-12%", "LCP <2.5s", "-40% bounce"],
  automacao: ["Follow-up <5min", "+50% conversão", "0 ferramenta extra"],
  crm: ["+50% MQL→SQL", "-60% tempo", "Pipeline claro"],
  "dados-dashboards": ["Dados real-time", "ROI por canal", "CAC visível"],
  "aieo-geo": ["+40% visibilidade IA", "Citações em ChatGPT", "Schema completo"],
  "email-marketing": ["Open rate 25-45%", "Plataforma própria", "R$0 ferramenta"],
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Serviço não encontrado" };
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const metrics = METRICS_BY_SERVICE[slug] ?? METRICS_BY_SERVICE["trafego-pago"];
  const statPills = STAT_PILLS_BY_SERVICE[slug] ?? STAT_PILLS_BY_SERVICE["trafego-pago"];

  return (
    <>
      {/* ============ 1. HERO — emotional, pain-focused ============ */}
      <section className="relative overflow-hidden">
        {/* Atmospherics */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-500/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="pt-16 pb-16 md:pt-24 md:pb-24 max-w-4xl">
            {/* Icon + counter */}
            <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll flex items-center gap-5 mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-2xl" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                  <Icon className="w-9 h-9 text-emerald-300" />
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm text-neutral-300 ring-1 ring-white/10 px-3 py-1 text-[10px] uppercase tracking-[2px] font-mono mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Servico {String(currentIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                </span>
                <div className="text-xs text-emerald-500 font-mono tracking-wider uppercase">
                  {service.title}
                </div>
              </div>
            </div>

            <h1 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-black tracking-[-3px] leading-[0.92] mb-8">
              {service.headline}
            </h1>

            <p className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl">
              {service.description}
            </p>

            <div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <CTAButton variant="primary-glow" size="lg">
                Agendar diagnostico gratuito
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>

            {/* Stat pills */}
            <div className="[animation:animationIn_0.8s_ease-out_0.55s_both] animate-on-scroll flex flex-wrap gap-3 mt-8">
              {statPills.map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500/[0.06] text-emerald-300 ring-1 ring-emerald-500/20 px-4 py-2 text-sm font-mono font-medium tracking-tight"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* ============ 2. PAIN SECTION — "Voce se identifica?" ============ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[400px] bg-red-500/[0.03] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-14">
            <span className="text-[10px] font-bold text-red-400/80 uppercase tracking-[3px] font-mono block mb-3">
              Voce se identifica?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
              Se isso parece familiar...
            </h2>
          </div>

          <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.pains.map((pain, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-red-500/20 via-red-500/[0.05] to-transparent"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-black p-6 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-400/80" />
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      {pain}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll text-center mt-10">
            <p className="text-lg text-emerald-400 font-medium">
              Entao a gente pode ajudar.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 3. TRANSFORMATION — Before vs After ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Transformacao
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            O que muda com {service.title.toLowerCase()}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {/* VS divisor */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black border border-white/10 items-center justify-center font-mono text-xs text-neutral-500 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            VS
          </div>

          {/* BEFORE — pains */}
          <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll group relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent" />
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-black p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 12px)",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-400/70" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[3px] font-mono text-neutral-500 font-bold">
                      Sem {service.title.toLowerCase()}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-400 font-sans">
                      Os sintomas
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.pains.map((pain, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-white/[0.04] bg-white/[0.01] p-4 flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500/[0.06] border border-red-500/15 flex items-center justify-center mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-500/70" />
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                        {pain}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AFTER — deliverables */}
          <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll group relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/40 via-emerald-500/10 to-transparent" />
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl opacity-50 pointer-events-none" />
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-2xl" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <Sparkles className="w-5 h-5 text-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[3px] font-mono text-emerald-500 font-bold">
                      Com {service.title.toLowerCase()}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans">
                      O resultado
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.deliverables.slice(0, service.pains.length).map((item, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-emerald-500/[0.08] bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 hover:translate-x-1 transition-all duration-300 p-4 flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                      </div>
                      <p className="text-sm text-white leading-relaxed font-sans">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 4. RESULTS / NUMBERS ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Resultados
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            Resultados que entregamos
          </h2>
        </div>

        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-500/30 via-emerald-500/[0.06] to-transparent hover:from-emerald-400/50 hover:via-emerald-500/20 transition-all duration-500"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#0B1410] via-[#080A09] to-black p-6 md:p-8 text-center overflow-hidden">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/[0.08] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-500 font-mono leading-none mb-3">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                    {metric.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 5. DIFFERENTIALS ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            Por que somos diferentes
          </h2>
        </div>

        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-5">
          {service.differentials.map((diff, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent hover:from-emerald-500/30 hover:via-emerald-500/10 transition-all duration-500"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-black p-7 overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/[0.06] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative flex gap-5">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-700 flex-shrink-0 font-mono leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-neutral-200 leading-relaxed font-sans pt-1">
                    {diff}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 6. DELIVERABLES CHECKLIST ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Entregas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            Tudo que esta incluso
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto font-sans mt-3">
            Cada item abaixo entregue, configurado e operando.
          </p>
        </div>

        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {service.deliverables.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.04] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[10px] text-emerald-500/60 font-bold tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                    <Check className="w-4 h-4 text-emerald-300" />
                  </div>
                </div>
                <span className="text-sm text-neutral-200 leading-relaxed font-sans pt-1">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 7. PROCESS TIMELINE ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            Como funciona na pratica
          </h2>
        </div>

        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {service.process.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector */}
              {i < service.process.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[56px] -right-8 h-px overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500/60 via-emerald-500/30 to-emerald-500/10" />
                  <div
                    className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80 animate-[connector-pulse_2.8s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] group-hover:border-emerald-400/50 transition-all duration-500">
                  <span className="text-xs font-bold text-emerald-300 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight font-sans">
                  {step.step}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />

      {/* ============ 8. FAQ ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            Perguntas frequentes
          </h2>
        </div>
        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll max-w-3xl mx-auto">
          <Accordion items={service.faq} />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-7xl mx-auto" />

      {/* ============ 9. CTA + NEXT SERVICE ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.06] blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CTA */}
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/10 to-transparent shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)]">
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[10px] uppercase tracking-wider font-mono mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Sem compromisso
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                  Quer implementar no seu negocio?
                </h3>
                <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                  Agende um diagnostico gratuito de 30 minutos. A gente analisa
                  o que faz sentido pro seu momento.
                </p>
                <CTAButton variant="primary-glow">
                  Agendar diagnostico
                  <ArrowRight className="w-4 h-4" />
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Next service */}
          <Link
            href={`/servicos/${nextService.slug}`}
            className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent hover:from-emerald-500/30 hover:via-emerald-500/10 transition-all duration-700"
          >
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-black p-10 overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/[0.08] blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[3px] block mb-6 group-hover:text-emerald-500 transition-colors">
                  Proximo servico →
                </span>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all">
                    <nextService.icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors font-sans">
                    {nextService.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
                  {nextService.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400 font-medium font-sans">
                  Ver servico
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ 10. SCHEMA.ORG ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.seoDescription,
            provider: { "@type": "Organization", name: "Grupo Souza MKT", url: "https://gruposouza.com.br" },
            areaServed: { "@type": "Country", name: "Brazil" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
