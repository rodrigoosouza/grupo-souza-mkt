import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site do Grupo Souza MKT. Condições de uso, responsabilidades e limitações.",
};

export default function TermosPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
        Legal
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-1.5px] mb-8">
        Termos de Uso
      </h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-neutral-400 leading-relaxed [&_h2]:text-white [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-neutral-300">
        <p>
          <strong>Última atualização:</strong> Abril de 2026
        </p>

        <p>
          Ao acessar e utilizar o site gruposouza.com.br (&quot;Site&quot;),
          operado pelo Grupo Souza MKT (&quot;nós&quot;, &quot;nosso&quot;),
          você concorda com os termos e condições descritos abaixo.
        </p>

        <h2>1. Aceitação dos termos</h2>
        <p>
          Ao acessar este Site, você confirma que leu, entendeu e concorda com
          estes Termos de Uso. Se não concordar, recomendamos que não utilize o
          Site.
        </p>

        <h2>2. Serviços</h2>
        <p>
          O Grupo Souza MKT é uma agência de growth marketing que oferece
          serviços de tráfego pago, tracking avançado, landing pages, automação
          de marketing, estruturação de CRM, dashboards de performance,
          AIEO/GEO e email marketing. Os termos específicos de cada serviço
          contratado são definidos em contrato próprio.
        </p>

        <h2>3. Uso do Site</h2>
        <p>Você concorda em utilizar o Site apenas para fins legítimos e se compromete a não:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Utilizar o Site de forma que viole qualquer lei aplicável</li>
          <li>Tentar acessar áreas restritas ou sistemas internos</li>
          <li>Transmitir conteúdo malicioso, spam ou vírus</li>
          <li>Reproduzir, copiar ou redistribuir conteúdo sem autorização</li>
        </ul>

        <h2>4. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo do Site — incluindo textos, imagens, logotipos,
          design, código e marca — é propriedade do Grupo Souza MKT ou de
          seus licenciadores e está protegido por leis de propriedade
          intelectual. Nenhuma parte pode ser reproduzida sem autorização
          prévia por escrito.
        </p>

        <h2>5. Formulários e dados enviados</h2>
        <p>
          Ao preencher formulários em nosso Site, você consente com a coleta e
          uso dos dados conforme descrito em nossa{" "}
          <a
            href="/legal/privacidade"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Política de Privacidade
          </a>
          . Você garante que as informações fornecidas são verdadeiras e
          atualizadas.
        </p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>
          O Site é fornecido &quot;como está&quot;. Não garantimos que o Site
          estará disponível de forma ininterrupta ou livre de erros. Não nos
          responsabilizamos por danos diretos ou indiretos decorrentes do uso
          ou impossibilidade de uso do Site.
        </p>

        <h2>7. Links para terceiros</h2>
        <p>
          O Site pode conter links para sites de terceiros. Não temos controle
          sobre o conteúdo ou as práticas de privacidade desses sites e não nos
          responsabilizamos por eles.
        </p>

        <h2>8. Resultados de marketing</h2>
        <p>
          Resultados apresentados em nosso Site (como métricas, taxas de
          conversão e cases) são ilustrativos e baseados em experiências
          anteriores. Resultados individuais podem variar conforme o setor,
          mercado, verba e outros fatores.
        </p>

        <h2>9. Alterações nos termos</h2>
        <p>
          Reservamo-nos o direito de alterar estes Termos de Uso a qualquer
          momento. Alterações entram em vigor imediatamente após a publicação
          no Site. O uso continuado do Site após alterações constitui aceitação
          dos novos termos.
        </p>

        <h2>10. Legislação aplicável</h2>
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do
          Brasil. Qualquer disputa será resolvida no foro da comarca do
          domicílio do Grupo Souza MKT.
        </p>

        <h2>11. Contato</h2>
        <p>
          Para dúvidas sobre estes Termos de Uso, entre em contato pelo email{" "}
          <a
            href="mailto:contato@gruposouza.com.br"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            contato@gruposouza.com.br
          </a>
          .
        </p>
      </div>
    </section>
  );
}
