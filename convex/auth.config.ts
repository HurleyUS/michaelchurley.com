// Clerk authentication configuration for Convex
// Supports both michaelchurley.com and bestwnc.com Clerk apps

export default {
  providers: [
    {
      // michaelchurley.com Clerk app
      domain: "https://light-vulture-23.clerk.accounts.dev",
      applicationID: "convex",
    },
    {
      // bestwnc.com Clerk app
      domain: "https://willing-husky-22.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
