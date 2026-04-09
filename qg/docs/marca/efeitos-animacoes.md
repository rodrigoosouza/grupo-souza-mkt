# Efeitos, Animacoes e Patterns — Grupo Souza MKT

> Extraido das referencias visuais (Luminous, GenLabs, Fluxo, Instagram Slides).
> Todos os efeitos ja adaptados para a paleta emerald do Grupo Souza.
> Aprovado em: 01/04/2026

---

## 1. Animacoes de Entrada

### 1.1 fadeInUpBlur — Entrada com blur + slide up
Origem: Luminous, Instagram Slides

```css
@keyframes fadeInUpBlur {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.animate-entry {
  animation: fadeInUpBlur 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

/* Delays escalonados para sequenciamento */
.delay-75  { animation-delay: 75ms; }
.delay-100 { animation-delay: 100ms; }
.delay-150 { animation-delay: 150ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }
```

### 1.2 animationIn — Entrada mais dramatica (slide maior + blur)
Origem: Luminous, Instagram Slides

```css
@keyframes animationIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}
```

**Uso inline (Tailwind):**
```html
<div class="[animation:animationIn_0.8s_ease-out_0.1s_both]">...</div>
<div class="[animation:animationIn_0.8s_ease-out_0.3s_both]">...</div>
<div class="[animation:animationIn_0.8s_ease-out_0.5s_both]">...</div>
```

### 1.3 fadeInUp simples (sem blur)
Origem: Fluxo

```css
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 2. Animacoes Scroll-Triggered (IntersectionObserver)

Origem: Luminous, Instagram Slides

### CSS
```css
/* Default: pausado ate entrar na viewport */
.animate-on-scroll {
  animation-play-state: paused !important;
}
/* Ativado pelo JS */
.animate-on-scroll.animate {
  animation-play-state: running !important;
}
```

### JavaScript
```js
(function () {
  const style = document.createElement("style");
  style.textContent = `
    .animate-on-scroll { animation-play-state: paused !important; }
    .animate-on-scroll.animate { animation-play-state: running !important; }
  `;
  document.head.appendChild(style);

  if (!window.__inViewIO) {
    window.__inViewIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          window.__inViewIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  }

  window.initInViewAnimations = function (selector = ".animate-on-scroll") {
    document.querySelectorAll(selector).forEach((el) => {
      window.__inViewIO.observe(el);
    });
  };

  document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();
```

### Uso
```html
<div class="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
  Conteudo que anima ao entrar na viewport
</div>
```

---

## 3. Efeitos de Background

### 3.1 Starry Background (pontos de estrela)
Origem: Luminous

```css
.stars {
  background-image:
    radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)),
    radial-gradient(1.5px 1.5px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0));
  background-size: 200px 200px;
  opacity: 0.2;
}
```

```html
<div class="fixed inset-0 z-0 pointer-events-none">
  <div class="stars absolute inset-0"></div>
</div>
```

### 3.2 Grid Background (linhas sutis)
Origem: Luminous

```css
.grid-bg {
  background-image:
    linear-gradient(to right, #ffffff05 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff05 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 3.3 Dot Grid Pattern
Origem: Instagram Slides

```css
.bg-grid-pattern {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 0
  );
  background-size: 24px 24px;
}
```

### 3.4 Technical Grid (modo claro)
Origem: Fluxo

```css
.technical-grid {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
}
```

### 3.5 Ambient Glow Blobs (emerald adaptado)
Origem: Luminous

```html
<div class="fixed inset-0 z-0 pointer-events-none">
  <div class="stars absolute inset-0"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full"></div>
  <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-950/20 blur-[100px] rounded-full"></div>
</div>
```

---

## 4. Efeitos de Glow e Sombras

### 4.1 Electric Card (borda gradiente com glow)
Origem: Luminous

```css
.electric-card {
  box-shadow:
    0 0 30px rgba(16, 185, 129, 0.3),
    inset 0 0 20px rgba(16, 185, 129, 0.1);
}
```

```html
<div class="relative bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">
  <!-- Borda gradiente -->
  <div class="absolute inset-0 bg-gradient-to-b from-emerald-300 via-emerald-500 to-transparent opacity-80 z-0"></div>
  <!-- Conteudo interno -->
  <div class="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8">
    ...
  </div>
</div>
```

### 4.2 Glow Button (emerald)
Origem: Luminous

```html
<button class="
  group relative flex items-center justify-center gap-2.5
  rounded-full bg-gradient-to-t from-emerald-300 via-emerald-500 to-emerald-600
  px-8 py-3 text-lg font-medium text-emerald-950
  shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)]
  ring-1 ring-inset ring-white/40
  transition-all duration-300
  hover:scale-105
  hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.8)]
">
  Comecar Agora
</button>
```

### 4.3 Botao 3D / Clay (modo claro)
Origem: GenLabs

```html
<button class="
  hover:bg-black transition-all flex group
  shadow-xl hover:shadow-2xl hover:-translate-y-0.5
  text-sm font-medium text-emerald-950
  rounded-full py-3 px-6 items-center
" style="
  background: radial-gradient(circle at 10% 0%, #d1fae5 0%, #10b981 100%);
  box-shadow:
    0 15px 25px -10px rgba(16, 185, 129, 0.7),
    inset 0 4px 8px rgba(209, 250, 229, 0.9),
    inset 0 -4px 8px rgba(5, 150, 105, 0.9);
">
  Falar com especialista
</button>
```

### 4.4 Premium Card (modo claro, sutil)
Origem: Fluxo

```css
.premium-card {
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02), 0 8px 16px -4px rgba(0,0,0,0.04);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.premium-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.03), 0 12px 24px -6px rgba(0,0,0,0.06);
  border-color: #D4D4D4;
}
```

---

## 5. Border Gradient (borda gradiente via pseudo-element)

Origem: Luminous, Instagram Slides

```css
[style*="--border-gradient"]::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: var(--border-radius-before, inherit);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  background: var(--border-gradient);
  pointer-events: none;
}
```

```html
<div class="relative rounded-lg p-6"
  style="--border-gradient: linear-gradient(180deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0)); --border-radius-before: 8px">
  Conteudo com borda gradiente emerald
</div>
```

---

## 6. Efeitos de Hover

### 6.1 Border Beam (borda animada on hover)
Origem: Instagram Slides

```html
<button class="group inline-flex overflow-hidden rounded-full p-[1px] relative
  transition-all duration-300 hover:-translate-y-0.5
  hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]">
  <!-- Spinning beam (visivel no hover) -->
  <span class="absolute inset-[-100%]
    animate-[spin_3s_linear_infinite]
    bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#10b981_100%)]
    opacity-0 transition-opacity duration-300
    group-hover:opacity-100"></span>
  <!-- Borda estatica default -->
  <span class="absolute inset-0 rounded-full bg-zinc-800
    transition-opacity duration-300 group-hover:opacity-0"></span>
  <!-- Conteudo do botao -->
  <span class="flex items-center gap-2 uppercase text-xs font-medium text-zinc-400
    bg-gradient-to-b from-zinc-800 to-zinc-950
    w-full h-full rounded-full py-2.5 px-6 relative
    shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
    transition-colors duration-300 group-hover:text-white">
    Solicitar Demo
  </span>
</button>
```

### 6.2 Shimmer on Hover
Origem: Fluxo

```css
@keyframes shimmer {
  100% { transform: translateX(100%); }
}

.shimmer-layer {
  transform: translateX(-100%);
}

.group:hover .shimmer-layer {
  animation: shimmer 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
```

```html
<button class="group relative isolate overflow-hidden bg-[#09090b] text-white
  text-xs font-semibold px-5 py-2 rounded shadow-sm ring-1 ring-white/10
  transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
  <div class="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
  <span class="relative z-20">Acessar</span>
</button>
```

### 6.3 Flashlight / Spotlight on Hover (cursor-following)
Origem: Instagram Slides

```html
<div class="relative overflow-hidden group">
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100
    transition-opacity duration-500 pointer-events-none"
    style="background: radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(16, 185, 129, 0.08), transparent 40%);">
  </div>
  <!-- Conteudo do card -->
</div>
```

**JavaScript necessario:**
```js
document.querySelectorAll('.group').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});
```

### 6.4 Hover Effects basicos
Origem: Luminous

```html
<!-- Background change -->
<div class="bg-white/[0.02] hover:bg-white/[0.04] transition-colors">...</div>

<!-- Border highlight -->
<div class="border-white/10 hover:border-white/20 transition-colors">...</div>

<!-- Scale -->
<div class="hover:scale-105 transition-transform">...</div>

<!-- Lift + shadow -->
<div class="hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300">...</div>
```

---

## 7. Glass Effects

Origem: GenLabs

```css
/* Glass panel (modo claro) */
.glass-panel {
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Glass card (modo escuro) */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
```

### Navbar com Glass
```html
<nav class="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
  ...
</nav>
```

---

## 8. Animacoes de Loop

### 8.1 Marquee (scroll infinito horizontal)
Origem: Instagram Slides

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

```html
<div class="overflow-hidden relative">
  <!-- Gradient masks nas bordas -->
  <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10"></div>
  <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10"></div>
  <!-- Conteudo duplicado para loop -->
  <div class="flex w-[200%] animate-marquee">
    <div class="flex justify-around w-1/2">...</div>
    <div class="flex justify-around w-1/2">...</div>
  </div>
</div>
```

### 8.2 Carousel Vertical
Origem: GenLabs

```css
.carousel-track {
  animation: vertical-scroll 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes vertical-scroll {
  0%, 25%    { transform: translateY(0); }
  33%, 58%   { transform: translateY(-33.33%); }
  66%, 91%   { transform: translateY(-66.66%); }
  100%       { transform: translateY(0); }
}
```

### 8.3 Card Stack Cycle (rotacao de cards)
Origem: Instagram Slides

```css
@keyframes cardStackCycle {
  0%, 25% {
    transform: translateY(0) scale(1);
    z-index: 30;
    opacity: 1;
    filter: blur(0px);
  }
  33%, 58% {
    transform: translateY(-60px) scale(0.85);
    z-index: 10;
    opacity: 0.5;
    filter: blur(2px);
  }
  66%, 91% {
    transform: translateY(-30px) scale(0.92);
    z-index: 20;
    opacity: 0.75;
    filter: blur(1px);
  }
  100% {
    transform: translateY(0) scale(1);
    z-index: 30;
    opacity: 1;
    filter: blur(0px);
  }
}
```

```html
<div class="relative w-full max-w-[320px] aspect-square">
  <div class="absolute inset-0 rounded-2xl bg-neutral-900 border border-white/10 p-8 shadow-2xl"
    style="animation: cardStackCycle 12s infinite ease-in-out; animation-delay: -8s;">
    Card 1
  </div>
  <div class="absolute inset-0 rounded-2xl bg-neutral-900 border border-white/10 p-8 shadow-2xl"
    style="animation: cardStackCycle 12s infinite ease-in-out; animation-delay: -4s;">
    Card 2
  </div>
  <div class="absolute inset-0 rounded-2xl bg-neutral-900 border border-white/10 p-8 shadow-2xl"
    style="animation: cardStackCycle 12s infinite ease-in-out; animation-delay: 0s;">
    Card 3
  </div>
</div>
```

---

## 9. Animacoes Especificas

### 9.1 Beam (linha deslizante)
Origem: Instagram Slides

```css
@keyframes beam {
  0% { left: -100%; }
  100% { left: 100%; }
}

.animate-beam {
  animation: beam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
```

### 9.2 Clip Path Reveal (revelacao por coluna)
Origem: Instagram Slides

```css
@keyframes clip-reveal {
  0% { clip-path: inset(100% 0 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}

.animate-clip {
  animation: clip-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate;
}
```

```html
<div class="flex gap-3 h-48">
  <div class="flex-1 bg-neutral-800 rounded-sm animate-clip" style="animation-delay: 0s;"></div>
  <div class="flex-1 bg-neutral-700 rounded-sm animate-clip" style="animation-delay: 0.2s;"></div>
  <div class="flex-1 bg-neutral-600 rounded-sm animate-clip" style="animation-delay: 0.4s;"></div>
  <div class="flex-1 bg-emerald-500 rounded-sm animate-clip" style="animation-delay: 0.6s;"></div>
</div>
```

### 9.3 Ping (indicador de status ao vivo)
Origem: Luminous

```html
<span class="relative flex h-2 w-2">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
```

### 9.4 Pulse (indicador sutil)
```html
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
```

---

## 10. Separadores e Divisores

### 10.1 Separador Gradiente (fade nas bordas)
Origem: Luminous

```html
<div class="relative w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent">
  <span class="absolute left-1/2 -translate-x-1/2 bg-[#09090b] px-2 text-[10px] text-neutral-400 uppercase -top-2">
    Secao
  </span>
</div>
```

### 10.2 Curve Separator (SVG)
Origem: GenLabs

```css
.curve-separator {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='60' viewBox='0 0 20 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 1C18 1 1 15 1 30C1 45 18 59 18 59' stroke='%23CBD5E1' stroke-width='0.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 40px;
}
```

---

## 11. Scroll Slider Horizontal (Carrossel tipo Instagram)

Origem: Instagram Slides

```html
<main class="flex flex-row overflow-x-auto snap-x snap-mandatory
  hide-scrollbar w-full gap-x-12 scroll-smooth"
  style="mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
         -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);">
  <section class="flex-shrink-0 w-[85vw] md:w-[500px] snap-center aspect-[3/4]
    bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
    Slide 1
  </section>
  <section class="flex-shrink-0 w-[85vw] md:w-[500px] snap-center aspect-[3/4]
    bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
    Slide 2
  </section>
</main>
```

```css
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

---

## 12. Pricing Transition (transicao de cards de preco)

Origem: Fluxo

```css
.pricing-transition {
  transition: all 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity, box-shadow;
}
```

Card selecionado: `scale-[1.02] shadow-2xl z-10 opacity-100`
Cards inativos: `scale-[0.98] opacity-60`
Hover em inativo: `opacity-90`

---

## 13. Gradientes de Texto

Origem: Luminous

```html
<!-- Gradient text (emerald) -->
<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
  Texto com gradiente
</span>

<!-- Gradient text (sutil, modo claro) -->
<span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900/40">
  Texto sutil
</span>
```

---

## 14. Navbar Pill Menu

Origem: Luminous

```html
<div class="hidden md:flex items-center bg-white/5 border border-white/10
  rounded-full px-1 py-1 backdrop-blur-md">
  <!-- Item ativo -->
  <a class="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white
    flex items-center gap-2 border border-white/5 shadow-inner" href="#">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
    Home
  </a>
  <!-- Item inativo -->
  <a class="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors" href="#">
    Servicos
  </a>
</div>
```

---

## 15. Curvas de Easings

| Nome | Valor | Uso |
|------|-------|-----|
| Smooth | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Entradas suaves |
| Standard | `cubic-bezier(0.4, 0, 0.2, 1)` | Transicoes gerais |
| Elastic | `cubic-bezier(0.22, 1, 0.36, 1)` | Pricing, cards interativos |
| Dramatic | `cubic-bezier(0.77, 0, 0.175, 1)` | Clip-path reveals |
| Linear | `linear` | Marquee, loops |

---

## 16. Beautiful Shadow (sombra premium multi-camada)

Origem: Sidebar (ZincMail)

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

Sombra com 6 camadas progressivas. Cria profundidade realista sem ser pesada. Ideal para cards, botoes e containers em modo claro e escuro.

---

## Resumo de Dependencias

| Recurso | Necessario |
|---------|-----------|
| Tailwind CSS | v3+ com plugin via CDN ou build |
| Inter | Google Fonts |
| JetBrains Mono | Google Fonts |
| Lucide Icons | CDN ou pacote npm |
| IntersectionObserver | Nativo (IE11+ polyfill se necessario) |

---

*Versao: 1.0*
