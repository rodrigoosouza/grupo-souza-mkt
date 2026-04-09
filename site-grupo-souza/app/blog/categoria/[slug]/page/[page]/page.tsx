import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/blog/blog-list";
import {
  getAllCategories,
  getAllPosts,
  getTotalPages,
  CATEGORY_LABELS,
  POSTS_PER_PAGE,
} from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const params: { slug: string; page: string }[] = [];
  for (const slug of getAllCategories()) {
    const filtered = allPosts.filter((p) => p.category === slug);
    const total = getTotalPages(filtered, POSTS_PER_PAGE);
    for (let i = 2; i <= total; i++) {
      params.push({ slug, page: String(i) });
    }
  }
  // Static export exige >=1 path. Placeholder 404 graceful se nao ha pagina 2+
  if (params.length === 0) {
    const cats = getAllCategories();
    if (cats.length > 0) {
      params.push({ slug: cats[0], page: "_placeholder" });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}): Promise<Metadata> {
  const { slug, page } = await params;
  const label = CATEGORY_LABELS[slug] ?? slug;
  return {
    title: `${label} — Página ${page} | Blog`,
    description: `Página ${page} dos artigos sobre ${label.toLowerCase()} no blog do Grupo Souza MKT.`,
    robots: { index: true, follow: true },
  };
}

export default async function CategoryPaginatedPage({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const pageNum = parseInt(page, 10);
  if (!pageNum || pageNum < 2) notFound();

  const filtered = getAllPosts().filter((p) => p.category === slug);
  const total = getTotalPages(filtered, POSTS_PER_PAGE);
  if (pageNum > total) notFound();

  return <BlogList page={pageNum} category={slug} />;
}
