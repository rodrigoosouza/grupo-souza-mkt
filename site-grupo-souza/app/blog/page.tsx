import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Mail } from "lucide-react";
import { getAllPosts, getAllCategories, CATEGORY_LABELS } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre growth marketing, tracking avançado, CRO, automação e estratégias de aquisição para empresas em crescimento.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/20 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Conteúdo que gera{" "}
              <span className="text-emerald-400">resultado</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Artigos práticos sobre growth marketing, tracking, CRO, automação
              e tudo que envolve a infraestrutura de aquisição que faz empresas
              crescerem com previsibilidade.
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
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              Todos
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/categoria/${category}`}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/[0.06] text-gray-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05]"
              >
                {CATEGORY_LABELS[category] ?? category}
              </Link>
            ))}
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
              Nenhum artigo publicado ainda.
            </p>
          )}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Newsletter CTA */}
      <section className="relative py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Fique por dentro
            </h2>
            <p className="text-gray-400 mb-6">
              Receba conteúdo sobre growth marketing direto no seu email.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
