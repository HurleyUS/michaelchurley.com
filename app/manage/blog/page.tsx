"use client";

export const dynamic = "force-dynamic";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Link from "next/link";

export default function ManageBlog() {
  const blogPosts = useQuery(api.blog.list, { onlyPublished: false });
  const removePost = useMutation(api.blog.remove);
  const updatePost = useMutation(api.blog.update);

  const handleDelete = async (id: Id<"blogPosts">, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      await removePost({ id });
    }
  };

  const handleTogglePublish = async (id: Id<"blogPosts">, published: boolean) => {
    await updatePost({ id, published: !published });
  };

  const handleToggleFeatured = async (id: Id<"blogPosts">, featured: boolean) => {
    await updatePost({ id, featured: !featured });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-muted-foreground">Manage your blog posts.</p>
        </div>
        <Link
          href="/manage/blog/new"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Add New Post
        </Link>
      </div>

      {blogPosts === undefined ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No blog posts yet.</p>
          <Link href="/manage/blog/new" className="text-primary hover:underline">
            Create your first blog post
          </Link>
        </div>
      ) : (
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">Title</th>
                <th className="text-left p-4 font-medium">Slug</th>
                <th className="text-left p-4 font-medium">Tags</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Featured</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post._id} className="border-b last:border-b-0">
                  <td className="p-4">
                    <Link
                      href={`/manage/blog/${post._id}`}
                      className="font-medium hover:underline"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="p-4 text-muted-foreground">{post.slug}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-muted rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleTogglePublish(post._id, post.published)}
                      className={`text-xs px-2 py-1 rounded cursor-pointer ${
                        post.published
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleToggleFeatured(post._id, post.featured)}
                      className={`text-xs px-2 py-1 rounded cursor-pointer ${
                        post.featured
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {post.featured ? "Featured" : "Not Featured"}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/manage/blog/${post._id}`}
                        className="text-sm text-primary hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm text-muted-foreground hover:underline"
                        target="_blank" rel="noopener noreferrer"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id, post.title)}
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
