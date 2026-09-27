import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { markdownPath } from "@/lib/markdown-path";

// ONLY protect the /manage routes — everything else is public
const isPrivateRoute = createRouteMatcher(["/manage(.*)"]);

// Pages with a Markdown twin (everything except APIs, auth, admin, and files with an extension).
const NO_MARKDOWN = /^\/(api|trpc|manage|sign-in|sign-up|mcp|md|_next|\.well-known)(\/|$)/;

function hasMarkdownTwin(pathname: string) {
  return !NO_MARKDOWN.test(pathname) && !/\.[a-z0-9]+$/i.test(pathname);
}

/** Wants Markdown: "/blog/foo.md", or "Accept: text/markdown" on a page URL. */
function markdownTarget(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.endsWith(".md") && !pathname.startsWith("/md/")) {
    return `/md${pathname.slice(0, -3).replace(/^\/index$/, "")}`;
  }
  const accept = request.headers.get("accept") ?? "";
  if (request.method === "GET" && /text\/markdown/i.test(accept) && hasMarkdownTwin(pathname)) {
    return `/md${pathname.replace(/\/+$/, "")}`;
  }
  return null;
}

const clerk = clerkMiddleware(async (auth, request) => {
  if (isPrivateRoute(request)) {
    await auth.protect();
  }
});

export default async function proxy(request: NextRequest, event: NextFetchEvent) {
  const target = markdownTarget(request);
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    const response = NextResponse.rewrite(url);
    response.headers.set("Vary", "Accept");
    return response;
  }
  const response = (await clerk(request, event)) ?? NextResponse.next();
  const { pathname } = request.nextUrl;
  if (hasMarkdownTwin(pathname)) {
    response.headers.set(
      "Link",
      `<${markdownPath(pathname)}>; rel="alternate"; type="text/markdown", </llms.txt>; rel="describedby"; type="text/plain", </agents.md>; rel="help"; type="text/markdown"`,
    );
    response.headers.append("Vary", "Accept");
  }
  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|avif)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
