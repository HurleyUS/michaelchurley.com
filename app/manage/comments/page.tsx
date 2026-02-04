"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export default function ManageComments() {
  const comments = useQuery(api.comments.listAll, { includeHidden: true });
  const toggleVisibility = useMutation(api.comments.toggleVisibility);
  const removeComment = useMutation(api.comments.remove);

  const handleToggleVisibility = async (id: Id<"comments">) => {
    await toggleVisibility({ id });
  };

  const handleDelete = async (id: Id<"comments">) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      await removeComment({ id });
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Comments</h1>
        <p className="text-muted-foreground">Manage user comments on blog posts and portfolio items.</p>
      </div>

      {comments === undefined ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No comments yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className={`rounded-lg border p-4 ${
                !comment.visible ? "opacity-60 bg-muted/50" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {comment.authorImage ? (
                    <img
                      src={comment.authorImage}
                      alt={comment.authorName || "User"}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-lg">
                        {(comment.authorName || comment.authorEmail)[0].toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {comment.authorName || comment.authorEmail}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize">{comment.itemType}</span>
                      <span>•</span>
                      <span>{comment.verified ? "Verified" : "Unverified"}</span>
                      <span>•</span>
                      <span>{comment.visible ? "Visible" : "Hidden"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleVisibility(comment._id)}
                    className={`text-xs px-2 py-1 rounded ${
                      comment.visible
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    }`}
                  >
                    {comment.visible ? "Hide" : "Show"}
                  </button>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="text-xs px-2 py-1 rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
