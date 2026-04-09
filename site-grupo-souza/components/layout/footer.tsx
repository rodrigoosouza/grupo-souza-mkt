import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/logo";

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

const FOOTER_LINKS = {
  servicos: [
    { label: "Tráfego Pago", href: "/servicos/trafego-pago" },
    { label: "Tracking", href: "/servicos/tracking" },
    { label: "Landing Pages", href: "/servicos/landing-pages" },
    { label: "Automação", href: "/servicos/automacao" },
    { label: "Ver todos", href: "/servicos" },
  ],
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Histórias", href: "/historias" },
    { label: "Blog", href: "/blog" },
    { label: "Pacotes", href: "/pacotes" },
    { label: "Contato", href: "/contato" },
  ],
  legal: [
    { label: "Privacidade", href: "/legal/privacidade" },
    { label: "Termos", href: "/legal/termos" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo size={28} asLink={false} />
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-6 max-w-[260px]">
              Infraestrutura de aquisição para empresas em crescimento. Do
              clique ao contrato, com dados em cada etapa.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/5519996022561"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp (19) 99602-2561"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@gruposouza.com.br"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="Email"
                title="contato@gruposouza.com.br"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/gruposouzamkt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="Instagram Grupo Souza"
                title="@gruposouzamkt"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rodrigosouzadomarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="Instagram Rodrigo Souza"
                title="@rodrigosouzadomarketing"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest mt-8 mb-4">
              Contato direto
            </h4>
            <a
              href="https://wa.me/5519996022561"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              (19) 99602-2561
            </a>
            <a
              href="mailto:contato@gruposouza.com.br"
              className="block text-xs text-neutral-400 hover:text-emerald-400 transition-colors mt-1 break-all"
            >
              contato@gruposouza.com.br
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Grupo Souza MKT. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-neutral-600 font-mono">
            Feito com dados, não com achismo.
          </p>
        </div>
      </div>
    </footer>
  );
}
