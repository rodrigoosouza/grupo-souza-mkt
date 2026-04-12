import { Search, Settings, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    duration: "30 minutos",
    description:
      "Entendemos seu negócio, analisamos seu funil atual e identificamos onde está perdendo dinheiro.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Setup",
    duration: "2 semanas",
    description:
      "Montamos a infraestrutura: tracking, landing page, automações, CRM e campanhas.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Ativação",
    duration: "Dia 15",
    description:
      "Ligamos o tráfego pago com tracking completo. Cada lead é rastreado desde o primeiro clique.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Otimização",
    duration: "Contínuo",
    description:
      "Com dados reais, otimizamos campanhas, LPs e fluxos. O sistema melhora a cada semana.",
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mx-2.5 lg:mx-auto mb-24 p-5 sm:p-8 md:p-10 relative"
      style={{
        position: "relative",
        // @ts-expect-error CSS custom properties
        "--border-gradient":
          "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        "--border-radius-before": "24px",
      }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 mb-12 items-start lg:items-center">
        <span className="text-8xl text-white/5 font-sans font-light tracking-tight">
          03.
        </span>
        <div className="space-y-2">
          <h2 className="md:text-5xl text-4xl text-white font-sans font-bold tracking-[-2px]">
            Seu marketing funcionando em 4 semanas
          </h2>
          <p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans">
            Processo claro, previsível e sem surpresas. Do diagnóstico à
            otimização contínua.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {STEPS.map((step, index) => (
          <div key={index} className="relative group">
            {/* Connector */}
            {index < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[56px] -right-8 h-px overflow-hidden pointer-events-none">
                <div className="h-full bg-gradient-to-r from-emerald-500/60 via-emerald-500/30 to-emerald-500/10" />
                {/* Pulse traveling */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80 animate-[connector-pulse_2.8s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.6}s` }} />
                {/* End dot */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              </div>
            )}

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-5 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500">
                <step.icon className="w-5 h-5 text-emerald-400" />
              </div>

              <span className="text-[10px] font-bold text-emerald-500 font-mono tracking-widest block mb-3">
                {step.number}
              </span>

              <h3 className="text-lg font-medium text-white mb-1 tracking-tight font-sans">
                {step.title}
              </h3>
              <span className="text-[11px] text-emerald-400/70 font-mono mb-4 block">
                {step.duration}
              </span>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
