import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Desactivar Strict Mode
  images: {
    remotePatterns: [
      new URL('https://ribpropiedades.com.ar/uploads/images/**')
    ],
    unoptimized: true, // Disables all Next.js image optimization
  }
};

export default nextConfig;
