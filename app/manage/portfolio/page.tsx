"use client";

export const dynamic = "force-dynamic";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Link from "next/link";

export default function ManagePortfolio() {
  const portfolioItems = useQuery(api.portfolio.list, { onlyPublished: false });
  const removeItem = useMutation(api.portfolio.remove);
  const updateItem = useMutation(api.portfolio.update);

  const handleDelete = async (id: Id<"portfolioItems">, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      await removeItem({ id });
    }
  };

  const handleTogglePublish = async (id: Id<"portfolioItems">, published: boolean) => {
    await updateItem({ id, published: !published });
  };

  const handleToggleFeatured = async (id: Id<"portfolioItems">, featured: boolean) => {
    await updateItem({ id, featured: !featured });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground">Manage your portfolio items.</p>
        </div>
        <Link
          href="/manage/portfolio/new"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Add New Item
        </Link>
      </div>

      {portfolioItems === undefined ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : portfolioItems.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No portfolio items yet.</p>
          <Link href="/manage/portfolio/new" className="text-primary hover:underline">
            Create your first portfolio item
          </Link>
        </div>
      ) : (
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">Title</th>
                <th className="text-left p-4 font-medium">Slug</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Featured</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioItems.map((item) => (
                <tr key={item._id} className="border-b last:border-b-0">
                  <td className="p-4">
                    <Link
                      href={`/manage/portfolio/${item._id}`}
                      className="font-medium hover:underline"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="p-4 text-muted-foreground">{item.slug}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleTogglePublish(item._id, item.published)}
                      className={`text-xs px-2 py-1 rounded cursor-pointer font-medium ${
                        item.published
                          ? "bg-Green/20 text-Green"
                          : "bg-Yellow/20 text-Yellow"
                      }`}
                    >
                      {item.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleToggleFeatured(item._id, item.featured)}
                      className={`text-xs px-2 py-1 rounded cursor-pointer font-medium ${
                        item.featured
                          ? "bg-Blue/20 text-Blue"
                          : "bg-Overlay0/30 text-Subtext0"
                      }`}
                    >
                      {item.featured ? "Featured" : "Not Featured"}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/manage/portfolio/${item._id}`}
                        className="text-sm text-primary hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="text-sm text-muted-foreground hover:underline"
                        target="_blank" rel="noopener noreferrer"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id, item.title)}
                        className="text-sm text-destructive hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
