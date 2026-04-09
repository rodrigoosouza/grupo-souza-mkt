import { Accordion } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Preciso ter site?",
    answer:
      "Não. Nós criamos landing pages otimizadas para conversão como parte do serviço. Se você já tem um site, integramos o tracking nele.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "O setup leva 2-4 semanas. Os primeiros leads começam a chegar assim que as campanhas são ativadas. Resultados consistentes e otimizados geralmente aparecem a partir do segundo mês.",
  },
  {
    question: "Voces fazem post pra redes sociais?",
    answer:
      "Não é nosso serviço principal. Nosso foco é infraestrutura de aquisição: tráfego pago, tracking, landing pages, automação e dados. Produção de conteúdo pode ser incluída sob demanda com terceiros que gerenciamos.",
  },
  {
    question: "Os dados são meus?",
    answer:
      "Sim. Todos os acessos, dados, contas de anúncio e ativos ficam com você. Sem lock-in. Se decidir sair, leva tudo.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer:
      "O contrato mínimo é de 3 meses — tempo necessário para montar a infraestrutura e ter dados suficientes pra otimizar. Após isso, o contrato é mensal.",
  },
  {
    question: "Como funciona a verba de mídia?",
    answer:
      "A verba de mídia é separada do fee da agência. Você paga diretamente nas plataformas (Google Ads, Meta Ads). Nós gerenciamos e otimizamos, mas o dinheiro é seu — sem markup.",
  },
];

export function FAQ() {
  return (
    <section
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-2.5 lg:mx-auto mb-24 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto font-sans">
          Dúvidas comuns sobre nossos serviços e como trabalhamos.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
