import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts, getTotalPages, POSTS_PER_PAGE } from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  const total = getTotalPages(getAllPosts(), POSTS_PER_PAGE);
  // Pagina 1 e renderizada por /blog/page.tsx — nao gera aqui
  const pages: { page: string }[] = [];
  for (let i = 2; i <= total; i++) pages.push({ page: String(i) });
  // Static export exige >=1 path. Se nao ha pagina 2+ ainda, gera placeholder
  // que vira 404 graceful via notFound() no componente.
  if (pages.length === 0) pages.push({ page: "_placeholder" });
  return pages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog — Página ${page}`,
    description: `Página ${page} do blog do Grupo Souza MKT — artigos sobre growth marketing, tracking, CRO, AIEO/GEO e infraestrutura de aquisição.`,
    robots: { index: true, follow: true },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);
  if (!pageNum || pageNum < 2) notFound();

  const total = getTotalPages(getAllPosts(), POSTS_PER_PAGE);
  if (pageNum > total) notFound();

  return <BlogList page={pageNum} />;
}
