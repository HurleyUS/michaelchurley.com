import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

// Generate an upload URL for the client (admin only)
export const generateUploadUrl = mutation(async (ctx) => {
  await requireAdmin(ctx);
  return await ctx.storage.generateUploadUrl();
});

// Get a URL to access a stored file
export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

// Get URL from storage ID (for use after upload, admin only)
export const getStorageUrl = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  },
});

// Delete a stored file (admin only)
export const deleteFile = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    return await ctx.storage.delete(args.storageId);
  },
});
