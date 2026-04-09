import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export pra Cloudflare Pages — gera HTML estatico em /out
  output: "export",

  // Required pra static hosting (cada rota vira uma pasta com index.html)
  trailingSlash: true,

  // Required: Next nao roda otimizacao runtime em static export
  images: {
    unoptimized: true,
    localPatterns: [
      { pathname: "/blog/**", search: "" },
      { pathname: "/blog/**", search: "?v=*" },
    ],
  },
};

export default nextConfig;
