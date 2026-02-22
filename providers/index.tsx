"use client";

import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PostHogProvider>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </PostHogProvider>
    </ThemeProvider>
  );
}
