import { getAllServiceSlugs } from "@/content/services";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://gruposouza.com.br";

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: "weekly" | "monthly";
  priority: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildEntry(e: UrlEntry): string {
  return `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`;
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const entries: UrlEntry[] = [
    { loc: BASE_URL, lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: `${BASE_URL}/servicos`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${BASE_URL}/blog`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/sobre`, lastmod: today, changefreq: "monthly", priority: "0.7" },
    { loc: `${BASE_URL}/pacotes`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${BASE_URL}/contato`, lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: `${BASE_URL}/diagnostico`, lastmod: today, changefreq: "monthly", priority: "0.7" },
  ];

  // Servicos
  for (const slug of getAllServiceSlugs()) {
    entries.push({
      loc: `${BASE_URL}/servicos/${slug}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  // Posts
  const posts = getAllPosts().filter((p) => p.status === "published");
  for (const post of posts) {
    const lastmod = (post.updated || post.date || today).split("T")[0];
    entries.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9">
${entries.map(buildEntry).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
