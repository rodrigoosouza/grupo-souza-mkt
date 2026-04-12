"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "gs_consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so the animation is visible
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleConsent(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Top border with emerald gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="bg-black/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-400 max-w-3xl">
              Usamos cookies para melhorar sua experiência e medir a performance
              das campanhas. Ao continuar navegando, você concorda com nossa{" "}
              <Link
                href="/legal/privacidade"
                className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleConsent("rejected")}
                className="px-4 py-2 text-sm rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                Recusar
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
