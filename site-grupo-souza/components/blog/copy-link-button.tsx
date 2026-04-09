"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border border-white/[0.06] text-gray-400 hover:border-emerald-500/20 hover:text-emerald-400 transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copiado!
        </>
      ) : (
        <>
          <Link2 className="w-4 h-4" />
          Copiar link
        </>
      )}
    </button>
  );
}
