import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export function RecentPosts() {
  const posts = getAllPosts()
    .filter((p) => p.status === "published")
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-24 relative">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[300px] bg-emerald-600/[0.04] blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[11px] uppercase tracking-wider font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-1.5px] text-white mb-3">
            Conteúdo que gera resultado
          </h2>
          <p className="text-neutral-400 max-w-xl font-sans">
            Artigos técnicos sobre tracking, growth, AIEO e infraestrutura de aquisição.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] hover:bg-emerald-500/10 hover:border-emerald-500/40 text-emerald-400 px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap"
        >
          Ver todos os artigos
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid 3 cards iguais */}
      <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className={`[animation:animationIn_0.8s_ease-out_${0.2 + i * 0.1}s_both] animate-on-scroll`}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
