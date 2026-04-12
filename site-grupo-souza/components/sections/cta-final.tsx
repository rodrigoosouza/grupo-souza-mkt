import { ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/forms/cta-button";

export function CTAFinal() {
  return (
    <section
      className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mx-2.5 lg:mx-auto mb-24 p-6 sm:p-10 md:p-20 relative overflow-hidden"
      style={{
        position: "relative",
        // @ts-expect-error CSS custom properties
        "--border-gradient":
          "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        "--border-radius-before": "24px",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.08] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-[-2px] mb-6 leading-tight">
          Pronto pra parar de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
            desperdiçar verba?
          </span>
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed font-sans">
          Agende um diagnóstico gratuito de 30 minutos. Vamos analisar seu funil
          e mostrar onde você está perdendo dinheiro. Sem compromisso.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <CTAButton variant="primary-glow" size="lg">
            Agendar diagnóstico gratuito
            <ArrowRight className="w-4 h-4" />
          </CTAButton>
        </div>

        <p className="text-xs text-neutral-500 font-mono">
          Resposta em até 4h em horário comercial. Sem spam.
        </p>
      </div>
    </section>
  );
}
