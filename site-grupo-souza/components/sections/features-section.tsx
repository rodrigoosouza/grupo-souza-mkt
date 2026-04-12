import Link from "next/link";
import {
  Megaphone,
  ScanSearch,
  LayoutTemplate,
  Workflow,
  Database,
  BarChart3,
  BrainCircuit,
  Mail,
  Target,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Tráfego Pago",
    href: "/servicos/trafego-pago",
  },
  {
    icon: ScanSearch,
    title: "Tracking Avançado",
    href: "/servicos/tracking",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    href: "/servicos/landing-pages",
  },
  {
    icon: Workflow,
    title: "Automação",
    href: "/servicos/automacao",
  },
  {
    icon: Database,
    title: "CRM",
    href: "/servicos/crm",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    href: "/servicos/dados-dashboards",
  },
  {
    icon: BrainCircuit,
    title: "AIEO/GEO",
    href: "/servicos/aieo-geo",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    href: "/servicos/email-marketing",
  },
];

const TABLE_ROWS = [
  { name: "Google Ads", type: "Tráfego", status: "Ativo" },
  { name: "Meta Ads", type: "Tráfego", status: "Ativo" },
  { name: "GTM + GA4", type: "Tracking", status: "Integrado" },
  { name: "Landing Pages", type: "Conversão", status: "Otimizando" },
];

export function FeaturesSection() {
  return (
    <section
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mx-2.5 lg:mx-auto mb-24 p-5 sm:p-8 md:p-10 relative"
      style={{
        position: "relative",
        // @ts-expect-error CSS custom properties
        "--border-gradient":
          "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        "--border-radius-before": "24px",
      }}
    >
      {/* Header */}
      <div className="flex mb-0 items-center justify-between">
        <div className="flex flex-col text-left">
          <div className="flex flex-col lg:flex-row gap-4 mb-3 items-start lg:items-center">
            <span className="text-8xl text-white/5 font-sans font-light tracking-tight">
              01.
            </span>
            <div className="space-y-2">
              <h2 className="md:text-5xl text-4xl text-white font-sans font-bold tracking-[-2px]">
                Tudo o que sua empresa precisa pra crescer
              </h2>
              <p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans">
                Da captação de leads até a entrega pro time comercial, montamos
                toda a infraestrutura de aquisição com dados em cada etapa.
              </p>
              <Link
                href="/diagnostico"
                className="lg:hidden mt-6 inline-block w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-lg hover:bg-emerald-500 transition-colors whitespace-nowrap font-sans text-center"
              >
                Agendar diagnóstico
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Link
            href="/diagnostico"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-lg hover:bg-emerald-500 transition-colors whitespace-nowrap font-sans"
          >
            Agendar diagnóstico
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12 gap-x-8 gap-y-8">
        {/* Left Card — Services + Table */}
        <div className="md:p-10 flex flex-col overflow-hidden group/card hover:border-white/20 transition-colors duration-500 bg-[#0A0A0A] border-white/10 border rounded-3xl p-5 sm:p-8 relative justify-between">
          {/* Background gradient hint */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover/card:opacity-100" />

          {/* Top Icons Row — 4x2 grid of services */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 relative z-10">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex flex-col items-center text-center gap-3 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
                  <service.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Data Table */}
          <div className="mb-10 relative z-10">
            <div className="grid grid-cols-3 sm:grid-cols-4 text-sm font-medium text-white mb-4 px-2">
              <div className="col-span-1 sm:col-span-2 font-sans">Serviço</div>
              <div className="text-right text-neutral-400 font-sans">Tipo</div>
              <div className="text-right text-neutral-400 font-sans">Status</div>
            </div>
            {TABLE_ROWS.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 sm:grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 rounded-lg ${
                  index === 1
                    ? "relative overflow-hidden group"
                    : "hover:bg-white/[0.02] transition-colors"
                }`}
              >
                {index === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
                <div
                  className={`col-span-1 sm:col-span-2 flex items-center gap-2 ${
                    index === 1 ? "text-white relative z-10" : "text-neutral-300"
                  } font-sans`}
                >
                  {index === 1 ? (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  )}
                  {row.name}
                </div>
                <div
                  className={`text-right ${
                    index === 1 ? "text-white relative z-10" : ""
                  } font-sans`}
                >
                  {row.type}
                </div>
                <div
                  className={`text-right ${
                    index === 1
                      ? "text-emerald-400 relative z-10"
                      : "text-neutral-500"
                  } font-sans`}
                >
                  {row.status}
                </div>
              </div>
            ))}
          </div>

          {/* Connect CTA */}
          <Link
            href="/diagnostico"
            className="bg-neutral-900/40 border border-white/10 rounded-xl p-2 pl-4 flex justify-between items-center relative z-10 backdrop-blur-sm group hover:border-emerald-500/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                <Megaphone size={12} />
              </div>
              <span className="text-neutral-300 text-sm font-sans">
                Diagnosticar meu funil
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 group-hover:bg-emerald-500 group-hover:text-white border border-white/5 flex items-center justify-center text-neutral-400 transition-colors text-xs font-sans">
              Agendar
            </div>
          </Link>
        </div>

        {/* Right Card — Orbital Visual */}
        <div className="overflow-hidden min-h-[350px] sm:min-h-[450px] flex items-center justify-center bg-[#0A0A0A] border-white/10 border rounded-3xl relative group/orbit">
          {/* Background Gradient */}
          <div className="opacity-80 absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15)_0%,_rgba(0,0,0,0)_70%)]" />

          {/* Responsive Scale Wrapper */}
          <div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center">
            {/* Static Rings */}
            <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-[180px] h-[180px] rounded-full border border-emerald-500/30" />
            </div>
            <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-[340px] h-[340px] rounded-full border border-emerald-500/20" />
            </div>
            <div className="absolute flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-[500px] h-[500px] rounded-full border border-emerald-500/10" />
            </div>

            {/* Center Item */}
            <div className="relative w-24 h-24 rounded-full bg-[#051a10] border border-emerald-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(16,185,129,0.5)] z-20">
              <div className="animate-ping opacity-20 border-emerald-500 border rounded-full absolute inset-0" />
              <span className="text-emerald-400 font-sans font-light text-sm tracking-tight text-center leading-tight">
                Grupo
                <br />
                Souza
              </span>
            </div>

            {/* Spinning Orbit Container */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">
              {SERVICES.map((service, i) => {
                const angle = i * 45;
                return (
                  <div
                    key={service.href}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-170px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                      <service.icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-8 md:pt-12">
        <div className="flex flex-col items-start group">
          <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-emerald-500 transition-colors duration-300" />
          <Target className="text-neutral-400 mb-5 group-hover:text-emerald-500 transition-colors duration-300" size={24} strokeWidth={1.5} />
          <h3 className="text-xl text-white mb-3 font-sans">
            Segmentação Precisa
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Alcance o público certo com campanhas segmentadas por comportamento,
            interesse e momento de compra.
          </p>
        </div>

        <div className="flex flex-col items-start group">
          <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-emerald-500 transition-colors duration-300" />
          <RefreshCw className="text-neutral-400 mb-5 group-hover:text-emerald-500 transition-colors duration-300" size={24} strokeWidth={1.5} />
          <h3 className="text-xl text-white mb-3 font-sans">
            Fluxos Automáticos
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Automações que nutrem leads, qualificam e entregam pro comercial com
            contexto. Funcionam 24h sem intervenção.
          </p>
        </div>

        <div className="flex flex-col items-start group">
          <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-emerald-500 transition-colors duration-300" />
          <ShieldCheck className="text-neutral-400 mb-5 group-hover:text-emerald-500 transition-colors duration-300" size={24} strokeWidth={1.5} />
          <h3 className="text-xl text-white mb-3 font-sans">
            Dados Seus, Sempre
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
            Sem lock-in. Todos os acessos, contas de anúncio e dados ficam com
            você. Transparência total.
          </p>
        </div>
      </div>
    </section>
  );
}
