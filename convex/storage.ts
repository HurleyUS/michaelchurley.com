import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Generate an upload URL for the client
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Get a URL to access a stored file
export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

// Get URL from storage ID string (for use after upload)
export const getUrlFromId = mutation({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    // Cast the string to storage ID and get URL
    const url = await ctx.storage.getUrl(args.storageId as any);
    return url;
  },
});

// Delete a stored file
export const deleteFile = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.delete(args.storageId);
  },
});
