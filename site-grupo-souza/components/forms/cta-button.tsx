"use client";

import type { ReactNode } from "react";
import { useDiagnosticModal } from "./diagnostic-modal";

type Variant = "primary-glow" | "primary" | "ghost" | "outline" | "navbar" | "sidebar";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  "primary-glow":
    "bg-gradient-to-b from-emerald-400 to-emerald-600 text-black font-bold border border-emerald-300/20 shadow-[0_0_30px_-3px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_-3px_rgba(16,185,129,0.7)] hover:brightness-110",
  primary:
    "bg-emerald-500 text-black font-bold hover:bg-emerald-400",
  ghost:
    "bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20",
  outline:
    "bg-transparent border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/[0.05] hover:border-emerald-500/60",
  navbar:
    "bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-medium border-t border-white/25 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_-3px_rgba(16,185,129,0.7)] hover:brightness-110",
  sidebar:
    "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs min-h-[36px]",
  md: "px-5 py-2.5 text-sm min-h-[40px]",
  lg: "px-6 py-3 text-base min-h-[44px]",
};

export function CTAButton({
  children,
  variant = "primary-glow",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const { openModal } = useDiagnosticModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
