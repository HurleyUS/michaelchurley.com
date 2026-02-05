import { mutation } from "../_generated/server";

// One-time migration to clear old URL-based cover images
export const clearOldCoverImages = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear blog posts
    const blogPosts = await ctx.db.query("blogPosts").collect();
    for (const post of blogPosts) {
      if (post.coverImage) {
        await ctx.db.patch(post._id, { coverImage: undefined });
      }
    }

    // Clear portfolio items
    const portfolioItems = await ctx.db.query("portfolioItems").collect();
    for (const item of portfolioItems) {
      if (item.coverImage || item.images) {
        await ctx.db.patch(item._id, { coverImage: undefined, images: undefined });
      }
    }

    return { blogPosts: blogPosts.length, portfolioItems: portfolioItems.length };
  },
});
