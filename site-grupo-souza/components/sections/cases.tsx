import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const CASES = [
  {
    segment: "Educação",
    size: "Médio porte",
    challenge: "CPL alto e leads desqualificados sobrecarregando o comercial.",
    metric: "CPL",
    before: "R$ 87",
    after: "R$ 32",
    delta: "-63%",
    period: "90 dias",
    extra: "ROAS subiu de 1.8x para 4.6x",
  },
  {
    segment: "Serviços B2B",
    size: "PME",
    challenge: "Tráfego rodando sem tracking, sem saber qual canal performava.",
    metric: "MQLs/mês",
    before: "12",
    after: "47",
    delta: "+291%",
    period: "60 dias",
    extra: "Setup completo de GTM + GA4 + offline conversions",
  },
  {
    segment: "Saúde",
    size: "Clínica",
    challenge: "Site bonito sem conversão, agendamentos vinham só por indicação.",
    metric: "Conv. rate",
    before: "1.2%",
    after: "7.8%",
    delta: "+550%",
    period: "45 dias",
    extra: "LP nova + tracking + automação de follow-up",
  },
];

export function Cases() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto px-4 md:px-6 py-24">
      <div className="text-center mb-14">
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
          Cases
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] text-white mb-3">
          Antes & depois
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto font-sans">
          Resultados reais de clientes. Identidades preservadas, números fiéis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASES.map((c, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-4 sm:p-6 hover:border-emerald-500/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.04] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono">
                  {c.segment}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">
                  {c.size}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 min-h-[3.5rem]">
                {c.challenge}
              </p>

              {/* Antes / Depois */}
              <div className="rounded-xl ring-1 ring-white/[0.06] bg-black/40 p-4 mb-4">
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-3">
                  {c.metric}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-center flex-1">
                    <div className="text-[10px] text-neutral-600 mb-1 font-sans">Antes</div>
                    <div className="text-lg text-neutral-400 line-through font-sans">
                      {c.before}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-500/40 flex-shrink-0" />
                  <div className="text-center flex-1">
                    <div className="text-[10px] text-emerald-500 mb-1 font-sans">Depois</div>
                    <div className="text-lg text-white font-bold font-sans">
                      {c.after}
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {c.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 font-mono">
                    {c.delta.startsWith("-") ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : (
                      <TrendingUp className="w-3 h-3" />
                    )}
                    {c.delta}
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                {c.extra}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
