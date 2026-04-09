import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/forms/cta-button";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Users,
  MousePointerClick,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered background glows */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-emerald-500/[0.06] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-900/[0.08] blur-[120px] rounded-full pointer-events-none" />

      <main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mx-auto pt-16 px-6 pb-20 relative items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col relative items-start z-10">
          {/* Tag */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span className="font-sans">
              Growth Marketing &amp; Infraestrutura de Aquisição
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8 animate-entry delay-150">
            <p className="text-xl md:text-2xl text-neutral-400 font-normal mb-3 tracking-tight">
              Nós montamos a máquina de
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] font-bold tracking-[-2.5px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 block">
                Marketing de Performance
              </span>
              <span className="text-white block mt-2">
                para sua empresa crescer.
              </span>
            </h1>
          </div>

          {/* Subhead */}
          <p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans animate-entry delay-200">
            Do clique ao contrato, com dados em cada etapa. Infraestrutura de
            aquisição que faz seu negócio crescer com previsibilidade.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 items-center animate-entry delay-300">
            <CTAButton variant="primary-glow" size="lg">
              Agendar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
            <Button variant="secondary" size="lg" href="#como-funciona">
              Ver como funciona
            </Button>
          </div>
        </div>

        {/* Right Column (Electric Card - Dashboard Mockup) */}
        <div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-0 relative justify-center z-10 animate-entry delay-500">
          <div className="relative w-[360px] bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">
            {/* Glowing Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 via-emerald-500 to-transparent opacity-80 z-0" />

            {/* Inner Card Content */}
            <div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 flex flex-col items-start overflow-hidden">
              {/* Background glow inside card */}
              <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-emerald-500/10 to-transparent" />

              {/* Header */}
              <div className="flex justify-between w-full items-start mb-6 relative">
                <span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Painel de Performance
                </span>
              </div>

              <h3 className="text-xl text-white mb-2 font-sans">
                Funil de Aquisição
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans">
                Dados em tempo real do seu funil de marketing.
              </p>

              {/* Funnel Visualization */}
              <div className="w-full mb-6 space-y-2">
                {/* Stage 1 */}
                <div className="relative w-full h-8 rounded bg-emerald-500/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[92%] bg-gradient-to-r from-emerald-600/30 to-emerald-500/20 rounded" />
                  <div className="relative flex items-center justify-between px-3 h-full text-[11px]">
                    <span className="text-neutral-300 font-sans">Visitantes</span>
                    <span className="text-emerald-400 font-sans">4.280</span>
                  </div>
                </div>
                {/* Stage 2 */}
                <div className="relative w-[80%] h-8 rounded bg-emerald-500/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-emerald-600/30 to-emerald-500/20 rounded" />
                  <div className="relative flex items-center justify-between px-3 h-full text-[11px]">
                    <span className="text-neutral-300 font-sans">Leads</span>
                    <span className="text-emerald-400 font-sans">312</span>
                  </div>
                </div>
                {/* Stage 3 */}
                <div className="relative w-[55%] h-8 rounded bg-emerald-500/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-emerald-600/30 to-emerald-500/20 rounded" />
                  <div className="relative flex items-center justify-between px-3 h-full text-[11px]">
                    <span className="text-neutral-300 font-sans">MQL</span>
                    <span className="text-emerald-400 font-sans">89</span>
                  </div>
                </div>
                {/* Stage 4 */}
                <div className="relative w-[35%] h-8 rounded bg-emerald-500/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-emerald-600/30 to-emerald-500/20 rounded" />
                  <div className="relative flex items-center justify-between px-3 h-full text-[11px]">
                    <span className="text-neutral-300 font-sans">Vendas</span>
                    <span className="text-emerald-400 font-sans">24</span>
                  </div>
                </div>
              </div>

              {/* Metrics List */}
              <div className="space-y-4 w-full mb-6">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="font-sans">Taxa de Conversão</span>
                  </div>
                  <span className="text-white font-sans">7.3%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <MousePointerClick className="w-4 h-4 text-emerald-500" />
                    <span className="font-sans">Custo por Lead</span>
                  </div>
                  <span className="text-white font-sans">R$ 18,40</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <BarChart3 className="w-4 h-4 text-emerald-500" />
                    <span className="font-sans">ROAS</span>
                  </div>
                  <span className="text-white font-sans">4.2x</span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-6 flex items-center justify-center">
                <span className="bg-[#0A0A0A] px-2 text-[10px] text-neutral-400 uppercase font-sans">
                  Dados em Tempo Real
                </span>
              </div>

              {/* Bottom Tags */}
              <div className="flex gap-4 w-full">
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-sans">
                  <Users className="w-3.5 h-3.5 text-white" />
                  Tracking Completo
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
