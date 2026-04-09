#!/usr/bin/env node
/**
 * Cria um novo post de blog com frontmatter completo já preenchido.
 *
 * Uso:
 *   pnpm new-post "Título do artigo"
 *   pnpm new-post "Título" --category=tracking-dados
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

const VALID_CATEGORIES = [
  "trafego-pago",
  "tracking-dados",
  "cro-conversao",
  "automacao",
  "aieo-geo",
  "growth",
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseArgs(argv) {
  const args = { positional: [], category: "growth" };
  for (const a of argv.slice(2)) {
    if (a.startsWith("--category=")) args.category = a.split("=")[1];
    else if (!a.startsWith("--")) args.positional.push(a);
  }
  return args;
}

const args = parseArgs(process.argv);
const title = args.positional.join(" ").trim();

if (!title) {
  console.error("❌ Uso: pnpm new-post \"Título do artigo\" [--category=growth]");
  process.exit(1);
}

if (!VALID_CATEGORIES.includes(args.category)) {
  console.error(`❌ Categoria inválida: ${args.category}`);
  console.error(`   Válidas: ${VALID_CATEGORIES.join(", ")}`);
  process.exit(1);
}

const slug = slugify(title);
const filePath = path.join(BLOG_DIR, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`❌ Já existe um post com esse slug: ${slug}.md`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const frontmatter = `---
# === Identificação ===
title: "${title}"
slug: "${slug}"
date: "${today}"
updated: "${today}"
status: "draft"

# === Conteúdo / Card ===
excerpt: "TODO: resumo de 1-2 frases (150-160 chars exatos)."
category: "${args.category}"
tags: []
author: "Rodrigo Souza"

# === Imagem destaque ===
cover: "/blog/${slug}-cover.jpg"
cover_alt: "TODO: descrição factual da imagem"

# === SEO ===
seo_title: "${title} | Grupo Souza"
seo_description: "TODO: meta description (150-160 chars)."
seo_keyword: ""
seo_keywords: []
canonical: ""
og_image: ""

# === AIEO / GEO ===
schema_type: "Article"
faq:
  - question: "TODO: pergunta direta?"
    answer: "TODO: resposta de 2-3 frases."

# === Lead Magnet (sticky sidebar opcional) ===
# lead_magnet:
#   title: "TODO: titulo da isca (40-60 chars)"
#   description: "TODO: 1-2 frases de pitch (100-140 chars)"
#   cta_text: "Quero baixar"
#   cta_url: "/diagnostico"
#   badge: "Gratis"
#   image: "/blog/lead-magnets/exemplo.jpg"  # opcional

# === Estrutura ===
toc: true
related_posts: []
language: "pt-BR"
---

> **Resposta rápida:** TODO: 50-100 palavras respondendo a query principal de forma completa.

## TODO: Introdução

Parágrafo curto com a dor concreta.

Parágrafo curto com o custo de não resolver.

Parágrafo curto com o que o artigo entrega.

## O que é [tópico]

**Definição** clara: X é Y porque Z. Como funciona em uma frase.

## Por que isso importa

Contexto + dados + consequências.

## Como funciona

Passo a passo ou framework.

## Erros comuns

### 1. Erro um
Explicação curta + correção.

### 2. Erro dois
Explicação curta + correção.

## Comparativo

| Opção | Prós | Contras |
|---|---|---|
| A | ... | ... |
| B | ... | ... |

## Perguntas frequentes

### Pergunta direta?
Resposta direta de 2-3 frases.

## Conclusão

Reforce o ponto principal + próximo passo prático.

---

**Quer aplicar isso no seu negócio?** [Agende um diagnóstico gratuito de 30 minutos](/diagnostico) — a gente analisa seu funil atual e mostra exatamente onde está perdendo dinheiro.
`;

fs.mkdirSync(BLOG_DIR, { recursive: true });
fs.writeFileSync(filePath, frontmatter, "utf-8");

console.log(`✅ Post criado: content/blog/${slug}.md`);
console.log(`   Title: ${title}`);
console.log(`   Slug: ${slug}`);
console.log(`   Category: ${args.category}`);
console.log(`   Status: draft`);
console.log("");
console.log("📸 Não esquece da capa: public/blog/" + slug + "-cover.jpg");
console.log("   Tamanho: 1600x900px ou 1200x630px (16:9), JPG/WebP, ≤200KB");
