# Arquitetura do Site — Grupo Souza MKT

> Estrutura completa do site institucional com foco em CRO.
> Versao: 1.0 | Data: 01/04/2026

---

## 1. Decisoes Estrategicas

### Objetivo do site
Converter visitantes em leads qualificados (reuniao de diagnostico agendada).
Nao e um site de portfolio. E uma **maquina de conversao** para a propria agencia.

### Conversao primaria (macro)
**Agendar diagnostico gratuito** — formulario curto (nome, email, telefone, faturamento mensal, site atual).

### Conversoes secundarias (micro)
- Assinar blog/newsletter (captura de email)
- Baixar material rico (checklist, guia)
- WhatsApp direto

### Stack
| Tecnologia | Motivo |
|-----------|--------|
| Next.js 15 (App Router) | SSR/SSG, performance, SEO nativo |
| TypeScript | Seguranca de tipos |
| Tailwind CSS | Design system ja documentado |
| Supabase | CMS do blog (posts, categorias, autores) |
| Vercel | Deploy, analytics, speed insights |
| Lucide React | Icones |
| next-mdx-remote ou Supabase | Conteudo do blog |

### Principios CRO aplicados
1. **Uma acao por pagina** — cada pagina tem um CTA principal claro
2. **Prova social antes do CTA** — numeros, logos, depoimentos
3. **Objecoes respondidas inline** — FAQ e microcopy em cada secao
4. **Velocidade** — LCP < 2.5s, sem bloat
5. **Tracking embutido** — sistema de 27 campos ocultos desde o dia 1
6. **Above the fold** — proposta de valor + CTA visiveis sem scroll
7. **Mobile-first** — 70%+ do trafego pago vem de mobile

---

## 2. Mapa do Site

```
/                           → Home (LP principal)
/servicos/                  → Visao geral dos servicos
/servicos/trafego-pago      → Pagina do servico
/servicos/tracking          → Pagina do servico
/servicos/landing-pages     → Pagina do servico
/servicos/automacao         → Pagina do servico
/servicos/crm               → Pagina do servico
/servicos/dados-dashboards  → Pagina do servico
/servicos/aieo-geo          → Pagina do servico
/servicos/email-marketing   → Pagina do servico
/pacotes/                   → Pricing (Ignicao, Aceleracao, Maquina)
/sobre/                     → Sobre a agencia + Rodrigo
/blog/                      → Listagem de posts
/blog/[slug]                → Post individual
/blog/categoria/[slug]      → Posts por categoria
/contato/                   → Formulario + WhatsApp + mapa
/diagnostico/               → Formulario de agendamento (conversao principal)
/legal/privacidade           → Politica de privacidade
/legal/termos                → Termos de uso
```

### Paginas por prioridade de construcao

| Fase | Paginas | Motivo |
|------|---------|--------|
| 1 - MVP | Home, Diagnostico, Contato | Converter desde o dia 1 |
| 2 - Servicos | /servicos/ + 8 paginas de servico | SEO + profundidade |
| 3 - Conteudo | Blog + CMS | AIEO/GEO + trafego organico |
| 4 - Complementar | Sobre, Pacotes, Legal | Credibilidade e compliance |

---

## 3. Estrutura da Home (LP Principal)

A home e a pagina mais importante. Estrutura otimizada para CRO:

### Secao 1 — Hero
- **Overline pill:** "Growth Marketing & Infraestrutura de Aquisicao"
- **Headline H1:** "Sua empresa cresce. Nos montamos a maquina."
- **Subheadline:** 1-2 frases sobre o que fazemos (dados, tracking, previsibilidade)
- **CTA primario:** "Agendar diagnostico gratuito" (botao glow emerald)
- **CTA secundario:** "Ver como funciona" (scroll para proxima secao)
- **Prova social micro:** "+X empresas atendidas" ou "R$X em midia gerenciada"
- **Visual:** Dashboard/metricas mockup (nao foto generica)

### Secao 2 — Problema / Dor
- **Titulo:** "Voce investe em marketing. Mas sabe o que volta?"
- **3-4 cards** com dores do ICP:
  - "Gasto com anuncio mas nao sei o retorno"
  - "Meus leads somem no meio do caminho"
  - "Nao tenho controle do funil"
  - "Meu site nao converte"
- **Transicao:** "Se voce se identificou com alguma dessas, nos resolvemos isso."

### Secao 3 — Solucao / O que fazemos
- **Titulo:** "Infraestrutura de aquisicao de ponta a ponta"
- **Subtitulo:** "Do clique ao contrato, com dados em cada etapa"
- **6-8 cards de servico** (icone + titulo + 1 frase + link para pagina)
  - Trafego Pago, Tracking, Landing Pages, Automacao, CRM, Dashboards, AIEO/GEO, Email
- **Visual:** Diagrama simplificado do funil (clique → LP → lead → automacao → venda)

### Secao 4 — Diferencial / Por que nos
- **Titulo:** "Nao somos mais uma agencia. Somos engenheiros de aquisicao."
- **3 diferenciais** com numero + explicacao:
  - "27 pontos de atribuicao por lead" — rastreamento completo
  - "Ferramentas proprias" — plataforma de email, tracking proprietario
  - "IA + automacao" — entregamos com equipe enxuta o que times de 15 pessoas montam
- **Visual:** Comparativo sutil (agencia tradicional vs. Grupo Souza)

### Secao 5 — Prova Social / Resultados
- **Titulo:** "Resultados reais. Dados reais."
- **Metricas grandes** (gradiente emerald): +340% ROI, -52% CPL, 4.2x ROAS, etc.
- **Depoimentos** (quando tiver) — card com foto, nome, cargo, quote
- **Logos de clientes** (quando tiver) — marquee com grayscale/opacity

### Secao 6 — Como Funciona (Processo)
- **Titulo:** "Seu marketing funcionando em 4 semanas"
- **4 etapas** com timeline visual:
  1. Diagnostico (30min) — entendemos seu negocio
  2. Setup (2 semanas) — montamos a infraestrutura
  3. Ativacao — ligamos o trafego com tracking completo
  4. Otimizacao — melhoramos com dados reais
- **CTA:** "Comecar pelo diagnostico"

### Secao 7 — Pacotes (Resumo)
- **Titulo:** "Quanto custa montar sua maquina de aquisicao?"
- **3 cards de pacote** (Ignicao R$2.500, Aceleracao R$4.500, Maquina R$7.500)
- **Destaque:** Aceleracao como "mais popular"
- **Nota:** "+ verba de midia separada"
- **CTA:** "Agendar diagnostico para escolher o pacote certo"
- **Link:** "Ver detalhes dos pacotes →"

### Secao 8 — FAQ
- **5-7 perguntas** frequentes em accordion:
  - Qual o investimento minimo?
  - Preciso ter site?
  - Em quanto tempo vejo resultado?
  - Voces fazem post pra redes sociais?
  - Os dados sao meus?
  - Tem contrato de fidelidade?
  - Como funciona a verba de midia?

### Secao 9 — CTA Final
- **Titulo:** "Pronto pra parar de desperdicar verba?"
- **Subtitulo:** "Agende um diagnostico gratuito de 30 minutos. Sem compromisso."
- **Formulario inline** (nome, email, telefone, faturamento) OU botao para /diagnostico
- **Micro prova social:** "Resposta em ate 4h em horario comercial"

### Footer
- Logo + tagline
- Links: Servicos, Pacotes, Blog, Sobre, Contato
- WhatsApp + Email
- Legal: Privacidade, Termos
- "Feito com dados, nao com achismo."

---

## 4. Estrutura das Paginas de Servico

Cada pagina de servico segue a mesma estrutura (template):

```
/servicos/[slug]
```

### Template de Servico

1. **Hero do servico**
   - Overline: categoria (ex: "Trafego Pago")
   - Titulo: beneficio principal (ex: "Cada centavo investido, rastreado")
   - Subtitulo: o que fazemos nesse servico
   - CTA: "Agendar diagnostico"

2. **O problema** (sem esse servico)
   - 2-3 bullets de dor especifica

3. **O que entregamos**
   - Lista detalhada de entregas
   - Icones + descricoes

4. **Como funciona** (processo do servico)
   - 3-4 etapas

5. **Diferenciais do servico**
   - O que fazemos diferente das outras agencias

6. **Resultados** (metricas ou case)
   - Numeros especificos quando possivel

7. **FAQ do servico**
   - 3-5 perguntas especificas

8. **CTA final**
   - Mesmo padrao da home

### Servicos e seus slugs

| Servico | Slug | Keyword SEO |
|---------|------|-------------|
| Trafego Pago | `/servicos/trafego-pago` | gestao trafego pago, google ads, meta ads |
| Tracking Avancado | `/servicos/tracking` | tracking avancado, gtm, ga4, conversoes |
| Landing Pages | `/servicos/landing-pages` | landing page conversao, pagina vendas |
| Automacao de Marketing | `/servicos/automacao` | automacao marketing, lead nurturing |
| Estruturacao de CRM | `/servicos/crm` | crm vendas, pipeline comercial |
| Dados e Dashboards | `/servicos/dados-dashboards` | dashboard marketing, metricas funil |
| AIEO/GEO | `/servicos/aieo-geo` | otimizacao busca ia, aieo, geo |
| Email Marketing | `/servicos/email-marketing` | email marketing, sequencia email |

---

## 5. Blog / CMS

### Objetivo do blog
1. Atrair trafego organico (SEO classico)
2. Otimizar para busca generativa (AIEO/GEO) — pratica o que prega
3. Nutrir leads com conteudo
4. Estabelecer autoridade

### Arquitetura do CMS (Supabase)

```sql
-- Tabela: posts
id              uuid PK
title           text NOT NULL
slug            text UNIQUE NOT NULL
excerpt         text
content         text (markdown)
cover_image     text (URL)
category_id     uuid FK → categories
author_id       uuid FK → authors
status          text ('draft', 'published', 'archived')
published_at    timestamptz
meta_title      text (SEO)
meta_description text (SEO)
reading_time    int
tags            text[] (array de tags)
created_at      timestamptz
updated_at      timestamptz

-- Tabela: categories
id              uuid PK
name            text NOT NULL
slug            text UNIQUE NOT NULL
description     text
color           text (hex para badge)

-- Tabela: authors
id              uuid PK
name            text NOT NULL
slug            text UNIQUE
avatar          text (URL)
role            text
bio             text
```

### Categorias iniciais

| Categoria | Slug | Cor |
|-----------|------|-----|
| Trafego Pago | `trafego-pago` | emerald |
| Tracking & Dados | `tracking-dados` | blue |
| CRO & Conversao | `cro-conversao` | amber |
| Automacao | `automacao` | purple |
| AIEO/GEO | `aieo-geo` | cyan |
| Growth | `growth` | emerald |

### Pagina de listagem (/blog)

- Header: titulo + descricao + busca
- Post destaque (featured) no topo
- Grid de posts (card com imagem, categoria badge, titulo, excerpt, data, reading time)
- Filtro por categoria
- Paginacao (12 posts por pagina)
- Sidebar ou bottom: CTA para diagnostico + newsletter

### Pagina de post (/blog/[slug])

- Breadcrumb: Home > Blog > Categoria > Post
- Header: categoria badge, titulo, data, reading time, autor
- Cover image (se tiver)
- Conteudo markdown renderizado (MDX com componentes customizados)
- Table of contents (lateral em desktop, accordion em mobile)
- Componentes inline: callout boxes, code blocks, metricas highlight
- Final do post: bio do autor, posts relacionados
- CTA sticky ou inline: "Quer esses resultados? Agende um diagnostico."
- Share buttons: LinkedIn, Twitter, WhatsApp, copiar link

### SEO e AIEO/GEO no blog
- meta_title e meta_description customizaveis
- Schema markup: Article, BreadcrumbList, Organization, FAQ
- llms.txt na raiz do site
- Sitemap automatico
- Open Graph + Twitter Cards
- Canonical URLs

---

## 6. Pagina de Diagnostico (/diagnostico)

Pagina de conversao principal. Sem distracao.

### Estrutura
- Navbar simplificada (logo + voltar)
- **Headline:** "Diagnostico gratuito de 30 minutos"
- **Subtitulo:** "Vamos analisar juntos onde seu marketing esta travando — e o que fazer."
- **Formulario** (multi-step ou simples):
  - Nome
  - Email
  - Telefone (WhatsApp)
  - Site da empresa
  - Faturamento mensal (faixa: <100k, 100k-300k, 300k-1M, 1M-5M, 5M+)
  - Principal dor (select: gerar leads, reduzir custo, organizar funil, montar do zero, outro)
  - Mensagem (opcional)
- **Lateral:** 3 beneficios do diagnostico
  - "Analise personalizada do seu funil"
  - "Recomendacao de pacote ideal"
  - "Sem compromisso"
- **Prova social:** "Ja diagnosticamos X empresas"
- **SLA:** "Resposta em ate 4h em horario comercial"

### Pos-conversao
- Redirect para /diagnostico/obrigado
- Mensagem de confirmacao + proximo passo
- Pixel de conversao dispara aqui
- Email automatico de confirmacao

---

## 7. Pagina de Pacotes (/pacotes)

### Estrutura
- Hero: "Quanto custa montar sua maquina de aquisicao?"
- Toggle: Mensal / Trimestral (se tiver desconto)
- 3 cards com pricing-transition (efeito do Fluxo)
  - Ignicao (R$2.500) — Para quem precisa comecar
  - **Aceleracao (R$4.500)** — Mais popular (destaque)
  - Maquina (R$7.500) — Infraestrutura completa
- Tabela de comparacao detalhada (features por pacote)
- FAQ de pricing
- CTA: "Nao sabe qual escolher? Agende um diagnostico."

---

## 8. Tracking e Analytics

### Implementacao desde o dia 1
- Google Tag Manager (container dedicado)
- GA4 (eventos customizados por CTA)
- Meta Pixel (se rodar trafego Meta)
- Google Ads Tag (se rodar trafego Google)
- Sistema de 27 campos ocultos no formulario de diagnostico

### Eventos a rastrear
| Evento | Trigger |
|--------|---------|
| page_view | Todas as paginas |
| cta_click | Click em qualquer CTA |
| form_start | Primeiro campo preenchido |
| form_submit | Envio do formulario |
| scroll_depth | 25%, 50%, 75%, 100% |
| blog_read | Scroll 75% do post |
| whatsapp_click | Click no WhatsApp |
| pricing_view | Scroll ate secao de pacotes |
| service_page_view | Visita a pagina de servico |

---

## 9. Performance e SEO Tecnico

### Metas
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- Lighthouse Score > 90

### Checklist tecnico
- [ ] SSG para paginas estaticas (home, servicos, pacotes, sobre)
- [ ] ISR para blog (revalidate a cada 60s)
- [ ] next/image para todas as imagens
- [ ] next/font para Inter e JetBrains Mono
- [ ] Sitemap dinamico (/sitemap.xml)
- [ ] robots.txt
- [ ] llms.txt (AIEO/GEO)
- [ ] Schema markup (Organization, Service, Article, FAQ, BreadcrumbList)
- [ ] Open Graph + Twitter Cards
- [ ] Canonical URLs
- [ ] 404 customizado com CTA
- [ ] Redirect 301 se mudar URLs

---

## 10. Estrutura de Pastas (Next.js)

```
site-grupo-souza/
├── app/
│   ├── layout.tsx              # Layout global (navbar, footer, fonts)
│   ├── page.tsx                # Home
│   ├── servicos/
│   │   ├── page.tsx            # Listagem de servicos
│   │   └── [slug]/
│   │       └── page.tsx        # Pagina individual do servico
│   ├── pacotes/
│   │   └── page.tsx            # Pricing
│   ├── blog/
│   │   ├── page.tsx            # Listagem de posts
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Post individual
│   │   └── categoria/
│   │       └── [slug]/
│   │           └── page.tsx    # Posts por categoria
│   ├── sobre/
│   │   └── page.tsx            # Sobre
│   ├── contato/
│   │   └── page.tsx            # Contato
│   ├── diagnostico/
│   │   ├── page.tsx            # Formulario
│   │   └── obrigado/
│   │       └── page.tsx        # Thank you page
│   ├── legal/
│   │   ├── privacidade/
│   │   │   └── page.tsx
│   │   └── termos/
│   │       └── page.tsx
│   ├── sitemap.ts              # Sitemap dinamico
│   ├── robots.ts               # robots.txt
│   └── not-found.tsx           # 404 customizado
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── accordion.tsx
│   │   ├── toggle.tsx
│   │   └── separator.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── pain-points.tsx
│   │   ├── services-grid.tsx
│   │   ├── differentials.tsx
│   │   ├── social-proof.tsx
│   │   ├── process.tsx
│   │   ├── pricing-cards.tsx
│   │   ├── faq.tsx
│   │   ├── cta-final.tsx
│   │   └── marquee.tsx
│   ├── blog/
│   │   ├── post-card.tsx
│   │   ├── post-content.tsx
│   │   ├── category-badge.tsx
│   │   ├── table-of-contents.tsx
│   │   └── related-posts.tsx
│   └── forms/
│       ├── diagnostic-form.tsx
│       ├── newsletter-form.tsx
│       └── hidden-fields.tsx   # 27 campos ocultos
├── lib/
│   ├── supabase.ts             # Cliente Supabase
│   ├── blog.ts                 # Queries do blog
│   ├── services.ts             # Dados dos servicos
│   └── tracking.ts             # Helpers de tracking
├── content/
│   └── services/               # Conteudo dos servicos (JSON ou MDX)
│       ├── trafego-pago.ts
│       ├── tracking.ts
│       ├── landing-pages.ts
│       ├── automacao.ts
│       ├── crm.ts
│       ├── dados-dashboards.ts
│       ├── aieo-geo.ts
│       └── email-marketing.ts
├── public/
│   ├── llms.txt                # AIEO/GEO
│   ├── og-image.png            # Open Graph default
│   └── images/
├── styles/
│   └── globals.css             # Tailwind + custom CSS (animacoes, efeitos)
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 11. Ordem de Execucao

### Fase 1 — MVP (converter desde o dia 1)
1. Setup do projeto Next.js + Tailwind + Supabase
2. Layout global (navbar, footer, fonts, meta tags)
3. globals.css (design system: animacoes, efeitos, classes custom)
4. Componentes UI base (button, card, badge, input, accordion, separator)
5. Home completa (todas as 9 secoes)
6. Pagina /diagnostico (formulario + tracking)
7. Pagina /diagnostico/obrigado (thank you + pixel)
8. Pagina /contato
9. GTM + GA4 + eventos basicos
10. Deploy na Vercel

### Fase 2 — Servicos
11. Template de pagina de servico
12. 8 paginas de servico (conteudo)
13. Pagina /servicos (listagem)
14. Schema markup (Service, FAQ)

### Fase 3 — Conteudo
15. CMS no Supabase (tabelas: posts, categories, authors)
16. Pagina /blog (listagem com paginacao)
17. Pagina /blog/[slug] (post individual)
18. Pagina /blog/categoria/[slug]
19. Sitemap dinamico
20. llms.txt
21. RSS feed (opcional)

### Fase 4 — Complementar
22. Pagina /pacotes (pricing detalhado)
23. Pagina /sobre
24. Paginas legais (privacidade, termos)
25. 404 customizado
26. Open Graph images dinamicas

---

## 12. Metricas de Sucesso

| Metrica | Meta |
|---------|------|
| Taxa de conversao da home | > 3% (visita → formulario) |
| Taxa de conversao /diagnostico | > 15% (visita → envio) |
| Bounce rate home | < 45% |
| LCP | < 2.5s |
| Lighthouse | > 90 |
| Posts publicados/mes | 4-8 |
| Trafego organico (6 meses) | 500+ visitas/mes |

---

*Versao: 1.0 — Aprovacao pendente*
