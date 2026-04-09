import type { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";
import {
  getAllCategories,
  CATEGORY_LABELS,
} from "@/lib/blog";

export async function generateStaticParams() {
  return getAllCategories().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug] ?? slug;
  return {
    title: `${label} — Blog`,
    description: `Artigos sobre ${label.toLowerCase()} no blog do Grupo Souza MKT.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogList page={1} category={slug} />;
}
