# CLAUDE.md — Grupo Souza MKT

## Projeto

QG estrategico do Grupo Souza MKT — agencia de growth marketing e infraestrutura de aquisicao.
Este projeto centraliza: posicionamento, marca, processos, skills, playbooks e contexto estrategico de clientes.

## Fundador

Rodrigo Souza — growth marketer e engenheiro de aquisicao.
Domina: trafego pago (Meta/Google Ads), tracking avancado (GTM/GA4/pixels/conversoes offline),
desenvolvimento web (Next.js/TypeScript/Supabase/Vercel), automacao (n8n/Make),
CRM, landing pages com CRO, dashboards de performance, producao de video por IA,
e AIEO/GEO (otimizacao para busca generativa).

## Ecossistema de Ferramentas

| Ferramenta | Funcao | Projeto |
|-----------|--------|---------|
| Plataforma de Email | SaaS multi-tenant (leads, email, tracking, dashboards) | `plataforma-email` |
| Maquina de Producao | Pipeline de video/conteudo por IA | `maquina-producao` |
| ClickUp | Gestao de tarefas e processos | Workspace Grupo Souza |
| Make/n8n | Automacoes e integracoes | Self-hosted |
| Supabase | Backend, banco de dados, auth | `tnpzoklepkvktbqouctf.supabase.co` |
| Vercel | Deploy de sites e LPs | Projetos por cliente |
| Figma | Design e prototipacao | Projetos por cliente |
| Claude | Cerebro estrategico e criativo | Projeto por cliente |

## Como Operar

1. Ler este arquivo no inicio de cada sessao
2. Identificar o que o usuario quer fazer (estrategia, cliente, entrega, operacao)
3. Consultar o skill ou documento relevante antes de executar
4. Nunca criar conteudo sem antes ler o contexto do cliente em `clientes/{slug}/`
5. Toda entrega deve seguir o brand voice e posicionamento documentados

## Estrutura do Projeto

```
Grupo Souza/
├── CLAUDE.md                    # Instrucoes do projeto (este arquivo)
├── README.md                    # Mapa rapido — onde fazer o que
│
├── .claude/                     # Skills e config do Claude Code
│   └── skills/
│       ├── blog-grupo-souza/    # Skill pra gerar artigos do blog
│       ├── aieo-geo/            # Otimizacao pra busca generativa (IA)
│       ├── tracking-gtm/        # Tracking padronizado + GTM
│       ├── landing-pages/       # LPs com CRO + tracking integrado
│       ├── email-marketing/     # Sequencias, automacoes, templates
│       ├── sites-blog/          # Sites com blog markdown ou CMS
│       └── onboarding-cliente/  # Processo de entrada de novo cliente
│
├── qg/                          # QG estrategico do Grupo Souza
│   ├── assets/
│   │   ├── logos/               # Logos do Grupo Souza
│   │   └── brand/               # Assets visuais da marca
│   ├── clientes/
│   │   └── _template/           # Template de contexto pra novos clientes
│   └── docs/
│       ├── estrategia/          # Missao, visao, SWOT, ICP, posicionamento
│       ├── marca/               # Cores, tipografia, brand voice, guia visual
│       ├── servicos/            # Catalogo, pacotes, precificacao, SLA
│       ├── comercial/           # Funil de vendas, proposta, contrato
│       ├── operacao/            # Jornada do cliente, playbooks por servico
│       └── financeiro/          # Modelo de receita, projecao, capacidade
│
├── referencias/                 # Materiais de estudo (nao versionar mudancas)
│   ├── cms-blog/                # Doc do CMS de blog (referencia tecnica)
│   ├── aieo-geo-skill/          # Versao original da skill AIEO/GEO
│   ├── instagram-slides/        # Templates de slides
│   ├── sidebar/                 # Mockups de sidebar
│   └── *.aura.build/            # Outras referencias visuais
│
└── site-grupo-souza/            # SITE PRODUCAO (Next.js + CF Pages)
    ├── app/                     # Rotas Next 16 (App Router)
    ├── components/              # Componentes React
    ├── content/blog/            # Artigos do blog em markdown
    ├── lib/                     # Helpers (blog parser, toc, tracking)
    ├── public/blog/             # IMAGENS DE CAPA dos artigos (cover)
    └── scripts/new-post.mjs     # `pnpm new-post "Titulo"` cria artigo
```

## Convencoes

### Idioma
- **Documentacao:** Portugues
- **Codigo (quando aplicavel):** Ingles
- **UI de entregas:** Portugues

### Nomenclatura
- Slug de cliente: lowercase, hifens (`minha-empresa`)
- Documentos: lowercase, hifens (`missao-visao-valores.md`)
- Skills: lowercase, hifens (pasta com `SKILL.md` dentro)

### Regras
- Nunca criar conteudo para cliente sem ler o contexto dele antes
- Nunca expor credenciais, tokens ou dados sensiveis em documentos
- Toda LP criada deve incluir o sistema de tracking padronizado (27 campos ocultos)
- Todo conteudo web deve seguir as diretrizes AIEO/GEO quando aplicavel
- Dados financeiros de clientes sao confidenciais — nunca compartilhar entre clientes

## Servicos Core

- Trafego pago — Google Ads, Meta Ads, alocacao inteligente de verba
- Tracking avancado — GTM, GA4, pixels, eventos customizados, conversoes offline
- Landing pages e sites — paginas de conversao com CRO, nao apenas bonitas
- Automacao de marketing — fluxos de nutricao, lead scoring, triggers comportamentais
- Dados e dashboards — paineis de performance, metricas de funil
- Estruturacao de CRM — auditoria, pipeline, integracoes, regras de passagem
- AIEO/GEO — otimizacao de conteudo para busca generativa (ChatGPT, Perplexity, Google AI)

## O Que NAO E Core (Mas Podemos Gerir)

- Producao de conteudo para redes sociais
- Design e criativos de campanha
- Gestao de redes sociais

Esses servicos podem ser incluidos sob demanda, com terceiros gerenciados por nos.

## Posicionamento (Resumo)

Construimos a infraestrutura de aquisicao: o sistema que faz o lead chegar,
ser rastreado, ser nutrido e ser entregue pro time comercial com contexto.
Com inteligencia de dados e processos automatizados (incluindo IA),
entregamos com eficiencia o que equipes maiores demoram pra montar.

## Ticket Minimo

R$ 2.500/mes (fee) + verba de midia separada.

## Skills Disponiveis

| Skill | Quando usar |
|-------|------------|
| `tracking-gtm` | Implementar tracking em LP/site de cliente |
| `aieo-geo` | Otimizar conteudo para busca generativa |
| `landing-pages` | Criar LP com estrategia de conversao |
| `email-marketing` | Criar sequencias e automacoes de email |
| `onboarding-cliente` | Estruturar contexto de cliente novo |
| `sites-blog` | Criar site com blog (Markdown ou CMS Supabase) |

## Contexto de Clientes

Cada cliente tem uma pasta em `clientes/{slug}/` com:
- `contexto.md` — resumo do negocio, ICP, posicionamento, ofertas
- `branding.json` — cores, fontes, tom de voz, palavras proibidas
- `historico-decisoes.md` — registro de decisoes estrategicas tomadas

O Claude deve ler esses arquivos ANTES de criar qualquer entrega para o cliente.
