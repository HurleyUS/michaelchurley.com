"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    import("@/lib/error-reporting").then(({ reportClientError }) => {
      reportClientError(error, { componentStack: error.digest });
    });
  }, [error]);

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
