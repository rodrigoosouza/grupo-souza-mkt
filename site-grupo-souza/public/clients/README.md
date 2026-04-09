# Logos de clientes

Esta pasta guarda os logos de clientes do Grupo Souza pra exibir no site
(seções de prova social tipo "Marquee", listagem de cases, etc).

## Convenção de nomes

```
{slug-do-cliente}.svg     ← preferido (escala perfeita, peso minimo)
{slug-do-cliente}.png     ← fallback se nao tiver SVG
```

Exemplos:
- `acme-corp.svg`
- `educatech.png`
- `clinica-santa-luz.svg`

## Specs tecnicas

| Item | Valor |
|---|---|
| Formato preferido | **SVG** (vetor, escala perfeita) |
| Formato fallback | PNG transparente (sem fundo) |
| Altura ideal renderizada | 32-48px (pra marquee) |
| Cor | Logo monocromatico claro (vai sobre fundo escuro) |
| Tamanho de arquivo | < 50KB cada |

## Como vao ser usados no site

Os logos vao aparecer em pelo menos 3 lugares:
1. **Marquee/scroll** na home (linha de logos rodando)
2. **Pagina de historias** ao lado de cada case
3. **Footer** em "Empresas que confiam"

## Convencao de cor

Como o site e dark mode-first, os logos precisam ser **brancos ou claros**
no PNG/SVG. Se o logo original e colorido:

- **SVG**: edita o `fill` pra `currentColor` ou `#ffffff` direto
- **PNG**: usa versao branca/clara do logo (logo "white" ou "monochrome")

Se nao tiver versao branca, me passa o original colorido que eu trato.

## Fluxo de upload

1. Voce dropa os logos nesta pasta
2. Me avisa quais clientes adicionou
3. Eu integro nas secoes do site (marquee, historias, footer)
