// Error reporting and monitoring utilities

interface ErrorReport {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  buildId?: string;
}

export function reportError(error: Error, context?: Record<string, any>) {
  const report: ErrorReport = {
    message: error.message,
    stack: error.stack,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    timestamp: new Date().toISOString(),
    buildId: process.env.NEXT_BUILD_ID,
    ...context,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error Report:', report);
  }

  // In production, you'd send this to your error reporting service
  // Example: Sentry, LogRocket, Bugsnag, etc.
  if (process.env.NODE_ENV === 'production') {
    // For now, just log to console, but in a real app you'd send to an external service
    console.error('Production Error:', report);
    
    // Example of what you might do:
    // sendToErrorReporting(report);
  }

  return report;
}

export function reportClientError(error: Error, errorInfo?: { componentStack?: string }) {
  return reportError(error, {
    type: 'client-error',
    componentStack: errorInfo?.componentStack,
  });
}

export function reportAPIError(error: Error, endpoint: string, method: string) {
  return reportError(error, {
    type: 'api-error',
    endpoint,
    method,
  });
}

// Performance monitoring
export function measurePerformance<T>(name: string, fn: () => T): T {
  const start = performance.now();
  try {
    const result = fn();
    const duration = performance.now() - start;
    
    // Log slow operations
    if (duration > 1000) {
      console.warn(`Slow operation detected: ${name} took ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    reportError(error as Error, {
      type: 'performance-error',
      operation: name,
      duration: duration.toFixed(2),
    });
    throw error;
  }
}

// Async version
export async function measureAsyncPerformance<T>(
  name: string, 
  fn: () => Promise<T>
): Promise<T> {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    
    // Log slow operations
    if (duration > 2000) {
      console.warn(`Slow async operation detected: ${name} took ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    reportError(error as Error, {
      type: 'async-performance-error',
      operation: name,
      duration: duration.toFixed(2),
    });
    throw error;
  }
}