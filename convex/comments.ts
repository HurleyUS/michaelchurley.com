import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireAdmin, getAuthenticatedUser } from "./lib/auth";

// Public queries
export const listForItem = query({
  args: {
    itemType: v.union(v.literal("blog"), v.literal("portfolio")),
    itemId: v.string(),
  },
  handler: async (ctx, args) => {
    // Use index for efficient querying
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_item", (q) => 
        q.eq("itemType", args.itemType).eq("itemId", args.itemId)
      )
      .filter((q) => q.eq(q.field("visible"), true))
      .collect();
    
    return comments.sort((a, b) => a._creationTime - b._creationTime);
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
    
    // Delete any existing pending comment for this session
    const existing = await ctx.db
      .query("pendingComments")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .first();
    
    if (existing) {
      await ctx.db.delete(existing._id);
    }
    
    return await ctx.db.insert("pendingComments", {
      ...args,
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
// Uses authenticated user identity instead of trusting client input
export const verifyAndPublish = mutation({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    // Get authenticated user from Clerk
    const user = await getAuthenticatedUser(ctx);
    
    if (!user || !user.email) {
      return { success: false, error: "Authentication required" };
    }
    
    // Find pending comment
    const pending = await ctx.db
      .query("pendingComments")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .first();
    
    if (!pending) {
      // Not necessarily an error - might already be published
      return { success: false, error: "No pending comment found" };
    }
    
    // Check if expired
    if (pending.expiresAt < Date.now()) {
      await ctx.db.delete(pending._id);
      return { success: false, error: "Comment expired" };
    }
    
    // Verify email matches (case insensitive)
    if (pending.email.toLowerCase() !== user.email.toLowerCase()) {
      return { success: false, error: "Email mismatch - please sign in with the same email you entered" };
    }
    
    const now = Date.now();
    
    // Create the verified comment with server-verified user data
    await ctx.db.insert("comments", {
      itemType: pending.itemType,
      itemId: pending.itemId,
      authorEmail: user.email,
      authorName: user.name,
      authorClerkId: user.userId,
      authorImage: user.image,
      content: pending.content,
      verified: true,
      visible: true,
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
    
    return comments.sort((a, b) => b._creationTime - a._creationTime);
  },
});

// Admin: Toggle comment visibility
export const toggleVisibility = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);
    
    const comment = await ctx.db.get(args.id);
    if (!comment) throw new Error("Comment not found");
    
    await ctx.db.patch(args.id, {
      visible: !comment.visible,
    });
  },
});

// Admin: Delete comment
export const remove = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
  },
});

// Cleanup expired pending comments (can be called via cron)
export const cleanupExpired = mutation({
  handler: async (ctx) => {
    await requireAdmin(ctx);
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
