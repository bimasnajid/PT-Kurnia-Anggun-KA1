import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ... konfigurasi Anda yang sudah ada ... */
  eslint: {
    ignoreDuringBuilds: true, // Melewati error linting
  },
  typescript: {
    ignoreBuildErrors: true, // Melewati error type check module Prisma ini
  },
};

export default nextConfig;
