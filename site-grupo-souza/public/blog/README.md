# Imagens de capa dos artigos do blog

Esta pasta guarda as imagens de capa (cover) dos artigos do blog do Grupo Souza MKT.

## Convenção de nomes

Cada artigo `.md` em `content/blog/` referencia uma capa em:

```
/blog/{slug-do-artigo}-cover.jpg
```

Ou seja, se o artigo é `content/blog/beneficios-tracking-completo-gtm-2026.md`, a capa fica em:

```
site-grupo-souza/public/blog/beneficios-tracking-completo-gtm-2026-cover.jpg
```

## Especificações técnicas

| Item | Valor |
|---|---|
| **Aspect ratio** | 16:9 |
| **Tamanho ideal** | 1600 × 900 px (ou 1200 × 630 px) |
| **Formato** | JPG ou WebP |
| **Tamanho de arquivo** | máximo 200 KB |
| **Orientação** | Horizontal (paisagem) |
| **Style** | Visual + dark + emerald accent (alinhado com a marca) |

## Fallback automático

**Se você não criar a imagem custom**, o site usa automaticamente a **OG image dinâmica** gerada no build (1200×630, com título do artigo + categoria + autor + glow emerald).

Ou seja: cada artigo já tem cover bonito automaticamente. Você só precisa criar a imagem custom quando quiser uma foto/visual específico pra um artigo importante.

## 🚀 Workflow recomendado: `pnpm add-cover`

Em vez de redimensionar manualmente, use o script automatizado:

```bash
cd site-grupo-souza
pnpm add-cover {slug-do-artigo} {caminho-da-imagem}
```

**Exemplos:**

```bash
# Imagem do Downloads
pnpm add-cover beneficios-tracking-completo-gtm-2026 ~/Downloads/foto.png

# HEIC do iPhone
pnpm add-cover como-reduzir-cpl-com-dados /tmp/IMG_4823.HEIC

# Caminho completo
pnpm add-cover o-que-e-aieo-geo "/Users/eu/Pictures/banner.jpg"
```

**O que o script faz automaticamente:**
1. ✅ Valida que o post `.md` existe
2. ✅ Lê a imagem fonte (qualquer formato: PNG, JPG, HEIC, WebP, TIFF)
3. ✅ Redimensiona pra max 1600px de largura (preserva ratio)
4. ✅ Converte pra JPG com qualidade 82 (~150-180KB)
5. ✅ Salva em `public/blog/{slug}-cover.jpg` com nome SEO-friendly
6. ✅ Atualiza o frontmatter do post automaticamente
7. ✅ Avisa se o arquivo ficou maior que 250KB ou menor que 1200px
8. ✅ Remove acentos, espaços, caracteres invalidos do nome

Resultado: você não precisa pensar em nada — só dropa a imagem e roda o comando.

## Como criar imagens (do zero)

Opções recomendadas (em ordem de preferência):

1. **DALL-E 3** (via Bing Image Creator grátis ou ChatGPT Plus) — fotos conceituais
2. **Midjourney** — arte estilizada
3. **Recraft** — branding consistente entre artigos
4. **Canva** — edição manual com templates
5. **Unsplash** — fotos de banco grátis (procure por temas técnicos)

### Prompt template para DALL-E

```
Cinematic dark tech illustration, [TEMA DO ARTIGO], deep black background with subtle emerald green glow accents, minimal grid pattern, professional editorial style, 16:9 ratio, no text, photorealistic
```

Substitua `[TEMA DO ARTIGO]` por algo como "Google Tag Manager dashboard", "marketing analytics funnel", "AI search engines", etc.

## Lista de artigos atuais (precisam de capa custom?)

| Artigo | Slug | Capa custom? |
|---|---|---|
| Tracking completo no GTM | `beneficios-tracking-completo-gtm-2026` | OG dinâmico (OK) |
| Por que tracking > tráfego | `por-que-tracking-e-mais-importante-que-trafego` | OG dinâmico (OK) |
| Como reduzir CPL | `como-reduzir-cpl-com-dados` | OG dinâmico (OK) |
| Escolher agência | `como-escolher-agencia-de-marketing-digital` | OG dinâmico (OK) |
| Google Ads vs Meta Ads | `google-ads-vs-meta-ads-qual-escolher` | OG dinâmico (OK) |
| O que é AIEO/GEO | `o-que-e-aieo-geo` | OG dinâmico (OK) |

Quando criar uma imagem custom, basta colocar nesta pasta com o nome correto (`{slug}-cover.jpg`) — o site detecta automaticamente e substitui o OG dinâmico.
