import type { MetadataRoute } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

const BASE_URL = "https://www.michaelchurley.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Fetch published blog posts and portfolio items from Convex
  const [blogPosts, portfolioItems] = await Promise.all([
    fetchQuery(api.blog.list, { onlyPublished: true }).catch(() => []),
    fetchQuery(api.portfolio.list, { onlyPublished: true }).catch(() => []),
  ]);

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : new Date(post.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map(
    (item) => ({
      url: `${BASE_URL}/portfolio/${item.slug}`,
      lastModified: item.publishedAt
        ? new Date(item.publishedAt)
        : new Date(item.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}
