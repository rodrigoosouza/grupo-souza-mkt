import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import {
  getAllCategories,
  getPostsByCategory,
  CATEGORY_LABELS,
} from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

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
  const posts = getPostsByCategory(slug);
  const categories = getAllCategories();
  const label = CATEGORY_LABELS[slug] ?? slug;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/20 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              <Filter className="w-4 h-4" />
              Categoria
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {label}
            </h1>
            <p className="text-lg text-gray-400">
              {posts.length} {posts.length === 1 ? "artigo" : "artigos"} nesta
              categoria
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Category filters + Posts */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/[0.06] text-gray-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05]"
            >
              Todos
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/categoria/${category}`}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  category === slug
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-white/[0.06] text-gray-400 hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05]"
                }`}
              >
                {CATEGORY_LABELS[category] ?? category}
              </Link>
            ))}
          </div>

          {/* Back to blog */}
          <div className="mb-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os artigos
            </Link>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className={`[animation:animationIn_0.8s_ease-out_${0.1 + index * 0.1}s_both] animate-on-scroll`}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              Nenhum artigo nesta categoria ainda.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
