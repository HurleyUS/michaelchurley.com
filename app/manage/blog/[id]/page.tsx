"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  
  // Get the raw ID - handle array case from catch-all routes
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  
  // Cast to Convex ID type (validation happens via the query)
  const id = (rawId || "") as Id<"blogPosts">;
  
  // All hooks must be called unconditionally
  const post = useQuery(api.blog.getById, rawId ? { id } : "skip");
  const updatePost = useMutation(api.blog.update);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    tags: "",
    featured: false,
    published: false,
  });

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage || "",
        tags: post.tags.join(", "),
        featured: post.featured,
        published: post.published,
      });
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await updatePost({
        id,
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        coverImage: form.coverImage || undefined,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        featured: form.featured,
        published: form.published,
      });
      router.push("/manage/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle invalid ID after hooks
  if (!rawId) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Invalid Post ID</h1>
        <Link href="/manage/blog" className="text-primary hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (post === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <Link href="/manage/blog" className="text-primary hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Link href="/manage/blog" className="text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Excerpt *</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background h-24"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Content (Markdown) *</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background h-64 font-mono"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image URL</label>
          <input
            type="url"
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full px-3 py-2 border rounded-md bg-background"
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm">Featured</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm">Published</span>
          </label>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <Link
            href="/manage/blog"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
