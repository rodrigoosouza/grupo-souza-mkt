# Skill: Sites & Blog — Grupo Souza MKT

> Aprovado em: 01/04/2026
> Referência: site-orbit (Orbit Gestão)

---

## Dois Modelos de Blog

### Modelo A — Markdown (Grupo Souza e clientes técnicos)

Artigos como arquivos `.md` no repositório. Build estático gera as páginas. Zero banco de dados.

```
site/
  content/
    blog/
      tracking-mais-importante-que-trafego.md
      infraestrutura-aquisicao-o-que-e.md
  src/
    app/
      blog/
        page.tsx          ← listagem (lê arquivos .md no build)
        [slug]/page.tsx   ← artigo individual
```

Cada artigo tem frontmatter:
```yaml
---
title: "Por que tracking é mais importante que tráfego"
slug: "tracking-mais-importante-que-trafego"
category: "tracking"
author: "Rodrigo Souza"
date: "2026-04-01"
image: "/blog/covers/tracking.jpg"
excerpt: "Sem tracking, mídia paga é dinheiro no escuro."
seo_title: "Tracking vs Tráfego — O que importa mais?"
seo_keyword: "tracking marketing digital"
lead_magnet: "guia-tracking"
cta_banner_enabled: false
status: "published"
---
```

**Vantagens:** sem custo, sem banco, versionado no Git, SEO perfeito (estático), deploy automático no push.

### Modelo B — CMS com Supabase (para clientes)

Painel admin completo baseado no site-orbit. Dados no Supabase. Ideal pra cliente que não mexe em código.

### Quando usar cada modelo

| Cenário | Modelo |
|---------|--------|
| Site do Grupo Souza | Markdown (A) |
| Cliente técnico que sabe usar Git | Markdown (A) |
| Cliente que precisa de painel admin | CMS Supabase (B) |
| Cliente que já usa a plataforma de email | CMS Supabase (B) — aproveita o Supabase existente |

---

## Componentes Padrão do Blog

Independente do modelo (A ou B), todo blog deve seguir estes padrões de componentes.

### 1. Página de Listagem

**Hero:**
- Badge com ícone + texto
- Título com `<span>` destacado
- Descrição curta
- Background com efeitos glow (radial gradients)

**Barra de filtros por categoria:**
- Gerada dinamicamente a partir dos artigos publicados
- Scroll horizontal com setas (esquerda/direita)
- Botão "Todos" + botão por categoria
- Estado ativo com destaque visual
- `updateArrows()` mostra/esconde setas conforme posição do scroll

**Grid de cards:**
- Responsivo: 3 colunas → 2 → 1
- Skeleton loading enquanto carrega (3 cards placeholder)
- Estado vazio com mensagem quando sem artigos na categoria
- Animação de entrada escalonada (80ms delay entre cards)

**Card do artigo:**
- Imagem de capa com `loading="lazy"`
- Badge de categoria (cor individual por categoria — bg/text/border)
- Título (H3)
- Excerpt (max 140 chars, HTML stripped)
- Footer: avatar do autor (iniciais calculadas ou foto) + nome + data formatada (pt-BR) + tempo de leitura (ícone relógio)
- Click navega para `/blog?artigo={slug}`

**Categorias com cores individuais:**
```
estratégica    → dourado   (rgba 255,186,26)
processos      → azul      (rgba 59,130,246)
indicadores    → verde     (rgba 34,197,94)
liderança      → roxo      (rgba 168,85,247)
ia             → rosa      (rgba 236,72,153)
marketing      → laranja   (rgba 249,115,22)
growth         → ciano     (rgba 6,182,212)
outros         → cinza     (rgba 107,114,128)
```
Cada cliente define suas categorias e cores no `contexto.md` ou `branding.json`.

**CTA section após o grid:**
- Card com ícone, título, descrição, botão
- Efeito de partículas decorativas
- Animação reveal on scroll (IntersectionObserver, threshold 0.12)

### 2. Leitor de Artigo (layout 2 colunas)

**Layout:**
```
grid-template-columns: 1fr 300px
gap: 48px
max-width: 1140px
margin: 0 auto
```

**Responsivo:**
- > 1024px: duas colunas (artigo + sidebar 300px)
- ≤ 1024px: coluna única, sidebar vira seção abaixo do artigo
- ≤ 768px: full single column

#### Coluna principal (artigo)

1. **Botão "Voltar ao Blog"** — link com seta para `/blog`
2. **Imagem de capa** — full-width, border-radius 16px
3. **Badge de categoria** — com cor individual
4. **Título H1**
5. **Meta info:** avatar do autor (iniciais ou foto) + nome + data (pt-BR) + tempo de leitura (palavras ÷ 200, mínimo 1 min)
6. **Conteúdo rich HTML** — div com classe `.blog-article-content`
7. **CTA banner mid-article** — injetado no final do conteúdo (quando habilitado)
8. **Seção de comentários** — lista de aprovados + formulário de envio
9. **Botão "Voltar ao Blog"** no final

#### Sidebar sticky (lateral direita)

A sidebar fica fixa ao scrollar (sticky via JS, não CSS):
- `position: fixed` quando sidebar top < gap (100px) e bottom > altura da sidebar + gap
- `position: absolute; bottom: 0` quando chega ao final do aside
- Normal quando volta ao topo
- Só ativa em desktop (>1024px)

**Componentes da sidebar (de cima para baixo):**

1. **Card "Escrito por"**
   - Label "Escrito por"
   - Avatar (48px, foto ou iniciais) + nome + cargo/equipe

2. **Lead Magnet card** (container `#leadMagnetSidebar`)
   - Background gradient (135deg, #0D1117 → #1a1f2e)
   - Ícone por tipo (ebook=book, checklist=list-check, planilha=table, webinar=video, trial=rocket)
   - Título (cor branca)
   - Descrição (cor branca 70% opacidade)
   - Botão CTA full-width com ícone de download
   - Carregado via `lead_magnet_id` do artigo

3. **CTA fixo da empresa**
   - Ícone decorativo
   - Título + descrição + botão CTA full-width
   - Sempre presente (conteúdo varia por cliente)

4. **Card "Compartilhar"**
   - Label "Compartilhar"
   - Botões: Instagram (link externo) + Copiar link (clipboard API, feedback visual com check icon por 1.5s)

### 3. Lead Magnets (Iscas Digitais)

**Tipos disponíveis:**
| Tipo | Ícone | Label |
|------|-------|-------|
| ebook | fa-book | Ebook gratuito |
| checklist | fa-list-check | Checklist gratuito |
| planilha | fa-table | Planilha gratuita |
| webinar | fa-video | Webinar gratuito |
| trial | fa-rocket | Teste gratuito |

**Campos de cada lead magnet:**
- Tipo (select)
- Título
- Descrição curta
- Texto do botão CTA
- URL do material (após conversão)
- Evento de tracking (identificador para GTM/dataLayer)
- Imagem (upload drag & drop, max 2MB)

**No blog:** aparece na sidebar do artigo vinculado. Resolve via `lead_magnet_id`.

**No CMS (Modelo B):** CRUD completo via modal com upload de imagem.

### 4. CTA Banner Mid-Article

Habilitado por artigo. Campos no CMS/frontmatter:
- `cta_banner_enabled` — boolean
- `cta_banner_title` — título do banner
- `cta_banner_desc` — descrição
- `cta_banner_cta_text` — texto do botão
- `cta_banner_cta_url` — link do botão
- `cta_banner_image` — imagem de fundo (opcional)

**Dois modos de renderização:**
- **Com imagem:** banner visual full-width clicável (link wrapping img, border-radius 16px)
- **Sem imagem:** card com fundo escuro (#0D1117), border-radius 16px, padding 36px 32px, título + descrição + botão

Injetado no final do conteúdo do artigo via JS (`contentEl.appendChild`).

### 5. Banners do Site

**5 posições disponíveis:**
| Posição | Descrição |
|---------|-----------|
| `above-header` | Barra fixa no topo (acima do header) |
| `below-header` | Abaixo do header |
| `floating-bottom` | Barra fixa no rodapé |
| `popup-center` | Popup no centro da tela |
| `popup-side` | Popup na lateral (canto inferior direito) |

**2 modos de exibição:**
- `bar` — texto + botão (barra colorida)
- `image` — banner visual (imagem)

**Campos completos:**
- Modo de exibição (bar/image)
- Posição no site (5 opções)
- Título
- Descrição (opcional)
- Texto do botão CTA
- Link do botão CTA
- Cor de fundo (color picker + hex)
- Cor do texto (color picker + hex)
- Dismissível (checkbox — visitante pode fechar)
- Data início (datetime-local, opcional — vazio = ativo imediatamente)
- Data fim (datetime-local, opcional — vazio = sem expiração)
- Prioridade (number 0-100, maior = aparece primeiro)
- Imagem (para modo image)

**Comportamento:**
- Dismiss salvo em `sessionStorage` (volta ao reabrir browser)
- Filtro por data (só exibe se dentro do período ativo)
- Ordenado por prioridade
- Frontend busca banners ativos do Supabase (anon key + RLS)

### 6. Comentários

**Formulário (no artigo):**
- Nome completo (required)
- E-mail (required, validação regex)
- Telefone (opcional, máscara BR)
- Texto do comentário (required, textarea)

**Fluxo:**
1. Usuário submete → salvo com `status: pending`
2. No CMS: admin vê lista de pendentes, aprova ou rejeita
3. No blog: só exibe comentários com `status: approved`
4. Após envio: form esconde, mensagem de sucesso aparece

**Exibição:**
- Avatar com iniciais (calculado do nome)
- Nome + data formatada (pt-BR)
- Texto do comentário
- Ordenado por data (desc)

### 7. SEO Completo por Artigo

**Meta tags dinâmicas (injetadas via JS):**
- `<title>` — seo_title || title + " | Blog {empresa}"
- `<meta name="description">` — excerpt || content[:160]
- `<meta name="author">` — nome do autor
- `<meta name="robots">` — index, follow, max-image-preview:large, max-snippet:-1
- `<meta name="keywords">` — seo_keyword + keywords do site
- `<link rel="canonical">` — seo_canonical || URL do artigo

**Open Graph:**
- `og:type` — article
- `og:url`, `og:title`, `og:description`, `og:image` (1200x630)
- `og:site_name`, `og:locale` (pt_BR)
- `article:published_time`, `article:author`, `article:section`, `article:tag`

**Twitter Card:**
- `twitter:card` — summary_large_image
- `twitter:title`, `twitter:description`, `twitter:image`

**Schema.org/JSON-LD:**

BlogPosting:
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "description": "...",
  "image": "...",
  "author": { "@type": "Person", "name": "..." },
  "publisher": { "@type": "Organization", "name": "...", "logo": { "@type": "ImageObject", "url": "..." } },
  "datePublished": "...",
  "dateModified": "...",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." },
  "wordCount": 0,
  "articleSection": "...",
  "inLanguage": "pt-BR",
  "timeRequired": "PT5M",
  "keywords": "..."
}
```

BreadcrumbList:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "https://..." },
    { "position": 2, "name": "Blog", "item": "https://.../blog" },
    { "position": 3, "name": "Título do Artigo", "item": "https://.../blog?artigo=slug" }
  ]
}
```

**SEO no CMS (campos do editor):**
- SEO Title (limite 60 chars)
- Canonical URL
- Focus keyword
- OG Image
- SEO score com checklist visual

### 8. Histórias de Clientes (Customer Stories)

Módulo separado no CMS para cases de sucesso:
- Editor dedicado (similar ao de artigos)
- Status: rascunho / pendente / publicado
- Listagem com tabela e ações (editar/deletar)
- Página pública separada do blog (`/historias`)
- Botão "Nova História" no painel

---

## Tabelas Supabase (Modelo B)

| Tabela | Campos principais |
|--------|------------------|
| `blog_articles` | id, title, slug, content (HTML), category, author, author_avatar, excerpt, cover_url, published (bool), published_at, seo_title, seo_keyword, seo_canonical, seo_og_image, lead_magnet_id, cta_banner_enabled, cta_banner_title, cta_banner_desc, cta_banner_cta_text, cta_banner_cta_url, cta_banner_image, created_at, updated_at, org_id |
| `lead_magnets` | id, type, title, description, cta_text, cta_url, event, image, active (bool), created_at, org_id |
| `blog_comments` | id, article_id, name, email, phone, comment, status (pending/approved/rejected), created_at, org_id |
| `customer_stories` | id, title, content, status (draft/pending/published), created_at, updated_at, org_id |
| `site_banners` | id, display_mode (bar/image), position, title, description, cta_text, cta_url, bg_color, text_color, dismissible (bool), start_date, end_date, priority (int), active (bool), image_url, created_at, org_id |
| `cms_admins` | id, name, email, password_hash, role (admin/editor), created_at, org_id |
| `leads` | id, name, email, phone, company, job_title, source, lead_magnet_id, conversion_event, created_at, org_id |

**RLS:** todas as tabelas filtram por `org_id` do usuário logado.

---

## Módulos do CMS (Painel Admin)

| Módulo | Funcionalidades |
|--------|----------------|
| **Dashboard** | Stats (total artigos, publicados, rascunhos, usuários, histórias pendentes), tabela de artigos recentes com ações rápidas |
| **Artigos** | Tabela com título/categoria/status/data/ações, duplicar artigo, filtro por role (admin vê todos, editor só os seus) |
| **Editor** | Rich text (contentEditable + toolbar: bold, italic, underline, headings H2/H3, link, imagem, listas, quote, code, alinhamento, HR, undo/redo), imagem de capa (upload drag&drop ou URL, preview), slug automático do título, SEO score com checklist, lead magnet selector (dropdown da biblioteca), CTA banner toggle com campos |
| **Iscas Digitais** | Tabela com tipo/título/descrição/CTA/ações, CRUD via modal, upload de imagem drag&drop, 5 tipos |
| **Histórias** | CRUD com editor dedicado, status com moderação, link para ver no site |
| **Comentários** | Lista com moderação (aprovar/rejeitar/deletar), exibe artigo vinculado |
| **Banners** | Tabela com ativo/modo/posição/título/período/ações, CRUD via modal, 5 posições, 2 modos, cores customizáveis, agendamento por data, prioridade |
| **Usuários** | Tabela com nome/email/role/ações, CRUD via modal, roles admin/editor, não pode deletar a si mesmo |
| **Notificações** | Bell icon fixo no topo, badge com contador, dropdown com lista de pendências |

**Arquitetura do CMS:**
- Single-page application
- Views alternadas via `showView(name)` — mostra/esconde divs
- Sidebar com navegação + info do usuário logado + botão logout
- Autenticação: email + SHA-256(password + salt) via Web Crypto API
- Sessão em `sessionStorage`
- Roles: admin (acesso total) / editor (só artigos próprios, sem gestão de usuários)

---

## Regras de Implementação (padrão para todos os sites)

1. Todo blog deve ter tracking integrado (27 campos ocultos nos formulários de captura)
2. Todo artigo deve ter Schema.org/JSON-LD (BlogPosting + BreadcrumbList)
3. Todo formulário de captura deve disparar evento no `dataLayer` para GTM
4. Imagens de capa: WebP preferido, max 2MB no upload
5. Slugs: lowercase, sem acento, hifens, max 80 chars (gerado do título)
6. Sidebar sticky só em desktop (>1024px), via JS (não CSS `position: sticky`)
7. Categorias com cores individuais (definidas por cliente no branding)
8. Comentários sempre com moderação (nunca publicação direta)
9. Banners com dismiss via `sessionStorage`
10. SEO: title ≤60 chars, description ≤160 chars, OG image 1200x630
11. Tempo de leitura calculado: palavras ÷ 200, mínimo 1 minuto
12. Avatar do autor: foto se disponível, senão iniciais (primeiro + último nome)
13. Scroll reveal apenas em CTAs, nunca no grid do blog (evita opacity:0 em conteúdo async)
14. Filtros de categoria gerados dinamicamente dos artigos publicados (não hardcoded)
