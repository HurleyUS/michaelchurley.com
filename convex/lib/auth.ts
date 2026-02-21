import { QueryCtx, MutationCtx } from "../_generated/server";

// Admin email - the only user allowed to access /manage
// In Convex, environment variables are set via the dashboard
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "michaelmonetized@gmail.com";

export async function requireAdmin(ctx: QueryCtx | MutationCtx): Promise<{
  userId: string;
  email: string;
}> {
  const identity = await ctx.auth.getUserIdentity();
  
  if (!identity) {
    throw new Error("Unauthorized: Not authenticated");
  }
  
  const email = identity.email;
  if (!email || email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    throw new Error("Unauthorized: Admin access required");
  }
  
  return {
    userId: identity.subject,
    email: email,
  };
}

export async function getAuthenticatedUser(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  
  if (!identity) {
    return null;
  }
  
  return {
    userId: identity.subject,
    email: identity.email,
    name: identity.name,
    image: identity.pictureUrl,
  };
}
