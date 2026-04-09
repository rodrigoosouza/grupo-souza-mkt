import { CATEGORY_LABELS } from "@/lib/blog";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "trafego-pago": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  "tracking-dados": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  "cro-conversao": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  automacao: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  "aieo-geo": {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  growth: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
};

const DEFAULT_COLORS = {
  bg: "bg-gray-500/10",
  text: "text-gray-400",
  border: "border-gray-500/20",
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
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border} ${className}`}
    >
      {label}
    </span>
  );
}
