import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import CommentSection from "@/components/comments/comment-section";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchQuery(api.blog.getBySlug, { slug }).catch(
    () => null
  );

  if (!post || !post.published) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Michael C. Hurley`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.publishedAt
        ? new Date(post.publishedAt).toISOString()
        : undefined,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
  };
}

function formatDate(timestamp: number | undefined) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchQuery(api.blog.getBySlug, { slug }).catch(
    () => null
  );

  if (!post || !post.published) {
    notFound();
  }

  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full max-w-[56rem] mx-auto",
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
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
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
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Comments */}
        <div className="border-t pt-8 mt-8">
          <CommentSection itemType="blog" itemId={post._id} />
        </div>
      </ContainerBoxedCenter>
    </section>
  );
}
