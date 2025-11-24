import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolioo',
  assetPrefix: '/portfolioo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
