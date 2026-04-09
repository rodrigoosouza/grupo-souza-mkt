import Link from "next/link";

interface LogoProps {
  /** Tamanho do icone (mark) em pixels. Default 32. */
  size?: number;
  /** Mostra so o icone, sem o wordmark */
  iconOnly?: boolean;
  /** Wraps em <Link href="/"> automaticamente */
  asLink?: boolean;
  className?: string;
}

/**
 * Logo do Grupo Souza MKT.
 *
 * Conceito: tres nos conectados formando um "G" estilizado.
 * Representa a infraestrutura de aquisicao — 3 estagios do funil
 * (atracao -> conversao -> entrega) interligados por dados/fluxo.
 *
 * - Cor: gradient emerald (#34d399 -> #059669) que matcha a marca
 * - Pure SVG, escala infinita, ~1KB
 * - Funciona em dark e light themes
 */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow ambient */}
      <circle cx="20" cy="20" r="18" fill="url(#logoGlow)" />

      {/* Conector circular base — representa o "G" */}
      <path
        d="M 20 6 A 14 14 0 1 0 34 20"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Linha interna do G — representa o "ponto de saida" do funil */}
      <path
        d="M 22 20 L 32 20"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Tres nos = 3 estagios do funil */}
      <circle cx="20" cy="6" r="3" fill="#34d399" />
      <circle cx="34" cy="20" r="3" fill="#10b981" />
      <circle cx="22" cy="20" r="2.5" fill="#059669" />
    </svg>
  );
}

export function Logo({ size = 32, iconOnly = false, asLink = true, className = "" }: LogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight leading-none">
          GRUPO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
            SOUZA
          </span>
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="flex-shrink-0" aria-label="Grupo Souza MKT — Página inicial">
        {content}
      </Link>
    );
  }

  return content;
}
