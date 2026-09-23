import type { MetadataRoute } from "next";

const BASE_URL = "https://www.michaelchurley.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/manage/",
          "/private/",
          "/tmp/",
          "/profile/",
          "/billing/",
          "/settings/",
          "/support/",
          "/nightly",
          "/nightly/",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: "www.michaelchurley.com",
  };
}
