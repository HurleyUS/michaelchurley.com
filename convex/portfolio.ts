import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
        .withIndex("by_featured", (q) => q.eq("featured", true).eq("published", true))
        .collect();
    } else if (args.onlyPublished !== false) {
      items = await ctx.db
        .query("portfolioItems")
        .withIndex("by_published", (q) => q.eq("published", true))
        .collect();
    } else {
      items = await ctx.db.query("portfolioItems").collect();
    }
    
    return items.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("portfolioItems")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getById = query({
  args: { id: v.id("portfolioItems") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Admin mutations
export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    content: v.string(),
    coverImage: v.optional(v.string()),
    images: v.optional(v.array(v.string())),
    technologies: v.array(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
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
    coverImage: v.optional(v.string()),
    images: v.optional(v.array(v.string())),
    technologies: v.optional(v.array(v.string())),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Portfolio item not found");
    
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

export const remove = mutation({
  args: { id: v.id("portfolioItems") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
