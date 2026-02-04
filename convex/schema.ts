import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Bookings
  bookings: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    date: v.string(), // YYYY-MM-DD format
    timeSlot: v.string(), // HH:MM format
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
      v.literal("completed")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_date", ["date"])
    .index("by_status", ["status"])
    .index("by_email", ["email"]),

  // Portfolio items
  portfolioItems: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    content: v.string(), // Markdown content
    coverImage: v.optional(v.string()),
    images: v.optional(v.array(v.string())),
    technologies: v.array(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
    publishedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured", "published"]),

  // Blog posts
  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(), // Markdown content
    coverImage: v.optional(v.string()),
    tags: v.array(v.string()),
    featured: v.boolean(),
    published: v.boolean(),
    publishedAt: v.optional(v.number()),
    readingTime: v.optional(v.number()), // Minutes
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured", "published"])
    .index("by_tag", ["tags"]),

  // Comments - supports both blog and portfolio
  comments: defineTable({
    // Reference to parent item
    itemType: v.union(v.literal("blog"), v.literal("portfolio")),
    itemId: v.string(), // String ID for flexibility across blog/portfolio
    
    // Author info
    authorEmail: v.string(), // Captured before sign-in
    authorName: v.optional(v.string()), // From Google sign-in
    authorClerkId: v.optional(v.string()), // Set after sign-in
    authorImage: v.optional(v.string()), // From Google sign-in
    
    // Comment content
    content: v.string(),
    
    // Status
    verified: v.boolean(), // True if user completed sign-in
    visible: v.boolean(), // Only visible if verified
    
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_item", ["itemType", "itemId"])
    .index("by_author_email", ["authorEmail"])
    .index("by_clerk_id", ["authorClerkId"]),

  // Pending comments - for the capture-before-signin flow
  pendingComments: defineTable({
    itemType: v.union(v.literal("blog"), v.literal("portfolio")),
    itemId: v.string(), // Store as string to be flexible
    email: v.string(),
    content: v.string(),
    sessionId: v.string(), // To link back after sign-in
    createdAt: v.number(),
    expiresAt: v.number(), // Auto-expire after 24 hours
  })
    .index("by_session", ["sessionId"])
    .index("by_email", ["email"])
    .index("by_expires", ["expiresAt"]),
});
