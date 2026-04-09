import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite query strings (?v=...) usadas pra cache-busting de capas de blog
    localPatterns: [
      {
        pathname: "/blog/**",
        search: "",
      },
      {
        pathname: "/blog/**",
        search: "?v=*",
      },
    ],
  },
};

export default nextConfig;
