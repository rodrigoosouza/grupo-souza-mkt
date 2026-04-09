import { TrendingUp, Target, Users, Zap } from "lucide-react";

const STATS = [
  {
    icon: TrendingUp,
    value: "4.2x",
    label: "ROAS médio",
    desc: "Retorno sobre investimento em mídia",
  },
  {
    icon: Target,
    value: "-38%",
    label: "CPL otimizado",
    desc: "Redução média de custo por lead",
  },
  {
    icon: Users,
    value: "+1.200",
    label: "Leads qualificados",
    desc: "Gerados nos últimos 12 meses",
  },
  {
    icon: Zap,
    value: "14 dias",
    label: "Setup completo",
    desc: "Do diagnóstico à primeira campanha",
  },
];

export function Results() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto px-4 md:px-6 py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[200px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center mb-14">
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
          Resultados Reais
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] text-white mb-3">
          Números que falam por nós
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto font-sans">
          Performance consolidada do portfólio ativo. Sem métricas de vaidade.
        </p>
      </div>

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-6 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.04] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center mb-5 group-hover:border-emerald-500/30 transition-colors">
                <stat.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-emerald-400 font-medium font-sans mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 font-sans leading-relaxed">
                {stat.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
