# Skill: Landing Pages — Grupo Souza MKT

> Aprovado em: 01/04/2026

---

## Visão Geral

Landing pages com estratégia de CRO (Conversion Rate Optimization) + sistema de tracking proprietário integrado. Não são páginas bonitas — são páginas que convertem.

**Stack padrão:** Next.js + Tailwind CSS + Vercel (ou HTML estático quando mais simples)

---

## Estrutura Padrão de uma LP

### Seções (de cima para baixo)

1. **Header fixo** — logo + CTA no header (botão que ancora no formulário)
2. **Hero** — headline forte + subheadline + CTA primário + prova social rápida (logos de clientes ou número de resultados)
3. **Problema/Dor** — o que o visitante sente, por que está buscando solução
4. **Solução** — como o serviço/produto resolve (benefícios, não features)
5. **Como funciona** — 3-4 passos simples do processo
6. **Prova social** — depoimentos, cases, números de resultado
7. **Oferta/Pacotes** — o que está incluso, preço (se aplicável)
8. **FAQ** — 5-8 perguntas frequentes (accordion)
9. **Formulário de captura** — o form com os 27 campos ocultos
10. **Footer** — dados da empresa, links legais

### Regras de CRO

- **Um objetivo por página** — uma ação, um CTA, sem distrações
- **CTA visível sem scroll** — botão no hero, sempre
- **Repetir CTA** — mínimo 3 vezes na página (hero, meio, final)
- **Headline é a promessa** — benefício claro, não descrição do serviço
- **Prova social antes do form** — depoimento ou número logo antes do formulário
- **Formulário curto** — máximo 6 campos visíveis (name, email, phone, company, role, revenue)
- **Mobile first** — a maioria do tráfego pago chega por mobile
- **Velocidade** — LCP < 2.5s, nada de imagens pesadas sem lazy loading

---

## Integração com Tracking

Toda LP DEVE incluir o sistema de tracking completo. Consultar `tracking-gtm/SKILL.md` para detalhes.

### Checklist obrigatório
- [ ] GTM snippet no `<head>` + noscript após `<body>`
- [ ] Script de tracking antes do `</body>`
- [ ] DOMAIN e WEBHOOK_URL configurados
- [ ] Formulário com id `lead-form`
- [ ] 27 campos ocultos presentes
- [ ] Campo phone com id `phone` (máscara)
- [ ] CSS de feedback visual incluído

---

## Design System para LPs

### Dark-first (padrão Grupo Souza)
```css
:root {
  --bg: #0a0a0f;
  --bg-card: #111118;
  --text: #ffffff;
  --text-secondary: #94a3b8;
  --primary: #10b981;        /* emerald — ajustar por cliente */
  --primary-glow: rgba(16, 185, 129, 0.15);
  --border: rgba(255, 255, 255, 0.08);
  --font-main: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Para clientes — usar branding do cliente
Ler `qg/clientes/{slug}/branding.json` antes de criar a LP. Cores, fontes e tom de voz vêm de lá.

---

## Formulário Padrão

```html
<form id="lead-form" method="POST">
  <!-- 6 campos visíveis -->
  <input type="text" name="name" placeholder="Nome completo" required>
  <input type="email" name="email" placeholder="E-mail" required>
  <input type="tel" id="phone" name="phone" placeholder="(00) 00000-0000" required>
  <input type="text" name="company" placeholder="Empresa" required>
  <input type="text" name="role" placeholder="Cargo">
  <select name="revenue" required>
    <option value="" disabled selected>Faturamento mensal</option>
    <option value="ate-50k">Até R$ 50 mil</option>
    <option value="50k-100k">R$ 50-100 mil</option>
    <option value="100k-500k">R$ 100-500 mil</option>
    <option value="500k-1m">R$ 500 mil - 1 milhão</option>
    <option value="acima-1m">Acima de R$ 1 milhão</option>
  </select>

  <!-- 27 campos ocultos — ver tracking-gtm/SKILL.md -->
  <!-- ... UTMs, Click IDs, Session Data ... -->

  <button type="submit">{{TEXTO_CTA}}</button>
</form>
```

**Nota:** os campos visíveis podem variar por cliente (ex: tirar revenue, adicionar segmento). Os 27 ocultos são SEMPRE os mesmos.

---

## SEO da LP

Mesmo sendo LP de tráfego pago, manter SEO básico:
- Title tag otimizado (≤60 chars)
- Meta description (≤160 chars)
- H1 único
- Canonical URL
- Open Graph tags (og:title, og:description, og:image)
- Schema.org (Organization + FAQ se tiver)

Se a LP for para AIEO/GEO também, aplicar a skill `aieo-geo`.

---

## Tipos de LP por Serviço

| Tipo | Objetivo | Modelo |
|------|----------|--------|
| Captação de lead | Gerar contato qualificado | Hero + Problema + Solução + Prova + Form |
| Diagnóstico gratuito | Oferecer consultoria | Hero + Método + Benefícios + Form curto |
| Webinar/Evento | Inscrição | Hero + Agenda + Speakers + Form |
| Download (lead magnet) | Capturar email com material | Hero + Preview + Benefícios + Form simples |

---

## Performance

### Métricas de referência
- Taxa de conversão LP fria (tráfego pago): 3-8%
- Taxa de conversão LP quente (remarketing): 8-15%
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

### A/B Testing
- Testar headline (promessa vs. pergunta)
- Testar CTA text (ação vs. benefício)
- Testar cor do botão
- Testar com/sem vídeo no hero
- Testar quantidade de campos no form

---

## Checklist Final

- [ ] Segue estrutura padrão (hero → problema → solução → prova → form)
- [ ] CTA visível sem scroll
- [ ] CTA repetido pelo menos 3x
- [ ] Formulário com tracking completo (27 campos ocultos)
- [ ] Mobile responsivo
- [ ] Velocidade OK (LCP < 2.5s)
- [ ] Branding do cliente aplicado (cores, fontes, tom)
- [ ] SEO básico configurado
- [ ] Testado: form submit → dados chegam no webhook
- [ ] Testado: dataLayer events no console
