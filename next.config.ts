import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolioo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolioo' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
