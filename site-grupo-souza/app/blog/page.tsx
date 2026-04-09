import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { BlogList } from "@/components/blog/blog-list";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre growth marketing, tracking avançado, CRO, automação e estratégias de aquisição para empresas em crescimento.",
};

export default function BlogPage() {
  return (
    <>
      <BlogList page={1} />

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Newsletter CTA */}
      <section className="relative py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Fique por dentro</h2>
            <p className="text-gray-400 mb-6">
              Receba conteúdo sobre growth marketing direto no seu email.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
