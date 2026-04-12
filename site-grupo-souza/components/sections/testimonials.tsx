import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Em 30 dias o Rodrigo arrumou um tracking que estava quebrado há mais de um ano. Pela primeira vez a gente sabe de onde vem cada lead.",
    name: "Marina C.",
    role: "Diretora de Marketing",
    company: "Edtech",
  },
  {
    quote:
      "Trocamos uma agência de 8 pessoas pelo Grupo Souza e entregamos mais. A diferença é que aqui quem mexe no anúncio é a mesma pessoa que monta a LP.",
    name: "Ricardo T.",
    role: "CEO",
    company: "Consultoria B2B",
  },
  {
    quote:
      "O processo é absurdamente claro. Reunião semanal, dashboard ao vivo, decisões baseadas em dado. Sem aquele relatório de PowerPoint inútil.",
    name: "Camila S.",
    role: "Sócia-fundadora",
    company: "Clínica de saúde",
  },
];

export function Testimonials() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto px-4 md:px-6 py-24">
      <div className="text-center mb-14">
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
          Depoimentos
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] text-white mb-3">
          O que nossos clientes dizem
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto font-sans">
          Quem opera com a gente, conta como é.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-5 sm:p-7 hover:border-emerald-500/15 transition-all duration-500 relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.04] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <Quote className="w-8 h-8 text-emerald-500/30 mb-4 relative" />

            <p className="text-sm text-neutral-200 leading-relaxed mb-6 relative flex-1 font-sans">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="relative pt-5 border-t border-white/[0.06]">
              <div className="text-sm font-medium text-white font-sans">
                {t.name}
              </div>
              <div className="text-xs text-neutral-500 font-sans mt-0.5">
                {t.role} · {t.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
