"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export default function ManageDashboard() {
  const portfolioItems = useQuery(api.portfolio.list, { onlyPublished: false });
  const blogPosts = useQuery(api.blog.list, { onlyPublished: false });
  const comments = useQuery(api.comments.listAll, { includeHidden: true });

  const stats = [
    {
      label: "Portfolio Items",
      value: portfolioItems?.length ?? "...",
      published: portfolioItems?.filter((i) => i.published).length ?? 0,
      href: "/manage/portfolio",
    },
    {
      label: "Blog Posts",
      value: blogPosts?.length ?? "...",
      published: blogPosts?.filter((p) => p.published).length ?? 0,
      href: "/manage/blog",
    },
    {
      label: "Comments",
      value: comments?.length ?? "...",
      visible: comments?.filter((c) => c.visible).length ?? 0,
      href: "/manage/comments",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Manage your portfolio, blog, and comments.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-lg border bg-card p-6 hover:bg-accent transition-colors"
          >
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm font-medium">{stat.label}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {"published" in stat && `${stat.published} published`}
              {"visible" in stat && `${stat.visible} visible`}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Portfolio Items */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Portfolio Items</h2>
          {portfolioItems === undefined ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : portfolioItems.length === 0 ? (
            <p className="text-muted-foreground">No portfolio items yet.</p>
          ) : (
            <ul className="space-y-2">
              {portfolioItems.slice(0, 5).map((item) => (
                <li key={item._id} className="flex items-center justify-between">
                  <span className="truncate">{item.title}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium ${
                      item.published ? "bg-Green/20 text-Green" : "bg-Yellow/20 text-Yellow"
                    }`}
                  >
                    {item.published ? "Published" : "Draft"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent Blog Posts */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Blog Posts</h2>
          {blogPosts === undefined ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : blogPosts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts yet.</p>
          ) : (
            <ul className="space-y-2">
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post._id} className="flex items-center justify-between">
                  <span className="truncate">{post.title}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium ${
                      post.published ? "bg-Green/20 text-Green" : "bg-Yellow/20 text-Yellow"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
