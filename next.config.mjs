/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/twelveux/r/:path*",
        destination: "/r/:path*",
      },
    ];
  },
  async headers() {
    const registryCors = [
      {
        key: "Access-Control-Allow-Origin",
        value: "*",
      },
      {
        key: "Cache-Control",
        value: "public, max-age=3600",
      },
    ];
    return [
      {
        source: "/r/:path*",
        headers: registryCors,
      },
      {
        source: "/twelveux/r/:path*",
        headers: registryCors,
      },
    ];
  },
};

export default nextConfig;
