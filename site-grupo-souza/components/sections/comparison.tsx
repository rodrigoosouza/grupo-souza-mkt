import { Check, X } from "lucide-react";

const ROWS = [
  {
    label: "Plataforma de gestão",
    traditional: "Planilhas soltas e ferramentas avulsas",
    grupo: "Plataforma própria com leads, tracking e dashboards centralizados",
  },
  {
    label: "Tempo de setup",
    traditional: "2-4 meses",
    grupo: "2-4 semanas",
  },
  {
    label: "Tracking ponta a ponta",
    traditional: "Terceirizado / parcial",
    grupo: "Setup completo (GTM + GA4 + offline)",
  },
  {
    label: "Quem opera campanhas",
    traditional: "Júnior treinando",
    grupo: "Quem entende o funil inteiro",
  },
  {
    label: "Dono dos dados e contas",
    traditional: "Lock-in disfarçado",
    grupo: "100% seu, sem amarras",
  },
  {
    label: "Markup em mídia",
    traditional: "10-20% por cima da verba",
    grupo: "Zero. Você paga direto na plataforma",
  },
  {
    label: "Relatório",
    traditional: "PDF mensal de métricas de vaidade",
    grupo: "Dashboard ao vivo + reunião semanal",
  },
  {
    label: "Decisão baseada em",
    traditional: "Achismo do gestor",
    grupo: "Dado consolidado do funil",
  },
];

export function Comparison() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="text-center mb-10 md:mb-14">
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
          Por que escolher
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] text-white mb-3">
          Não somos uma agência tradicional
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto font-sans">
          A diferença não é cosmética. É estrutural.
        </p>
      </div>

      {/* MOBILE: stack vertical de cards (cada item) */}
      <div className="md:hidden space-y-4">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.06] bg-[#0A0A0A] overflow-hidden"
          >
            {/* Label header */}
            <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
              <div className="text-sm font-bold text-white">{row.label}</div>
            </div>

            {/* Tradicional */}
            <div className="px-4 py-3 border-b border-white/[0.04] flex items-start gap-3">
              <X className="w-4 h-4 text-red-500/70 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono mb-1">
                  Tradicional
                </div>
                <div className="text-sm text-neutral-400 font-sans break-words">
                  {row.traditional}
                </div>
              </div>
            </div>

            {/* Grupo Souza */}
            <div className="px-4 py-3 bg-emerald-500/[0.04] flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-mono mb-1">
                  Grupo Souza
                </div>
                <div className="text-sm text-white font-medium font-sans break-words">
                  {row.grupo}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP: tabela 3 colunas */}
      <div className="hidden md:block rounded-2xl border border-white/[0.06] bg-[#0A0A0A] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-white/[0.06]">
          <div className="p-5 text-[11px] uppercase tracking-wider text-neutral-500 font-mono" />
          <div className="p-5 text-center border-l border-white/[0.06]">
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono mb-1">
              Tradicional
            </div>
            <div className="text-sm text-neutral-400 font-sans">
              Agência comum
            </div>
          </div>
          <div className="p-5 text-center border-l border-white/[0.06] bg-emerald-500/[0.03]">
            <div className="text-[11px] uppercase tracking-wider text-emerald-500 font-mono mb-1">
              Grupo Souza
            </div>
            <div className="text-sm text-white font-medium font-sans">
              Engenharia de aquisição
            </div>
          </div>
        </div>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-white/[0.04] last:border-b-0"
          >
            <div className="p-5 text-sm text-neutral-300 font-sans">
              {row.label}
            </div>
            <div className="p-5 border-l border-white/[0.06] flex items-start gap-2">
              <X className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-500 font-sans">
                {row.traditional}
              </span>
            </div>
            <div className="p-5 border-l border-white/[0.06] bg-emerald-500/[0.02] flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-white font-sans">{row.grupo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
