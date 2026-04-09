import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

/**
 * Cache-bust pra imagens locais. Adiciona ?v={mtime} a URLs que apontam pra
 * arquivos em public/. Resolve cache de browser/CDN quando a imagem e
 * sobrescrita mantendo o mesmo nome.
 */
function withCacheBust(url: string | undefined): string | undefined {
  if (!url || !url.startsWith("/")) return url;
  if (url.includes("?")) return url; // ja tem query
  try {
    const filePath = path.join(PUBLIC_DIR, url);
    if (!fs.existsSync(filePath)) return url;
    const mtime = Math.floor(fs.statSync(filePath).mtimeMs);
    return `${url}?v=${mtime}`;
  } catch {
    return url;
  }
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogLeadMagnet {
  title: string;
  description?: string;
  cta_text: string;
  cta_url: string;
  image?: string;
  badge?: string;
}

export interface BlogPost {
  // Identificação
  title: string;
  slug: string;
  date: string;
  updated?: string;
  status: string;

  // Conteúdo
  excerpt: string;
  category: string;
  tags: string[];
  author: string;

  // Imagem destaque
  cover?: string;
  cover_alt?: string;

  // SEO
  seo_title: string;
  seo_description: string;
  seo_keyword?: string;
  seo_keywords: string[];
  canonical?: string;
  og_image?: string;

  // AIEO
  schema_type: string;
  faq: BlogFAQ[];

  // Lead magnet vinculado (sticky sidebar)
  lead_magnet?: BlogLeadMagnet;

  // Estrutura
  toc: boolean;
  related_posts: string[];
  language: string;

  // Computado
  content: string;
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      if (data.status !== "published") return null;

      return {
        title: data.title ?? "",
        slug: data.slug ?? filename.replace(/\.md$/, ""),
        date: data.date ?? "",
        updated: data.updated ?? undefined,
        status: data.status ?? "draft",
        excerpt: data.excerpt ?? "",
        category: data.category ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: data.author ?? "",
        cover: withCacheBust(data.cover),
        cover_alt: data.cover_alt ?? undefined,
        seo_title: data.seo_title ?? data.title ?? "",
        seo_description: data.seo_description ?? data.excerpt ?? "",
        seo_keyword: data.seo_keyword ?? undefined,
        seo_keywords: Array.isArray(data.seo_keywords) ? data.seo_keywords : [],
        canonical: data.canonical || undefined,
        og_image: data.og_image || undefined,
        schema_type: data.schema_type ?? "Article",
        faq: Array.isArray(data.faq) ? data.faq : [],
        lead_magnet:
          data.lead_magnet && typeof data.lead_magnet === "object"
            ? {
                title: data.lead_magnet.title ?? "",
                description: data.lead_magnet.description ?? undefined,
                cta_text: data.lead_magnet.cta_text ?? "Quero saber mais",
                cta_url: data.lead_magnet.cta_url ?? "/diagnostico",
                image: data.lead_magnet.image ?? undefined,
                badge: data.lead_magnet.badge ?? undefined,
              }
            : undefined,
        toc: data.toc ?? true,
        related_posts: Array.isArray(data.related_posts) ? data.related_posts : [],
        language: data.language ?? "pt-BR",
        content,
        readingTime: calculateReadingTime(content),
      } as BlogPost;
    })
    .filter((post): post is BlogPost => post !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  const all = getAllPosts();
  // Prefer same category, fall back to recent posts
  const sameCategory = all.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );
  const others = all.filter(
    (p) => p.slug !== currentSlug && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

// === Paginacao ===

export const POSTS_PER_PAGE = 12;

export interface PaginatedResult {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export function paginatePosts(
  allPosts: BlogPost[],
  page: number,
  perPage: number = POSTS_PER_PAGE
): PaginatedResult {
  const totalPosts = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  return {
    posts: allPosts.slice(start, end),
    currentPage,
    totalPages,
    totalPosts,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}

/** Numero total de paginas pra um conjunto de posts. Usado em generateStaticParams. */
export function getTotalPages(
  posts: BlogPost[],
  perPage: number = POSTS_PER_PAGE
): number {
  return Math.max(1, Math.ceil(posts.length / perPage));
}

export const CATEGORY_LABELS: Record<string, string> = {
  "trafego-pago": "Tráfego Pago",
  "tracking-dados": "Tracking & Dados",
  "cro-conversao": "CRO & Conversão",
  automacao: "Automação",
  "aieo-geo": "AIEO/GEO",
  growth: "Growth",
};
