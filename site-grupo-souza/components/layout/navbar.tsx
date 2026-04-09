"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  ScanSearch,
  LayoutTemplate,
  Workflow,
  Database,
  BarChart3,
  BrainCircuit,
  Mail,
  ArrowRight,
} from "lucide-react";

const SERVICE_LINKS = [
  { label: "Tráfego Pago", href: "/servicos/trafego-pago", icon: Megaphone, desc: "Google Ads & Meta Ads" },
  { label: "Tracking Avançado", href: "/servicos/tracking", icon: ScanSearch, desc: "GTM, GA4 & Pixels" },
  { label: "Landing Pages", href: "/servicos/landing-pages", icon: LayoutTemplate, desc: "Páginas que convertem" },
  { label: "Automação", href: "/servicos/automacao", icon: Workflow, desc: "Fluxos & Lead Scoring" },
  { label: "Estruturação de CRM", href: "/servicos/crm", icon: Database, desc: "Pipeline & Funil" },
  { label: "Dados e Dashboards", href: "/servicos/dados-dashboards", icon: BarChart3, desc: "Dados em tempo real" },
  { label: "AIEO/GEO", href: "/servicos/aieo-geo", icon: BrainCircuit, desc: "Busca generativa & IA" },
  { label: "Email Marketing", href: "/servicos/email-marketing", icon: Mail, desc: "Plataforma própria" },
];

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 250);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">
              GRUPO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                SOUZA
              </span>
            </span>
          </Link>

          {/* Center nav — pill style (Luminous reference) */}
          <div className="hidden lg:flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full px-1.5 py-1.5 backdrop-blur-md">
            {/* Serviços com mega menu */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                className={`flex items-center gap-1.5 px-5 py-2 text-sm rounded-full transition-all duration-200 ${
                  megaOpen
                    ? "text-white bg-white/[0.08] shadow-inner"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${megaOpen ? "bg-emerald-500" : "bg-transparent"}`} />
                Serviços
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega menu */}
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${
                  megaOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                {/* Arrow indicator */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#111113] border-l border-t border-white/[0.08]" />

                <div className="relative w-[720px] bg-[#111113] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
                  {/* Glow effect inside */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/[0.03] blur-[80px] rounded-full pointer-events-none" />

                  <div className="relative p-5">
                    <div className="grid grid-cols-2 gap-1.5">
                      {SERVICE_LINKS.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMegaOpen(false)}
                          className="group flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200"
                        >
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.12] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 flex-shrink-0">
                            <service.icon className="w-4.5 h-4.5 text-emerald-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                              {service.label}
                            </div>
                            <div className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-white/[0.06] mt-4 pt-4 flex items-center justify-between px-4">
                      <span className="text-xs text-neutral-500">
                        Infraestrutura de aquisição completa
                      </span>
                      <Link
                        href="/servicos"
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                      >
                        Ver todos <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm text-neutral-400 hover:text-white rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/diagnostico"
            className="hidden lg:flex items-center text-sm font-medium text-white bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full border-t border-white/25 px-6 py-2.5 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_-3px_rgba(16,185,129,0.7)] hover:brightness-110 transition-all duration-300"
          >
            Agendar diagnóstico
          </Link>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden overflow-y-auto pt-20">
          <div className="px-6 py-8">
            <div className="mb-4">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono">
                Serviços
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{service.label}</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">{service.desc}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/[0.06] mb-6" />

            <div className="space-y-1 mb-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-3.5 text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/diagnostico"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl py-4 shadow-[0_4px_20px_rgba(16,185,129,0.4)]"
            >
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
