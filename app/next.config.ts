import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? 'jamescrowe.dev' : '', 
  assetPrefix: isProd ? 'jamescrowe.dev/' : '', 
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;