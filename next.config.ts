import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "**.convex.site",
      },
    ],
    // Also allow unoptimized for Convex storage
    unoptimized: false,
  },
  // Security headers for Launch Week readiness
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy - start with report-only, then enforce
          {
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://app.posthog.com https://us-assets.i.posthog.com https://clerk.michaelchurley.com *.convex.cloud *.convex.site",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: *.convex.cloud *.convex.site",
              "font-src 'self' data:",
              "connect-src 'self' https://api.clerk.com https://clerk.michaelchurley.com https://app.posthog.com *.convex.cloud *.convex.site wss:",
              "frame-src 'self' https://accounts.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // HTTP Strict Transport Security
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // MIME type sniffing protection
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Referrer Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // XSS Protection (legacy browsers)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions Policy
          {
            key: "Permissions-Policy",
            value: ["camera=()", "microphone=()", "geolocation=()", "interest-cohort=()"].join(
              ", ",
            ),
          },
          // Cross-Origin policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
