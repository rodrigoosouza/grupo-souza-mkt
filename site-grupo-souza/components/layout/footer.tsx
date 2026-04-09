import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const FOOTER_LINKS = {
  servicos: [
    { label: "Tráfego Pago", href: "/servicos/trafego-pago" },
    { label: "Tracking", href: "/servicos/tracking" },
    { label: "Landing Pages", href: "/servicos/landing-pages" },
    { label: "Automação", href: "/servicos/automacao" },
  ],
  empresa: [
    { label: "Sobre", href: "/sobre" },
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
            <div className="text-lg font-bold tracking-tight mb-4">
              GRUPO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                SOUZA
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-6 max-w-[240px]">
              Infraestrutura de aquisição para empresas em crescimento. Do clique ao contrato, com dados em cada etapa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@gruposouza.com.br"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
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
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-600">
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
