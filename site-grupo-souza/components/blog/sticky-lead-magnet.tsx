"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import type { BlogLeadMagnet } from "@/lib/blog";
import { useDiagnosticModal } from "@/components/forms/diagnostic-modal";

interface Props {
  magnet: BlogLeadMagnet;
}

export function StickyLeadMagnet({ magnet }: Props) {
  const { openModal } = useDiagnosticModal();
  const isExternal = magnet.cta_url.startsWith("http");
  const isDiagnostic = magnet.cta_url === "/diagnostico" || magnet.cta_url === "/contato";
  const Icon = magnet.image ? Download : Sparkles;

  return (
    <div className="relative group">
      {/* Glow externo */}
      <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Border gradient */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-400/50 via-emerald-500/15 to-transparent shadow-[0_0_60px_-15px_rgba(16,185,129,0.35)]">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black p-6 overflow-hidden">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

          {/* Pattern de pontos */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            {magnet.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono mb-4">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                {magnet.badge}
              </span>
            )}

            {/* Imagem opcional */}
            {magnet.image && (
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 ring-1 ring-white/[0.06]">
                <Image
                  src={magnet.image}
                  alt={magnet.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            )}

            {/* Ícone (se sem imagem) */}
            {!magnet.image && (
              <div className="relative mb-4 inline-block">
                <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-2xl" />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Icon className="w-5 h-5 text-emerald-300" />
                </div>
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-white tracking-tight mb-2 leading-snug font-sans">
              {magnet.title}
            </h3>

            {/* Description */}
            {magnet.description && (
              <p className="text-sm text-neutral-400 leading-relaxed mb-5 font-sans">
                {magnet.description}
              </p>
            )}

            {/* CTA — abre modal se for diagnostico, senao link normal */}
            {isDiagnostic ? (
              <button
                type="button"
                onClick={openModal}
                className="group/cta inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold text-sm px-5 py-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all font-sans cursor-pointer"
              >
                {magnet.cta_text}
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link
                href={magnet.cta_url}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group/cta inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold text-sm px-5 py-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all font-sans"
              >
                {magnet.cta_text}
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            )}

            {/* Trust note */}
            <p className="text-[10px] text-neutral-600 text-center mt-3 font-mono uppercase tracking-wider">
              Sem compromisso · 30 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Lead magnet padrão usado quando o post não define um custom
export const DEFAULT_LEAD_MAGNET: BlogLeadMagnet = {
  title: "Diagnóstico gratuito do seu funil",
  description:
    "Audita teu tracking, mídia paga e CRM em 30 minutos. A gente mostra exatamente onde tá perdendo dinheiro.",
  cta_text: "Agendar diagnóstico",
  cta_url: "/diagnostico",
  badge: "Grátis",
};
