import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Grupo Souza MKT. Saiba como coletamos, usamos e protegemos seus dados.",
};

export default function PrivacidadePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-[3px] mb-4 font-mono">
        Legal
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-1.5px] mb-8">
        Política de Privacidade
      </h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-neutral-400 leading-relaxed [&_h2]:text-white [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-neutral-300">
        <p>
          <strong>Última atualização:</strong> Abril de 2026
        </p>

        <p>
          O Grupo Souza MKT (&quot;nós&quot;, &quot;nosso&quot;) opera o site
          gruposouza.com.br. Esta política descreve como coletamos, usamos e
          protegemos suas informações pessoais.
        </p>

        <h2>1. Dados que coletamos</h2>
        <p>
          Coletamos informações que você nos fornece diretamente ao preencher
          formulários em nosso site, como: nome, email, telefone, nome da
          empresa, site e mensagem. Também coletamos dados de navegação
          automaticamente, incluindo endereço IP, tipo de navegador, páginas
          visitadas, tempo de permanência e dados de referência (UTM, click IDs).
        </p>

        <h2>2. Como usamos seus dados</h2>
        <p>Utilizamos suas informações para:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Responder suas solicitações e entrar em contato</li>
          <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
          <li>Melhorar nosso site e experiência do usuário</li>
          <li>Analisar o desempenho de nossas campanhas de marketing</li>
          <li>Cumprir obrigações legais</li>
        </ul>

        <h2>3. Cookies e tecnologias de rastreamento</h2>
        <p>
          Utilizamos cookies, Google Tag Manager, Google Analytics 4, pixels de
          Meta e Google, e campos ocultos de formulário para rastrear a origem e
          o comportamento dos visitantes. Esses dados são usados exclusivamente
          para análise de performance e otimização de campanhas.
        </p>

        <h2>4. Compartilhamento de dados</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com
          terceiros para fins de marketing. Podemos compartilhar dados com:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Plataformas de anúncios (Google, Meta) para otimização de campanhas</li>
          <li>Ferramentas de análise (Google Analytics)</li>
          <li>Provedores de infraestrutura (Vercel, Supabase)</li>
          <li>Quando exigido por lei ou ordem judicial</li>
        </ul>

        <h2>5. Segurança dos dados</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados
          contra acesso não autorizado, alteração, divulgação ou destruição.
          Utilizamos criptografia HTTPS em todo o site e armazenamos dados em
          servidores seguros.
        </p>

        <h2>6. Seus direitos (LGPD)</h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
          direito a:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Acessar seus dados pessoais</li>
          <li>Corrigir dados incompletos ou desatualizados</li>
          <li>Solicitar a exclusão de seus dados</li>
          <li>Revogar consentimento a qualquer momento</li>
          <li>Solicitar a portabilidade dos dados</li>
        </ul>

        <h2>7. Retenção de dados</h2>
        <p>
          Mantemos seus dados pelo tempo necessário para cumprir as finalidades
          descritas nesta política, ou conforme exigido por lei. Dados de leads
          são mantidos por até 24 meses após o último contato.
        </p>

        <h2>8. Contato</h2>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta política, entre
          em contato pelo email{" "}
          <a
            href="mailto:contato@gruposouza.com.br"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            contato@gruposouza.com.br
          </a>
          .
        </p>

        <h2>9. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política periodicamente. Alterações
          significativas serão comunicadas em nosso site. Recomendamos que você
          revise esta página regularmente.
        </p>
      </div>
    </section>
  );
}
