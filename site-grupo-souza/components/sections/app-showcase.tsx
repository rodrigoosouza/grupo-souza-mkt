import {
  Zap,
  Search,
  Download,
  Plus,
  LayoutGrid,
  TrendingUp,
  Users,
  Sparkles,
  CalendarClock,
  BarChart3,
  MousePointerClick,
  Mail,
} from "lucide-react";

export function AppShowcase() {
  return (
    <section className="-mt-4 lg:-mt-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-24 relative">
      {/* Glow Effect Behind App */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-emerald-600/20 blur-[100px] rounded-full z-0" />

      {/* Headline acima do dashboard */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 px-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-1 text-[11px] uppercase tracking-wider font-sans mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Plataforma Própria
        </span>
        <h2 className="text-white text-3xl sm:text-4xl font-sans font-bold tracking-tight">
          Tudo centralizado em um só lugar
        </h2>
        <p className="mt-3 text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
          Desenvolvemos nossa própria plataforma para análise de leads, tracking e performance de campanhas — onde cada métrica do seu growth marketing vive consolidada, em tempo real, pronta pra decisão.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Analytics Dashboard Panel (full width) */}
        <div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] backdrop-blur-sm">
          {/* Glow */}
          <div className="-top-10 -right-10 bg-emerald-500/10 w-56 h-56 rounded-full absolute blur-3xl" />

          {/* Top bar */}
          <div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-3 pb-3 pl-3 sm:pr-4 sm:pl-4 backdrop-blur-md items-center justify-between overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 text-sm text-neutral-400 min-w-0">
              <a className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-sans whitespace-nowrap" href="#">
                <Zap className="text-emerald-500 flex-shrink-0" size={16} />
                <span className="hidden sm:inline">Grupo Souza OS</span>
                <span className="sm:hidden">GS OS</span>
              </a>
              <span className="opacity-40 font-sans">/</span>
              <span className="text-white font-sans whitespace-nowrap">Performance</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2 py-0.5 text-[11px] font-sans whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Ao Vivo
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
                <Search className="text-neutral-500" size={14} />
                <input
                  className="bg-transparent text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none w-48"
                  placeholder="Buscar campanha..."
                  type="text"
                  readOnly
                />
              </div>
              <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition font-sans">
                <Download size={14} />
                Exportar
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="grid grid-cols-12">
            {/* Left sidebar */}
            <aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col md:min-h-[520px] bg-white/5 border-white/5 border-r">
              <div className="px-4 py-4">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-900/20 text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-sans">
                  <Plus size={16} />
                  Nova Campanha
                </button>
              </div>
              <nav className="px-3 pb-4 space-y-6 overflow-y-auto">
                {/* Platform */}
                <div>
                  <div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans">
                    Plataforma
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
                        <LayoutGrid size={16} />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans" href="#">
                        <TrendingUp size={16} className="text-emerald-400" />
                        Funil de Vendas
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
                        <Users size={16} />
                        Leads
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Automacao */}
                <div>
                  <div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans">
                    Automação
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
                        <Sparkles size={16} />
                        Fluxos
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#">
                        <CalendarClock size={16} />
                        Agendamentos
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </aside>

            {/* Center content */}
            <main className="col-span-12 md:col-span-6 lg:col-span-7 md:min-h-[520px] bg-black/20">
              {/* Tabs */}
              <div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto">
                <div className="flex items-center gap-6 min-w-max">
                  <button className="text-sm text-white border-b-2 border-emerald-500 pb-3 -mb-3.5 font-sans">
                    Visão Geral
                  </button>
                  <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                    Campanhas
                  </button>
                  <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                    Tracking
                  </button>
                  <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                    Alertas
                  </button>
                </div>
              </div>

              {/* Header */}
              <div className="px-4 sm:px-6 py-6 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-white text-2xl font-sans font-bold tracking-tight">
                      Performance do Funil
                    </h3>
                    <span className="text-[11px] rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2 py-0.5 uppercase font-sans">
                      Otimizando
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 flex items-center gap-1.5 font-sans">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Atualizando
                  </div>
                </div>
                <div className="mt-2 text-sm text-neutral-400 font-sans">
                  Dados de todas as campanhas ativas consolidados
                </div>
              </div>

              {/* Feed */}
              <div className="px-4 sm:px-6 py-6 space-y-4">
                {/* Card: Tracking */}
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-sm text-white font-sans">
                          Tracking GTM Configurado
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                          Eventos disparando corretamente em todas as páginas
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2 py-0.5 font-sans">
                      ATIVO
                    </span>
                  </div>
                  <div className="mt-4 bg-black/40 rounded-lg ring-1 ring-white/5 p-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-y-2">
                      <div className="text-neutral-500 font-sans">
                        &rarr; Google Ads:
                        <span className="text-emerald-400 ml-1 font-sans">
                          Conectado
                        </span>
                      </div>
                      <div className="text-neutral-500 font-sans">
                        &rarr; Meta Ads:
                        <span className="text-emerald-400 ml-1 font-sans">
                          Conectado
                        </span>
                      </div>
                      <div className="text-neutral-500 font-sans">
                        &rarr; GA4:
                        <span className="text-emerald-400 ml-1 font-sans">
                          Ativo
                        </span>
                      </div>
                      <div className="text-neutral-500 font-sans">
                        &rarr; Pixels:
                        <span className="text-emerald-400 ml-1 font-sans">
                          OK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card: Campaign in progress */}
                <div className="rounded-xl ring-1 ring-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-sm text-white font-sans">
                          Otimizando Campanhas Google Ads
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                          Ajuste de lances e segmentação em andamento
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-sans">
                      Em curso
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xs text-neutral-500 font-sans">
                      Progresso
                    </span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                    <span className="text-xs text-white font-sans">72%</span>
                  </div>
                </div>

                {/* Card: Lead alert */}
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-sm text-white font-sans">
                          Novo Lead Qualificado
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                          Origem: Google Ads &bull; LP: /consultoria &bull; 5m atrás
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] rounded-md bg-white/5 text-neutral-300 ring-1 ring-white/10 px-2 py-0.5 font-sans">
                      MQL
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="text-xs rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition-colors font-sans">
                      Ver Lead
                    </button>
                    <button className="text-xs rounded-md text-neutral-400 hover:text-white px-3 py-1.5 transition-colors font-sans">
                      Atribuir
                    </button>
                  </div>
                </div>
              </div>
            </main>

            {/* Right sidebar */}
            <aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 md:min-h-[520px]">
              <div className="px-4 sm:px-5 py-4 space-y-4">
                {/* Quick Stats */}
                <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                  <div className="text-xs text-neutral-500 mb-3 uppercase font-sans">
                    Métricas ao Vivo
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                      <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        Leads/dia
                      </div>
                      <div className="text-lg text-white font-sans">23</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                      <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        CPL Médio
                      </div>
                      <div className="text-lg text-white font-sans">R$ 18</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                      <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        Conv. Rate
                      </div>
                      <div className="text-lg text-white font-sans">7.3%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                      <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                        ROAS
                      </div>
                      <div className="text-lg text-emerald-400 font-sans">
                        4.2x
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connected platforms */}
                <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                  <div className="text-xs text-neutral-500 mb-2 uppercase font-sans">
                    Plataformas Conectadas
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    Todas as fontes de tráfego integradas e rastreadas.
                  </p>
                  <div className="mt-3 text-xs text-neutral-500 mb-2 font-sans">
                    Integrações
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                      <BarChart3 size={14} />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                      <MousePointerClick size={14} />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                      <Mail size={14} />
                    </span>
                  </div>
                </div>

                {/* Autopilot toggles */}
                <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                  <div className="text-xs text-neutral-500 mb-3 uppercase font-sans">
                    Automação
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-300 font-sans">
                        Lead Scoring
                      </span>
                      <button
                        aria-pressed="true"
                        className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-emerald-400 translate-x-4 transition-transform shadow-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-300 font-sans">
                        Follow-up
                      </span>
                      <button
                        aria-pressed="true"
                        className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-emerald-400 translate-x-4 transition-transform shadow-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-300 font-sans">
                        Alertas
                      </span>
                      <button
                        aria-pressed="false"
                        className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/10 ring-1 ring-white/10"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 translate-x-0 transition-transform shadow-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
