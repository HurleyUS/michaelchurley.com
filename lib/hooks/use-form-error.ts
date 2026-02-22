import { useState, useCallback } from "react";

/**
 * Standardized form error state.
 * Use inline error display (not toast) for form validation errors.
 * Use toast only for network/server errors after submission.
 */
export function useFormError() {
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const handleError = useCallback((err: unknown) => {
    if (err instanceof Error) {
      setError(err.message);
    } else if (typeof err === "string") {
      setError(err);
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
  }, []);

  return { error, setError, clearError, handleError };
}
