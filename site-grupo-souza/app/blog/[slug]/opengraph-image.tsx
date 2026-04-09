import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs, CATEGORY_LABELS } from "@/lib/blog";

export const alt = "Grupo Souza MKT — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          Grupo Souza MKT
        </div>
      ),
      size
    );
  }

  const categoryLabel = CATEGORY_LABELS[post.category] || post.category;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #000 0%, #050a08 50%, #0a1410 100%)",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#10b981",
              boxShadow: "0 0 20px rgba(16,185,129,0.8)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#10b981",
              fontWeight: 700,
              display: "flex",
            }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -2.5,
            lineHeight: 1.05,
            color: "#fff",
            position: "relative",
            display: "flex",
            maxWidth: 1040,
          }}
        >
          {post.title}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 24, color: "#a3a3a3", display: "flex" }}>
              {post.author}
            </div>
            <div style={{ fontSize: 18, color: "#525252", display: "flex" }}>
              {post.readingTime} min de leitura
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: "#10b981", display: "flex" }}>///</span>
            Grupo Souza
          </div>
        </div>
      </div>
    ),
    size
  );
}
