"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import CommentSection from "@/components/comments/comment-section";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = useQuery(api.blog.getBySlug, { slug });

  const formatDate = (timestamp: number | undefined) => {
    if (!timestamp) return "";
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (post === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (post === null || !post.published) {
    return (
      <section className="flex flex-col py-4xl">
        <ContainerBoxedCenter>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Post Not Found</h1>
            <p className="text-muted-foreground mt-2">
              This post doesn&apos;t exist or isn&apos;t published yet.
            </p>
            <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">
              ← Back to Blog
            </Link>
          </div>
        </ContainerBoxedCenter>
      </section>
    );
  }

  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full max-w-4xl mx-auto",
        }}
      >
        {/* Back link */}
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
        >
          ← Back to Blog
        </Link>

        {/* Cover image */}
        {post.coverImage && (
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-black">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          {/* Simple markdown rendering - for a production app, use react-markdown */}
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) {
              return <h1 key={i}>{line.slice(2)}</h1>;
            }
            if (line.startsWith("## ")) {
              return <h2 key={i}>{line.slice(3)}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i}>{line.slice(4)}</h3>;
            }
            if (line.startsWith("- ")) {
              return <li key={i}>{line.slice(2)}</li>;
            }
            if (line.startsWith("```")) {
              return <pre key={i}><code>{line.slice(3)}</code></pre>;
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            return <p key={i}>{line}</p>;
          })}
        </article>

        {/* Comments */}
        <div className="border-t pt-8 mt-8">
          <CommentSection itemType="blog" itemId={post._id} />
        </div>
      </ContainerBoxedCenter>
    </section>
  );
}
