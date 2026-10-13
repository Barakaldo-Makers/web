import type { NextConfig } from "next";

// Por defecto se compila para la raíz de barakaldomakers.org.
// Solo el workflow de GitHub Pages (manual) pasa una ruta base en PAGES_BASE_PATH.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.PAGES_SITE_URL ?? "https://barakaldomakers.org",
  },
  images: {
    // GitHub Pages no tiene servidor que optimice imágenes
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
