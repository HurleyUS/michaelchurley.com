"use client";

export const dynamicRoute = "force-dynamic";

import { useState, useRef, KeyboardEvent, DragEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import Link from "next/link";
import nextDynamic from "next/dynamic";
import { PiX, PiSpinner, PiUploadSimple } from "react-icons/pi";

// Dynamically import Toast UI Editor (SSR not supported)
const Editor = nextDynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] border rounded-lg animate-pulse bg-muted" />
    ),
  }
);

// Import Toast UI Editor CSS
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/styles/toastui-dark.css";

export default function NewBlogPost() {
  const router = useRouter();
  const createPost = useMutation(api.blog.create);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const editorRef = useRef<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Form state
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    featured: false,
    published: false,
  });

  // Separate state for cover image
  const [coverImageId, setCoverImageId] = useState<Id<"_storage"> | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Handle tag input - add tag on comma, enter, or tab
  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
      // Remove last tag on backspace if input is empty
      setTags(tags.slice(0, -1));
    }
  };

  const addTag = () => {
    const newTag = tagInput.trim().toLowerCase().replace(/,/g, "");
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setTagInput("");
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Handle cover image upload - returns storage ID
  const handleCoverImageUpload = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      // Get upload URL from Convex
      const uploadUrl = await generateUploadUrl();

      // Upload file to Convex storage
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!result.ok) {
        throw new Error("Upload failed");
      }

      const { storageId } = await result.json();

      // Store the ID for the mutation
      setCoverImageId(storageId as Id<"_storage">);

      // Create a local preview URL
      setCoverImagePreview(URL.createObjectURL(file));
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Failed to upload cover image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await handleCoverImageUpload(file);
  };

  // Drag and drop handlers
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        await handleCoverImageUpload(file);
      } else {
        setError("Please drop an image file");
      }
    }
  };

  // Handle removing cover image
  const handleRemoveCoverImage = () => {
    setCoverImageId(null);
    setCoverImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Get content from Toast UI editor
      const content = editorRef.current?.getInstance().getMarkdown() || "";

      // Build create data
      const createData: {
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        tags: string[];
        featured: boolean;
        published: boolean;
        coverImage?: Id<"_storage">;
      } = {
        title: form.title,
        slug: form.slug || generateSlug(form.title),
        excerpt: form.excerpt,
        content,
        tags,
        featured: form.featured,
        published: form.published,
      };

      // Include cover image ID if uploaded
      if (coverImageId) {
        createData.coverImage = coverImageId;
      }

      await createPost(createData);
      router.push("/manage/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-[64rem] mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/manage/blog"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">New Blog Post</h1>
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
            placeholder="Enter your post title..."
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
            placeholder={
              generateSlug(form.title) || "auto-generated-from-title"
            }
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
          <p className="text-xs text-muted-foreground">
            Leave blank to auto-generate from title
          </p>
        </div>

        {/* Cover Image - Drop Zone */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image</label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-lg transition-all duration-200 ${
              isDragging
                ? "border-primary bg-primary/10 scale-[1.02]"
                : coverImagePreview
                ? "border-border"
                : "border-muted-foreground/30 hover:border-primary hover:bg-primary/5"
            }`}
          >
            {coverImagePreview ? (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImagePreview}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveCoverImage}
                  className="absolute top-2 right-2 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/80 transition-colors"
                >
                  <PiX size={16} />
                </button>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm">Drop new image to replace</p>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-48 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                  disabled={isUploading}
                />
                {isUploading ? (
                  <PiSpinner className="animate-spin text-3xl text-muted-foreground" />
                ) : (
                  <>
                    <PiUploadSimple className="text-4xl text-muted-foreground mb-3" />
                    <span className="text-sm text-muted-foreground font-medium">
                      Drag & drop an image here
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      or click to browse
                    </span>
                  </>
                )}
              </label>
            )}
          </div>
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Excerpt *</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background h-24 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            placeholder="Brief summary for previews and SEO..."
            required
          />
          <p className="text-xs text-muted-foreground">
            {form.excerpt.length}/300 characters
          </p>
        </div>

        {/* Content - Toast UI Editor */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content *</label>
          <div className="border rounded-lg overflow-hidden toastui-editor-dark-wrapper">
            <Editor
              ref={editorRef}
              initialValue=""
              previewStyle="vertical"
              height="500px"
              initialEditType="markdown"
              useCommandShortcut={true}
              hideModeSwitch={false}
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
                ["scrollSync"],
              ]}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Tags</label>
          <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-background min-h-[52px] focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-destructive transition-colors"
                >
                  <PiX size={14} />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              onBlur={addTag}
              placeholder={
                tags.length === 0 ? "Add tags (press comma or enter)" : ""
              }
              className="flex-1 min-w-[150px] outline-none bg-transparent"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Press comma, enter, or tab to add a tag
          </p>
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
            <span className="text-sm font-medium">Featured post</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                setForm({ ...form, published: e.target.checked })
              }
              className="w-5 h-5 rounded border-2 text-primary focus:ring-primary"
            />
            <span className="text-sm font-medium">Publish immediately</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 font-medium transition-all"
          >
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
          <button
            type="button"
            onClick={() => {
              // Save as draft logic could go here
              setForm({ ...form, published: false });
            }}
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 font-medium transition-all"
          >
            Save as Draft
          </button>
          <Link
            href="/manage/blog"
            className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
