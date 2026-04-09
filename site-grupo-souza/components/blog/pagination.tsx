import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Caminho base SEM trailing slash. Pagina 1 = basePath. Demais = basePath/page/N */
  basePath: string;
}

/**
 * Gera array de paginas pra mostrar com elipses inteligentes.
 * Regras:
 * - Sempre mostra primeira e ultima
 * - Mostra 2 de cada lado da atual
 * - Usa "..." quando ha gap
 *
 * Exemplos (atual em colchetes):
 *   1 paginas: [1]
 *   5 paginas, atual 3: 1 2 [3] 4 5
 *   10 paginas, atual 5: 1 ... 4 [5] 6 ... 10
 *   10 paginas, atual 1: [1] 2 3 ... 10
 *   10 paginas, atual 10: 1 ... 8 9 [10]
 */
function getPageRange(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];
  const showLeft = Math.max(2, current - 1);
  const showRight = Math.min(total - 1, current + 1);

  pages.push(1);
  if (showLeft > 2) pages.push("ellipsis");
  for (let i = showLeft; i <= showRight; i++) pages.push(i);
  if (showRight < total - 1) pages.push("ellipsis");
  pages.push(total);

  return pages;
}

function pageHref(basePath: string, page: number): string {
  if (page === 1) return basePath;
  return `${basePath}/page/${page}`;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const range = getPageRange(currentPage, totalPages);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Paginacao do blog"
      className="flex items-center justify-center gap-2 mt-16"
    >
      {/* Prev */}
      {hasPrev ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          rel="prev"
          aria-label="Pagina anterior"
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-sm text-neutral-300 hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/[0.05] transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="hidden sm:inline">Anterior</span>
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.04] bg-white/[0.01] text-sm text-neutral-700 cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </span>
      )}

      {/* Numbers */}
      <div className="flex items-center gap-1.5">
        {range.map((item, i) => {
          if (item === "ellipsis") {
            return (
              <span
                key={`ellipsis-${i}`}
                className="w-10 h-10 inline-flex items-center justify-center text-neutral-600"
                aria-hidden="true"
              >
                <MoreHorizontal className="w-4 h-4" />
              </span>
            );
          }
          const isActive = item === currentPage;
          return (
            <Link
              key={item}
              href={pageHref(basePath, item)}
              aria-label={`Pagina ${item}`}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "w-10 h-10 inline-flex items-center justify-center rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-300 font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  : "w-10 h-10 inline-flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-neutral-400 text-sm hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/[0.05] transition-all"
              }
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Next */}
      {hasNext ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          rel="next"
          aria-label="Proxima pagina"
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-sm text-neutral-300 hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/[0.05] transition-all"
        >
          <span className="hidden sm:inline">Proxima</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.04] bg-white/[0.01] text-sm text-neutral-700 cursor-not-allowed"
        >
          <span className="hidden sm:inline">Proxima</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}
