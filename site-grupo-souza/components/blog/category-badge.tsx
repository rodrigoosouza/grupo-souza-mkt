import { CATEGORY_LABELS } from "@/lib/blog";

const CATEGORY_COLORS: Record<
  string,
  { text: string; border: string; dot: string }
> = {
  "trafego-pago": {
    text: "text-emerald-300",
    border: "border-emerald-400/40",
    dot: "bg-emerald-400",
  },
  "tracking-dados": {
    text: "text-sky-300",
    border: "border-sky-400/40",
    dot: "bg-sky-400",
  },
  "cro-conversao": {
    text: "text-amber-300",
    border: "border-amber-400/40",
    dot: "bg-amber-400",
  },
  automacao: {
    text: "text-fuchsia-300",
    border: "border-fuchsia-400/40",
    dot: "bg-fuchsia-400",
  },
  "aieo-geo": {
    text: "text-cyan-300",
    border: "border-cyan-400/40",
    dot: "bg-cyan-400",
  },
  growth: {
    text: "text-emerald-300",
    border: "border-emerald-400/40",
    dot: "bg-emerald-400",
  },
};

const DEFAULT_COLORS = {
  text: "text-neutral-200",
  border: "border-neutral-400/40",
  dot: "bg-neutral-400",
};

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const colors = CATEGORY_COLORS[category] ?? DEFAULT_COLORS;
  const label = CATEGORY_LABELS[category] ?? category;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border bg-black/75 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] ${colors.text} ${colors.border} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} shadow-[0_0_8px_currentColor]`} />
      {label}
    </span>
  );
}
