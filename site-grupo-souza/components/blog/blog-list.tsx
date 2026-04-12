import Link from "next/link";
import { BookOpen } from "lucide-react";
import {
  paginatePosts,
  getAllPosts,
  getAllCategories,
  CATEGORY_LABELS,
  POSTS_PER_PAGE,
} from "@/lib/blog";
import { PostCard } from "./post-card";
import { Pagination } from "./pagination";

interface BlogListProps {
  page: number;
  /** Quando definido, filtra posts por categoria. Se undefined, mostra todos. */
  category?: string;
}

export function BlogList({ page, category }: BlogListProps) {
  const allPosts = getAllPosts();
  const filtered = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;

  const { posts, currentPage, totalPages, totalPosts } = paginatePosts(
    filtered,
    page,
    POSTS_PER_PAGE
  );

  const categories = getAllCategories();
  const isCategory = !!category;
  const basePath = isCategory ? `/blog/categoria/${category}` : "/blog";
  const categoryLabel = category ? CATEGORY_LABELS[category] ?? category : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/20 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {isCategory ? "Categoria" : "Blog"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {isCategory ? (
                categoryLabel
              ) : (
                <>
                  Conteúdo que gera{" "}
                  <span className="text-emerald-400">resultado</span>
                </>
              )}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {isCategory
                ? `${totalPosts} ${totalPosts === 1 ? "artigo" : "artigos"} nesta categoria`
                : "Artigos práticos sobre growth marketing, tracking, CRO, automação e tudo que envolve a infraestrutura de aquisição que faz empresas crescerem com previsibilidade."}
            </p>
            {totalPages > 1 && (
              <p className="text-sm text-neutral-500 mt-3 font-mono">
                Página {currentPage} de {totalPages} · {totalPosts}{" "}
                {totalPosts === 1 ? "artigo" : "artigos"} no total
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Filtros + posts */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            <Link
              href="/blog"
              className={
                !isCategory
                  ? "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors hover:bg-emerald-500/20"
                  : "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/[0.06] text-gray-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05]"
              }
            >
              Todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/categoria/${cat}`}
                className={
                  cat === category
                    ? "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors"
                    : "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/[0.06] text-gray-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05]"
                }
              >
                {CATEGORY_LABELS[cat] ?? cat}
              </Link>
            ))}
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <div
                    key={post.slug}
                    className={`[animation:animationIn_0.8s_ease-out_${0.1 + (index % 6) * 0.05}s_both] animate-on-scroll`}
                  >
                    <PostCard post={post} />
                  </div>
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={basePath}
              />
            </>
          ) : (
            <p className="text-center text-gray-500 py-20">
              {isCategory
                ? "Nenhum artigo nesta categoria ainda."
                : "Nenhum artigo publicado ainda."}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
