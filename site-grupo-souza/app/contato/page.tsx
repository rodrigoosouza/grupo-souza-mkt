import type { Metadata } from "next";
import { DiagnosticForm } from "@/components/forms/diagnostic-form";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Souza MKT. WhatsApp, email, instagram ou formulário.",
};

const CONTACTS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(19) 99602-2561",
    href: "https://wa.me/5519996022561",
    description: "Resposta rápida em horário comercial",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@gruposouza.com.br",
    href: "mailto:contato@gruposouza.com.br",
    description: "Resposta em até 24h úteis",
    highlight: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram (Grupo Souza)",
    value: "@gruposouzamkt",
    href: "https://www.instagram.com/gruposouzamkt/",
    description: "Conteúdo, bastidores e cases",
    highlight: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram (Rodrigo)",
    value: "@rodrigosouzadomarketing",
    href: "https://www.instagram.com/rodrigosouzadomarketing/",
    description: "Conteúdo pessoal do fundador",
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "100% remoto",
    href: null,
    description: "Atendemos todo o Brasil",
    highlight: false,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="animate-fade-in-up delay-100 text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
            Contato
          </div>
          <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.92] mb-6 max-w-3xl">
            Fale com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              gente
            </span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-neutral-400 max-w-xl leading-relaxed">
            Prefere conversar direto? Manda mensagem no WhatsApp. Ou preencha o
            formulário abaixo que respondemos rápido.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <div className="lg:col-span-5">
            <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll space-y-4">
              {CONTACTS.map((contact) => (
                <div
                  key={contact.label}
                  className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 group ${
                    contact.highlight
                      ? "border-emerald-500/20 bg-emerald-500/[0.04] hover:border-emerald-500/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    contact.highlight
                      ? "bg-emerald-500/15 border border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      : "bg-emerald-500/10 border border-emerald-500/20"
                  }`}>
                    <contact.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-neutral-500 tracking-wider mb-0.5">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-sm font-bold hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 ${
                          contact.highlight ? "text-emerald-400" : "text-white"
                        }`}
                      >
                        {contact.value}
                        {contact.highlight && <ArrowRight className="w-3 h-3" />}
                      </a>
                    ) : (
                      <div className="text-sm font-bold text-white">
                        {contact.value}
                      </div>
                    )}
                    <div className="text-[10px] text-neutral-500 mt-0.5">
                      {contact.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll mt-8 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <p className="text-xs text-neutral-500">
                <span className="text-emerald-400 font-bold">SLA:</span>{" "}
                Resposta em até 4h em horário comercial. Sem spam, sem vendedor
                ligando 15 vezes.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

              <div className="relative">
                <h2 className="text-lg font-bold text-white mb-1">
                  Enviar mensagem
                </h2>
                <p className="text-xs text-neutral-400 mb-6">
                  Preencha o formulário e entraremos em contato.
                </p>
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
