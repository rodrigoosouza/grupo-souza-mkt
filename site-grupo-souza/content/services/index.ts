import {
  Megaphone,
  ScanSearch,
  LayoutTemplate,
  Workflow,
  Database,
  BarChart3,
  BrainCircuit,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  pains: string[];
  deliverables: string[];
  differentials: string[];
  process: { step: string; description: string }[];
  faq: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: ServiceData[] = [
  {
    slug: "trafego-pago",
    title: "Tráfego Pago",
    headline: "Cada centavo investido, rastreado e otimizado",
    description:
      "Google Ads, Meta Ads (Facebook/Instagram), alocação inteligente de verba. Estrutura de campanhas, segmentação, criativos e otimização contínua com base em dados reais.",
    icon: Megaphone,
    pains: [
      "Investe em anúncio mas não sabe o que volta",
      "CPL alto e sem previsibilidade de leads",
      "Agência anterior só fazia impulsionar post",
    ],
    deliverables: [
      "Estrutura completa de campanhas (busca, display, remarketing)",
      "Segmentação por público, interesse e comportamento",
      "Criativos com testes A/B",
      "Otimização semanal de lance, segmentação e criativos",
      "Relatórios com CAC, CPL, ROAS e taxa de conversão",
      "Alocação inteligente de verba entre canais",
    ],
    differentials: [
      "Tracking avançado em cada lead — sabemos exatamente de onde veio cada conversão",
      "Otimização por dados reais do funil, não apenas métricas de plataforma",
      "Integração com CRM pra otimizar por lead qualificado, não só por clique",
    ],
    process: [
      { step: "Auditoria", description: "Analisamos suas campanhas atuais e identificamos desperdício" },
      { step: "Estrutura", description: "Montamos campanhas com segmentação e tracking completo" },
      { step: "Ativação", description: "Ligamos as campanhas com monitoramento diário" },
      { step: "Otimização", description: "Ajustamos semanalmente com base em dados reais" },
    ],
    faq: [
      { question: "Qual a verba mínima de mídia?", answer: "Recomendamos a partir de R$2.000/mês em mídia para ter volume suficiente de dados pra otimizar. A verba é paga diretamente nas plataformas pelo cliente." },
      { question: "Vocês criam os criativos?", answer: "Sim, criamos os textos e direcionamos o visual. Para produção de vídeo e design complexo, trabalhamos com parceiros especializados." },
      { question: "Em quanto tempo vejo resultado?", answer: "Os primeiros leads chegam na primeira semana. Otimização consistente geralmente a partir do segundo mês, quando temos dados suficientes." },
    ],
    seoTitle: "Gestão de Tráfego Pago — Google Ads e Meta Ads",
    seoDescription: "Gestão profissional de Google Ads e Meta Ads com tracking avançado. Cada centavo investido, rastreado e otimizado.",
  },
  {
    slug: "tracking",
    title: "Tracking Avançado",
    headline: "Cada lead rastreado de ponta a ponta",
    description:
      "GTM, GA4, pixels (Meta/Google/TikTok/LinkedIn), eventos customizados, conversões offline. Sistema proprietário de tracking avançado em cada lead.",
    icon: ScanSearch,
    pains: [
      "Não sabe de onde vêm os leads que viram venda",
      "Google Analytics mostra dados mas não conecta com o CRM",
      "Paga por leads duplicados ou sem qualidade",
    ],
    deliverables: [
      "Google Tag Manager configurado e organizado",
      "GA4 com eventos e conversões customizados",
      "Pixels de Meta, Google e outros configurados",
      "Sistema de tracking avançado nos formulários",
      "Conversões offline integradas (CRM → Google/Meta)",
      "Dashboard de atribuição por canal",
    ],
    differentials: [
      "Sistema proprietário de tracking avançado que captura UTM, click ID, sessão, dispositivo e mais",
      "Conectamos o dado do clique até a venda no CRM — atribuição real, não estimativa",
      "Configuramos conversões offline pra otimizar campanhas por lead qualificado",
    ],
    process: [
      { step: "Auditoria", description: "Mapeamos todos os pontos de conversão e tracking existente" },
      { step: "Implementação", description: "Instalamos GTM, pixels, eventos e campos ocultos" },
      { step: "Validação", description: "Testamos cada evento e campo com dados reais" },
      { step: "Monitoramento", description: "Verificamos semanalmente se tudo continua disparando" },
    ],
    faq: [
      { question: "Como funciona o tracking avançado?", answer: "Capturamos automaticamente UTM, click ID (gclid, fbclid), página de origem, dispositivo, resolução, timezone e outros dados de sessão que permitem atribuição completa do clique até a venda." },
      { question: "Funciona em qualquer site?", answer: "Sim. Implementamos via GTM, que funciona em qualquer plataforma — WordPress, Next.js, Webflow, HTML estático, etc." },
      { question: "Preciso trocar de CRM?", answer: "Não. Integramos com qualquer CRM via webhook, API ou Zapier/Make/n8n." },
    ],
    seoTitle: "Tracking Avançado — GTM, GA4 e Atribuição Completa",
    seoDescription: "Tracking avançado por lead com atribuição completa. GTM, GA4, pixels e conversões offline configurados e validados.",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    headline: "Páginas que convertem, não que só ficam bonitas",
    description:
      "Páginas de conversão com estratégia de CRO. Formulários inteligentes com tracking integrado. Não são páginas bonitas — são páginas que convertem.",
    icon: LayoutTemplate,
    pains: [
      "Taxa de conversão abaixo de 2%",
      "Página bonita mas sem estratégia de conversão",
      "Formulário que não rastreia origem do lead",
    ],
    deliverables: [
      "Landing page com estrutura CRO (hero, dor, solução, prova, form)",
      "Formulário com tracking avançado integrado",
      "Design responsivo (mobile-first)",
      "LCP abaixo de 2.5 segundos",
      "SEO básico configurado",
      "Testes A/B de headline e CTA",
    ],
    differentials: [
      "Cada LP segue estrutura de CRO validada — não é design por design",
      "Tracking proprietário integrado — cada lead já chega com atribuição completa",
      "Stack moderna (Next.js + Vercel) pra performance máxima",
    ],
    process: [
      { step: "Briefing", description: "Definimos objetivo, público, oferta e tom de voz" },
      { step: "Wireframe", description: "Estrutura de seções com foco em conversão" },
      { step: "Desenvolvimento", description: "Implementamos com design system e tracking" },
      { step: "Otimização", description: "Testamos A/B e iteramos com dados reais" },
    ],
    faq: [
      { question: "Qual a taxa de conversão esperada?", answer: "LPs de tráfego frio (anúncio): 3-8%. LPs de remarketing: 8-15%. Depende do setor, oferta e qualidade do tráfego." },
      { question: "Posso editar depois?", answer: "Sim. Entregamos o código e acesso ao deploy. Ou fazemos ajustes como parte da operação mensal." },
      { question: "Fazem em WordPress?", answer: "Preferimos Next.js por performance e SEO, mas podemos fazer em WordPress se o cliente já usa a plataforma." },
    ],
    seoTitle: "Landing Pages com CRO — Páginas que Convertem",
    seoDescription: "Landing pages com estratégia de CRO e tracking integrado. Taxa de conversão de 3-15%. Mobile-first, rápidas e otimizadas.",
  },
  {
    slug: "automacao",
    title: "Automação de Marketing",
    headline: "Leads nutridos automaticamente, 24 horas por dia",
    description:
      "Fluxos de nutrição, lead scoring, triggers comportamentais, sequências de email. Integração com CRM e ferramentas do cliente.",
    icon: Workflow,
    pains: [
      "Leads entram e ninguém faz follow-up",
      "Equipe comercial perde tempo com leads frios",
      "Não tem nutrição — lead esfria e some",
    ],
    deliverables: [
      "Fluxos de nutrição por email (boas-vindas, educação, oferta)",
      "Lead scoring baseado em comportamento",
      "Triggers automáticos (abriu email, visitou página, preencheu form)",
      "Integração com CRM (passagem automática MQL → SQL)",
      "Notificações pro time comercial quando lead está quente",
      "Relatórios de performance dos fluxos",
    ],
    differentials: [
      "Usamos n8n e plataforma própria — sem custo de RD Station ou HubSpot pro cliente",
      "Fluxos baseados em dados reais de comportamento, não em achismo",
      "Integração nativa com nosso tracking avançado",
    ],
    process: [
      { step: "Mapeamento", description: "Definimos os fluxos com base no funil do cliente" },
      { step: "Configuração", description: "Montamos os fluxos, triggers e templates" },
      { step: "Teste", description: "Validamos cada fluxo com dados reais" },
      { step: "Monitoramento", description: "Acompanhamos taxas de abertura, clique e conversão" },
    ],
    faq: [
      { question: "Preciso ter email marketing?", answer: "Nós fornecemos a plataforma de email como parte do serviço. Sem custo adicional de ferramenta." },
      { question: "Funciona com meu CRM?", answer: "Sim. Integramos via API, webhook ou Make/n8n com qualquer CRM (Pipedrive, HubSpot, Bitrix, etc)." },
      { question: "Quantos fluxos estão inclusos?", answer: "Depende do pacote. Ignição não inclui automação. Aceleração inclui até 3 fluxos. Máquina inclui fluxos ilimitados." },
    ],
    seoTitle: "Automação de Marketing — Fluxos, Lead Scoring e Nutrição",
    seoDescription: "Automação de marketing com fluxos de nutrição, lead scoring e triggers comportamentais. Integrado com CRM e tracking completo.",
  },
  {
    slug: "crm",
    title: "Estruturação de CRM",
    headline: "Funil organizado, leads no lugar certo",
    description:
      "Auditoria do CRM atual, definição de pipeline, regras de passagem MQL→SQL, integração com formulários e automações. Dashboards de funil.",
    icon: Database,
    pains: [
      "CRM virou depósito de contatos sem organização",
      "Não sabe quando um lead é qualificado",
      "Time comercial reclama da qualidade dos leads",
    ],
    deliverables: [
      "Auditoria do CRM atual (ou setup do zero)",
      "Pipeline de vendas com etapas claras",
      "Regras de passagem MQL → SQL definidas",
      "Integração com formulários e automações",
      "Campos customizados pra segmentação",
      "Dashboard de funil com taxas de conversão por etapa",
    ],
    differentials: [
      "Conectamos o CRM com o tracking — o comercial vê de onde veio cada lead",
      "Regras de passagem baseadas em lead scoring real, não em feeling",
      "Dashboard que mostra gargalos do funil em tempo real",
    ],
    process: [
      { step: "Auditoria", description: "Analisamos o CRM atual e identificamos problemas" },
      { step: "Redesenho", description: "Definimos pipeline, etapas e regras de passagem" },
      { step: "Implementação", description: "Configuramos campos, automações e integrações" },
      { step: "Treinamento", description: "Treinamos o time comercial no novo processo" },
    ],
    faq: [
      { question: "Qual CRM vocês recomendam?", answer: "Depende do porte. Pipedrive pra operações menores, HubSpot pra operações maiores. Também trabalhamos com Bitrix, Ploomes e outros." },
      { question: "Migram dados do CRM antigo?", answer: "Sim, fazemos a migração de dados com limpeza e padronização incluída." },
      { question: "Treinam o time?", answer: "Sim. Incluímos treinamento prático pro time comercial usar o CRM corretamente." },
    ],
    seoTitle: "Estruturação de CRM — Pipeline, Funil e Integrações",
    seoDescription: "Estruturação de CRM com pipeline de vendas, regras de passagem MQL/SQL, integrações e dashboards de funil.",
  },
  {
    slug: "dados-dashboards",
    title: "Dados e Dashboards",
    headline: "Todos os números do seu marketing num só lugar",
    description:
      "Painéis de performance em tempo real. Métricas de funil (CAC, CPL, taxa de conversão por etapa, ROAS). Relatórios automatizados.",
    icon: BarChart3,
    pains: [
      "Não sabe o CAC nem o CPL real",
      "Pede relatório pra agência e demora dias",
      "Dados espalhados em 5 ferramentas diferentes",
    ],
    deliverables: [
      "Dashboard de performance em tempo real",
      "Métricas de funil completas (CAC, CPL, ROAS, conversão por etapa)",
      "Comparativo entre canais (Google vs Meta vs orgânico)",
      "Relatórios automatizados (semanal/quinzenal/mensal)",
      "Alertas de anomalias (CPL subiu, conversão caiu)",
      "Acesso compartilhado com o cliente",
    ],
    differentials: [
      "Dashboard conectado com tracking real — métricas do funil inteiro, não só da plataforma de anúncio",
      "Dados atualizados em tempo real, não em PDF mensal",
      "Acesso aberto — sem maquiar resultado",
    ],
    process: [
      { step: "Levantamento", description: "Identificamos quais métricas importam pro seu negócio" },
      { step: "Integração", description: "Conectamos todas as fontes de dados (ads, CRM, site)" },
      { step: "Montagem", description: "Criamos o dashboard com as métricas definidas" },
      { step: "Acompanhamento", description: "Revisamos juntos e ajustamos conforme necessidade" },
    ],
    faq: [
      { question: "Qual ferramenta usam pro dashboard?", answer: "Depende do cenário. Usamos Looker Studio, dashboards customizados ou painéis dentro da nossa plataforma." },
      { question: "Consigo acessar quando quiser?", answer: "Sim. Dashboard com acesso 24/7, compartilhado com quem você quiser da sua equipe." },
      { question: "Inclui relatório de reunião?", answer: "Sim. Nos pacotes Aceleração e Máquina, fazemos reuniões periódicas com análise dos dados." },
    ],
    seoTitle: "Dashboards de Marketing — CAC, CPL, ROAS em Tempo Real",
    seoDescription: "Dashboards de performance em tempo real. CAC, CPL, ROAS e métricas de funil conectados com dados reais de tracking.",
  },
  {
    slug: "aieo-geo",
    title: "AIEO/GEO",
    headline: "Sua marca aparecendo nas respostas da IA",
    description:
      "Otimização de conteúdo para busca generativa (ChatGPT, Perplexity, Google AI Overview). Schema markup, llms.txt, estratégia de citação e autoridade.",
    icon: BrainCircuit,
    pains: [
      "Concorrente aparece no ChatGPT e você não",
      "Tráfego orgânico caindo por causa do AI Overview",
      "Não sabe como se posicionar pra busca generativa",
    ],
    deliverables: [
      "Auditoria de presença em buscas generativas",
      "Estratégia de conteúdo otimizado pra IA (AIEO/GEO)",
      "Schema markup avançado (Organization, Service, FAQ, HowTo)",
      "Arquivo llms.txt configurado",
      "Conteúdo com estrutura de citação e autoridade",
      "Monitoramento de menções em ChatGPT, Perplexity e AI Overview",
    ],
    differentials: [
      "Framework proprietário de 6 fases para AIEO/GEO",
      "Um dos poucos serviços no Brasil focado em otimização pra IA",
      "Combinamos SEO clássico com otimização generativa — cobertura total",
    ],
    process: [
      { step: "Auditoria", description: "Verificamos como sua marca aparece (ou não) em buscas generativas" },
      { step: "Estratégia", description: "Definimos conteúdo, schema e estrutura de autoridade" },
      { step: "Implementação", description: "Criamos e otimizamos conteúdo, schema e llms.txt" },
      { step: "Monitoramento", description: "Acompanhamos presença nas respostas de IA" },
    ],
    faq: [
      { question: "O que é AIEO/GEO?", answer: "AIEO (AI Engine Optimization) e GEO (Generative Engine Optimization) são estratégias pra fazer sua marca aparecer nas respostas de ferramentas de IA como ChatGPT, Perplexity e Google AI Overview." },
      { question: "Substitui o SEO tradicional?", answer: "Não, complementa. O SEO clássico continua importante. AIEO/GEO adiciona uma camada de otimização pra busca generativa." },
      { question: "Em quanto tempo apareço nas respostas?", answer: "Depende do setor e autoridade atual. Resultados iniciais em 2-3 meses, consolidação em 6 meses." },
    ],
    seoTitle: "AIEO/GEO — Otimização para Busca Generativa e IA",
    seoDescription: "Otimização para busca generativa (AIEO/GEO). Apareça nas respostas do ChatGPT, Perplexity e Google AI Overview.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    headline: "Emails que vendem, com dados de quem abriu e clicou",
    description:
      "Sequências automatizadas, campanhas segmentadas, templates responsivos. Plataforma própria que substitui RD Station.",
    icon: Mail,
    pains: [
      "Manda email mas não sabe se alguém abre",
      "Lista de contatos parada sem nutrição",
      "Paga caro em ferramenta de email e usa 10% dos recursos",
    ],
    deliverables: [
      "Plataforma de email própria configurada",
      "Templates responsivos alinhados com a marca",
      "Sequências automatizadas (boas-vindas, nutrição, reengajamento)",
      "Segmentação por comportamento e interesse",
      "Tracking de abertura, clique e conversão",
      "Relatórios de performance por campanha",
    ],
    differentials: [
      "Plataforma própria — sem custo adicional de RD Station, Mailchimp ou ActiveCampaign",
      "Integrada com nosso tracking avançado — sabemos a origem de cada contato",
      "Segmentação real por comportamento, não só por lista",
    ],
    process: [
      { step: "Setup", description: "Configuramos a plataforma, domínio de envio e autenticação" },
      { step: "Templates", description: "Criamos templates alinhados com a identidade visual" },
      { step: "Sequências", description: "Montamos os fluxos automatizados" },
      { step: "Campanhas", description: "Operamos envios segmentados com análise de performance" },
    ],
    faq: [
      { question: "Qual plataforma usam?", answer: "Usamos nossa plataforma própria de email marketing. Sem custo adicional de ferramenta pro cliente." },
      { question: "Migram minha lista atual?", answer: "Sim. Importamos contatos de qualquer plataforma com limpeza e segmentação incluída." },
      { question: "Tem limite de envios?", answer: "Definimos o volume ideal com base no tamanho da lista e frequência adequada. Sem surpresas." },
    ],
    seoTitle: "Email Marketing — Plataforma Própria e Automação",
    seoDescription: "Email marketing com plataforma própria. Sequências automatizadas, segmentação por comportamento e tracking integrado.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
