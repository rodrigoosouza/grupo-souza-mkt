import type { Metadata } from "next";
import { DiagnosticForm } from "@/components/forms/diagnostic-form";
import {
  ClipboardCheck,
  Clock,
  ShieldCheck,
  TrendingUp,
  Search,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito",
  description:
    "Agende um diagnóstico gratuito de 30 minutos. Vamos analisar seu funil e mostrar onde você está perdendo dinheiro.",
};

const BENEFITS = [
  {
    icon: ClipboardCheck,
    title: "Análise personalizada",
    description: "Revisamos seu funil, campanhas e tracking atuais pra encontrar os gargalos.",
  },
  {
    icon: Clock,
    title: "30 minutos objetivos",
    description: "Sem enrolação. Diagnóstico direto ao ponto, com prioridades claras.",
  },
  {
    icon: ShieldCheck,
    title: "Sem compromisso",
    description: "Você recebe a análise independente de contratar qualquer serviço.",
  },
];

const WHAT_WE_ANALYZE = [
  {
    icon: Search,
    title: "Funil de aquisição",
    description: "De onde vêm seus leads, quanto custam e onde estão travando.",
  },
  {
    icon: TrendingUp,
    title: "Campanhas ativas",
    description: "Performance de Google Ads, Meta Ads e outras fontes de tráfego.",
  },
  {
    icon: Zap,
    title: "Automações e CRM",
    description: "Se seus leads estão sendo acompanhados ou estão morrendo no funil.",
  },
];

export default function DiagnosticoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="animate-fade-in-up delay-100 text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
            Diagnóstico gratuito
          </div>
          <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.92] mb-6 max-w-3xl">
            Vamos analisar seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              marketing juntos
            </span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-neutral-400 max-w-xl leading-relaxed">
            Em 30 minutos, identificamos onde seu funil está travando e o que
            fazer pra destravar. Você sai com um plano claro — sem compromisso.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-5">
            {/* Benefits */}
            <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll mb-10">
              <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                O que você ganha
              </h2>
              <div className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/40 transition-all duration-500">
                      <benefit.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What we analyze */}
            <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-10">
              <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                O que analisamos
              </h2>
              <div className="space-y-3">
                {WHAT_WE_ANALYZE.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-3 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-300 mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA */}
            <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
              <p className="text-xs text-neutral-400">
                <span className="text-emerald-400 font-bold">SLA:</span>{" "}
                Resposta em até 4h em horário comercial. Sem spam, sem vendedor
                ligando 15 vezes.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden sticky top-24">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.06] blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/[0.03] blur-[60px] rounded-full pointer-events-none" />

              <div className="relative">
                <h2 className="text-lg font-bold text-white mb-1">
                  Agendar diagnóstico
                </h2>
                <p className="text-xs text-neutral-400 mb-6">
                  Preencha o formulário e entraremos em contato em até 4 horas.
                </p>
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
