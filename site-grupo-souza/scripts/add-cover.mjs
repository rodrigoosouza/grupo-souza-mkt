#!/usr/bin/env node
/**
 * Adiciona uma imagem de capa pra um artigo do blog.
 *
 * - Pega qualquer imagem (qualquer formato, qualquer pasta)
 * - Redimensiona pra max 1600px de largura (preservando ratio)
 * - Converte pra JPG com qualidade 82 (~150-180KB)
 * - Salva em public/blog/{slug}-cover.jpg com nome SEO-friendly
 *
 * Uso:
 *   pnpm add-cover {slug} {caminho-da-imagem}
 *
 * Exemplos:
 *   pnpm add-cover beneficios-tracking-gtm ~/Downloads/foto.png
 *   pnpm add-cover como-reduzir-cpl /tmp/cover.heic
 *   pnpm add-cover o-que-e-aieo-geo "/Users/eu/Pictures/imagem.jpg"
 *
 * Requisitos: macOS (usa `sips` nativo, sem dependencias npm).
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(PROJECT_ROOT, "content", "blog");
const PUBLIC_BLOG = path.join(PROJECT_ROOT, "public", "blog");

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

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

const [, , rawSlug, sourcePath] = process.argv;

if (!rawSlug || !sourcePath) {
  console.error("❌ Uso: pnpm add-cover {slug-do-artigo} {caminho-da-imagem}");
  console.error("");
  console.error("Exemplos:");
  console.error("  pnpm add-cover beneficios-tracking-gtm ~/Downloads/foto.png");
  console.error("  pnpm add-cover como-reduzir-cpl /tmp/cover.heic");
  console.error("");
  console.error("Lista de artigos disponiveis:");
  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => "  - " + f.replace(".md", ""))
    .join("\n");
  console.error(posts);
  process.exit(1);
}

const slug = slugify(rawSlug);

// 1. Valida que o post existe
const postPath = path.join(BLOG_DIR, `${slug}.md`);
if (!fs.existsSync(postPath)) {
  fail(`Post nao encontrado: content/blog/${slug}.md\n   Verifica o slug ou crie o post primeiro com 'pnpm new-post'`);
}

// 2. Resolve o caminho da imagem (~ expand)
const expandedSource = sourcePath.replace(/^~/, process.env.HOME || "");
const absSource = path.isAbsolute(expandedSource)
  ? expandedSource
  : path.resolve(process.cwd(), expandedSource);

if (!fs.existsSync(absSource)) {
  fail(`Imagem nao encontrada: ${absSource}`);
}

// 3. Verifica se sips esta disponivel (macOS)
try {
  execSync("which sips", { stdio: "ignore" });
} catch {
  fail("Este script requer 'sips' (macOS). Para Linux/Windows, instale ImageMagick e adapte o comando.");
}

// 4. Garante a pasta destino
fs.mkdirSync(PUBLIC_BLOG, { recursive: true });

// 5. Define o destino com nome SEO
const destFilename = `${slug}-cover.jpg`;
const destPath = path.join(PUBLIC_BLOG, destFilename);

// 6. Copia pra pasta temporaria pra processar
const tmpPath = path.join(PUBLIC_BLOG, `.tmp-${Date.now()}.jpg`);

console.log(`📷 Processando: ${path.basename(absSource)}`);
console.log(`   → ${destFilename}`);
console.log("");

try {
  // sips: redimensiona pra max 1500px (preserva ratio), converte pra JPEG, qualidade 75
  // (sweet spot LCP: ~150-250KB pra hero image em 16:9)
  execSync(
    `sips -Z 1500 --setProperty format jpeg --setProperty formatOptions 75 "${absSource}" --out "${tmpPath}"`,
    { stdio: "pipe" }
  );

  // Move o tmp pro destino final
  fs.renameSync(tmpPath, destPath);

  // Stats
  const stats = fs.statSync(destPath);
  const sizeKB = (stats.size / 1024).toFixed(1);
  const dimsRaw = execSync(`sips -g pixelWidth -g pixelHeight "${destPath}"`, {
    encoding: "utf-8",
  });
  const w = dimsRaw.match(/pixelWidth: (\d+)/)?.[1];
  const h = dimsRaw.match(/pixelHeight: (\d+)/)?.[1];

  console.log(`✅ Capa salva em: site-grupo-souza/public/blog/${destFilename}`);
  console.log(`   Tamanho: ${w}x${h}px · ${sizeKB} KB`);
  console.log("");

  // Verifica se ta dentro dos limites
  if (sizeKB > 250) {
    console.log(`⚠️  Arquivo passou de 250KB. Considere uma imagem fonte menor ou rode novamente com qualidade menor.`);
  }
  if (parseInt(w) < 1200) {
    console.log(`⚠️  Largura abaixo de 1200px — pode ficar baixa qualidade em telas grandes.`);
  }

  // Atualiza o frontmatter do post se ainda nao tem cover correto
  const post = fs.readFileSync(postPath, "utf-8");
  const expectedCover = `/blog/${destFilename}`;
  if (!post.includes(expectedCover)) {
    const updated = post.replace(
      /^cover:\s*"[^"]*"/m,
      `cover: "${expectedCover}"`
    );
    if (updated !== post) {
      fs.writeFileSync(postPath, updated, "utf-8");
      console.log(`✏️  Frontmatter atualizado: cover: "${expectedCover}"`);
    }
  }

  console.log("");
  console.log(`🚀 Pronto. A capa ja vai aparecer no proximo build/dev.`);
} catch (err) {
  if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  fail(`Falha ao processar imagem: ${err.message}`);
}
