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

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const params: { slug: string; page: string }[] = [];
  for (const slug of getAllCategories()) {
    const filtered = allPosts.filter((p) => p.category === slug);
    const total = getTotalPages(filtered, POSTS_PER_PAGE);
    // Pagina 1 vive em /blog/categoria/[slug]
    for (let i = 2; i <= total; i++) {
      params.push({ slug, page: String(i) });
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
