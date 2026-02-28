"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const posthog = usePostHog();

  useEffect(() => {
    // Report error to PostHog with additional context
    if (posthog) {
      posthog.captureException(error, {
        $error_digest: error.digest,
        $error_boundary: "app",
        $error_page: window.location.pathname,
        $error_user_agent: navigator.userAgent,
        $error_timestamp: new Date().toISOString(),
      });
    } else {
      // Fallback to console if PostHog isn't available
      console.error("Error boundary caught error:", error);
    }
  }, [error, posthog]);

  return (
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
  );
}
