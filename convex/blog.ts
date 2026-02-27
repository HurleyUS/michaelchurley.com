import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireAdmin } from "./lib/auth";
import { Id } from "./_generated/dataModel";

// Helper to resolve cover image URL
async function resolvePostWithImage(
  ctx: { storage: { getUrl: (id: Id<"_storage">) => Promise<string | null> } },
  post: {
    _id: Id<"blogPosts">;
    _creationTime: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: Id<"_storage"> | string;
    tags: string[];
    featured: boolean;
    published: boolean;
    publishedAt?: number;
    readingTime?: number;
  }
) {
  let coverImageUrl: string | null = null;
  
  if (post.coverImage) {
    // Handle both old URL strings and new storage IDs
    if (typeof post.coverImage === "string" && post.coverImage.startsWith("http")) {
      coverImageUrl = post.coverImage; // Legacy URL
    } else {
      coverImageUrl = await ctx.storage.getUrl(post.coverImage as Id<"_storage">);
    }
  }

  return {
    ...post,
    coverImage: coverImageUrl ?? undefined, // Return URL, not storage ID
  };
}

// Public queries
export const list = query({
  args: {
    onlyPublished: v.optional(v.boolean()),
    onlyFeatured: v.optional(v.boolean()),
    tag: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let posts;

    if (args.onlyFeatured) {
      posts = await ctx.db
        .query("blogPosts")
        .withIndex("by_featured", (q) =>
          q.eq("featured", true).eq("published", true)
        )
        .collect();
    } else if (args.onlyPublished !== false) {
      posts = await ctx.db
        .query("blogPosts")
        .withIndex("by_published", (q) => q.eq("published", true))
        .collect();
    } else {
      posts = await ctx.db.query("blogPosts").collect();
    }

    // Filter by tag if specified
    if (args.tag) {
      posts = posts.filter((post) => post.tags.includes(args.tag!));
    }

    // Sort by creation date
    posts = posts.sort((a, b) => b._creationTime - a._creationTime);

    // Resolve all cover image URLs
    return Promise.all(posts.map((post) => resolvePostWithImage(ctx, post)));
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!post) return null;
    return resolvePostWithImage(ctx, post);
  },
});

export const getById = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) return null;
    return resolvePostWithImage(ctx, post);
  },
});

export const getAllTags = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  },
});

// Check if slug is unique (excluding a specific post ID for updates)
export const isSlugUnique = query({
  args: {
    slug: v.string(),
    excludeId: v.optional(v.id("blogPosts")),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!existing) return true;
    if (args.excludeId && existing._id === args.excludeId) return true;
    return false;
  },
});

// Admin mutations - require authentication
export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    coverImage: v.optional(v.id("_storage")), // Storage ID, not URL
    tags: v.array(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
    readingTime: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    // Check slug uniqueness
    const existingSlug = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existingSlug) {
      throw new Error("A blog post with this slug already exists");
    }

    const now = Date.now();

    // Calculate reading time if not provided (avg 200 words per minute)
    const readingTime =
      args.readingTime ?? Math.ceil(args.content.split(/\s+/).length / 200);

    return await ctx.db.insert("blogPosts", {
      ...args,
      readingTime,
      publishedAt: args.published ? now : undefined,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    coverImage: v.optional(v.id("_storage")), // Storage ID, not URL
    tags: v.optional(v.array(v.string())),
    featured: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
    readingTime: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Blog post not found");

    // Check slug uniqueness if changing slug
    if (updates.slug && updates.slug !== existing.slug) {
      const existingSlug = await ctx.db
        .query("blogPosts")
        .withIndex("by_slug", (q) => q.eq("slug", updates.slug!))
        .first();

      if (existingSlug) {
        throw new Error("A blog post with this slug already exists");
      }
    }

    const now = Date.now();
    const updateData: Record<string, unknown> = {
      ...updates,
    };

    // Recalculate reading time if content changed (including empty content)
    if ("content" in updates && !updates.readingTime) {
      const content = updates.content ?? "";
      updateData.readingTime = Math.ceil(content.split(/\s+/).length / 200);
    }

    // Set publishedAt if publishing for the first time
    if (updates.published && !existing.publishedAt) {
      updateData.publishedAt = now;
    }

    await ctx.db.patch(id, updateData);
    return id;
  },
});

// Clear cover image
export const clearCoverImage = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const post = await ctx.db.get(args.id);
    if (!post) throw new Error("Blog post not found");

    // Delete the old image from storage if it's a storage ID (not a legacy URL)
    if (post.coverImage) {
      const isLegacyUrl = typeof post.coverImage === "string" && post.coverImage.startsWith("http");
      if (!isLegacyUrl) {
        try {
          await ctx.storage.delete(post.coverImage as Id<"_storage">);
        } catch (e) {
          // Storage delete can fail if file doesn't exist, that's ok
          console.log("Could not delete storage file:", e);
        }
      }
    }

    await ctx.db.patch(args.id, { coverImage: undefined });
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    // Delete cover image from storage if it exists
    const post = await ctx.db.get(args.id);
    if (post?.coverImage) {
      await ctx.storage.delete(post.coverImage);
    }

    await ctx.db.delete(args.id);
  },
});
