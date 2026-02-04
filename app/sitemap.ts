import type { MetadataRoute } from "next";

const BASE_URL = "https://www.michaelchurley.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static routes with their priorities and change frequencies
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

  // Note: For dynamic routes (blog posts, portfolio items), 
  // consider implementing a build-time data fetch or using 
  // generateSitemaps() for larger sites with 50k+ URLs.
  // 
  // Example for dynamic content (requires API endpoint or build-time fetch):
  // const blogPosts = await fetchBlogPosts();
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.7,
  // }));

  return [...staticRoutes];
}
