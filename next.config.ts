import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "*.convex.site",
      },
      {
        protocol: "https",
        hostname: "blessed-panther-485.convex.site",
      },
      {
        protocol: "https",
        hostname: "blessed-panther-485.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
