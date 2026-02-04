"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPortfolioItem() {
  const router = useRouter();
  const createItem = useMutation(api.portfolio.create);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    coverImage: "",
    technologies: "",
    projectUrl: "",
    githubUrl: "",
    featured: false,
    published: false,
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await createItem({
        title: form.title,
        slug: form.slug || generateSlug(form.title),
        description: form.description,
        content: form.content,
        coverImage: form.coverImage || undefined,
        technologies: form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
        projectUrl: form.projectUrl || undefined,
        githubUrl: form.githubUrl || undefined,
        featured: form.featured,
        published: form.published,
      });
      router.push("/manage/portfolio");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create item");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Link href="/manage/portfolio" className="text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">New Portfolio Item</h1>
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
          <label className="text-sm font-medium">Slug</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder={generateSlug(form.title) || "auto-generated-from-title"}
            className="w-full px-3 py-2 border rounded-md bg-background"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Description *</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
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
          <label className="text-sm font-medium">Technologies (comma-separated) *</label>
          <input
            type="text"
            value={form.technologies}
            onChange={(e) => setForm({ ...form, technologies: e.target.value })}
            placeholder="React, Next.js, TypeScript"
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project URL</label>
            <input
              type="url"
              value={form.projectUrl}
              onChange={(e) => setForm({ ...form, projectUrl: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub URL</label>
            <input
              type="url"
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-background"
            />
          </div>
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
            {isSubmitting ? "Creating..." : "Create Item"}
          </button>
          <Link
            href="/manage/portfolio"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
