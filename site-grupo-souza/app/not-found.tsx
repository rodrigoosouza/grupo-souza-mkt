import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
      <div className="text-[120px] font-black tracking-[-6px] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 leading-none mb-6">
        404
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-4">
        Página não encontrada
      </h1>
      <p className="text-neutral-400 mb-8 max-w-md mx-auto">
        A página que você procura não existe ou foi movida. Que tal voltar para
        o início?
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" href="/">
          Voltar ao início
        </Button>
        <Button variant="ghost" href="/contato">
          Falar conosco
        </Button>
      </div>
    </section>
  );
}
