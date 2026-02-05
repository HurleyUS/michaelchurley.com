"use client";
import Image from "next/image";

export const dynamic = "force-dynamic";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import nextDynamic from "next/dynamic";
import { PiX, PiImage, PiSpinner } from "react-icons/pi";

// Dynamically import Toast UI Editor (SSR not supported)
const Editor = nextDynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false, loading: () => <div className="h-[500px] border rounded-lg animate-pulse bg-muted" /> }
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
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const getStorageUrl = useMutation(api.storage.getStorageUrl);
  const editorRef = useRef<any>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [editorReady, setEditorReady] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    coverImage: "",
    featured: false,
    published: false,
  });

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        coverImage: post.coverImage || "",
        featured: post.featured,
        published: post.published,
      });
      setTags(post.tags);
      
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
      // Get the proper URL from Convex
      const url = await getStorageUrl({ storageId });
      if (!url) throw new Error("Failed to get storage URL");
      return url;
    } catch (err) {
      console.error("Upload failed:", err);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  // Handle cover image upload
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
      // Get content from Toast UI editor
      const content = editorRef.current?.getInstance().getMarkdown() || "";

      await updatePost({
        id,
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content,
        coverImage: form.coverImage || undefined,
        tags,
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
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/manage/blog" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
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
          <label className="text-sm font-medium">Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            required
          />
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
          <p className="text-xs text-muted-foreground">{form.excerpt.length}/300 characters</p>
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
              onLoad={() => {
                setEditorReady(true);
                // Set content if post is already loaded
                if (post && editorRef.current) {
                  editorRef.current.getInstance().setMarkdown(post.content);
                }
              }}
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
              placeholder={tags.length === 0 ? "Add tags (press comma or enter)" : ""}
              className="flex-1 min-w-[150px] outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <p className="text-xs text-muted-foreground">Press comma, enter, or tab to add a tag</p>
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
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="w-5 h-5 rounded border-2 text-primary focus:ring-primary"
            />
            <span className="text-sm font-medium">Published</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 font-medium transition-all"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
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
