import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.VITE_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
