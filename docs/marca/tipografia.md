# Tipografia — Grupo Souza MKT

## Fontes

### Inter — Fonte Principal
Usada para titulos, corpo, labels, UI e toda comunicacao visual.
Limpa, moderna, funciona em qualquer tamanho. Mesma familia usada por Vercel, Linear e marcas tech premium.

- Google Fonts: `Inter`
- Pesos: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold), 900 (Black)
- Fallback: `-apple-system, BlinkMacSystemFont, sans-serif`

### JetBrains Mono — Fonte Tecnica
Usada para codigo, dados tecnicos, labels de metricas, hex codes e elementos que reforcem o posicionamento tecnico/engenharia.

- Google Fonts: `JetBrains Mono`
- Pesos: 400 (Regular), 500 (Medium), 600 (Semibold)
- Fallback: `Menlo, Monaco, monospace`

## Hierarquia

| Nivel | Tamanho | Peso | Letter-spacing | Line-height | Fonte |
|-------|---------|------|---------------|-------------|-------|
| Display | 56px | 900 (Black) | -2.5px | 1.0 | Inter |
| H1 | 48px | 800 (Extrabold) | -2px | 1.05 | Inter |
| H2 | 40px | 800 (Extrabold) | -1.5px | 1.1 | Inter |
| H3 | 28px | 700 (Bold) | -0.8px | 1.2 | Inter |
| H4 | 20px | 700 (Bold) | -0.5px | 1.3 | Inter |
| Body | 16px | 400 (Regular) | 0 | 1.7 | Inter |
| Body Small | 14px | 400 (Regular) | 0 | 1.6 | Inter |
| Overline | 11px | 700 (Bold) | 3px | 1.4 | Inter (uppercase) |
| Label | 13px | 600 (Semibold) | 0.3px | 1.4 | Inter |
| Code | 14px | 500 (Medium) | 0 | 1.6 | JetBrains Mono |
| Code Small | 12px | 500 (Medium) | 0.5px | 1.5 | JetBrains Mono |

## Regras de Uso

- Titulos sempre com letter-spacing negativo (tracking apertado) — transmite solidez e modernidade
- Overlines sempre uppercase com letter-spacing largo (3px) — usados para labels de secao
- Corpo sempre com line-height generoso (1.7) — legibilidade acima de tudo
- JetBrains Mono reservado para contextos tecnicos — nunca usar em titulos ou corpo de texto
- Em fundo escuro: texto principal em white (#ffffff), secundario em gray-300 (#a1a1aa)
- Em fundo claro: texto principal em black (#09090b), secundario em gray-500 (#52525b)

## Importacao (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

## CSS Base

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code, .mono {
  font-family: 'JetBrains Mono', Menlo, Monaco, monospace;
}
```

## Referencia Visual

Preview completo em: `assets/brand/preview-identidade-visual.html`

---

*Aprovado em: 31/03/2026*
*Versao: 1.0*
