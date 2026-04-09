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
import { Logo } from "@/components/brand/logo";
import { CTAButton } from "@/components/forms/cta-button";

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
  { label: "Histórias", href: "/historias" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
          <Logo size={32} />

          {/* Center nav — pill style (white glass) */}
          <div className="hidden lg:flex items-center bg-white/95 border border-white/40 rounded-full px-1.5 py-1.5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Serviços com mega menu */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                className={`flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  megaOpen
                    ? "text-black bg-black/[0.06] shadow-inner"
                    : "text-neutral-700 hover:text-black hover:bg-black/[0.04]"
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
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-black/[0.08]" />

                <div className="relative w-[720px] bg-white border border-black/[0.08] rounded-2xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden">
                  {/* Glow effect inside (subtle emerald) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

                  <div className="relative p-5">
                    <div className="grid grid-cols-2 gap-1.5">
                      {SERVICE_LINKS.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMegaOpen(false)}
                          className="group flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-emerald-500/[0.06] transition-all duration-200"
                        >
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/15 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex-shrink-0">
                            <service.icon className="w-4.5 h-4.5 text-emerald-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                              {service.label}
                            </div>
                            <div className="text-xs text-neutral-500 group-hover:text-neutral-700 transition-colors">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-black/[0.06] mt-4 pt-4 flex items-center justify-between px-4">
                      <span className="text-xs text-neutral-500">
                        Infraestrutura de aquisição completa
                      </span>
                      <Link
                        href="/servicos"
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 transition-colors font-semibold"
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
                className="px-5 py-2 text-sm font-medium text-neutral-700 hover:text-black hover:bg-black/[0.04] rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <CTAButton variant="navbar" size="md">
              Agendar diagnóstico
            </CTAButton>
          </div>

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
            {/* Servicos como dropdown collapsible */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all mb-2"
            >
              <span className="text-base font-medium text-white">Serviços</span>
              <ChevronDown
                className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown servicos expandido */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[1200px] opacity-100 mb-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-1.5 pl-2 pt-2">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white">{service.label}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5 truncate">
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/servicos"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 p-3 mt-2 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] text-sm text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  Ver todos os serviços <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Outros links */}
            <div className="space-y-1 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-base font-medium text-white hover:bg-white/[0.04] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <CTAButton variant="sidebar" size="lg" className="w-full !rounded-xl py-4">
                Agendar diagnóstico
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
