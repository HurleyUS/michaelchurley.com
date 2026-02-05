import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireAdmin } from "./lib/auth";
import { Id } from "./_generated/dataModel";

// Helper to resolve image URLs
async function resolveItemWithImages(
  ctx: { storage: { getUrl: (id: Id<"_storage">) => Promise<string | null> } },
  item: {
    _id: Id<"portfolioItems">;
    _creationTime: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage?: Id<"_storage"> | string;
    images?: (Id<"_storage"> | string)[];
    technologies: string[];
    projectUrl?: string;
    githubUrl?: string;
    featured: boolean;
    published: boolean;
    publishedAt?: number;
    createdAt: number;
    updatedAt: number;
  }
) {
  let coverImageUrl: string | null = null;
  
  if (item.coverImage) {
    // Handle both old URL strings and new storage IDs
    if (typeof item.coverImage === "string" && item.coverImage.startsWith("http")) {
      coverImageUrl = item.coverImage; // Legacy URL
    } else {
      coverImageUrl = await ctx.storage.getUrl(item.coverImage as Id<"_storage">);
    }
  }

  const imageUrls = item.images
    ? await Promise.all(
        item.images.map(async (imgRef) => {
          if (typeof imgRef === "string" && imgRef.startsWith("http")) {
            return imgRef; // Legacy URL
          }
          return await ctx.storage.getUrl(imgRef as Id<"_storage">);
        })
      )
    : [];

  return {
    ...item,
    coverImage: coverImageUrl ?? undefined,
    images: imageUrls.filter((url): url is string => url !== null),
  };
}

// Public queries
export const list = query({
  args: {
    onlyPublished: v.optional(v.boolean()),
    onlyFeatured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let items;

    if (args.onlyFeatured) {
      items = await ctx.db
        .query("portfolioItems")
        .withIndex("by_featured", (q) =>
          q.eq("featured", true).eq("published", true)
        )
        .collect();
    } else if (args.onlyPublished !== false) {
      items = await ctx.db
        .query("portfolioItems")
        .withIndex("by_published", (q) => q.eq("published", true))
        .collect();
    } else {
      items = await ctx.db.query("portfolioItems").collect();
    }

    items = items.sort((a, b) => b.createdAt - a.createdAt);

    // Resolve all image URLs
    return Promise.all(items.map((item) => resolveItemWithImages(ctx, item)));
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const item = await ctx.db
      .query("portfolioItems")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!item) return null;
    return resolveItemWithImages(ctx, item);
  },
});

export const getById = query({
  args: { id: v.id("portfolioItems") },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (!item) return null;
    return resolveItemWithImages(ctx, item);
  },
});

// Check if slug is unique (excluding a specific item ID for updates)
export const isSlugUnique = query({
  args: {
    slug: v.string(),
    excludeId: v.optional(v.id("portfolioItems")),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("portfolioItems")
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
    description: v.string(),
    content: v.string(),
    coverImage: v.optional(v.union(v.id("_storage"), v.string())), // Accept both during migration
    images: v.optional(v.array(v.union(v.id("_storage"), v.string()))), // Accept both
    technologies: v.array(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    // Check slug uniqueness
    const existingSlug = await ctx.db
      .query("portfolioItems")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existingSlug) {
      throw new Error("A portfolio item with this slug already exists");
    }

    const now = Date.now();
    return await ctx.db.insert("portfolioItems", {
      ...args,
      publishedAt: args.published ? now : undefined,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("portfolioItems"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    content: v.optional(v.string()),
    coverImage: v.optional(v.union(v.id("_storage"), v.string())), // Accept both during migration
    images: v.optional(v.array(v.union(v.id("_storage"), v.string()))), // Accept both
    technologies: v.optional(v.array(v.string())),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Portfolio item not found");

    // Check slug uniqueness if changing slug
    if (updates.slug && updates.slug !== existing.slug) {
      const existingSlug = await ctx.db
        .query("portfolioItems")
        .withIndex("by_slug", (q) => q.eq("slug", updates.slug!))
        .first();

      if (existingSlug) {
        throw new Error("A portfolio item with this slug already exists");
      }
    }

    const now = Date.now();
    const updateData: Record<string, unknown> = {
      ...updates,
      updatedAt: now,
    };

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
  args: { id: v.id("portfolioItems") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const item = await ctx.db.get(args.id);
    if (!item) throw new Error("Portfolio item not found");

    // Delete the old image from storage if it's a storage ID (not a legacy URL)
    if (item.coverImage) {
      const isLegacyUrl = typeof item.coverImage === "string" && item.coverImage.startsWith("http");
      if (!isLegacyUrl) {
        try {
          await ctx.storage.delete(item.coverImage as Id<"_storage">);
        } catch (e) {
          // Storage delete can fail if file doesn't exist, that's ok
          console.log("Could not delete storage file:", e);
        }
      }
    }

    await ctx.db.patch(args.id, {
      coverImage: undefined,
      updatedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id("portfolioItems") },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    // Delete images from storage if they exist
    const item = await ctx.db.get(args.id);
    if (item?.coverImage) {
      await ctx.storage.delete(item.coverImage);
    }
    if (item?.images) {
      await Promise.all(item.images.map((id) => ctx.storage.delete(id)));
    }

    await ctx.db.delete(args.id);
  },
});
