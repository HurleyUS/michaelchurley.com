import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Public queries
export const listForItem = query({
  args: {
    itemType: v.union(v.literal("blog"), v.literal("portfolio")),
    itemId: v.string(),
  },
  handler: async (ctx, args) => {
    // Get visible comments for an item
    const comments = await ctx.db
      .query("comments")
      .filter((q) => 
        q.and(
          q.eq(q.field("itemType"), args.itemType),
          q.eq(q.field("visible"), true)
        )
      )
      .collect();
    
    // Filter by itemId (stored as string for flexibility)
    return comments
      .filter((c) => c.itemId.toString() === args.itemId)
      .sort((a, b) => a.createdAt - b.createdAt);
  },
});

// Create pending comment (before sign-in)
export const createPending = mutation({
  args: {
    itemType: v.union(v.literal("blog"), v.literal("portfolio")),
    itemId: v.string(),
    email: v.string(),
    content: v.string(),
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const expiresAt = now + 24 * 60 * 60 * 1000; // 24 hours
    
    return await ctx.db.insert("pendingComments", {
      ...args,
      createdAt: now,
      expiresAt,
    });
  },
});

// Get pending comment by session
export const getPendingBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("pendingComments")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .first();
  },
});

// Verify and publish comment (after sign-in)
export const verifyAndPublish = mutation({
  args: {
    sessionId: v.string(),
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Find pending comment
    const pending = await ctx.db
      .query("pendingComments")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .first();
    
    if (!pending) {
      return { success: false, error: "No pending comment found" };
    }
    
    // Check if expired
    if (pending.expiresAt < Date.now()) {
      await ctx.db.delete(pending._id);
      return { success: false, error: "Comment expired" };
    }
    
    // Verify email matches
    if (pending.email.toLowerCase() !== args.email.toLowerCase()) {
      return { success: false, error: "Email mismatch" };
    }
    
    const now = Date.now();
    
    // Create the verified comment
    // Note: We're storing itemId as string but need to cast for the schema
    // This is a workaround since itemId could be either blogPosts or portfolioItems
    await ctx.db.insert("comments", {
      itemType: pending.itemType,
      itemId: pending.itemId as any, // Type workaround
      authorEmail: args.email,
      authorName: args.name,
      authorClerkId: args.clerkId,
      authorImage: args.image,
      content: pending.content,
      verified: true,
      visible: true,
      createdAt: pending.createdAt,
      updatedAt: now,
    });
    
    // Delete the pending comment
    await ctx.db.delete(pending._id);
    
    return { success: true };
  },
});

// Admin: List all comments (including hidden)
export const listAll = query({
  args: {
    itemType: v.optional(v.union(v.literal("blog"), v.literal("portfolio"))),
    includeHidden: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let comments = await ctx.db.query("comments").collect();
    
    if (args.itemType) {
      comments = comments.filter((c) => c.itemType === args.itemType);
    }
    
    if (!args.includeHidden) {
      comments = comments.filter((c) => c.visible);
    }
    
    return comments.sort((a, b) => b.createdAt - a.createdAt);
  },
});

// Admin: Toggle comment visibility
export const toggleVisibility = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    const comment = await ctx.db.get(args.id);
    if (!comment) throw new Error("Comment not found");
    
    await ctx.db.patch(args.id, {
      visible: !comment.visible,
      updatedAt: Date.now(),
    });
  },
});

// Admin: Delete comment
export const remove = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Cleanup expired pending comments (can be called via cron)
export const cleanupExpired = mutation({
  handler: async (ctx) => {
    const now = Date.now();
    const expired = await ctx.db
      .query("pendingComments")
      .filter((q) => q.lt(q.field("expiresAt"), now))
      .collect();
    
    for (const pending of expired) {
      await ctx.db.delete(pending._id);
    }
    
    return { deleted: expired.length };
  },
});
