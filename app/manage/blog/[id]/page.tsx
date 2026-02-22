"use client";

import { useState, useEffect, useRef, KeyboardEvent, DragEvent } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter, useParams } from "next/navigation";
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
  const clearCoverImage = useMutation(api.blog.clearCoverImage);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const editorRef = useRef<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [editorReady, setEditorReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Form state - coverImageId stores the storage ID, coverImageUrl is for display
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    featured: false,
    published: false,
  });
  const [coverImageId, setCoverImageId] = useState<Id<"_storage"> | null>(null);
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        featured: post.featured,
        published: post.published,
      });
      setTags(post.tags);
      // The query now returns the resolved URL in coverImage field
      setCoverImageUrl(post.coverImage || null);
      // We don't have the ID anymore since query returns URL, but that's ok
      // New uploads will set the ID

      // Set editor content once it's ready
      if (editorReady && editorRef.current) {
        editorRef.current.getInstance().setMarkdown(post.content);
      }
    }
  }, [post, editorReady]);

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
      setCoverImageUrl(URL.createObjectURL(file));
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
      if (file.type.startsWith("image/")) {
        await handleCoverImageUpload(file);
      } else {
        setError("Please drop an image file");
      }
    }
  };

  // Handle removing cover image
  const handleRemoveCoverImage = async () => {
    setCoverImageId(null);
    setCoverImageUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Get content from Toast UI editor
      const content = editorRef.current?.getInstance().getMarkdown() || "";

      // Build update object
      const updateData: {
        id: Id<"blogPosts">;
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        tags: string[];
        featured: boolean;
        published: boolean;
        coverImage?: Id<"_storage">;
      } = {
        id,
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content,
        tags,
        featured: form.featured,
        published: form.published,
      };

      // Only include coverImage if we have a new one
      if (coverImageId) {
        updateData.coverImage = coverImageId;
      }

      await updatePost(updateData);
      router.push("/manage/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle clearing cover image from server
  const handleClearCoverImage = async () => {
    try {
      await clearCoverImage({ id });
      setCoverImageId(null);
      setCoverImageUrl(null);
    } catch (err) {
      setError("Failed to clear cover image");
    }
  };

  // Handle invalid ID after hooks
  if (!rawId) {
    return (
      <div className="max-w-[56rem] mx-auto py-8 px-4">
        <p className="text-destructive">Invalid blog post ID</p>
        <Link href="/manage/blog" className="text-primary hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (post === undefined) {
    return (
      <div className="max-w-[56rem] mx-auto py-8 px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="max-w-[56rem] mx-auto py-8 px-4">
        <p className="text-destructive">Blog post not found</p>
        <Link href="/manage/blog" className="text-primary hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[56rem] mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/manage/blog"
          className="text-muted-foreground hover:text-foreground"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg">
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
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            required
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            required
          />
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
                : coverImageUrl
                ? "border-border"
                : "border-muted-foreground/30 hover:border-primary hover:bg-primary/5"
            }`}
          >
            {coverImageUrl ? (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImageUrl}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={post.coverImage ? handleClearCoverImage : handleRemoveCoverImage}
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
            rows={3}
            maxLength={300}
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            required
          />
          <p className="text-xs text-muted-foreground">
            {form.excerpt.length}/300 characters
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Tags</label>
          <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-background min-h-[48px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-destructive"
                >
                  <PiX className="w-3 h-3" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              onBlur={addTag}
              placeholder={tags.length === 0 ? "Add tags..." : ""}
              className="flex-1 min-w-[100px] outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Press comma, enter, or tab to add a tag
          </p>
        </div>

        {/* Content Editor */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content *</label>
          <div className="border rounded-lg overflow-hidden toastui-editor-dark-wrapper">
            <Editor
              ref={editorRef}
              initialValue={post.content || ""}
              previewStyle="vertical"
              height="500px"
              initialEditType="markdown"
              useCommandShortcut={true}
              onLoad={() => setEditorReady(true)}
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm">Featured</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                setForm({ ...form, published: e.target.checked })
              }
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm">Published</span>
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-all"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <Link
            href="/manage/blog"
            className="px-6 py-3 border rounded-lg hover:bg-muted transition-all"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
