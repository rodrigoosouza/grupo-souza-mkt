import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "./category-badge";
import type { BlogPost } from "@/lib/blog";

interface PostCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  // Cover: usa custom se houver, senao OG image dinamica gerada no build
  const coverImage = post.cover || `/blog/${post.slug}/opengraph-image`;

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:border-emerald-500/20 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)] flex flex-col">
        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-black flex-shrink-0">
          <Image
            src={coverImage}
            alt={post.cover_alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized={!post.cover}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />
          {/* Category badge over image */}
          <div className="absolute top-3 left-3 z-10">
            <CategoryBadge category={post.category} />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 p-6">
          {/* Glow on hover */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/[0.06] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h3 className="relative text-lg font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors duration-300 mb-3 line-clamp-2">
            {post.title}
          </h3>

          <p className="relative text-sm text-gray-400 leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>

          {/* Footer meta */}
          <div className="relative flex items-center justify-between gap-3 mt-auto pt-5 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 text-xs text-gray-500 min-w-0">
              <span className="flex items-center gap-1 truncate">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{formatDate(post.date)}</span>
              </span>
              <span className="flex items-center gap-1 flex-shrink-0">
                <Clock className="w-3 h-3" />
                {post.readingTime} min
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </div>
        </div>
      </article>
    </Link>
  );
}
