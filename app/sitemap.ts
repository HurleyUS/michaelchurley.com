import type { MetadataRoute } from "next";
import { getLlmsPosts } from "@/lib/llms";
import { RESUME_UPDATED } from "@/lib/resume";
import { SITE_URL } from "@/lib/site-profile";

/** Last content revision of the static pages (book, portfolio, vizible, omadesign, aeo). */
const PAGES_UPDATED = "2026-09-27";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getLlmsPosts();
  const newestPost = posts.find((post) => post.publishedAt)?.publishedAt;
  const blogUpdated = newestPost ? new Date(newestPost) : new Date(PAGES_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/portfolio/naarchy`,
      lastModified: new Date("2026-10-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(RESUME_UPDATED),
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: `${SITE_URL}/blog`, lastModified: blogUpdated, changeFrequency: "daily", priority: 0.9 },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(PAGES_UPDATED),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/aeo`,
      lastModified: new Date(PAGES_UPDATED),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/book`,
      lastModified: new Date(PAGES_UPDATED),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/omadesign`,
      lastModified: new Date(PAGES_UPDATED),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/vizible`,
      lastModified: new Date(PAGES_UPDATED),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
