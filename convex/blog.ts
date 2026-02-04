import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
        .withIndex("by_featured", (q) => q.eq("featured", true).eq("published", true))
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
    
    return posts.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getById = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
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

// Admin mutations
export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    coverImage: v.optional(v.string()),
    tags: v.array(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
    readingTime: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    
    // Calculate reading time if not provided (avg 200 words per minute)
    const readingTime = args.readingTime ?? Math.ceil(args.content.split(/\s+/).length / 200);
    
    return await ctx.db.insert("blogPosts", {
      ...args,
      readingTime,
      publishedAt: args.published ? now : undefined,
      createdAt: now,
      updatedAt: now,
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
    coverImage: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    featured: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
    readingTime: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Blog post not found");
    
    const now = Date.now();
    const updateData: Record<string, unknown> = {
      ...updates,
      updatedAt: now,
    };
    
    // Recalculate reading time if content changed
    if (updates.content && !updates.readingTime) {
      updateData.readingTime = Math.ceil(updates.content.split(/\s+/).length / 200);
    }
    
    // Set publishedAt if publishing for the first time
    if (updates.published && !existing.publishedAt) {
      updateData.publishedAt = now;
    }
    
    await ctx.db.patch(id, updateData);
    return id;
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
