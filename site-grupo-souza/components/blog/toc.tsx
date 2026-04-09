import { List, ChevronRight } from "lucide-react";
import type { TocItem } from "@/lib/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Sumário do artigo"
      className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-6 md:p-8 overflow-hidden"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/[0.08] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center">
            <List className="w-4 h-4 text-emerald-300" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[2px] font-mono text-emerald-500 font-bold">
              Neste artigo
            </div>
            <div className="text-sm text-white font-semibold font-sans">
              {items.length} seções
            </div>
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {items.map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              className={item.level === 3 ? "sm:col-span-2 sm:pl-6" : ""}
            >
              <a
                href={`#${item.id}`}
                className="group flex items-baseline gap-2.5 text-sm text-neutral-300 hover:text-emerald-400 transition-colors py-1"
              >
                <span className="font-mono text-[10px] text-emerald-500/50 group-hover:text-emerald-500 transition-colors flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug flex-1">{item.text}</span>
                <ChevronRight className="w-3 h-3 text-neutral-700 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
