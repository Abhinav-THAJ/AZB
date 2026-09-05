import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains temporarily, replace with your actual WP domain later
      },
      {
        protocol: 'http',
        hostname: 'localhost', // For local development
      }
    ],
  },
};

export default nextConfig;
