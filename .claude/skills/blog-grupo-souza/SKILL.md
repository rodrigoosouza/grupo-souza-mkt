# Skill: Blog Grupo Souza — Artigos otimizados pra SEO + AIEO

> Quando usar: sempre que o Rodrigo pedir pra criar, escrever, revisar ou otimizar um artigo do blog do Grupo Souza MKT (`site-grupo-souza/content/blog/`).

---

## Missão

Produzir artigos **longos e densos (mínimo 3.000 palavras, ideal 3.500-4.500)** que rankeiem no **Google** e sejam **citados como fonte por IAs** (ChatGPT, Perplexity, Google AI Overview, Gemini, Claude).

**REGRA DURA**: artigos abaixo de 3.000 palavras de conteúdo real não saem. Posts curtos não rankeiam mais em 2026 — Google e IAs valorizam profundidade abrangente do tópico.

O blog é a principal arma de aquisição orgânica do Grupo Souza. Cada artigo é uma peça de marketing técnico que demonstra autoridade em growth, tracking, mídia paga, AIEO/GEO e infraestrutura de aquisição.

---

## Antes de escrever — pesquisa obrigatória

**Nunca comece a escrever sem antes ler:**

1. **Posts existentes em `site-grupo-souza/content/blog/*.md`** — entenda o tom de voz, profundidade técnica, formato. O artigo novo precisa parecer escrito pela mesma pessoa.
2. **`CLAUDE.md` raiz e `site-grupo-souza/CLAUDE.md`** — posicionamento, brand voice, regras do projeto.
3. **Skill `aieo-geo`** — framework de 6 fases + 9 métodos de Princeton (KDD 2024). **Toda escrita de artigo aplica os métodos da Fase 5 dessa skill.** Os 9 métodos (Cite Sources +40%, Quotation Addition +30%, Statistics Addition +30%, Fluency, Authoritative Tone, Easy-to-Understand, Technical Terms, Unique Words, Keyword Optimization) são obrigatórios. Consulte também `aieo-geo/references/geo-methods-detail.md` e `aieo-geo/references/schema-templates.md` antes de escrever.
4. **Tópico em si** — se o usuário não passou a pauta completa, faça perguntas:
   - Qual é a **query principal** que esse artigo precisa responder?
   - Qual é a **persona**? (CMO, fundador, gestor de tráfego?)
   - Qual o **objetivo de funil**? (topo: educa | meio: convence | fundo: converte)
   - **Categoria**: `trafego-pago`, `tracking-dados`, `cro-conversao`, `automacao`, `aieo-geo`, `growth`?
   - **Posts relacionados** que devem ser linkados?
   - **CTA específico**? (default: `/diagnostico`)

Se o usuário não souber, **proponha** com base no posicionamento do Grupo Souza e siga.

---

## Frontmatter obrigatório (formato CMS-portátil)

Todo arquivo `.md` na pasta `content/blog/` precisa começar com este frontmatter completo. Os campos são intencionalmente compatíveis com Sanity, Payload, Strapi e Decap pra **migração futura sem perda**.

```yaml
---
# === Identificação ===
title: "Título completo (50-65 chars)"
slug: "url-friendly-slug-curto"
date: "2026-04-09"
updated: "2026-04-09"
status: "draft"  # draft | published

# === Conteúdo / Card ===
excerpt: "Resumo de 1-2 frases para cards e meta description (150-160 chars exatos)"
category: "tracking-dados"  # ver lib/blog.ts CATEGORY_LABELS
tags: ["gtm", "ga4", "atribuicao", "tracking-avancado"]
author: "Rodrigo Souza"

# === Imagem destaque ===
cover: "/blog/slug-cover.jpg"
cover_alt: "Descrição factual da imagem para acessibilidade e SEO"

# === SEO ===
seo_title: "Título otimizado pro Google (55-60 chars, keyword primária no início)"
seo_description: "Meta description com keyword + benefício + CTA implícito (150-160 chars)"
seo_keyword: "keyword primária exata"
seo_keywords: ["secundária 1", "secundária 2", "long-tail 1", "long-tail 2"]
canonical: ""  # vazio = self-canonical (default)
og_image: ""   # vazio = usa cover

# === AIEO / GEO ===
schema_type: "Article"  # Article | HowTo | FAQPage | Guide
faq:
  - question: "Pergunta direta que o usuário faria numa IA?"
    answer: "Resposta de 2-3 frases, completa, sem rodeios."
  - question: "Outra pergunta?"
    answer: "Outra resposta direta."

# === Lead Magnet (opcional, sticky sidebar) ===
lead_magnet:
  title: "Titulo curto da isca (40-60 chars)"
  description: "Pitch de 1-2 frases vendendo o valor (100-140 chars)"
  cta_text: "Quero baixar"
  cta_url: "/diagnostico"  # ou URL externa
  badge: "Gratis"           # opcional, badge no topo
  image: "/blog/lead-magnets/slug.jpg"  # opcional, capa da isca

# === Estrutura ===
toc: true
related_posts: ["slug-1", "slug-2", "slug-3"]
language: "pt-BR"
---
```

**Sobre o `lead_magnet`:** se preenchido, vira uma sidebar fixa (sticky) no lado direito da tela do artigo (desktop only) que acompanha o leitor enquanto rola. Se omitido, o sistema usa o `DEFAULT_LEAD_MAGNET` (diagnostico gratuito). Cada artigo deve ter sua propria isca quando possivel — quanto mais alinhada ao tema do post, maior a conversao.

**Regras dos campos críticos:**

- **`slug`**: kebab-case, curto (3-6 palavras), com keyword primária. Imutável depois de publicado (URL = SEO).
- **`title`**: máx 65 chars (ou Google trunca). Use number/lista quando aplicável: "5 razões...", "Como reduzir...".
- **`seo_title`**: pode divergir do title. Otimizado pra CTR no SERP, primary keyword no início.
- **`excerpt`**: 150-160 chars **exatos**. Vai virar `<meta name="description">`.
- **`seo_keyword`**: UMA palavra-chave primária. As secundárias entram em `seo_keywords[]`.
- **`tags`**: 4-8 tags em kebab-case. Usadas pra related posts e tagging.
- **`faq`**: mínimo 3, máximo 6 perguntas. Vira schema FAQPage no JSON-LD.
- **`updated`**: atualiza toda vez que o artigo é editado em conteúdo. Google ranqueia melhor conteúdo "fresh".

---

## Estrutura obrigatória do artigo (mínimo 3.000, ideal 3.500-4.500 palavras)

A ordem e os blocos abaixo são **fixos**. Todos são obrigatórios. Cada artigo segue o mesmo template — isso ajuda Google a entender padrão e IAs a extrair seções específicas.

| # | Seção | Palavras alvo |
|---|---|---|
| 1 | TL;DR / Resposta direta | 80-120 |
| 2 | Introdução (dor + custo + promessa) | 220-300 |
| 3 | Definição "O que é X" | 280-360 |
| 4 | Por que importa em 2026 (contexto + dados) | 380-480 |
| 5 | Núcleo (8 benefícios / 7 etapas / etc.) | 1.300-1.700 |
| 6 | Como funciona / Como implementar | 550-700 |
| 7 | **Caso prático com números reais** | 280-380 |
| 8 | Erros comuns (5-7 erros) | 380-480 |
| 9 | Comparativo (tabela markdown) | 200-280 |
| 10 | Perguntas frequentes (5-7) | 420-560 |
| 11 | Conclusão | 180-240 |
| 12 | CTA final | 60-90 |
| **Total** | — | **3.500-4.700 palavras** |

### 1. TL;DR / Resposta direta (80-120 palavras)

**Logo após o frontmatter, antes de qualquer H2.**

Bloco curto que responde a query principal de forma completa. É o pedaço que IAs vão extrair como resposta direta. Featured snippet do Google também busca aqui.

Formato:
```markdown
> **Resposta rápida:** [Resposta completa em 2-4 frases. Direto. Sem rodeios. Inclui a primary keyword. Pode terminar com link interno pra seção principal.]
```

### 2. Introdução (150-250 palavras)

2-3 parágrafos curtos:
- Parágrafo 1: a dor concreta (cenário real do leitor, com dado se possível)
- Parágrafo 2: o custo de não resolver (consequência prática)
- Parágrafo 3: o que o artigo vai entregar (promessa específica, não vaga)

**Proibido:** "Neste artigo, vamos falar sobre…", "Antes de tudo, é importante entender…", "O mundo do marketing digital…". Vai direto.

### 3. H2: O que é [tópico] — definição (200-300 palavras)

Definição cristalina no formato **"X é Y. [Por quê]. [Como funciona em 1 frase]."**

LLMs adoram esse padrão — extraem como definição canônica. Use bold no termo principal.

### 4. H2: Por que isso importa (300-400 palavras)

Contexto + dados + consequências. Estatísticas com **fonte citada e linkada**. Custo financeiro/operacional de ignorar. Quem deveria se importar e por quê.

### 5. H2: Como funciona / Como fazer (600-900 palavras)

O coração do artigo. Pode ser:
- **Passo-a-passo** numerado (se for HowTo) — vira schema HowTo no JSON-LD
- **Componentes do sistema** com H3s
- **Framework** com etapas

Use H3s pra subseções. Inclua:
- Listas numeradas pra sequências
- Bullets pra opções paralelas
- Code blocks pra comandos/configs
- Tabelas pra parâmetros

### 6. H2: [Aprofundamento técnico ou conceitual] (400-600 palavras)

Onde você mostra autoridade técnica. Detalhes que só quem opera de verdade conhece. Use H3s.

### 7. H2: Caso prático com números reais (280-380 palavras) — OBRIGATÓRIO

Mini case anonimizado de aplicação real do tópico. Estrutura:

- **Cenário** (1 parágrafo): segmento, porte, situação inicial com 2-3 números
- **Diagnóstico** (1 parágrafo): o que estava errado, com dado concreto
- **Aplicação** (1 parágrafo): o que foi feito, em quanto tempo
- **Resultado** (1 parágrafo): números antes vs depois, período, ROI

Pode ser composto de cases reais agregados (sem identificar cliente) ou exemplo numérico didático claramente sinalizado. **Sempre com números concretos**, nunca genérico.

### 8. H2: Erros comuns / Pegadinhas (380-480 palavras)

Lista de 5-8 erros frequentes, cada um com 2-3 frases explicando o porquê e como evitar. Formato:

```markdown
### 1. [Erro em uma frase]
Explicação curta + consequência + correção.
```

### 8. H2: Comparativo / Tabela (200-300 palavras + tabela)

Quando relevante: tabela markdown comparando opções, ferramentas, abordagens. Google e IAs amam tabelas — extraem direto.

### 9. H2: Perguntas frequentes (300-500 palavras)

3-6 perguntas + respostas curtas (50-100 palavras cada). **Cada Q&A daqui DEVE estar replicada no campo `faq:` do frontmatter** (vira FAQPage schema).

Use o formato:
```markdown
### Pergunta direta?
Resposta direta de 2-3 frases.
```

### 10. H2: Conclusão (150-250 palavras)

Não recapitule tudo. **Reforce o ponto principal** + dê o próximo passo prático que o leitor pode dar agora.

### 11. CTA final

Bloco de chamada pra ação ligado ao funil do Grupo Souza:

```markdown
---

**Quer aplicar isso no seu negócio?** [Agende um diagnóstico gratuito de 30 minutos](/diagnostico) — a gente analisa seu funil atual e mostra exatamente onde está perdendo dinheiro.
```

---

## Regras de escrita (style guide)

### Voz e tom
- **Pronome:** "você" (PT-BR direto). Nunca "o leitor", "o usuário".
- **Voz:** ativa. "Configure o GTM" > "O GTM deve ser configurado".
- **Tom:** confiante, técnico, sem jargão desnecessário. Demonstra autoridade sem ser arrogante.
- **Pessoa:** primeira pessoa do plural ("a gente", "nós") quando falar do Grupo Souza. Singular nunca (não é o blog do Rodrigo, é do Grupo Souza).

### Frases e parágrafos
- **Frases:** alterne curtas (5-10 palavras) com médias (15-25). Evite frases longas com muitas vírgulas.
- **Parágrafos:** 2-4 frases. Um parágrafo = uma ideia. Quebra rápido — texto na web é escaneado, não lido.
- **Sem fluff:** corte palavras inúteis. "É importante notar que" → vai direto. "Vamos ver agora como" → mostre.
- **Concretude:** números, exemplos, casos reais. Nunca abstrato genérico.

### Formatação
- **Bold** em 3-5 termos-chave por seção (ajuda escaneamento + sinaliza importância pro Google)
- **Listas** sempre que enumerar 3+ itens
- **Tabelas** pra comparações
- **Code blocks** pra exemplos técnicos (use linguagem certa: ```javascript, ```html, ```sql)
- **Blockquotes** pra citações de fontes externas
- Evite ALL CAPS, exclamações múltiplas, emoji em excesso (1-2 estratégicos no máximo, ou nenhum)

### Hierarquia de headings
- **1 H1 só** (gerado pelo `title` do frontmatter — **NÃO escreva H1 no corpo**)
- **H2** pra seções principais (8-12 por artigo)
- **H3** pra subseções dentro de H2
- **H4** raríssimo (só se realmente precisar de 4 níveis)
- **Nunca pule níveis** (H2 → H4 é proibido)

### Links — link building obrigatório

Link building é parte do trabalho. Não é decoração. **Mínimos não-negociáveis:**

- **Internos: mínimo 6 por artigo**, distribuídos pelo corpo (não tudo no final). Combine destes:
  - 1-2 posts relacionados do blog (`/blog/...`)
  - 1-2 páginas de serviço (`/servicos/...`)
  - 1 link pra `/pacotes` ou `/sobre`
  - 1-2 links pra `/diagnostico` (CTA + 1 inline contextual)
  - Use anchor text descritivo (nunca "clique aqui", "saiba mais", "leia também")
  - Cada link interno deve ter contexto que faça o leitor querer clicar

- **Externos: mínimo 5 pra fontes autoritativas**. Combine destes:
  - Documentação oficial (Google, Meta, Microsoft, Apple, W3C)
  - Estudos acadêmicos (Princeton, MIT, Stanford, KDD, ACM)
  - Reports de mercado (Forrester, Gartner, McKinsey, Statista, eMarketer)
  - Mídia técnica (Search Engine Land, Search Engine Journal, Marketing Land)
  - Reguladores (ANPD, planalto.gov.br, GDPR EU, FTC)
  - Use `[texto descritivo](url)` em markdown puro — sem `target="_blank"`
  - **Cada estatística citada DEVE ter o link da fonte**

- **Anchor text:** sempre descritivo do destino. "Segundo o [Google Ads Help](url)..." não "Segundo [esse link](url)..."
- **Distribuição:** links espalhados — pelo menos 1 link por seção principal (H2)

### Keywords

### Keywords
- **Primary keyword** (do `seo_keyword`): aparece no H1 (title), primeiro parágrafo, em pelo menos 2 H2s, último parágrafo. Densidade natural — sem keyword stuffing.
- **Secondary keywords**: espalhadas em H2s e parágrafos, naturalmente.
- **Long-tail**: aparecem dentro do conteúdo respondendo perguntas específicas (FAQ, exemplos).

---

## Checklist de SEO (antes de marcar status: published)

### On-page
- [ ] Title 50-65 chars com keyword primária
- [ ] Slug curto, kebab-case, contém keyword
- [ ] Meta description 150-160 chars com CTA
- [ ] 1 H1 único (do title)
- [ ] H2/H3 hierárquicos, sem pular níveis
- [ ] Primary keyword no H1, primeiro parágrafo, último parágrafo
- [ ] Secondary keywords distribuídas naturalmente
- [ ] **3.000+ palavras de conteúdo real (ideal 3.500-4.500)** — excluindo frontmatter e CTA
- [ ] **Mínimo 6 internal links** distribuídos pelo corpo (não tudo no final)
- [ ] **Mínimo 5 external links** pra fontes autoritativas com anchor text descritivo
- [ ] Cada estatística citada tem link da fonte
- [ ] Pelo menos 1 link por seção H2 (interno ou externo)
- [ ] Seção "Caso prático com números" presente
- [ ] Imagem de capa em `/public/blog/{slug}-cover.jpg` (1200x630px ou 1600x900px)
- [ ] Cover_alt descritivo
- [ ] Tabela ou lista comparativa (sempre que aplicável)

### AIEO / GEO
- [ ] TL;DR no topo (50-100 palavras)
- [ ] Definições claras "X é Y" no início de cada conceito
- [ ] Estatísticas com fonte citada e linkada
- [ ] Listas estruturadas (numeradas pra sequências, bullets pra opções)
- [ ] Tabelas pra comparações
- [ ] FAQ no frontmatter + replicado no corpo (vira FAQPage schema)
- [ ] `schema_type` correto no frontmatter
- [ ] Conteúdo abrangente do tópico (não superficial)
- [ ] Linguagem direta, sem fluff
- [ ] `related_posts` com 2-3 slugs relevantes

### Tom e qualidade
- [ ] Lê como Rodrigo Souza escreveria (técnico, direto, autoritativo)
- [ ] Zero fluff, zero clichês de marketing
- [ ] Frases curtas alternadas com médias
- [ ] Parágrafos de 2-4 frases
- [ ] CTA final ligado ao funil

### Frontmatter
- [ ] Todos os campos preenchidos (não deixe em branco — use `""` se opcional)
- [ ] `date` no formato YYYY-MM-DD
- [ ] `category` válida (existe em `lib/blog.ts CATEGORY_LABELS`)
- [ ] `tags` em kebab-case
- [ ] `faq` com 3-6 entradas (mesmas que estão no corpo)
- [ ] `status: "draft"` (Rodrigo muda pra `published` quando aprova)

---

## Output

### Onde salvar
`site-grupo-souza/content/blog/{slug}.md`

O `{slug}` é o mesmo do frontmatter. Use kebab-case.

### Imagem de capa
- **Não gere a imagem** — só registre o caminho `/blog/{slug}-cover.jpg` no frontmatter
- **Avise o Rodrigo** ao final: "Coloca a imagem de capa em `site-grupo-souza/public/blog/{slug}-cover.jpg`. Tamanho ideal: 1600x900px ou 1200x630px (ratio 16:9), formato JPG/WebP, máx 200KB."

### Formato de entrega
1. Salva o `.md` em `content/blog/`
2. Mostra ao Rodrigo:
   - Caminho do arquivo criado
   - Title e slug
   - Total de palavras
   - Resumo de 1 linha do que cobriu
   - Lembrete da imagem de capa
   - Pergunta se quer revisar alguma seção específica

---

## Exemplo de cabeçalho mínimo de artigo

```markdown
---
title: "Como reduzir CPL com tracking avançado em 2026"
slug: "como-reduzir-cpl-tracking-avancado"
date: "2026-04-09"
updated: "2026-04-09"
status: "draft"
excerpt: "CPL alto não é problema de verba — é problema de tracking. Veja como atribuição completa reduz custo por lead em até 40% com dados reais."
category: "tracking-dados"
tags: ["cpl", "tracking", "atribuicao", "google-ads", "meta-ads"]
author: "Rodrigo Souza"
cover: "/blog/como-reduzir-cpl-tracking-avancado-cover.jpg"
cover_alt: "Dashboard de tracking mostrando atribuição de leads por canal"
seo_title: "Como Reduzir CPL com Tracking Avançado | Grupo Souza"
seo_description: "Reduza seu CPL em até 40% com tracking avançado e atribuição completa. Veja o método que usamos pra otimizar campanhas com dados reais."
seo_keyword: "como reduzir cpl"
seo_keywords: ["custo por lead", "tracking avançado", "atribuicao google ads", "otimizacao cpl"]
canonical: ""
og_image: ""
schema_type: "HowTo"
faq:
  - question: "O que é CPL e como calcular?"
    answer: "CPL (Custo Por Lead) é o valor médio que você paga por cada lead capturado. Calcula dividindo o investimento total em mídia pelo número de leads gerados no período."
  - question: "Por que meu CPL está alto?"
    answer: "Quase sempre é falta de tracking. Sem atribuição correta, o algoritmo otimiza pelo público errado. Isso infla o CPL mesmo com verba alta."
  - question: "Tracking avançado funciona em qualquer site?"
    answer: "Sim. Implementamos via GTM, que funciona em qualquer plataforma — WordPress, Next.js, Webflow, HTML estático, etc."
toc: true
related_posts: ["por-que-tracking-e-mais-importante-que-trafego", "como-reduzir-cpl-com-dados"]
language: "pt-BR"
---

> **Resposta rápida:** Reduzir CPL não é cortar verba nem trocar de plataforma...
```

---

## Quando NÃO usar essa skill

- Posts curtos (<1500 palavras) — não rankeiam mais em 2026
- "Listas top 10" sem profundidade — Google penaliza thin content
- Notícias / atualizações curtas — vai pra changelog ou redes sociais
- Conteúdo de cliente — usa skills `landing-pages`, `email-marketing` ou `sites-blog`

---

## Lembretes finais

1. **Migração futura pra CMS**: o frontmatter foi desenhado pra mapear 1-pra-1 em Sanity/Payload/Strapi. Não invente campos novos sem atualizar essa skill primeiro.
2. **`updated` sempre**: toda revisão de conteúdo atualiza esse campo. Google ama "fresh content".
3. **Tom de voz**: leia 2-3 posts existentes antes de escrever. O artigo novo precisa parecer da mesma voz.
4. **Densidade técnica**: o blog é a vitrine técnica do Grupo Souza. Artigos rasos prejudicam o posicionamento.
5. **Pergunta antes de chutar**: se faltar contexto (persona, objetivo, keyword), pergunta. Não invente.
