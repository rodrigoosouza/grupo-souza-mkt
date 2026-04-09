# Design System — Grupo Souza MKT

> Documento central do design system. Referencia unica para sites, landing pages e materiais digitais.
> Aprovado em: 01/04/2026 | Versao: 1.0

---

## Indice

1. [Filosofia](#1-filosofia)
2. [Cores](#2-cores)
3. [Tipografia](#3-tipografia)
4. [Espacamento e Layout](#4-espacamento-e-layout)
5. [Componentes](#5-componentes)
6. [Efeitos e Animacoes](#6-efeitos-e-animacoes)
7. [Icones](#7-icones)
8. [Imagens e Midia](#8-imagens-e-midia)
9. [Brand Voice (Resumo)](#9-brand-voice-resumo)
10. [Stack Tecnico](#10-stack-tecnico)

---

## 1. Filosofia

### Principios visuais

- **Dark-first.** Background escuro como padrao. Modo claro e secundario.
- **Precisao tecnica.** Visual que transmite engenharia, dados e controle — nunca "agencia criativa".
- **Profundidade sutil.** Glows, gradientes e blurs criam camadas sem ser pesado.
- **Motion com proposito.** Animacoes reforcem hierarquia e guiem o olho — nunca decorativas.
- **Menos e mais.** Espacamento generoso, tipografia limpa, poucos elementos por secao.

### Referencias visuais

Vercel, Linear, Stripe, Cal.com — marcas tech premium com abordagem dark, clean e funcional.

### Essencia

> Nao somos uma agencia bonita. Somos engenheiros de aquisicao.
> O design deve transmitir: confianca, controle, dados, resultado.

---

## 2. Cores

### 2.1 Emerald — Cor Primaria (Accent)

| Token | Hex | Uso |
|-------|-----|-----|
| emerald-950 | `#022c22` | Backgrounds profundos, overlays |
| emerald-900 | `#064e3b` | Backgrounds de secoes dark com verde |
| emerald-800 | `#065f46` | Hover em backgrounds escuros |
| emerald-700 | `#047857` | Icones, bordas ativas |
| emerald-600 | `#059669` | Botoes primarios (inicio gradiente) |
| emerald-500 | `#10b981` | Botoes (fim gradiente), labels, overlines |
| emerald-400 | `#34d399` | Texto accent em fundo escuro, metricas |
| emerald-300 | `#6ee7b7` | Gradientes de texto, destaques |
| emerald-100 | `#d1fae5` | Background de badges (modo claro) |
| emerald-50 | `#ecfdf5` | Background ultra-sutil (modo claro) |

### 2.2 Neutros — Base

| Token | Hex | Uso |
|-------|-----|-----|
| black | `#09090b` | Background principal (body) |
| gray-950 | `#0c0c0e` | Background secoes alternadas |
| gray-900 | `#111113` | Background de cards |
| gray-800 | `#1a1a1f` | Bordas de cards, separadores |
| gray-700 | `#27272a` | Bordas de botoes secundarios |
| gray-600 | `#3f3f46` | Bordas hover |
| gray-500 | `#52525b` | Texto terciario |
| gray-400 | `#71717a` | Texto secundario, subtitulos |
| gray-300 | `#a1a1aa` | Texto corpo em fundo escuro |
| gray-200 | `#d4d4d8` | Texto principal (modo claro) |
| gray-100 | `#f4f4f5` | Background modo claro |
| gray-50 | `#fafafa` | Background branco suave (canvas) |
| white | `#ffffff` | Texto principal em fundo escuro |

### 2.3 Gradientes

| Nome | CSS | Uso |
|------|-----|-----|
| Green Button | `linear-gradient(135deg, #059669, #10b981)` | Botao primario |
| Green Glow Button | `bg-gradient-to-t from-emerald-300 via-emerald-500 to-emerald-600` | Botao hero com glow |
| Green Text | `linear-gradient(135deg, #ffffff, #6ee7b7, #34d399)` | Titulos hero |
| Green Glow BG | `radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)` | Efeito de luz |
| Separator | `linear-gradient(90deg, transparent, rgba(16,185,129,0.2), transparent)` | Linhas divisorias |
| Border Fade | `linear-gradient(90deg, transparent, #1a1a1f, transparent)` | Bordas de secao |
| Electric Border | `linear-gradient(180deg, rgba(110,231,183,1) 0%, rgba(110,231,183,0) 100%)` | Borda de card electric |

### 2.4 Sombras

| Nome | CSS | Uso |
|------|-----|-----|
| Green Glow SM | `0 0 16px rgba(16,185,129,0.15)` | Botoes em repouso |
| Green Glow MD | `0 0 24px rgba(16,185,129,0.25)` | Botoes em hover |
| Green Glow LG | `0 0 40px -5px rgba(16,185,129,0.6)` | Hero CTA |
| Green Glow XL | `0 0 60px -5px rgba(16,185,129,0.8)` | Hero CTA hover |
| Card Subtle | `0 2px 4px rgba(0,0,0,0.02), 0 8px 16px -4px rgba(0,0,0,0.04)` | Cards modo claro |
| Card Hover | `0 4px 8px rgba(0,0,0,0.03), 0 12px 24px -6px rgba(0,0,0,0.06)` | Cards hover claro |

### 2.5 Regras de Uso

- Background principal: `#09090b` (dark) ou `#fafafa` (light)
- Texto principal: `#ffffff` (dark) ou `#09090b` (light)
- Texto secundario: `gray-400` (dark) ou `gray-500` (light)
- Verde nunca como background de secao inteira — sempre como accent
- Botoes primarios sempre com gradiente emerald + sombra glow
- Separadores com gradiente fade (nunca linha solida)
- Bordas ultra-sutis: `border-white/5` ou `border-white/10`

---

## 3. Tipografia

### 3.1 Fontes

| Fonte | Papel | Fallback |
|-------|-------|----------|
| Inter | Principal — titulos, corpo, UI | `-apple-system, BlinkMacSystemFont, sans-serif` |
| JetBrains Mono | Tecnica — codigo, metricas, dados | `Menlo, Monaco, monospace` |

### 3.2 Hierarquia

| Nivel | Tamanho | Peso | Tracking | Line-height | Fonte |
|-------|---------|------|----------|-------------|-------|
| Display | 72-76px | 800-900 | -2.5px | 1.0-1.05 | Inter |
| H1 | 48px | 800 | -2px | 1.05 | Inter |
| H2 | 40px | 800 | -1.5px | 1.1 | Inter |
| H3 | 28px | 700 | -0.8px | 1.2 | Inter |
| H4 | 20px | 700 | -0.5px | 1.3 | Inter |
| Body | 16px | 400 | 0 | 1.7 | Inter |
| Body Small | 14px | 400 | 0 | 1.6 | Inter |
| Overline | 11px | 700 uppercase | 3px | 1.4 | Inter |
| Label | 13px | 600 | 0.3px | 1.4 | Inter |
| Code | 14px | 500 | 0 | 1.6 | JetBrains Mono |
| Micro | 10px | 600-700 | 0.5-3px | 1.4 | Inter / JetBrains Mono |

### 3.3 Texto com Gradiente

```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
  Texto hero com gradiente
</span>
```

### 3.4 Regras

- Titulos: sempre tracking negativo (apertado) — transmite solidez
- Overlines: sempre uppercase, tracking 3px — labels de secao
- Corpo: line-height 1.7 — legibilidade
- JetBrains Mono: reservado para metricas, codigo, dados — nunca titulos
- Fundo escuro: principal em `white`, secundario em `gray-300`
- Fundo claro: principal em `black`, secundario em `gray-500`

### 3.5 Importacao

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 4. Espacamento e Layout

### 4.1 Container

```
max-w-7xl mx-auto px-6 (mobile: px-4)
```

Largura maxima: 1280px, padding lateral 24px.

### 4.2 Grid System

| Layout | Classes |
|--------|---------|
| Hero (conteudo + visual) | `grid grid-cols-1 lg:grid-cols-12 gap-8` → 7 + 5 |
| 2 colunas iguais | `grid grid-cols-1 md:grid-cols-2 gap-6` |
| 3 colunas | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` |
| 4 colunas | `grid grid-cols-2 md:grid-cols-4 gap-6` |

### 4.3 Espacamento entre Secoes

| Contexto | Padding |
|----------|---------|
| Entre secoes | `py-24` (96px) |
| Header de secao → conteudo | `mb-16` (64px) |
| Dentro de secao | `space-y-8` a `space-y-16` |
| Cards | `gap-6` (24px) ou `gap-8` (32px) |

### 4.4 Breakpoints

| Nome | Min-width | Uso |
|------|-----------|-----|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Wide |

---

## 5. Componentes

### 5.1 Botoes

#### Primario (CTA principal — glow)
```html
<button class="
  group relative flex items-center justify-center gap-2.5
  rounded-full
  bg-gradient-to-t from-emerald-300 via-emerald-500 to-emerald-600
  px-8 py-3 text-lg font-medium text-emerald-950
  shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)]
  ring-1 ring-inset ring-white/40
  transition-all duration-300
  hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.8)]
">
  Comecar Agora
</button>
```

#### Primario (padrao — gradiente simples)
```html
<button class="
  bg-gradient-to-r from-emerald-600 to-emerald-500
  text-white text-sm font-medium
  rounded-full px-6 py-3
  border-t border-white/20
  shadow-[0_4px_15px_rgba(16,185,129,0.4)]
  hover:brightness-110 transition-all
">
  Ver Servicos
</button>
```

#### Secundario
```html
<button class="
  px-8 py-3 rounded-full
  bg-white text-black text-lg
  hover:bg-neutral-200 transition-colors
">
  Saiba Mais
</button>
```

#### Terciario / Ghost (dark)
```html
<button class="
  group relative isolate overflow-hidden
  bg-[#09090b] text-white text-xs font-semibold
  px-5 py-2 rounded shadow-sm
  ring-1 ring-white/10
  transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
">
  <div class="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
  <span class="relative z-20">Acessar</span>
</button>
```

#### Text Button
```html
<a class="text-xs text-neutral-400 hover:text-white transition-colors">
  Ver detalhes
</a>
```

### 5.2 Cards

#### Card Padrao (dark)
```html
<div class="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-6
  hover:bg-white/[0.04] transition-colors">
  <h4 class="text-sm text-white mb-2">Titulo</h4>
  <p class="text-xs text-neutral-500">Descricao.</p>
</div>
```

#### Card com Borda Gradiente (Electric)
```html
<div class="relative bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald-300 via-emerald-500 to-transparent opacity-80 z-0"></div>
  <div class="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8">
    <h4 class="text-sm text-white mb-2">Titulo</h4>
    <p class="text-xs text-neutral-400">Descricao.</p>
  </div>
</div>
```

#### Card Premium (modo claro)
```html
<div class="premium-card rounded-xl p-6">
  <h4 class="text-sm text-[#111] mb-2">Titulo</h4>
  <p class="text-xs text-[#737373]">Descricao.</p>
</div>
```

### 5.3 Badges e Tags

#### Live Badge
```html
<span class="text-[10px] uppercase text-neutral-400 border border-white/10
  px-2 py-1 rounded bg-white/5 flex items-center gap-1.5">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  Ao Vivo
</span>
```

#### Tag de Status
```html
<span class="text-[11px] rounded-md bg-emerald-500/10 text-emerald-400
  ring-1 ring-emerald-500/20 px-2 py-0.5 uppercase">
  Ativo
</span>
```

#### Tag Neutra
```html
<span class="text-[10px] rounded-md bg-white/5 text-neutral-300
  ring-1 ring-white/10 px-2 py-0.5">
  Label
</span>
```

### 5.4 Inputs

#### Email com CTA integrado
```html
<div class="flex items-center rounded-lg bg-[#09090b] border border-white/10
  focus-within:border-white/20 transition-all">
  <input
    class="w-full bg-transparent border-none text-sm text-white
      pl-4 pr-1 py-3 focus:outline-none placeholder:text-neutral-600
      h-10 rounded-l-lg"
    placeholder="seu@email.com"
    type="email"
  />
  <button class="bg-white hover:bg-neutral-200 text-black px-4 py-2
    rounded-r-lg text-sm transition-colors h-10 shadow-lg flex-shrink-0">
    Enviar
  </button>
</div>
```

#### Search
```html
<div class="flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg px-2.5 h-8">
  <!-- Lucide search icon -->
  <svg class="text-neutral-500 w-3.5 h-3.5" ...>...</svg>
  <input class="bg-transparent text-sm text-zinc-300 placeholder-zinc-600
    focus:outline-none w-48" placeholder="Buscar..." type="text" />
</div>
```

### 5.5 Navbar

```html
<nav class="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="text-xl text-white font-semibold tracking-tight">Grupo Souza</span>
    </div>
    <!-- Pill Menu -->
    <div class="hidden md:flex items-center bg-white/5 border border-white/10
      rounded-full px-1 py-1 backdrop-blur-md">
      <a class="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white
        flex items-center gap-2 border border-white/5 shadow-inner" href="#">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        Home
      </a>
      <a class="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors" href="#">
        Servicos
      </a>
      <a class="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors" href="#">
        Cases
      </a>
      <a class="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors" href="#">
        Contato
      </a>
    </div>
    <!-- CTA -->
    <a class="hidden md:block text-sm text-white
      bg-gradient-to-b from-emerald-400 to-emerald-600
      rounded-full border-t border-white/20
      px-5 py-2
      shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]
      hover:brightness-110 transition-all" href="#">
      Falar com Especialista
    </a>
  </div>
</nav>
```

### 5.6 Overline (label de secao)

```html
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
  border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300">
  <!-- Lucide sparkles icon -->
  <svg class="w-3 h-3 text-emerald-400" ...>...</svg>
  <span>Infraestrutura de Aquisicao</span>
</div>
```

### 5.7 Separador de Secao

```html
<div class="relative w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent flex items-center justify-center">
  <span class="bg-[#09090b] px-3 text-[10px] text-neutral-400 uppercase tracking-widest">
    Secao
  </span>
</div>
```

### 5.8 Toggle

```html
<!-- Ativo -->
<button class="relative inline-flex h-5 w-9 items-center rounded-full
  bg-emerald-500/20 ring-1 ring-emerald-500/30">
  <span class="absolute left-0.5 top-0.5 h-4 w-4 rounded-full
    bg-emerald-400 translate-x-4 transition-transform shadow-sm"></span>
</button>

<!-- Inativo -->
<button class="relative inline-flex h-5 w-9 items-center rounded-full
  bg-white/10 ring-1 ring-white/10">
  <span class="absolute left-0.5 top-0.5 h-4 w-4 rounded-full
    bg-neutral-400 translate-x-0 transition-transform shadow-sm"></span>
</button>
```

### 5.9 Metrica / Stat

```html
<div class="flex items-baseline gap-2">
  <span class="text-4xl text-transparent bg-clip-text
    bg-gradient-to-r from-white via-emerald-200 to-emerald-400
    font-extrabold tracking-tight">
    +340%
  </span>
  <span class="text-xs text-emerald-500 flex items-center
    bg-emerald-500/10 px-1.5 py-0.5 rounded">
    <!-- Lucide arrow-up icon -->
    ROI
  </span>
</div>
```

---

## 6. Efeitos e Animacoes

Referencia completa em: `docs/marca/efeitos-animacoes.md`

### Resumo de efeitos disponiveis

| Categoria | Efeitos |
|-----------|---------|
| Entrada | fadeInUpBlur, animationIn, fadeInUp |
| Scroll | animate-on-scroll (IntersectionObserver) |
| Backgrounds | stars, grid-bg, dot pattern, ambient glow blobs |
| Glow | electric-card, glow buttons, glow shadows |
| Hover | border beam, shimmer, flashlight, scale, lift |
| Glass | glass-panel, glass-card, backdrop-blur navbar |
| Loops | marquee, vertical carousel, card stack cycle |
| Reveal | clip-path reveal, beam |
| Status | ping, pulse |
| Layout | separador gradiente, slider horizontal |

### Easings padrao

| Nome | Valor | Uso |
|------|-------|-----|
| Smooth | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Entradas |
| Standard | `cubic-bezier(0.4, 0, 0.2, 1)` | Transicoes gerais |
| Elastic | `cubic-bezier(0.22, 1, 0.36, 1)` | Interacoes |
| Dramatic | `cubic-bezier(0.77, 0, 0.175, 1)` | Reveals |

---

## 7. Icones

### Sistema: Lucide Icons

- Estilo: line (outline), stroke-width 2
- Tamanhos padrao:

| Contexto | Classe | Pixels |
|----------|--------|--------|
| Inline (texto) | `w-3 h-3` | 12px |
| UI (badges, botoes) | `w-4 h-4` | 16px |
| Card / feature | `w-6 h-6` | 24px |
| Hero / showcase | `w-8 h-8` | 32px |

### Cores de icone

- Branco: elementos primarios
- `text-neutral-400/500`: secundarios
- `text-emerald-400/500`: accent, destaque
- `text-emerald-500 fill-emerald-500`: icone preenchido (raro)

### Importacao

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Ou via npm: `npm install lucide-react` (para Next.js)

---

## 8. Imagens e Midia

### Diretrizes

- Screenshots de dashboards e dados (nao fotos de banco de imagem)
- Mockups de tela dark com borda sutil e glow
- Graficos SVG inline quando possivel (sparklines, metricas)
- Avatares em circulos com borda `border-white/5`
- Logos de clientes/parceiros em `grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all`
- Nunca usar fotos genericas de "equipe de marketing sorrindo"

### Tratamento de imagens

```html
<!-- Logo strip -->
<div class="flex gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
  ...logos...
</div>

<!-- Screenshot com borda -->
<div class="rounded-xl border border-white/10 overflow-hidden shadow-2xl">
  <img src="..." class="w-full" />
</div>
```

---

## 9. Brand Voice (Resumo)

| Aspecto | Diretriz |
|---------|----------|
| Tom | Direto, tecnico sem arrogancia |
| Estilo | Dados > opiniao, frases curtas |
| Vocabulario | "Infraestrutura de aquisicao", "do clique ao contrato", "dados em cada etapa" |
| Proibido | "Gestao de redes sociais", "solucoes integradas", "fazemos tudo", "parceiro estrategico" |
| Metricas | Sempre especificas: "CPL caiu 40%" nao "otimos resultados" |

Referencia completa em: `docs/marca/brand-voice.md`

---

## 10. Componentes de Aplicacao (Dashboard/SaaS)

Origem: Sidebar (ZincMail reference)

### 10.1 Beautiful Shadow (sombra multi-camada premium)

```css
.beautiful-shadow {
  box-shadow:
    0px 0px 0px 1px rgba(0,0,0,0.06),
    0px 1px 1px -0.5px rgba(0,0,0,0.06),
    0px 3px 3px -1.5px rgba(0,0,0,0.06),
    0px 6px 6px -3px rgba(0,0,0,0.06),
    0px 12px 12px -6px rgba(0,0,0,0.06),
    0px 24px 24px -12px rgba(0,0,0,0.06);
}
```

### 10.2 Sidebar Navigation (dark)

```html
<!-- Item ativo -->
<a class="flex items-center gap-3 px-4 py-3 mx-2
  bg-gradient-to-r from-zinc-700 to-zinc-800
  text-zinc-100 rounded-xl beautiful-shadow" href="#">
  <!-- Lucide icon w-5 h-5 -->
  <span class="font-medium">Inbox</span>
  <span class="ml-auto bg-zinc-600 text-zinc-200 text-xs px-2 py-1 rounded-full font-medium">24</span>
</a>

<!-- Item inativo -->
<a class="flex items-center gap-3 px-4 py-3 mx-2
  text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100
  rounded-xl transition-colors" href="#">
  <!-- Lucide icon w-5 h-5 -->
  <span>Sent</span>
</a>
```

### 10.3 Sidebar Navigation (light)

```html
<!-- Item ativo -->
<a class="flex items-center gap-3 px-4 py-3 mx-2
  bg-gradient-to-r from-zinc-200 to-zinc-300
  text-zinc-900 rounded-xl beautiful-shadow" href="#">
  <span class="font-medium">Inbox</span>
  <span class="ml-auto bg-zinc-400 text-zinc-100 text-xs px-2 py-1 rounded-full">24</span>
</a>

<!-- Item inativo -->
<a class="flex items-center gap-3 px-4 py-3 mx-2
  text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900
  rounded-xl transition-colors" href="#">
  <span>Sent</span>
</a>
```

### 10.4 Account Switcher Button

```html
<button class="flex items-center gap-2 beautiful-shadow
  hover:bg-zinc-800 transition-all text-sm font-medium
  bg-zinc-800 border-zinc-700 border rounded-xl
  py-2.5 px-4">
  <!-- Lucide mail icon w-4 h-4 text-zinc-400 -->
  <span class="text-zinc-100">Nome App</span>
  <!-- Lucide chevron-down w-4 h-4 text-zinc-500 -->
</button>
```

### 10.5 Avatar com Status Online

```html
<div class="relative">
  <img class="w-10 h-10 beautiful-shadow object-cover
    border-zinc-700 border-2 rounded-xl" src="..." alt="Avatar" />
  <div class="absolute -top-1 -right-1 w-4 h-4
    bg-emerald-400 rounded-full border-2 border-zinc-900"></div>
</div>
```

### 10.6 Labels com Color Dots

```html
<button class="flex items-center gap-3 w-full px-4 py-2.5
  text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100
  rounded-xl transition-colors">
  <span class="w-2 h-2 rounded-full bg-red-500"></span>
  <span>Work</span>
  <span class="ml-auto text-xs text-zinc-500">12</span>
</button>
```

### 10.7 Progress Bar (Storage)

```html
<div class="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
  <div class="flex items-center justify-between mb-2">
    <span class="text-zinc-300 text-sm">Usado</span>
    <span class="text-zinc-300 text-sm">8.2 GB de 15 GB</span>
  </div>
  <div class="w-full bg-zinc-700 rounded-full h-2">
    <div class="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full"
      style="width: 55%"></div>
  </div>
</div>
```

### 10.8 Compose Button (CTA principal de app)

```html
<button class="w-full flex items-center justify-center gap-2
  bg-gradient-to-r from-zinc-200 to-zinc-100
  text-zinc-900 rounded-xl py-3 px-4 font-medium
  hover:from-zinc-100 hover:to-zinc-50
  transition-all beautiful-shadow">
  <!-- Lucide edit icon w-4 h-4 -->
  Nova Acao
</button>
```

### 10.9 Sidebar Patterns

| Pattern | Detalhe |
|---------|---------|
| Largura | 320px (desktop), 280px (tablet), 100% max-300px (mobile) |
| Cantos | rounded-2xl (container), rounded-xl (itens internos) |
| Secoes | Labels collapsible com chevron rotate, uppercase tracking-wider |
| Tipografia | Geist ou Inter, text-sm base |
| Fonte sidebar | `font-family: 'Geist', system-ui, sans-serif` |
| Scrollbar | hide-scrollbar (mesmo pattern do carrossel) |
| Interacao | Dropdown account com click-outside-close |

---

## 11. Stack Tecnico

### Producao

| Ferramenta | Uso |
|------------|-----|
| Next.js + TypeScript | Sites e LPs |
| Tailwind CSS | Estilizacao |
| Vercel | Deploy |
| Lucide React | Icones |
| Google Fonts (Inter + JetBrains Mono) | Tipografia |
| Framer Motion (opcional) | Animacoes complexas |

### Tailwind Config Base

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        canvas: '#fafafa',
        surface: '#ffffff',
        obsidian: '#09090b',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      animation: {
        'fade-in-up': 'fadeInUpBlur 1s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'marquee': 'marquee 20s linear infinite',
        'beam': 'beam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'clip-reveal': 'clip-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate',
      },
      keyframes: {
        fadeInUpBlur: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        beam: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'clip-reveal': {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
}
```

### CSS Base

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #09090b;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code, .mono {
  font-family: 'JetBrains Mono', Menlo, Monaco, monospace;
}

::selection {
  background-color: rgba(16, 185, 129, 0.3);
}
```

---

## 12. Arquivos Relacionados

| Arquivo | Conteudo |
|---------|---------|
| `docs/marca/paleta-cores.md` | Paleta detalhada com tokens |
| `docs/marca/tipografia.md` | Hierarquia tipografica completa |
| `docs/marca/brand-voice.md` | Tom de voz e exemplos |
| `docs/marca/efeitos-animacoes.md` | Catalogo completo de animacoes e efeitos |
| `assets/brand/preview-identidade-visual.html` | Preview visual interativo |

---

*Versao: 1.0*
