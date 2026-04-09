import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import { SERVICES } from "@/content/services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Infraestrutura de aquisição de ponta a ponta: tráfego pago, tracking, landing pages, automação, CRM, dashboards, AIEO/GEO e email marketing.",
};

export default function ServicosPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-16">
        {/* Atmospherics */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-500/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
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
              {SERVICES.length} serviços · 1 sistema
            </span>
          </div>
          <h1 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-black tracking-[-3px] leading-[0.9] mb-8 max-w-5xl">
            Cada peça da sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">
              infraestrutura de aquisição
            </span>
          </h1>
          <p className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            Juntas, formam o sistema que faz sua empresa crescer com previsibilidade.
            Do clique até o contrato — sem terceirizar pedaços críticos.
          </p>

          {/* Stat strip */}
          <div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {[
              { icon: Layers, label: "Serviços integrados", value: SERVICES.length },
              { icon: Zap, label: "Setup completo", value: "14 dias" },
              { icon: Sparkles, label: "Operação", value: "Enxuta" },
              { icon: ArrowRight, label: "Sem", value: "Lock-in" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4 hover:border-emerald-500/20 transition-colors"
              >
                <s.icon className="w-4 h-4 text-emerald-400 mb-2" />
                <div className="text-xl font-bold text-white font-sans">{s.value}</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[300px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 relative">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Catálogo completo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-2px] text-white">
            O que entregamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="[animation:animationIn_0.8s_ease-out_both] animate-on-scroll group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent hover:from-emerald-500/40 hover:via-emerald-500/10 transition-all duration-700"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-black p-8 overflow-hidden">
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/60 transition-all duration-700" />

                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/[0.08] blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative flex items-start gap-5">
                  {/* Number + Icon */}
                  <div className="flex flex-col items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-[10px] text-emerald-500/60 font-bold tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:from-emerald-400/30 group-hover:to-emerald-500/15 transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        <service.icon className="w-6 h-6 text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors font-sans">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-neutral-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed font-sans line-clamp-2">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.deliverables.slice(0, 3).map((d, di) => (
                        <span
                          key={di}
                          className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono px-2 py-1 rounded-md bg-white/[0.02] border border-white/[0.04] group-hover:border-emerald-500/15 group-hover:text-neutral-400 transition-colors"
                        >
                          {d.split(" ").slice(0, 3).join(" ")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-7xl mx-auto" />

      {/* ============ CTA ============ */}
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
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[11px] uppercase tracking-wider font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                30 minutos · sem compromisso
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-[-1.5px] mb-5 text-white">
                Não sabe por onde começar?
              </h2>
              <p className="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                Agende um diagnóstico gratuito. A gente analisa seu funil atual
                e mostra exatamente onde está vazando dinheiro.
              </p>
              <Button variant="primary-glow" size="lg" href="/diagnostico">
                Agendar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
