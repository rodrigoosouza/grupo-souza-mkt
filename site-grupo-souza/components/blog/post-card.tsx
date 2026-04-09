import Link from "next/link";
import { Clock, User, Calendar } from "lucide-react";
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
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative h-full rounded-2xl border border-white/[0.06] bg-gray-950/50 p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]">
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-emerald-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col gap-4">
          <CategoryBadge category={post.category} />

          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-4 border-t border-white/[0.06]">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
