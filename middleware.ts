import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes (everything except /manage)
const isPublicRoute = createRouteMatcher([
  "/",
  "/portfolio(.*)",
  "/blog(.*)",
  "/book(.*)",
  "/api/booking(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  // Protect /manage routes - require authentication
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
