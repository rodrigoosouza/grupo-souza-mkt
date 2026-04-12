import type { Metadata } from "next";
import { Check, Minus, ArrowRight, HelpCircle } from "lucide-react";
import { CTAButton } from "@/components/forms/cta-button";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pacotes",
  description:
    "Pacotes de growth marketing do Grupo Souza MKT. De R$2.500 a R$7.500/mês. Tráfego pago, tracking, landing pages, automação, CRM e mais.",
};

type Package = {
  name: string;
  price: string;
  description: string;
  highlighted: boolean;
  features: string[];
};

const PACKAGES: Package[] = [
  {
    name: "Ignição",
    price: "R$ 2.500",
    description: "Pra quem está começando e precisa de uma base sólida de aquisição.",
    highlighted: false,
    features: [
      "Tráfego pago em 1 plataforma",
      "1 landing page com CRO",
      "Tracking avançado completo",
      "Relatório mensal de performance",
    ],
  },
  {
    name: "Aceleração",
    price: "R$ 4.500",
    description: "Pra quem já tem tração e quer escalar com processo e dados.",
    highlighted: true,
    features: [
      "Tráfego pago em 2 plataformas",
      "2 landing pages com CRO",
      "Automação de marketing (3 fluxos)",
      "Estruturação de CRM",
      "Dashboard de performance",
      "Relatório quinzenal",
    ],
  },
  {
    name: "Máquina",
    price: "R$ 7.500",
    description: "Infraestrutura completa de aquisição. Tudo integrado e otimizado.",
    highlighted: false,
    features: [
      "Tráfego pago multiplataforma",
      "Landing pages ilimitadas",
      "Automação completa (fluxos ilimitados)",
      "CRM + integrações avançadas",
      "Email marketing (plataforma própria)",
      "AIEO/GEO (busca generativa)",
      "Dashboard em tempo real",
      "Reunião quinzenal de performance",
    ],
  },
];

type ComparisonFeature = {
  feature: string;
  ignicao: boolean | string;
  aceleracao: boolean | string;
  maquina: boolean | string;
};

const COMPARISON: ComparisonFeature[] = [
  { feature: "Plataformas de tráfego", ignicao: "1", aceleracao: "2", maquina: "Multi" },
  { feature: "Landing pages", ignicao: "1", aceleracao: "2", maquina: "Ilimitadas" },
  { feature: "Tracking avançado", ignicao: true, aceleracao: true, maquina: true },
  { feature: "Relatórios", ignicao: "Mensal", aceleracao: "Quinzenal", maquina: "Quinzenal" },
  { feature: "Automação de marketing", ignicao: false, aceleracao: "3 fluxos", maquina: "Ilimitados" },
  { feature: "Estruturação de CRM", ignicao: false, aceleracao: true, maquina: true },
  { feature: "Dashboard de performance", ignicao: false, aceleracao: true, maquina: "Tempo real" },
  { feature: "Email marketing", ignicao: false, aceleracao: false, maquina: true },
  { feature: "AIEO/GEO", ignicao: false, aceleracao: false, maquina: true },
  { feature: "Integrações avançadas", ignicao: false, aceleracao: false, maquina: true },
  { feature: "Reunião de performance", ignicao: false, aceleracao: false, maquina: "Quinzenal" },
];

const FAQ_ITEMS = [
  {
    question: "A verba de mídia está inclusa no valor do pacote?",
    answer:
      "Não. O valor do pacote é o fee de gestão e serviços. A verba de mídia (Google Ads, Meta Ads) é investida diretamente nas plataformas e fica 100% na sua conta. Você tem total controle e visibilidade.",
  },
  {
    question: "Qual o contrato mínimo?",
    answer:
      "O contrato mínimo é de 3 meses. Esse é o tempo necessário para implementar, otimizar e começar a ver resultados consistentes. Após esse período, o contrato é mensal.",
  },
  {
    question: "Posso trocar de pacote depois?",
    answer:
      "Sim. Você pode fazer upgrade ou downgrade a qualquer momento. A transição é feita de forma gradual para não afetar suas campanhas.",
  },
  {
    question: "Preciso de todos os serviços de um pacote?",
    answer:
      "Os pacotes são estruturados para funcionar como sistema integrado. Mas se você precisa de algo específico, podemos montar uma proposta personalizada no diagnóstico gratuito.",
  },
  {
    question: "Qual a verba mínima recomendada de mídia?",
    answer:
      "Depende do segmento e objetivos, mas geralmente recomendamos a partir de R$ 3.000/mês em mídia paga para ter volume suficiente de dados e otimização.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
  }
  if (value === false) {
    return <Minus className="w-4 h-4 text-neutral-600 mx-auto" />;
  }
  return <span className="text-sm text-neutral-300">{value}</span>;
}

export default function PacotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10 text-center">
          <div className="animate-fade-in-up delay-100 text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
            Pacotes
          </div>
          <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.92] mb-6 max-w-3xl mx-auto">
            Escolha o nível da sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              máquina de aquisição
            </span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Todos os pacotes incluem tracking completo e são baseados em dados
            reais. Sem contrato de fidelidade longo — só resultado.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {PACKAGES.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`[animation:animationIn_0.8s_ease-out_both] animate-on-scroll rounded-2xl border p-6 md:p-8 relative overflow-hidden transition-all duration-500 group ${
                pkg.highlighted
                  ? "border-emerald-500/30 bg-emerald-500/[0.04] shadow-[0_0_60px_-15px_rgba(16,185,129,0.15)] md:scale-105 md:-my-2 z-10"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.highlighted && (
                <>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.08] blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/[0.04] blur-[60px] rounded-full pointer-events-none" />
                </>
              )}

              <div className="relative">
                {pkg.highlighted && (
                  <div className="inline-block text-[10px] font-bold text-emerald-400 uppercase tracking-[2px] bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mb-4">
                    Mais popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-neutral-500 text-sm">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <CTAButton
                  variant={pkg.highlighted ? "primary-glow" : "ghost"}
                  size="md"
                  className="w-full"
                >
                  Começar agora
                  <ArrowRight className="w-4 h-4" />
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll mt-8 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] text-center">
          <p className="text-sm text-neutral-400">
            <span className="text-emerald-400 font-bold">Importante:</span>{" "}
            Verba de mídia separada — investida diretamente nas plataformas, na sua conta. Contrato mínimo de 3 meses.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Comparison Table */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16">
            <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
              Comparativo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px]">
              O que cada pacote inclui
            </h2>
          </div>

          <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-sm font-bold text-neutral-400 p-4 pr-4">
                    Funcionalidade
                  </th>
                  <th className="text-center text-sm font-bold text-neutral-400 p-4 px-4">
                    Ignição
                  </th>
                  <th className="text-center text-sm font-bold text-emerald-400 p-4 px-4 bg-emerald-500/[0.03]">
                    Aceleração
                  </th>
                  <th className="text-center text-sm font-bold text-neutral-400 p-4 pl-4">
                    Máquina
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="text-sm text-neutral-300 py-3.5 px-4">
                      {row.feature}
                    </td>
                    <td className="text-center py-3.5 px-4">
                      <CellValue value={row.ignicao} />
                    </td>
                    <td className="text-center py-3.5 px-4 bg-emerald-500/[0.02]">
                      <CellValue value={row.aceleracao} />
                    </td>
                    <td className="text-center py-3.5 px-4">
                      <CellValue value={row.maquina} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono">
              Dúvidas sobre preços
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px]">
            Perguntas frequentes
          </h2>
        </div>
        <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll max-w-3xl">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center relative z-10">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-1px] mb-4">
              Não sabe qual pacote escolher?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg max-w-lg mx-auto">
              Agende um diagnóstico gratuito. Em 30 minutos, identificamos o que
              faz sentido pro seu momento.
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
