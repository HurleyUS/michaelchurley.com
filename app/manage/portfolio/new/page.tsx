"use client";
import Image from "next/image";

export const dynamic = "force-dynamic";

import { useState, KeyboardEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PiX, PiImage, PiSpinner } from "react-icons/pi";

export default function NewPortfolioItem() {
  const router = useRouter();
  const createItem = useMutation(api.portfolio.create);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [techInput, setTechInput] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    coverImage: "",
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

  // Handle tech input - add tech on comma, enter, or tab
  const handleTechKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      addTech();
    } else if (e.key === "Backspace" && techInput === "" && technologies.length > 0) {
      setTechnologies(technologies.slice(0, -1));
    }
  };

  const addTech = () => {
    const newTech = techInput.trim().replace(/,/g, "");
    if (newTech && !technologies.includes(newTech)) {
      setTechnologies([...technologies, newTech]);
    }
    setTechInput("");
  };

  const removeTech = (techToRemove: string) => {
    setTechnologies(technologies.filter((t) => t !== techToRemove));
  };

  // Handle image upload
  const handleImageUpload = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();
      return `${process.env.NEXT_PUBLIC_CONVEX_URL?.replace(".cloud", ".site")}/api/storage/${storageId}`;
    } catch (err) {
      console.error("Upload failed:", err);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await handleImageUpload(file);
      setForm({ ...form, coverImage: url });
    } catch (err) {
      setError("Failed to upload cover image");
    }
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
        technologies,
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
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/manage/portfolio" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">New Portfolio Item</h1>
      </div>

      {error && (
        <div className="p-4 mb-6 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background text-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="Project name..."
            required
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Slug</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder={generateSlug(form.title) || "auto-generated-from-title"}
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
          <p className="text-xs text-muted-foreground">Leave blank to auto-generate from title</p>
        </div>

        {/* Cover Image */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image</label>
          <div className="flex items-start gap-4">
            {form.coverImage ? (
              <div className="relative w-48 h-32 rounded-lg overflow-hidden border">
                <Image 
                  src={form.coverImage} 
                  alt="Cover preview" 
                  fill className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, coverImage: "" })}
                  className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/80"
                >
                  <PiX size={16} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-48 h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                {isUploading ? (
                  <PiSpinner className="animate-spin text-2xl text-muted-foreground" />
                ) : (
                  <>
                    <PiImage className="text-2xl text-muted-foreground mb-2" />
                    <span className="text-xs text-muted-foreground">Click to upload</span>
                  </>
                )}
              </label>
            )}
            <div className="flex-1">
              <input
                type="url"
                value={form.coverImage}
                onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                placeholder="Or paste image URL..."
                className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Description *</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background h-24 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            placeholder="Brief project summary..."
            required
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content (Markdown) *</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background h-64 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="Detailed project description in markdown..."
            required
          />
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Technologies *</label>
          <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-background min-h-[52px] focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTech(tech)}
                  className="hover:text-destructive transition-colors"
                >
                  <PiX size={14} />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleTechKeyDown}
              onBlur={addTech}
              placeholder={technologies.length === 0 ? "React, Next.js, TypeScript..." : ""}
              className="flex-1 min-w-[150px] outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <p className="text-xs text-muted-foreground">Press comma, enter, or tab to add</p>
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project URL</label>
            <input
              type="url"
              value={form.projectUrl}
              onChange={(e) => setForm({ ...form, projectUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub URL</label>
            <input
              type="url"
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              placeholder="https://github.com/..."
              className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center gap-8 p-4 bg-muted/50 rounded-lg">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-5 h-5 rounded border-2 text-primary focus:ring-primary"
            />
            <span className="text-sm font-medium">Featured project</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="w-5 h-5 rounded border-2 text-primary focus:ring-primary"
            />
            <span className="text-sm font-medium">Publish immediately</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <button
            type="submit"
            disabled={isSubmitting || technologies.length === 0}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 font-medium transition-all"
          >
            {isSubmitting ? "Creating..." : "Create Project"}
          </button>
          <Link
            href="/manage/portfolio"
            className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
