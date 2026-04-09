import Image from "next/image";
import {
  Megaphone,
  ScanSearch,
  Code2,
  Workflow,
  LayoutTemplate,
  BarChart3,
  BrainCircuit,
  Video,
} from "lucide-react";

const SKILLS = [
  { icon: Megaphone, label: "Tráfego Pago", desc: "Meta Ads & Google Ads" },
  { icon: ScanSearch, label: "Tracking Avançado", desc: "GTM, GA4, Pixels, Conversões Offline" },
  { icon: Code2, label: "Desenvolvimento Web", desc: "Next.js, TypeScript, Supabase, Vercel" },
  { icon: Workflow, label: "Automação", desc: "n8n, Make, Lead Scoring" },
  { icon: LayoutTemplate, label: "Landing Pages & CRO", desc: "Páginas que convertem, não que enfeitam" },
  { icon: BarChart3, label: "Dashboards", desc: "Métricas de funil em tempo real" },
  { icon: BrainCircuit, label: "AIEO/GEO", desc: "Otimização para busca generativa" },
  { icon: Video, label: "Produção com IA", desc: "Vídeo e conteúdo por inteligência artificial" },
];

export function Founder() {
  return (
    <section
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/[0.06] to-white/0 max-w-7xl rounded-3xl mt-24 mx-2.5 lg:mx-auto mb-24 p-8 md:p-12 relative overflow-hidden"
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

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left — Photo + Name */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-2xl overflow-hidden border border-emerald-500/20 mb-5 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
              <Image
                src="/rodrigo-souza.png"
                alt="Rodrigo Souza"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
              Rodrigo Souza
            </h3>
            <p className="text-sm text-emerald-400 font-mono mb-4">
              Fundador & Growth Engineer
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Growth marketer e engenheiro de aquisição. Combina tráfego pago,
              desenvolvimento web, automação e IA numa operação enxuta que entrega
              o que equipes maiores demoram pra montar.
            </p>
          </div>

          {/* Quote */}
          <div className="border-l-2 border-emerald-500/30 pl-4 mt-6">
            <p className="text-sm text-neutral-300 italic leading-relaxed">
              &ldquo;Não vendo horas, vendo resultado. Uma landing page bonita que
              não converte é uma landing page inútil.&rdquo;
            </p>
          </div>
        </div>

        {/* Right — Skills */}
        <div className="lg:col-span-8">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[3px] font-mono block mb-3">
              Por que sou especialista em Growth
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-1px] text-white mb-3">
              Tráfego + Código + Dados + Automação
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              A maioria das agências separa quem faz anúncio de quem faz site de quem
              configura tracking. Aqui, tudo é feito por quem entende o funil inteiro —
              do clique até a venda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill.label}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 flex-shrink-0">
                  <skill.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{skill.label}</div>
                  <div className="text-[11px] text-neutral-500">{skill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
