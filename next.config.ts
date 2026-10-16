import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/artic-research",
        permanent: false,
      },
      {
        source: "/services/artic-research",
        destination: "/artic-research",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/artic-research",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
