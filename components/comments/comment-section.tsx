"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useUser, SignInButton } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface CommentSectionProps {
  itemType: "blog" | "portfolio";
  itemId: Id<"blogPosts"> | Id<"portfolioItems">;
}

// Generate a session ID for linking pending comments
function getSessionId() {
  if (typeof window === "undefined") return "";
  let sessionId = sessionStorage.getItem("comment_session_id");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem("comment_session_id", sessionId);
  }
  return sessionId;
}

export default function CommentSection({ itemType, itemId }: CommentSectionProps) {
  const { user, isSignedIn } = useUser();
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Ref to prevent double-calling verifyAndPublish
  const isPublishing = useRef(false);

  // Convex queries and mutations
  const comments = useQuery(api.comments.listForItem, {
    itemType,
    itemId: itemId.toString(),
  });
  const pendingComment = useQuery(api.comments.getPendingBySession, {
    sessionId: getSessionId(),
  });
  const createPending = useMutation(api.comments.createPending);
  const verifyAndPublish = useMutation(api.comments.verifyAndPublish);

  // When user signs in, check for pending comment and verify
  useEffect(() => {
    if (isSignedIn && user && pendingComment && !isPublishing.current) {
      // Mark as publishing to prevent race condition
      isPublishing.current = true;
      
      verifyAndPublish({
        sessionId: getSessionId(),
      })
        .then((result) => {
          if (result.success) {
            setSuccess("Your comment has been published!");
            setShowSignInPrompt(false);
            setContent("");
            setEmail("");
          } else if (result.error !== "No pending comment found") {
            // Only show error if it's not just "already published"
            setError(result.error || "Failed to publish comment");
          }
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : "Failed to publish comment");
        })
        .finally(() => {
          // Reset after a delay to handle any delayed reactive updates
          setTimeout(() => {
            isPublishing.current = false;
          }, 1000);
        });
    }
  }, [isSignedIn, user, pendingComment, verifyAndPublish]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      // If user is already signed in, their comment goes through immediately
      if (isSignedIn && user) {
        const userEmail = user.primaryEmailAddress?.emailAddress;
        if (!userEmail) {
          setError("Please verify your email address to comment");
          return;
        }

        // Prevent double submission
        if (isPublishing.current) {
          return;
        }
        isPublishing.current = true;

        // Create pending comment
        await createPending({
          itemType,
          itemId: itemId.toString(),
          email: userEmail,
          content,
          sessionId: getSessionId(),
        });

        // Directly verify and publish (user already authenticated)
        const result = await verifyAndPublish({
          sessionId: getSessionId(),
        });

        isPublishing.current = false;

        if (result.success) {
          setSuccess("Your comment has been published!");
          setContent("");
        } else {
          setError(result.error || "Failed to publish comment");
        }
      } else {
        // Not signed in - capture email and comment, then prompt sign-in
        if (!email || !content) {
          setError("Please enter your email and comment");
          return;
        }

        // Create pending comment
        await createPending({
          itemType,
          itemId: itemId.toString(),
          email,
          content,
          sessionId: getSessionId(),
        });

        // Show sign-in prompt
        setShowSignInPrompt(true);
        setSuccess("Please sign in with Google to publish your comment");
      }
    } catch (err) {
      isPublishing.current = false;
      setError(err instanceof Error ? err.message : "Failed to submit comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Comments</h2>

      {/* Comment Form */}
      {showSignInPrompt ? (
        <div className="rounded-lg border bg-card p-6 text-center space-y-4">
          <p className="text-muted-foreground">
            Sign in with Google to publish your comment
          </p>
          <p className="text-sm text-muted-foreground">
            Your email ({email}) must match your Google account
          </p>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Sign in with Google
            </button>
          </SignInButton>
          <button
            onClick={() => setShowSignInPrompt(false)}
            className="block mx-auto text-sm text-muted-foreground hover:underline"
          >
            Cancel
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignedIn && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 border rounded-md bg-background"
                required
              />
              <p className="text-xs text-muted-foreground">
                You&apos;ll need to sign in with Google using this email to publish your comment
              </p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Comment</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your comment..."
              className="w-full px-3 py-2 border rounded-md bg-background h-24"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm rounded-md">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : isSignedIn ? "Post Comment" : "Continue"}
          </button>
        </form>
      )}

      {/* Comments List */}
      {comments === undefined ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center py-8 text-muted-foreground">
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="rounded-lg border bg-card p-4">
              <div className="flex items-start gap-3">
                {comment.authorImage ? (
                  <Image
                    src={comment.authorImage}
                    alt={comment.authorName || "User"}
                    width={40}
                    height={40}
                    className="rounded-full"
                    unoptimized
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg">
                      {(comment.authorName || comment.authorEmail)[0].toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      {comment.authorName || "Anonymous"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
