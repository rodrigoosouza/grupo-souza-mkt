"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { X, Sparkles } from "lucide-react";
import { DiagnosticForm } from "./diagnostic-form";

// ============ CONTEXT ============

interface DiagnosticModalContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DiagnosticModalContext = createContext<DiagnosticModalContextValue | null>(
  null
);

export function useDiagnosticModal(): DiagnosticModalContextValue {
  const ctx = useContext(DiagnosticModalContext);
  if (!ctx) {
    throw new Error(
      "useDiagnosticModal must be used inside <DiagnosticModalProvider>"
    );
  }
  return ctx;
}

// ============ PROVIDER + MODAL ============

export function DiagnosticModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, closeModal]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <DiagnosticModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open && <DiagnosticModal onClose={closeModal} />}
    </DiagnosticModalContext.Provider>
  );
}

// ============ MODAL ============

function DiagnosticModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-[modalFadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnostic-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/10 to-transparent shadow-[0_30px_80px_-15px_rgba(16,185,129,0.35)] animate-[modalSlideUp_0.3s_ease-out]">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1410] via-[#070D0A] to-black overflow-hidden">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent pointer-events-none" />

          {/* Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative p-6 sm:p-10">
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[10px] uppercase tracking-wider font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Diagnóstico gratuito · 30 min
              </span>
              <h2
                id="diagnostic-modal-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
              >
                Vamos auditar seu funil
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Preencha os campos abaixo. A gente analisa seu cenário e
                responde em até 4h em horário comercial. Sem compromisso, sem
                hard sell.
              </p>
            </div>

            {/* Form */}
            <DiagnosticForm />

            {/* Footer note */}
            <p className="mt-6 text-[11px] text-neutral-600 text-center font-mono">
              <Sparkles className="w-3 h-3 inline mr-1" />
              100% confidencial · sem spam · sem vendedor ligando 15 vezes
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
