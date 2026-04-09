# Grupo Souza MKT

Agencia de growth marketing e infraestrutura de aquisicao. Este repo e o **QG estrategico** + o **site institucional**.

---

## 🗺️ Mapa rapido — onde fazer o que

| Quero... | Vai em |
|---|---|
| **Escrever artigo do blog** | `site-grupo-souza/content/blog/{slug}.md` (use `pnpm new-post`) |
| **Adicionar imagem de capa de artigo** | `site-grupo-souza/public/blog/{slug}-cover.jpg` (16:9, ≤200KB) |
| **Editar pagina do site** | `site-grupo-souza/app/{rota}/page.tsx` |
| **Editar componente de secao** | `site-grupo-souza/components/sections/` |
| **Atualizar servico/pacote** | `site-grupo-souza/content/services/index.ts` |
| **Adicionar contexto de cliente novo** | `qg/clientes/{slug-cliente}/` (copie `_template`) |
| **Editar posicionamento, ICP, SWOT** | `qg/docs/estrategia/` |
| **Editar brand voice, cores, tipografia** | `qg/docs/marca/` |
| **Catalogo de servicos / precificacao** | `qg/docs/servicos/` |
| **Funil de vendas, proposta, contrato** | `qg/docs/comercial/` |
| **Logos e assets visuais** | `qg/assets/` |
| **Criar skill nova pro Claude** | `.claude/skills/{nome}/SKILL.md` |
| **Estudar referencias de arquitetura** | `referencias/` |

---

## 📁 Estrutura

```
Grupo Souza/
├── CLAUDE.md                # Instrucoes do projeto pro Claude
├── README.md                # Este arquivo
│
├── .claude/skills/          # Skills automatizadas (blog, AIEO, tracking, etc)
│
├── qg/                      # QG estrategico
│   ├── assets/              # Logos, brand
│   ├── clientes/            # Contexto por cliente
│   └── docs/                # Estrategia, marca, servicos, comercial, etc
│
├── referencias/             # Materiais de estudo (CMS, slides, mockups)
│
└── site-grupo-souza/        # SITE PRODUCAO (Next.js + Cloudflare Pages)
    ├── app/                 # Rotas
    ├── components/          # Componentes React
    ├── content/blog/        # Artigos em markdown
    ├── public/blog/         # IMAGENS DE CAPA dos artigos
    └── scripts/new-post.mjs # CLI: pnpm new-post "Titulo"
```

---

## ✍️ Workflow de blog

### 1. Criar artigo novo
```bash
cd site-grupo-souza
pnpm new-post "Como otimizar campanhas de Google Ads em 2026"
# ou com categoria
pnpm new-post "..." --category=trafego-pago
```
Cria `content/blog/{slug}.md` com frontmatter completo + estrutura de exemplo.

### 2. Pedir pro Claude escrever
> "Escreve um artigo sobre [tema X]"

A skill `blog-grupo-souza` ativa automaticamente: produz 3.500-4.500 palavras com TL;DR, definicao, contexto, beneficios, caso pratico, erros comuns, FAQ, comparativo, conclusao e CTA. Frontmatter completo, links internos/externos, lead magnet custom.

### 3. Adicionar imagem de capa (automatico)
```bash
pnpm add-cover {slug-do-artigo} ~/Downloads/imagem.jpg
```
O script aceita qualquer formato (PNG, HEIC, JPG, WebP), redimensiona pra 1600px, converte pra JPG, comprime, renomeia certo e atualiza o frontmatter automaticamente.

**Sem capa custom:** o site usa automaticamente a OG image dinamica gerada (1200×630 com titulo + categoria + autor).

### 4. Publicar
- Mude `status: draft` pra `status: published` no frontmatter
- `git add . && git commit -m "post: titulo" && git push`
- Cloudflare Pages rebuilda automaticamente

---

## 🔌 Ecossistema externo

| Ferramenta | Funcao |
|---|---|
| **Cloudflare Pages** | Hosting do site (static export) |
| **Supabase** | Backend de leads, forms, dashboards |
| **GTM + GA4** | Tracking avancado das proprias campanhas |
| **Make / n8n** | Automacoes (CRM, leads, emails) |
| **ClickUp** | Gestao de tarefas |
| **Figma** | Design |
| **Claude** | Skills de produto, conteudo, estrategia |

---

## 🏢 Posicionamento

Construimos a infraestrutura de aquisicao: o sistema que faz o lead chegar, ser rastreado, ser nutrido e entregue ao comercial com contexto. Com inteligencia de dados e processos automatizados (incluindo IA), entregamos com eficiencia o que equipes maiores demoram pra montar.

**Ticket minimo:** R$ 2.500/mes (fee) + verba de midia separada.
