import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.optional(v.string()),
    date: v.string(), // ISO date string YYYY-MM-DD
    timeSlot: v.string(), // HH:MM format
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("bookings", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      message: args.message,
      date: args.date,
      timeSlot: args.timeSlot,
      status: "confirmed",
    });
  },
});

export const list = query({
  args: {
    status: v.optional(
      v.union(
        v.literal("pending"),
        v.literal("confirmed"),
        v.literal("cancelled"),
        v.literal("completed"),
      ),
    ),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let q = ctx.db.query("bookings").order("desc");

    if (args.status) {
      q = ctx.db
        .query("bookings")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc");
    }

    const bookings = await q.collect();
    return args.limit ? bookings.slice(0, args.limit) : bookings;
  },
});

export const getByDate = query({
  args: {
    date: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("bookings"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
      v.literal("completed"),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    return await ctx.db.patch(args.id, {
      status: args.status,
    });
  },
});

export const getUpcoming = query({
  args: {},
  handler: async (ctx) => {
    const today = new Date().toISOString().split("T")[0] ?? "";
    const bookings = await ctx.db
      .query("bookings")
      .withIndex("by_status", (q) => q.eq("status", "confirmed"))
      .collect();

    // Filter for future dates and sort
    return bookings
      .filter((b) => b.date >= today)
      .sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return a.timeSlot.localeCompare(b.timeSlot);
      });
  },
});
