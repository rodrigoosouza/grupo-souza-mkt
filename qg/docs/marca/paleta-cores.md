# Paleta de Cores — Grupo Souza MKT

## Filosofia

Verde esmeralda escuro como primaria. Preto como base. Gradientes sutis para profundidade. Branco para contraste. Abordagem dark-first inspirada em marcas tech premium (Vercel, Linear, Stripe).

## Emerald — Cor Primaria

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| emerald-950 | Emerald 950 | #022c22 | Backgrounds profundos, overlays escuros |
| emerald-900 | Emerald 900 | #064e3b | Backgrounds de secoes dark com verde |
| emerald-800 | Emerald 800 | #065f46 | Hover em backgrounds escuros |
| emerald-700 | Emerald 700 | #047857 | Icones, bordas ativas |
| emerald-600 | Emerald 600 | #059669 | Botoes primarios (inicio do gradiente) |
| emerald-500 | Emerald 500 | #10b981 | Botoes primarios (fim do gradiente), overlines, labels |
| emerald-400 | Emerald 400 | #34d399 | Texto accent em fundo escuro, numeros de metricas |
| emerald-300 | Emerald 300 | #6ee7b7 | Gradientes de texto, destaques |
| emerald-100 | Emerald 100 | #d1fae5 | Background sutil de badges/pills em modo claro |
| emerald-50 | Emerald 50 | #ecfdf5 | Background ultra-sutil para cards em modo claro |

## Neutros — Base

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| black | Black | #09090b | Background principal |
| gray-950 | Gray 950 | #0c0c0e | Background de secoes alternadas |
| gray-900 | Gray 900 | #111113 | Background de cards em modo escuro |
| gray-800 | Gray 800 | #1a1a1f | Bordas de cards, separadores de grid |
| gray-700 | Gray 700 | #27272a | Bordas de botoes secundarios, linhas divisorias |
| gray-600 | Gray 600 | #3f3f46 | Bordas hover |
| gray-500 | Gray 500 | #52525b | Texto terciario, labels de paleta |
| gray-400 | Gray 400 | #71717a | Texto secundario, subtitulos |
| gray-300 | Gray 300 | #a1a1aa | Texto corpo em fundo escuro |
| gray-200 | Gray 200 | #d4d4d8 | Texto principal em modo claro, bordas em modo claro |
| gray-100 | Gray 100 | #f4f4f5 | Background modo claro |
| gray-50 | Gray 50 | #fafafa | Background branco suave |
| white | White | #ffffff | Texto principal em fundo escuro, botoes brancos |

## Gradientes

| Nome | CSS | Uso |
|------|-----|-----|
| Green Button | linear-gradient(135deg, #059669, #10b981) | Botao primario com glow |
| Green Text | linear-gradient(135deg, #ffffff, #6ee7b7, #34d399) | Titulos hero com gradiente |
| Green Glow | radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%) | Efeito de luz em backgrounds |
| Separator | linear-gradient(90deg, transparent, rgba(16,185,129,0.2), transparent) | Linhas divisorias sutis |
| Border fade | linear-gradient(90deg, transparent, #1a1a1f, transparent) | Bordas de secao |

## Sombras

| Nome | CSS | Uso |
|------|-----|-----|
| Green Glow SM | 0 0 16px rgba(16,185,129,0.15) | Botoes em repouso |
| Green Glow MD | 0 0 24px rgba(16,185,129,0.25) | Botoes em hover |
| Green Glow LG | 0 0 30px rgba(16,185,129,0.25), 0 8px 24px rgba(0,0,0,0.4) | Hero CTA em hover |

## Regras de Uso

- Background principal sempre escuro (#09090b)
- Texto principal em branco (#ffffff) sobre fundo escuro
- Texto secundario em gray-400 (#71717a)
- Verde nunca como background de secao inteira — sempre como accent, texto, borda ou glow
- Botoes primarios sempre com gradiente verde + sombra glow
- Separadores com gradiente fade (nunca linha solida visivel)
- Navbar com backdrop-filter blur + background semi-transparente

## Referencia Visual

Preview completo em: `assets/brand/preview-identidade-visual.html`

---

*Aprovado em: 31/03/2026*
*Versao: 1.0*
