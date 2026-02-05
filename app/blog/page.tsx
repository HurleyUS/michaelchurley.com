"use client";

export const dynamic = "force-dynamic";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ContainerBoxedCenter } from "@/components/layout/containers";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag");
  
  // Pass the tag to filter posts server-side
  const blogPosts = useQuery(api.blog.list, { 
    onlyPublished: true,
    tag: selectedTag || undefined,
  });
  const tags = useQuery(api.blog.getAllTags);

  const formatDate = (timestamp: number | undefined) => {
    if (!timestamp) return "";
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="flex flex-col py-4xl bg-linear-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-black">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {/* All posts link */}
            <Link
              href="/blog"
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                !selectedTag 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              All
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Show active filter */}
        {selectedTag && (
          <div className="flex items-center justify-center gap-2">
            <span className="text-muted-foreground">Showing posts tagged:</span>
            <span className="font-medium">{selectedTag}</span>
            <Link 
              href="/blog" 
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              (clear)
            </Link>
          </div>
        )}

        {blogPosts === undefined ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : blogPosts.length === 0 ? (
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
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-muted rounded"
                      >
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
