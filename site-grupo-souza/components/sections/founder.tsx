import Image from "next/image";
import {
  Megaphone,
  ScanSearch,
  Code2,
  Workflow,
  LayoutTemplate,
  BarChart3,
  BrainCircuit,
} from "lucide-react";

const RODRIGO_SKILLS = [
  { icon: Megaphone, label: "Growth Marketing", desc: "Meta Ads, Google Ads, funil completo" },
  { icon: Workflow, label: "Automações", desc: "n8n, Make, fluxos de nutrição" },
  { icon: LayoutTemplate, label: "CRO de Página", desc: "Landing pages que convertem de verdade" },
  { icon: BrainCircuit, label: "Inteligência Artificial", desc: "IA aplicada ao funil de aquisição" },
  { icon: ScanSearch, label: "Tracking Avançado", desc: "GTM, GA4, conversões offline" },
  { icon: Code2, label: "Desenvolvimento Web", desc: "Next.js, TypeScript, Supabase" },
];

const MATHEUS_SKILLS = [
  { icon: Megaphone, label: "Growth Marketing", desc: "Meta Ads, Google Ads, funil completo" },
  { icon: BarChart3, label: "Dashboards", desc: "Métricas de funil em tempo real" },
  { icon: Workflow, label: "Automações", desc: "n8n, Make, fluxos de nutrição" },
  { icon: BrainCircuit, label: "Inteligência Artificial", desc: "IA aplicada ao funil de aquisição" },
];

export function Founder() {
  return (
    <section
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/[0.06] to-white/0 max-w-7xl rounded-3xl mt-24 mx-2.5 lg:mx-auto mb-24 p-5 sm:p-8 md:p-12 relative overflow-hidden"
      style={{
        position: "relative",
        // @ts-expect-error CSS custom properties
        "--border-gradient":
          "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        "--border-radius-before": "24px",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
            Quem está por trás
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-1px] text-white mb-3">
            Dois sócios, expertise complementar
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A maioria das agências separa quem faz anúncio de quem faz site de quem
            configura tracking. Aqui, cada parte do funil é tocada por quem entende
            do assunto — do clique até a venda.
          </p>
        </div>

        {/* Sócios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rodrigo */}
          <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-6 md:p-8">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative flex-shrink-0">
                <Image
                  src="/rodrigo-souza.png"
                  alt="Rodrigo Souza"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  Rodrigo Souza
                </h3>
                <p className="text-xs text-emerald-400 font-mono">
                  Sócio · Growth Marketer
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Toca o funil inteiro — do tráfego ao desenvolvimento da página, do
              tracking à automação. Combina growth, código e IA pra construir
              sistema de aquisição que funciona.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {RODRIGO_SKILLS.map((skill) => (
                <div
                  key={skill.label}
                  className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-[#0A0A0A] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center group-hover:border-emerald-500/30 transition-all duration-300 flex-shrink-0">
                    <skill.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white truncate">{skill.label}</div>
                    <div className="text-[10px] text-neutral-500 truncate">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matheus */}
          <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-6 md:p-8">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative flex-shrink-0">
                <Image
                  src="/matheus-souza.png"
                  alt="Matheus Souza"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  Matheus Souza
                </h3>
                <p className="text-xs text-emerald-400 font-mono">
                  Sócio · Growth Marketer
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Toca growth, automação e IA — desenha os fluxos, monitora os
              dashboards e usa inteligência artificial pra acelerar o funil sem
              inflar a operação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MATHEUS_SKILLS.map((skill) => (
                <div
                  key={skill.label}
                  className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-[#0A0A0A] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center group-hover:border-emerald-500/30 transition-all duration-300 flex-shrink-0">
                    <skill.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white truncate">{skill.label}</div>
                    <div className="text-[10px] text-neutral-500 truncate">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="border-l-2 border-emerald-500/30 pl-4 mt-10 max-w-2xl">
          <p className="text-sm text-neutral-300 italic leading-relaxed">
            &ldquo;Não vendemos horas, vendemos resultado. Uma landing page bonita
            que não converte é uma landing page inútil.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
