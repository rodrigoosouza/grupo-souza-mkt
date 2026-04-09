import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/content/services";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://gruposouza.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = getAllPosts().filter((p) => p.status === "published");

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date((post.updated || post.date) + "T12:00:00"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts,
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pacotes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/diagnostico`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
