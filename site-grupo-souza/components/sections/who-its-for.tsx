import { Check, X, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const FOR = [
  {
    title: "Produto validado, pronto pra escalar",
    desc: "Você já vende. Agora precisa de previsibilidade e volume.",
  },
  {
    title: "Ticket médio acima de R$ 2k",
    desc: "B2B, serviços, educação, saúde — onde cada lead vale a pena rastrear.",
  },
  {
    title: "Time comercial pronto pra atender",
    desc: "Lead qualificado chegando e alguém preparado pra fechar.",
  },
  {
    title: "Decisão baseada em dado, não em achismo",
    desc: "Você quer dashboard ao vivo, não PowerPoint mensal de vaidade.",
  },
  {
    title: "Verba de mídia mínima de R$ 5k/mês",
    desc: "Volume suficiente pro algoritmo aprender e otimizar de verdade.",
  },
];

const NOT_FOR = [
  {
    title: "Busca seguidores e curtidas",
    desc: "Aqui é funil de vendas, não vitrine de redes sociais.",
  },
  {
    title: "Produto ainda em validação inicial",
    desc: "Sem oferta clara, tráfego pago só queima dinheiro mais rápido.",
  },
  {
    title: "Quer terceirizar 100% e sumir",
    desc: "Growth é parceria. Sem você no jogo, ninguém ganha.",
  },
  {
    title: "Não tem comercial estruturado",
    desc: "De que adianta lead qualificado se ninguém atende?",
  },
  {
    title: "Quer a agência mais barata do mercado",
    desc: "Eficiência não é o mesmo que preço baixo. Não somos commodity.",
  },
];

export function WhoItsFor() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background atmospherics */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm text-neutral-300 ring-1 ring-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[2px] font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Filtro honesto · 30 segundos
          </span>
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-[-3px] text-white mb-6 leading-[0.95]">
            Você está
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              no lugar certo?
            </span>
          </h2>
          <p className="text-neutral-400 font-sans text-lg leading-relaxed">
            A gente prefere perder um cliente errado do que entregar um trabalho ruim.
            Olha as duas listas abaixo — se a da direita te descreve, melhor procurar
            outra agência.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {/* VS divisor central */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black border border-white/10 items-center justify-center font-mono text-xs text-neutral-500 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            VS
          </div>

          {/* PRA VOCÊ SE — Match */}
          <div className="group relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/60 via-emerald-500/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-10 md:p-12 overflow-hidden">
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-full" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                      <Sparkles className="w-7 h-7 text-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[3px] font-mono text-emerald-500 font-bold mb-1">
                      Match perfeito
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans">
                      Pra você se...
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {FOR.map((item, i) => (
                    <li
                      key={i}
                      className="group/item relative rounded-2xl border border-emerald-500/[0.08] bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 hover:translate-x-1 transition-all duration-300 p-4"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number */}
                        <div className="flex-shrink-0 flex items-center gap-3">
                          <span className="font-mono text-[10px] text-emerald-500/60 font-bold tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover/item:from-emerald-400/40 group-hover/item:to-emerald-500/20 group-hover/item:border-emerald-400/50 transition-all">
                            <Check className="w-4 h-4 text-emerald-300" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="text-base font-semibold text-white font-sans mb-1 leading-tight">
                            {item.title}
                          </div>
                          <div className="text-sm text-neutral-400 leading-relaxed font-sans">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/diagnostico"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold text-sm px-5 py-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all font-sans"
                >
                  Quero falar com vocês
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* NÃO É PRA VOCÊ — Não match */}
          <div className="group relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent" />

            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-black p-10 md:p-12 overflow-hidden">
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

              {/* Decorative diagonal lines */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 12px)",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-7 h-7 text-red-400/70" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[3px] font-mono text-neutral-500 font-bold mb-1">
                      Não combinamos
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-400 tracking-tight font-sans">
                      Não é pra você se...
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {NOT_FOR.map((item, i) => (
                    <li
                      key={i}
                      className="relative rounded-2xl border border-white/[0.04] bg-white/[0.01] p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center gap-3">
                          <span className="font-mono text-[10px] text-neutral-700 font-bold tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-red-500/[0.06] border border-red-500/15 flex items-center justify-center">
                            <X className="w-4 h-4 text-red-500/60" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="text-base font-semibold text-neutral-400 font-sans mb-1 leading-tight line-through decoration-red-500/30 decoration-1">
                            {item.title}
                          </div>
                          <div className="text-sm text-neutral-600 leading-relaxed font-sans">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer note (no CTA - intentional) */}
                <p className="mt-8 text-xs text-neutral-600 font-sans italic">
                  Sem ressentimento. Tem agência boa pra cada perfil — só não somos pro seu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
