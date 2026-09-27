import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import { getStaticPosts, getStaticTags } from "@/lib/static-posts";
import { TagFilter } from "@/components/blog/tag-filter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Michael C. Hurley",
  description: "Thoughts, tutorials, and insights from Michael C. Hurley.",
  alternates: { canonical: "/blog" },
};

function formatDate(timestamp: number | undefined) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag: selectedTag } = await searchParams;

  const staticPosts = getStaticPosts(selectedTag);
  let remotePosts: {
    _id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    tags: string[];
    featured: boolean;
    publishedAt?: number;
    readingTime?: number;
  }[] = [];
  let remoteTags: string[] = [];
  let remoteAllForCounts: { tags: string[] }[] = [];
  try {
    const [posts, t, allRemote] = await Promise.all([
      fetchQuery(api.blog.list, {
        onlyPublished: true,
        tag: selectedTag || undefined,
      }),
      fetchQuery(api.blog.getAllTags),
      selectedTag
        ? fetchQuery(api.blog.list, { onlyPublished: true })
        : Promise.resolve(null),
    ]);
    remotePosts = (posts ?? []).map((p) => ({
      _id: String(p._id),
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      tags: p.tags,
      featured: p.featured,
      publishedAt: p.publishedAt,
      readingTime: p.readingTime,
    }));
    remoteTags = t ?? [];
    remoteAllForCounts = (allRemote ?? posts ?? []).map((p) => ({ tags: p.tags }));
  } catch {
    remotePosts = [];
    remoteTags = [];
    remoteAllForCounts = [];
  }
  const seen = new Set(staticPosts.map((p) => p.slug));
  const blogPosts = [...staticPosts, ...remotePosts.filter((p) => !seen.has(p.slug))].sort(
    (a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0),
  );
  const tags = Array.from(new Set([...getStaticTags(), ...remoteTags])).sort();

  const tagCounts = new Map<string, number>();
  for (const post of [...getStaticPosts(), ...remoteAllForCounts]) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }
  const tagsWithCounts = tags.map((tag) => ({
    tag,
    count: tagCounts.get(tag) ?? 0,
  }));

  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className: "flex flex-col items-stretch justify-start gap-lg grow w-full",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-black">Blog</h1>
          <p className="text-lg text-muted-foreground">Thoughts, tutorials, and insights</p>
        </div>

        {tagsWithCounts.length > 0 && (
          <TagFilter tags={tagsWithCounts} selectedTag={selectedTag} />
        )}

        {blogPosts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            {selectedTag ? (
              <p>No posts found with tag &quot;{selectedTag}&quot;.</p>
            ) : (
              <p>No blog posts yet. Check back soon!</p>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.coverImage && (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {post.featured && (
                    <span className="inline-block text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                      Featured
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </ContainerBoxedCenter>
    </section>
  );
}
