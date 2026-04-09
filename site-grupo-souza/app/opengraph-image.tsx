import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Grupo Souza MKT — Infraestrutura de Aquisicao";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          background:
            "linear-gradient(135deg, #000 0%, #050a08 50%, #0a1410 100%)",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -250,
            right: -250,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top — badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
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
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#10b981",
              fontWeight: 700,
              display: "flex",
            }}
          >
            Growth Marketing · Tracking · CRO
          </div>
        </div>

        {/* Center — main message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            maxWidth: 1020,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              letterSpacing: -3,
              lineHeight: 1.0,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Construimos</span>
            <span style={{ display: "flex" }}>a infraestrutura</span>
            <span
              style={{
                display: "flex",
                background: "linear-gradient(90deg, #34d399, #10b981, #059669)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              de aquisicao.
            </span>
          </div>
        </div>

        {/* Bottom — wordmark + tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: -1,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            GRUPO{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #34d399, #10b981)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                display: "flex",
              }}
            >
              SOUZA
            </span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#737373",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            gruposouza.com.br
          </div>
        </div>
      </div>
    ),
    size
  );
}
