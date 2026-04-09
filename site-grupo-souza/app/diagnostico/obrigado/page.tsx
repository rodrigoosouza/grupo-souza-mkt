import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado!",
  description: "Seu diagnóstico foi agendado com sucesso.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 md:px-6 py-32 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-1.5px] mb-4">
        Diagnóstico agendado!
      </h1>
      <p className="text-neutral-400 leading-relaxed mb-4 max-w-md mx-auto">
        Recebemos seus dados e vamos analisar seu cenário. Entraremos em contato
        em até <strong className="text-white">4 horas úteis</strong> pra
        agendar a reunião.
      </p>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 mb-10 max-w-md mx-auto text-left">
        <h3 className="text-sm font-semibold text-white mb-3">Próximos passos:</h3>
        <ol className="space-y-2 text-xs text-neutral-400">
          <li className="flex gap-2">
            <span className="text-emerald-400 font-bold font-mono">01.</span>
            Vamos revisar seu formulário e analisar seu cenário
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400 font-bold font-mono">02.</span>
            Entraremos em contato via WhatsApp ou email
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400 font-bold font-mono">03.</span>
            Agendamos o diagnóstico de 30 minutos
          </li>
        </ol>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="primary" href="/">
          Voltar ao início
        </Button>
        <Button variant="ghost" href="/blog">
          Ler o blog <ArrowRight className="w-3 h-3" />
        </Button>
      </div>
    </section>
  );
}
