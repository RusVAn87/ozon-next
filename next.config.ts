import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  experimental: {
    reactCompiler: true, // или объект с настройками
  },
};

export default nextConfig;
