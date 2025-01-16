import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
