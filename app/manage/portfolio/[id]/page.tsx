"use client";

export const dynamic = "force-dynamic";

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
      <div className="h-[400px] border rounded-lg animate-pulse bg-muted" />
    ),
  }
);

// Import Toast UI Editor CSS
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/styles/toastui-dark.css";

export default function EditPortfolioItem() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as Id<"portfolioItems">;

  const item = useQuery(api.portfolio.getById, { id });
  const updateItem = useMutation(api.portfolio.update);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const getStorageUrl = useMutation(api.storage.getStorageUrl);
  const editorRef = useRef<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [techInput, setTechInput] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [editorReady, setEditorReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    coverImage: "",
    projectUrl: "",
    githubUrl: "",
    featured: false,
    published: false,
  });

  useEffect(() => {
    if (item) {
      setForm({
        title: item.title,
        slug: item.slug,
        description: item.description || "",
        coverImage: item.coverImage || "",
        projectUrl: item.projectUrl || "",
        githubUrl: item.githubUrl || "",
        featured: item.featured,
        published: item.published,
      });
      setTechnologies(item.technologies || []);

      // Set editor content once it's ready
      if (editorReady && editorRef.current) {
        editorRef.current.getInstance().setMarkdown(item.content || "");
      }
    }
  }, [item, editorReady]);

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

  const handleCoverImageUpload = async (file: File) => {
    try {
      const url = await handleImageUpload(file);
      setForm({ ...form, coverImage: url });
    } catch (err) {
      setError("Failed to upload cover image");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate required fields
    if (!form.title.trim()) {
      setError("Title is required");
      setIsSubmitting(false);
      return;
    }

    if (!form.coverImage) {
      setError("Cover image is required");
      setIsSubmitting(false);
      return;
    }

    try {
      // Get content from Toast UI editor
      const content = editorRef.current?.getInstance().getMarkdown() || "";

      await updateItem({
        id,
        title: form.title,
        slug: form.slug,
        description: form.description || "",
        content: content || "",
        coverImage: form.coverImage,
        technologies: technologies.length > 0 ? technologies : [],
        projectUrl: form.projectUrl || undefined,
        githubUrl: form.githubUrl || undefined,
        featured: form.featured,
        published: form.published,
      });
      router.push("/manage/portfolio");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update item");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (item === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (item === null) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Item Not Found</h1>
        <Link href="/manage/portfolio" className="text-primary hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/manage/portfolio"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold">Edit Portfolio Item</h1>
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
            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Cover Image - Drop Zone */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image *</label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-lg transition-all duration-200 ${
              isDragging
                ? "border-primary bg-primary/10 scale-[1.02]"
                : form.coverImage
                ? "border-border"
                : "border-muted-foreground/30 hover:border-primary hover:bg-primary/5"
            }`}
          >
            {form.coverImage ? (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={form.coverImage}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, coverImage: "" })}
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

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg bg-background h-24 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
          />
        </div>

        {/* Content - Toast UI Editor */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content (Markdown)</label>
          <div className="border rounded-lg overflow-hidden toastui-editor-dark-wrapper">
            <Editor
              ref={editorRef}
              initialValue={item.content || ""}
              previewStyle="vertical"
              height="400px"
              initialEditType="markdown"
              useCommandShortcut={true}
              hideModeSwitch={false}
              onLoad={() => setEditorReady(true)}
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

        {/* Technologies */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Technologies</label>
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
              className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub URL</label>
            <input
              type="url"
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
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
