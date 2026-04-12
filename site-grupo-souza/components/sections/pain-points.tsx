import { CircleDollarSign, UserX, BarChart3, MousePointerClick } from "lucide-react";

const PAINS = [
  {
    icon: CircleDollarSign,
    title: "Gasto com anúncio mas não sei o retorno",
    description:
      "Investe em Google e Meta Ads todo mês, mas não sabe quanto cada lead custa nem de onde veio.",
  },
  {
    icon: UserX,
    title: "Meus leads somem no meio do caminho",
    description:
      "O lead preenche o formulário e ninguém retorna. Sem automação, sem follow-up, sem controle.",
  },
  {
    icon: BarChart3,
    title: "Não tenho controle do funil",
    description:
      "Não sabe quantos leads viram reunião, quantas reuniões viram venda. Toma decisão no escuro.",
  },
  {
    icon: MousePointerClick,
    title: "Meu site não converte",
    description:
      "Tem site bonito mas a taxa de conversão é menor que 1%. Página sem estratégia é dinheiro perdido.",
  },
];

export function PainPoints() {
  return (
    <section
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
          02.
        </span>
        <div className="space-y-2">
          <h2 className="md:text-5xl text-4xl text-white font-sans font-bold tracking-[-2px]">
            Você investe em marketing. Mas sabe o que volta?
          </h2>
          <p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans">
            Se você se identificou com alguma dessas situações, nós resolvemos isso.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAINS.map((pain, index) => (
          <div
            key={index}
            className="[animation:animationIn_0.8s_ease-out_both] animate-on-scroll group rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 hover:border-white/20 transition-all duration-500"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/30 transition-colors">
                <pain.icon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-base font-medium text-white mb-2 tracking-tight font-sans">
                  {pain.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {pain.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
