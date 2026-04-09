import { List } from "lucide-react";
import type { TocItem } from "@/lib/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Sumário do artigo"
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 mb-10"
    >
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[2px] font-mono text-emerald-500 mb-4">
        <List className="w-3 h-3" />
        Sumário
      </div>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li
            key={`${item.id}-${i}`}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              <span className="font-mono text-[10px] text-neutral-600 group-hover:text-emerald-500/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-snug">{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
