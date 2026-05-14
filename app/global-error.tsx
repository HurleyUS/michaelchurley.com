"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const posthog = usePostHog();

  useEffect(() => {
    // Report critical error to PostHog with additional context
    if (posthog) {
      posthog.captureException(error, {
        $error_digest: error.digest,
        $error_boundary: "global",
        $error_page:
          typeof window !== "undefined" ? window.location.pathname : "unknown",
        $error_user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
        $error_timestamp: new Date().toISOString(),
        $error_critical: true, // Mark as critical since it's global error boundary
      });
    } else {
      // Fallback to console if PostHog isn't available
      console.error("Global error boundary caught error:", error);
    }
  }, [error, posthog]);

  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className="flex h-dvh flex-col items-stretch justify-start bg-background">
        <a href="#main" className="sr-only focus:not-sr-only">
          {"Skip to main content"}
        </a>
        <Header />

        <section
          id="top"
          className="flex grow flex-col items-stretch justify-center overflow-auto"
        >
          <div className="flex flex-col items-center justify-center gap-md p-md w-full max-w-[1170px] mx-auto text-center">
            <Logo />

            <h2>We are still working on this feature, currently.</h2>

            <p>Please come back later.</p>

            <p>
              <Button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Refresh
              </Button>
            </p>

            <p>
              <Button
                onClick={
                  // Go back to the previous page
                  () => router.back()
                }
              >
                Go back
              </Button>
            </p>

            <p>
              <Link href="/">Go to the homepage</Link>
            </p>
          </div>
        </section>

        <Footer />
      </body>
    </html>
  );
}
