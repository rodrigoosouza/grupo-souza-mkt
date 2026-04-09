import { List, ChevronDown } from "lucide-react";
import type { TocItem } from "@/lib/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;

  // Conta apenas H2s pra mostrar no resumo
  const h2Count = items.filter((i) => i.level === 2).length;

  return (
    <details
      className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black overflow-hidden"
      aria-label="Sumário do artigo"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent pointer-events-none" />
      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/[0.06] blur-[80px] rounded-full pointer-events-none" />

      <summary className="relative cursor-pointer list-none select-none px-6 py-5 hover:bg-white/[0.02] transition-colors">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <List className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[2px] font-mono text-emerald-500 font-bold">
                Sumário
              </div>
              <div className="text-sm text-white font-semibold font-sans">
                {h2Count} {h2Count === 1 ? "seção" : "seções"} · clique pra expandir
              </div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-open:bg-emerald-500/10 group-open:border-emerald-500/30 transition-colors">
            <ChevronDown className="w-4 h-4 text-neutral-400 group-open:text-emerald-400 group-open:rotate-180 transition-all duration-300" />
          </div>
        </div>
      </summary>

      <div className="relative px-6 pb-6 pt-1">
        <div className="border-t border-white/[0.06] pt-5">
          <ol className="space-y-2.5">
            {items.map((item, i) => (
              <li
                key={`${item.id}-${i}`}
                className={item.level === 3 ? "pl-7" : ""}
              >
                <a
                  href={`#${item.id}`}
                  className="group/link flex items-baseline gap-3 text-sm text-neutral-300 hover:text-emerald-400 transition-colors py-1"
                >
                  {item.level === 2 && (
                    <span className="font-mono text-[10px] text-emerald-500/50 group-hover/link:text-emerald-500 transition-colors flex-shrink-0 w-5">
                      {String(items.filter((it, idx) => it.level === 2 && idx <= i).length).padStart(2, "0")}
                    </span>
                  )}
                  {item.level === 3 && (
                    <span className="text-emerald-500/30 flex-shrink-0">↳</span>
                  )}
                  <span className="leading-snug flex-1">{item.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </details>
  );
}
