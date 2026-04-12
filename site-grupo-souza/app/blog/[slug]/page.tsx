import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { CategoryBadge } from "@/components/blog/category-badge";
import { PostCard } from "@/components/blog/post-card";
import { CopyLinkButton } from "@/components/blog/copy-link-button";
import { TableOfContents } from "@/components/blog/toc";
import {
  StickyLeadMagnet,
  DEFAULT_LEAD_MAGNET,
} from "@/components/blog/sticky-lead-magnet";
import { mdxComponents } from "@/components/blog/mdx-components";
import { CTAButton } from "@/components/forms/cta-button";
import { extractToc } from "@/lib/toc";

const BASE_URL = "https://gruposouza.com.br";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };

  const url = `${BASE_URL}/blog/${post.slug}`;
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt;

  return {
    title,
    description,
    keywords: post.seo_keywords?.length
      ? post.seo_keywords
      : post.tags?.length
        ? post.tags
        : undefined,
    authors: [{ name: post.author }],
    alternates: {
      canonical: post.canonical || url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "pt_BR",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "Grupo Souza MKT",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);
  const toc = post.toc ? extractToc(post.content) : [];
  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.og_image || `${url}/opengraph-image`;
  // Cover: usa custom se houver, senao usa o OG dinamico (gerado automaticamente)
  const coverImage = post.cover || `/blog/${post.slug}/opengraph-image`;
  const leadMagnet = post.lead_magnet || DEFAULT_LEAD_MAGNET;

  // ============ JSON-LD ============
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": post.schema_type === "HowTo" ? "HowTo" : "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [ogImage],
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: post.language || "pt-BR",
    author: {
      "@type": "Person",
      name: post.author,
      url: `${BASE_URL}/sobre`,
      sameAs: [
        "https://www.linkedin.com/in/rodrigosouzamkt",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Grupo Souza MKT",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(post.seo_keywords?.length || post.tags?.length
      ? { keywords: [...(post.seo_keywords || []), ...(post.tags || [])].join(", ") }
      : {}),
    articleSection: post.category,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  const jsonLdFaq = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <article className="relative pt-8 md:pt-12 pb-20">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/15 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 xl:gap-16">
          <div className="max-w-3xl w-full min-w-0 lg:mx-0 mx-auto overflow-hidden">
          {/* Back link */}
          <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>
          </div>

          {/* Cover image (acima do header) */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 ring-1 ring-white/[0.08] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] [animation:animationIn_0.8s_ease-out_0.15s_both] animate-on-scroll">
            <Image
              src={coverImage}
              alt={post.cover_alt || post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
              priority
              unoptimized={!post.cover}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Header */}
          <header className="mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            <CategoryBadge category={post.category} className="mb-5" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg text-neutral-400 leading-relaxed mb-8 font-sans">
                {post.excerpt}
              </p>
            )}

            {/* Author + meta */}
            <div className="flex flex-wrap items-center gap-5 pb-2">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Image
                    src="/rodrigo-souza.png"
                    alt={post.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{post.author}</div>
                  <div className="text-xs text-neutral-500">Fundador · Grupo Souza</div>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </header>


          {/* TOC inline */}
          {toc.length >= 3 && (
            <div className="[animation:animationIn_0.8s_ease-out_0.25s_both] animate-on-scroll mb-12">
              <TableOfContents items={toc} />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-emerald max-w-none break-words [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll prose-headings:font-bold prose-headings:tracking-tight prose-headings:break-words prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-li:text-gray-300 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words prose-hr:border-white/[0.06]">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Compartilhar:</span>
              <CopyLinkButton />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-5 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] text-center [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
            <h3 className="text-xl font-bold mb-2">
              Quer resultados assim?
            </h3>
            <p className="text-gray-400 mb-6">
              Agende um diagnóstico gratuito e descubra como aplicar essas
              estratégias no seu negócio.
            </p>
            <CTAButton variant="primary-glow" size="lg">
              Agendar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
          </div>

          {/* Sticky sidebar: lead magnet (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
              <StickyLeadMagnet magnet={leadMagnet} />
            </div>
          </aside>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative py-16 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              Artigos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {related.map((relatedPost, index) => (
                <div
                  key={relatedPost.slug}
                  className={`[animation:animationIn_0.8s_ease-out_${0.2 + index * 0.1}s_both] animate-on-scroll`}
                >
                  <PostCard post={relatedPost} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
