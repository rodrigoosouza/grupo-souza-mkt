import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  Building2,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface CaseMetric {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive?: boolean;
}

export interface CaseStudy {
  slug: string;
  segment: string;
  size: string;
  icon: LucideIcon;
  headline: string;
  challenge: string;
  diagnosis: string;
  application: string;
  result: string;
  period: string;
  metrics: CaseMetric[];
  services: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  // SEO
  seo_title: string;
  seo_description: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: "educacao-tecnica-cpl-47",
    segment: "Educação Técnica",
    size: "Médio porte",
    icon: GraduationCap,
    headline: "CPL caiu 47% em 75 dias com tracking completo e segmentação refinada",
    challenge:
      "Empresa de educação técnica investia R$ 28 mil/mês em Google Ads e Meta Ads há 14 meses. O CPL rodava em R$ 124, taxa MQL→SQL de 18% e ROI de campanha em 1.8x. O comercial reclamava de leads frios, o gestor de tráfego dizia estar no máximo, e a diretoria considerava cortar o digital.",
    diagnosis:
      "Auditoria revelou tracking básico instalado: Meta Pixel browser-only, GA4 sem eventos customizados, sem Conversions API e zero conversões offline. 100% das campanhas otimizando para 'Lead Form Submission' — incluindo trials que nunca apareciam no comercial. O algoritmo aprendia a buscar leads ruins porque ninguém dizia o que era um lead bom.",
    application:
      "Implementamos tracking completo em 3 semanas: data layer estruturado com 12 eventos do funil real, Conversions API rodando server-side, Enhanced Conversions ativado, integração via API com o Pipedrive enviando 4 status de conversão offline (lead_qualificado, agendou_call, proposta_enviada, fechado). Refinamos a segmentação de Meta Ads excluindo lookalike genérico e criando lookalike de 'clientes que fecharam acima de R$ 5k LTV'.",
    result:
      "Em 75 dias o CPL caiu 47%, taxa MQL→SQL pulou para 31%, e o ROI de campanha foi de 1.8x para 3.4x — tudo no mesmo orçamento de R$ 28 mil/mês. A diretoria aprovou aumento de verba para R$ 45 mil no trimestre seguinte. O custo total da implementação se pagou em 6 semanas.",
    period: "75 dias",
    metrics: [
      { label: "CPL", before: "R$ 124", after: "R$ 66", delta: "-47%" },
      { label: "MQL→SQL", before: "18%", after: "31%", delta: "+72%", positive: true },
      { label: "ROI campanha", before: "1.8x", after: "3.4x", delta: "+89%", positive: true },
      { label: "Fechamentos/mês", before: "Linha base", after: "+24%", delta: "+24%", positive: true },
    ],
    services: ["Tráfego Pago", "Tracking Avançado", "CRM"],
    testimonial: {
      quote:
        "A gente já tinha tentado de tudo pra reduzir o CPL: trocar criativo, aumentar verba, mudar público. Nada funcionava. O Grupo Souza chegou, auditou o tracking, mostrou que o problema não era a verba — era o que o algoritmo estava aprendendo. Em 75 dias o CPL caiu pela metade.",
      name: "Diretor de marketing",
      role: "Educação técnica · Médio porte",
    },
    seo_title: "Case: educação reduziu CPL em 47% com tracking completo",
    seo_description:
      "Como uma empresa de educação técnica reduziu CPL de R$ 124 para R$ 66 em 75 dias mantendo o mesmo orçamento de R$ 28k/mês. Tracking completo + Conversions API.",
  },
  {
    slug: "saas-b2b-mqls-291",
    segment: "SaaS B2B",
    size: "PME",
    icon: Briefcase,
    headline: "+291% de MQLs por mês em 60 dias após corrigir tracking quebrado",
    challenge:
      "SaaS B2B de gestão financeira para PMEs investia R$ 18 mil/mês há 9 meses sem saber qual canal funcionava. 12 MQLs por mês em média, ciclo comercial de 28 dias, ROI mensal de 1.4x. A equipe comercial reclamava de leads desqualificados, e a fundadora considerava pausar todo o digital.",
    diagnosis:
      "Tracking quase inexistente: pixel do Meta sem Conversions API, GA4 sem eventos customizados, gclid e fbclid não capturados nos formulários, e zero conversões offline alimentando o algoritmo. O time comercial recebia leads sem origem identificável.",
    application:
      "Implementamos tracking completo em 4 semanas. Configuramos GTM com data layer estruturado, Enhanced Conversions com email/telefone hashados, Conversions API server-side via Cloudflare Worker, integração com HubSpot enviando 5 status de conversão (trial_iniciado, trial_engajado, trial_qualificado, virou_cliente, churn_30d). Refinamos a segmentação para audiences customizadas baseadas em LTV real.",
    result:
      "Em 60 dias os MQLs saltaram de 12 para 47 por mês — aumento de 291%. CPL caiu 38% e a taxa de conversão trial→cliente subiu de 9.4% para 17.8%. Volume de leads caiu 8%, mas volume de clientes pagantes subiu 38%. Receita nova mensal de campanha pulou de R$ 25k para R$ 48k.",
    period: "60 dias",
    metrics: [
      { label: "MQLs/mês", before: "12", after: "47", delta: "+291%", positive: true },
      { label: "CPL", before: "Linha base", after: "-38%", delta: "-38%" },
      { label: "Trial→Cliente", before: "9.4%", after: "17.8%", delta: "+89%", positive: true },
      { label: "Receita nova/mês", before: "R$ 25k", after: "R$ 48k", delta: "+92%", positive: true },
    ],
    services: ["Tracking Avançado", "Tráfego Pago", "Automação"],
    testimonial: {
      quote:
        "Antes a gente discutia em reunião 'se o digital valia a pena'. Hoje a gente discute quanto investir a mais. O turning point foi quando o tracking começou a mostrar de onde realmente vinha cada cliente.",
      name: "Sócia-fundadora",
      role: "SaaS B2B · gestão financeira",
    },
    seo_title: "Case: SaaS B2B aumentou MQLs em 291% com tracking corrigido",
    seo_description:
      "Como uma SaaS B2B passou de 12 para 47 MQLs/mês em 60 dias com tracking completo, Conversions API e integração total com o CRM.",
  },
  {
    slug: "clinica-saude-conv-550",
    segment: "Saúde",
    size: "Clínica",
    icon: Stethoscope,
    headline: "Taxa de conversão saltou de 1.2% para 7.8% após nova LP e tracking integrado",
    challenge:
      "Clínica de saúde com site bonito mas zero conversão direta. Agendamentos vinham 90% por indicação. A clínica investia R$ 8k/mês em Meta Ads sem retorno mensurável. Taxa de conversão de visitante para agendamento ficava em 1.2%.",
    diagnosis:
      "Site institucional com 7 menus de navegação, formulário de 9 campos, sem tracking de conversão e sem follow-up automático. O lead que chegava muitas vezes esquecia o agendamento antes da clínica responder. Nenhum dado real chegava ao algoritmo do Meta para otimizar.",
    application:
      "Construímos uma landing page nova focada em conversão (1 oferta clara, prova social pesada, formulário de 3 campos), implementamos tracking completo (GTM + Conversions API + offline conversions integradas com o sistema de agendamento), e ativamos automação de follow-up via WhatsApp em 5 minutos após o lead chegar. O Meta Ads passou a otimizar para 'agendamento confirmado' em vez de 'lead capturado'.",
    result:
      "Em 45 dias a taxa de conversão da nova LP saltou de 1.2% para 7.8% — aumento de 550%. CPL caiu 62%, número de agendamentos confirmados/mês triplicou, e o ROI mensal saiu de 0.8x para 4.1x. A clínica abriu uma segunda unidade no semestre seguinte com base no fluxo previsível de novos pacientes.",
    period: "45 dias",
    metrics: [
      { label: "Conv. rate LP", before: "1.2%", after: "7.8%", delta: "+550%", positive: true },
      { label: "CPL", before: "Linha base", after: "-62%", delta: "-62%" },
      { label: "Agendamentos/mês", before: "Linha base", after: "+187%", delta: "+187%", positive: true },
      { label: "ROI mensal", before: "0.8x", after: "4.1x", delta: "+412%", positive: true },
    ],
    services: ["Landing Pages", "Tracking Avançado", "Automação"],
    testimonial: {
      quote:
        "A gente nem acreditava que dava pra escalar agendamento sem depender de indicação. Hoje 60% dos novos pacientes vem do digital, e o ciclo é previsível. Abrimos a segunda unidade graças a esse fluxo.",
      name: "Sócia",
      role: "Clínica de saúde · multidisciplinar",
    },
    seo_title: "Case: clínica multiplicou conversão por 6 com nova LP e tracking",
    seo_description:
      "Como uma clínica de saúde aumentou taxa de conversão de 1.2% para 7.8% em 45 dias com landing page nova, tracking completo e automação de follow-up.",
  },
];

export function getAllCases(): CaseStudy[] {
  return CASES;
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return CASES.map((c) => c.slug);
}
