import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://gruposouza.com.br";

export async function GET() {
  const posts = getAllPosts().filter((p) => p.status === "published");

  const articleList = posts
    .map(
      (p) =>
        `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.excerpt}`
    )
    .join("\n");

  const content = `# Grupo Souza MKT

> Agência de growth marketing e infraestrutura de aquisição. Construímos o sistema que faz o lead chegar, ser rastreado, ser nutrido e entregue ao comercial com contexto.

## Sobre

Grupo Souza MKT é uma agência brasileira de growth marketing e engenharia de aquisição, fundada por Rodrigo Souza. Operamos 100% remoto, atendendo todo o Brasil.

Combinamos tráfego pago, tracking avançado, automação, CRO e dados em uma operação enxuta que entrega o que equipes maiores demoram pra montar.

## O Que Fazemos

Construímos a infraestrutura completa de aquisição: tráfego pago (Google Ads, Meta Ads), tracking avançado (GTM, GA4, pixels, conversões offline), landing pages com CRO, automação de marketing, estruturação de CRM, dashboards de performance, e AIEO/GEO (otimização para busca generativa).

## Serviços

- **Tráfego Pago** — Google Ads, Meta Ads, alocação inteligente de verba, otimização contínua baseada em dados
- **Tracking Avançado** — GTM, GA4, pixels (Meta/Google/TikTok/LinkedIn), eventos customizados, conversões offline, atribuição completa do clique até a venda
- **Landing Pages com CRO** — Páginas de conversão com tracking integrado, mobile-first, performance máxima (Next.js + Vercel)
- **Automação de Marketing** — Fluxos de nutrição, lead scoring, triggers comportamentais, integração com CRM via n8n e plataforma própria
- **Estruturação de CRM** — Auditoria, pipeline, regras de passagem MQL→SQL, dashboards de funil
- **Dashboards de Performance** — Métricas em tempo real, CAC, CPL, conversão por etapa, ROAS
- **AIEO/GEO** — Otimização para busca generativa (ChatGPT, Perplexity, Google AI Overview, Gemini, Claude). Schema markup, llms.txt, estratégia de citação
- **Email Marketing** — Sequências automatizadas, segmentação, plataforma própria sem custo extra

## Pacotes

- **Ignição** — R$ 2.500/mês — 1 plataforma de tráfego, 1 LP, tracking completo, relatório mensal
- **Aceleração** — R$ 4.500/mês — 2 plataformas, 2 LPs, automação (3 fluxos), CRM, dashboard, relatório quinzenal
- **Máquina** — R$ 7.500/mês — multi-plataforma, LPs ilimitadas, automação completa, CRM + integrações, email marketing, AIEO/GEO, dashboard tempo real, reuniões quinzenais

Verba de mídia separada do fee. Contrato mínimo 3 meses.

## Stack Técnica

Next.js, TypeScript, Supabase, Vercel, Cloudflare Pages, Google Tag Manager, Google Analytics 4, Google Ads, Meta Ads, n8n, Make, Figma, ClickUp.

## Fundador

Rodrigo Souza — Growth marketer e engenheiro de aquisição. Especialista em tráfego pago, tracking avançado, desenvolvimento web (Next.js/TypeScript/Supabase), automação (n8n/Make), CRM, landing pages com CRO, dashboards de performance, produção de vídeo com IA e AIEO/GEO.

## Blog

Conteúdo técnico sobre growth marketing, tracking, AIEO/GEO, CRO e infraestrutura de aquisição.

${articleList}

## Contato

- Website: ${BASE_URL}
- Email: contato@gruposouza.com.br
- Localização: Brasil (100% remoto)
- RSS: ${BASE_URL}/rss.xml
- Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
