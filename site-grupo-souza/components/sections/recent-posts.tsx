import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ArrowUpRight, ImageIcon } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { CategoryBadge } from "@/components/blog/category-badge";

export function RecentPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-24">
      {/* Header */}
      <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll flex items-end justify-between mb-12">
        <div>
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-1.5px]">
            Artigos recentes
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden md:flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
        >
          Ver todos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Featured post — larger */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group rounded-2xl border border-white/[0.06] bg-[#0A0A0A] hover:border-emerald-500/15 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.04] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Cover */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-black">
            {featured.cover ? (
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-emerald-500/20">
                <ImageIcon className="w-12 h-12" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>

          <div className="relative p-7 md:p-8">
            <div className="mb-6">
              <CategoryBadge category={featured.category} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
              {featured.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
              {featured.excerpt}
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span>{featured.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.readingTime} min
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
        </Link>

        {/* Other posts — stacked */}
        <div className="flex flex-col gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] hover:border-emerald-500/15 transition-all duration-500 flex relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Cover thumb */}
              <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-black">
                {post.cover ? (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-emerald-500/20">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
              </div>

              <div className="relative p-5 flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <CategoryBadge category={post.category} />
                  <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile "ver todos" */}
      <div className="mt-8 text-center lg:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
        >
          Ver todos os artigos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
