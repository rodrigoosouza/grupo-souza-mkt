import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://gruposouza.com.br";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts().filter((p) => p.status === "published");

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date + "T12:00:00").toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <author>contato@gruposouza.com.br (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog · Grupo Souza MKT</title>
    <link>${BASE_URL}/blog</link>
    <description>Growth marketing, tracking avançado, AIEO/GEO, CRO e infraestrutura de aquisição. Conteúdo técnico do Grupo Souza MKT.</description>
    <language>pt-BR</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
