import type { Metadata } from "next";
import {
  Megaphone,
  ScanSearch,
  Code2,
  Workflow,
  LayoutTemplate,
  BarChart3,
  Video,
  BrainCircuit,
  Database,
  Target,
  LineChart,
  Shield,
  Cpu,
  Users,
  ArrowRight,
  Compass,
  Telescope,
} from "lucide-react";
import { CTAButton } from "@/components/forms/cta-button";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Grupo Souza MKT e Rodrigo Souza, fundador. Growth marketing e engenharia de aquisição para empresas em crescimento.",
};

const SKILLS = [
  { icon: Megaphone, label: "Tráfego Pago (Meta/Google Ads)" },
  { icon: ScanSearch, label: "Tracking Avançado (GTM/GA4)" },
  { icon: Code2, label: "Desenvolvimento Web (Next.js/TypeScript)" },
  { icon: Workflow, label: "Automação (n8n/Make)" },
  { icon: Database, label: "CRM e Estruturação de Funil" },
  { icon: LayoutTemplate, label: "Landing Pages com CRO" },
  { icon: BarChart3, label: "Dashboards de Performance" },
  { icon: Video, label: "Produção de Vídeo por IA" },
  { icon: BrainCircuit, label: "AIEO/GEO (Busca Generativa)" },
];

const VALUES = [
  {
    icon: LineChart,
    title: "Dados antes de opinião",
    description:
      "Toda decisão é baseada em dados reais do funil, não em achismo ou tendência do momento.",
  },
  {
    icon: Target,
    title: "Resultado acima de entrega",
    description:
      "Não entregamos relatórios bonitos — entregamos crescimento mensurável e previsível.",
  },
  {
    icon: Shield,
    title: "Transparência radical",
    description:
      "Dashboard aberto, métricas reais, sem maquiar número. O cliente vê tudo, o tempo todo.",
  },
  {
    icon: Cpu,
    title: "Tecnologia como alavanca",
    description:
      "Usamos IA, automação e stack moderna pra entregar com a eficiência de uma equipe 10x maior.",
  },
  {
    icon: Users,
    title: "Cliente certo, não qualquer cliente",
    description:
      "Escolhemos trabalhar com quem quer crescer de verdade. Poucos clientes, resultado máximo.",
  },
];

const STACK = [
  { name: "Next.js", category: "Desenvolvimento" },
  { name: "TypeScript", category: "Desenvolvimento" },
  { name: "Supabase", category: "Backend" },
  { name: "Vercel", category: "Deploy" },
  { name: "Google Tag Manager", category: "Tracking" },
  { name: "Google Analytics 4", category: "Tracking" },
  { name: "Google Ads", category: "Tráfego" },
  { name: "Meta Ads", category: "Tráfego" },
  { name: "n8n", category: "Automação" },
  { name: "Make", category: "Automação" },
  { name: "Figma", category: "Design" },
  { name: "ClickUp", category: "Gestão" },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="animate-fade-in-up delay-100 text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
            Sobre nós
          </div>
          <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.92] mb-6 max-w-3xl">
            Construímos a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              infraestrutura de aquisição
            </span>{" "}
            da sua empresa
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-neutral-400 max-w-xl leading-relaxed">
            Do clique ao contrato, com dados em cada etapa. Growth marketing
            para empresas que querem crescer com previsibilidade.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* Fundador */}
      <section
        className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mx-2.5 lg:mx-auto mb-24 p-8 md:p-10 relative"
        style={{
          position: "relative",
          // @ts-expect-error CSS custom properties
          "--border-gradient":
            "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
          "--border-radius-before": "24px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
              Fundador
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px] mb-4">
              Rodrigo Souza
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Growth marketer e engenheiro de aquisição. Combina marketing de
              performance com desenvolvimento de software pra construir sistemas
              de aquisição completos — do anúncio ao CRM, com dados em cada
              etapa.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Diferente de agências tradicionais que dependem de equipes grandes
              e processos lentos, o Grupo Souza usa tecnologia, automação e IA
              pra entregar com a eficiência de uma equipe 10x maior. Poucos
              clientes, resultado máximo.
            </p>
            <CTAButton variant="ghost" size="md">
              Agendar conversa
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Domínios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-emerald-500/[0.02] hover:border-emerald-500/15 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/40 transition-all duration-500">
                    <skill.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs text-neutral-300">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="max-w-7xl mx-2.5 lg:mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Missão */}
        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-400/40 via-emerald-500/10 to-transparent shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]">
          <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-2xl" />
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <Compass className="w-5 h-5 text-emerald-300" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[3px] font-mono text-emerald-500 font-bold">
                    Missão
                  </div>
                  <div className="text-sm text-neutral-400">Por que existimos</div>
                </div>
              </div>
              <p className="text-base md:text-lg text-neutral-200 leading-relaxed font-sans">
                Construir a infraestrutura de aquisição que empresas precisam
                pra crescer com previsibilidade — conectando tráfego, dados e
                automação em um sistema que gera leads qualificados e entrega
                resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>

        {/* Visão */}
        <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll relative rounded-3xl p-[1px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent">
          <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-black p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/[0.06] blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <Telescope className="w-5 h-5 text-neutral-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[3px] font-mono text-neutral-500 font-bold">
                    Visão
                  </div>
                  <div className="text-sm text-neutral-500">Onde queremos chegar</div>
                </div>
              </div>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-sans">
                Ser referência em growth marketing inteligente no Brasil — a
                agência que empresários buscam quando querem parar de
                desperdiçar verba e começar a ter um sistema de aquisição que
                funciona de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mx-2.5 lg:mx-auto mb-24 p-8 md:p-10 relative"
        style={{
          position: "relative",
          // @ts-expect-error CSS custom properties
          "--border-gradient":
            "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0))",
          "--border-radius-before": "24px",
        }}
      >
        <div className="text-center mb-12">
          <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
            Valores
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px]">
            No que a gente acredita
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="[animation:animationIn_0.8s_ease-out_both] animate-on-scroll group rounded-2xl border border-white/[0.06] bg-black/20 p-6 hover:bg-emerald-500/[0.03] hover:border-emerald-500/15 transition-all duration-500"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/40 transition-all duration-500">
                <value.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16">
            <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
              Ecossistema
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px] mb-4">
              Ferramentas que usamos
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Stack moderna e integrada. Cada ferramenta escolhida por performance
              e resultado, não por hype.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {STACK.map((tool, index) => (
              <div
                key={tool.name}
                className="[animation:animationIn_0.8s_ease-out_both] animate-on-scroll group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center hover:bg-emerald-500/[0.03] hover:border-emerald-500/20 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)] transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center relative z-10">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-1px] mb-4">
              Quer saber como podemos ajudar sua empresa?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg max-w-lg mx-auto">
              Agende um diagnóstico gratuito de 30 minutos. Sem compromisso.
            </p>
            <CTAButton variant="primary-glow" size="lg">
              Agendar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
