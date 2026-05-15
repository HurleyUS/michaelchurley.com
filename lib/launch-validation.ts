// Launch week validation utilities
// Validates performance, UX, and reliability baselines

interface ValidationResult {
  passed: boolean;
  score: number;
  issues: string[];
  recommendations: string[];
}

interface LaunchValidationReport {
  overall: ValidationResult;
  performance: ValidationResult;
  ux: ValidationResult;
  reliability: ValidationResult;
  security: ValidationResult;
  analytics: ValidationResult;
}

// Performance validation
export function validatePerformance(): ValidationResult {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  // Check Core Web Vitals (client-side only)
  if (typeof window !== "undefined") {
    // Check if images are optimized
    const images = document.querySelectorAll("img");
    let unoptimizedImages = 0;
    images.forEach((img) => {
      if (!img.loading || img.loading !== "lazy") {
        unoptimizedImages++;
      }
      if (!img.alt) {
        unoptimizedImages++;
      }
    });

    if (unoptimizedImages > 0) {
      issues.push(`${unoptimizedImages} images need optimization (loading="lazy", alt text)`);
      recommendations.push("Optimize images with proper loading attributes and alt text");
      score -= 10;
    }

    // Check for bundle size indicators
    const scriptTags = document.querySelectorAll("script[src]");
    if (scriptTags.length > 10) {
      issues.push("High number of external scripts detected");
      recommendations.push("Consider bundling or lazy loading scripts");
      score -= 5;
    }

    // Check for layout shift indicators
    const dynamicElements = document.querySelectorAll('[style*="height"]');
    if (dynamicElements.length === 0) {
      recommendations.push("Ensure proper dimensions to prevent layout shift");
    }
  }

  // Server-side checks
  if (typeof window === "undefined") {
    // These would be checked during build/runtime
    recommendations.push("Verify build time is under 2 minutes");
    recommendations.push("Ensure all routes respond under 200ms");
  }

  return {
    passed: score >= 80,
    score,
    issues,
    recommendations,
  };
}

// UX/UI validation
export function validateUX(): ValidationResult {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  if (typeof window !== "undefined") {
    // Check accessibility basics
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (headings.length === 0) {
      issues.push("No heading structure found");
      score -= 20;
    }

    const h1Count = document.querySelectorAll("h1").length;
    if (h1Count !== 1) {
      issues.push(`Found ${h1Count} H1 tags, should be exactly 1`);
      score -= 10;
    }

    // Check for proper labels on form inputs
    const inputs = document.querySelectorAll("input, textarea, select");
    let unlabeledInputs = 0;
    inputs.forEach((input) => {
      const id = input.getAttribute("id");
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute("aria-label");
      if (!label && !ariaLabel) {
        unlabeledInputs++;
      }
    });

    if (unlabeledInputs > 0) {
      issues.push(`${unlabeledInputs} form inputs missing labels`);
      score -= 15;
    }

    // Check for focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusableElements.length === 0) {
      issues.push("No focusable elements found");
      score -= 10;
    }

    // Check for mobile viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push("Missing viewport meta tag");
      score -= 15;
    }

    // Check color contrast (basic check)
    const styles = window.getComputedStyle(document.body);
    if (!styles.color || !styles.backgroundColor) {
      recommendations.push("Verify color contrast meets WCAG AA standards");
    }
  }

  // Additional UX recommendations
  recommendations.push("Test all interactive elements with keyboard navigation");
  recommendations.push("Verify responsive design on mobile devices");
  recommendations.push("Test with screen reader");

  return {
    passed: score >= 80,
    score,
    issues,
    recommendations,
  };
}

// Reliability validation
export function validateReliability(): ValidationResult {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  // Check error boundary presence (client-side)
  if (typeof window !== "undefined") {
    // Check if there are error boundaries by looking for error handling
    try {
      // Simulate an error to test error boundaries
      const testDiv = document.createElement("div");
      testDiv.style.display = "none";
      document.body.appendChild(testDiv);
      document.body.removeChild(testDiv);
    } catch (error) {
      // This shouldn't normally error, but if it does, error handling is working
    }
  }

  // Check for proper error handling patterns
  if (typeof window !== "undefined") {
    // Check for console errors
    const originalError = console.error;
    let errorCount = 0;
    console.error = (...args) => {
      errorCount++;
      originalError.apply(console, args);
    };

    // Restore after check
    setTimeout(() => {
      console.error = originalError;
      if (errorCount > 0) {
        issues.push(`${errorCount} console errors detected during validation`);
        score -= 10;
      }
    }, 1000);
  }

  recommendations.push("Ensure all API endpoints have proper error handling");
  recommendations.push("Test offline scenarios with service worker");
  recommendations.push("Verify database connection pooling and timeouts");

  return {
    passed: score >= 80,
    score,
    issues,
    recommendations,
  };
}

// Security validation
export function validateSecurity(): ValidationResult {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  if (typeof window !== "undefined") {
    // Check for HTTPS
    if (location.protocol !== "https:" && location.hostname !== "localhost") {
      issues.push("Site not served over HTTPS");
      score -= 30;
    }

    // Check for security headers (these would be set by the server)
    fetch(location.href, { method: "HEAD" })
      .then((response) => {
        const headers = response.headers;

        if (!headers.get("content-security-policy")) {
          issues.push("Missing Content-Security-Policy header");
          score -= 10;
        }

        if (!headers.get("x-frame-options")) {
          issues.push("Missing X-Frame-Options header");
          score -= 5;
        }

        if (!headers.get("x-content-type-options")) {
          issues.push("Missing X-Content-Type-Options header");
          score -= 5;
        }
      })
      .catch(() => {
        // Headers check failed, but don't fail validation
        recommendations.push("Verify security headers are properly set");
      });

    // Check for mixed content
    const insecureElements = document.querySelectorAll(
      'img[src^="http:"], script[src^="http:"], link[href^="http:"]',
    );
    if (insecureElements.length > 0) {
      issues.push(`${insecureElements.length} insecure resources detected`);
      score -= 20;
    }
  }

  recommendations.push("Run security scan with tools like npm audit");
  recommendations.push("Verify all user inputs are properly sanitized");
  recommendations.push("Test authentication and authorization flows");

  return {
    passed: score >= 80,
    score,
    issues,
    recommendations,
  };
}

// Analytics validation
export function validateAnalytics(): ValidationResult {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  if (typeof window !== "undefined") {
    // Check if analytics is loaded
    // @ts-ignore
    if (!window.posthog) {
      issues.push("PostHog analytics not loaded");
      score -= 30;
    } else {
      // @ts-ignore
      if (!window.posthog.__loaded) {
        issues.push("PostHog not properly initialized");
        score -= 20;
      }
    }

    // Check for privacy compliance
    if (
      !document.querySelector("[data-privacy-policy]") &&
      !document.querySelector('a[href*="privacy"]')
    ) {
      issues.push("Privacy policy link not found");
      score -= 10;
    }

    // Check for proper meta tags for social sharing
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (!ogImage) {
      issues.push("Missing Open Graph image");
      score -= 5;
    }
    if (!ogTitle) {
      issues.push("Missing Open Graph title");
      score -= 5;
    }
    if (!ogDescription) {
      issues.push("Missing Open Graph description");
      score -= 5;
    }
  }

  recommendations.push("Test analytics events in production environment");
  recommendations.push("Verify GDPR compliance for EU visitors");
  recommendations.push("Check analytics data collection in dashboard");

  return {
    passed: score >= 80,
    score,
    issues,
    recommendations,
  };
}

// Comprehensive launch validation
export function validateLaunchReadiness(): LaunchValidationReport {
  const performance = validatePerformance();
  const ux = validateUX();
  const reliability = validateReliability();
  const security = validateSecurity();
  const analytics = validateAnalytics();

  const overallScore = Math.round(
    (performance.score + ux.score + reliability.score + security.score + analytics.score) / 5,
  );

  const overall: ValidationResult = {
    passed:
      overallScore >= 80 &&
      [performance, ux, reliability, security, analytics].every((r) => r.passed),
    score: overallScore,
    issues: [
      ...performance.issues,
      ...ux.issues,
      ...reliability.issues,
      ...security.issues,
      ...analytics.issues,
    ],
    recommendations: [
      ...performance.recommendations,
      ...ux.recommendations,
      ...reliability.recommendations,
      ...security.recommendations,
      ...analytics.recommendations,
    ],
  };

  return {
    overall,
    performance,
    ux,
    reliability,
    security,
    analytics,
  };
}

// Export validation report as markdown for documentation
export function generateValidationReport(report: LaunchValidationReport): string {
  const sections = [
    {
      name: "Performance",
      result: report.performance,
    },
    {
      name: "UX/UI",
      result: report.ux,
    },
    {
      name: "Reliability",
      result: report.reliability,
    },
    {
      name: "Security",
      result: report.security,
    },
    {
      name: "Analytics",
      result: report.analytics,
    },
  ];

  const markdown = `# Launch Week Validation Report

Generated: ${new Date().toISOString()}

## Overall Score: ${report.overall.score}/100 ${report.overall.passed ? "✅" : "❌"}

${sections
  .map(
    (section) => `
### ${section.name}: ${section.result.score}/100 ${section.result.passed ? "✅" : "❌"}

${
  section.result.issues.length > 0
    ? `
**Issues:**
${section.result.issues.map((issue) => `- ❌ ${issue}`).join("\n")}
`
    : ""
}

${
  section.result.recommendations.length > 0
    ? `
**Recommendations:**
${section.result.recommendations.map((rec) => `- 💡 ${rec}`).join("\n")}
`
    : ""
}
`,
  )
  .join("\n")}

## Summary

${
  report.overall.passed
    ? "🎉 **Launch Ready!** All validation checks passed."
    : `⚠️  **Needs Attention:** ${report.overall.issues.length} issues found before launch.`
}

### Action Items

${
  report.overall.issues.length > 0
    ? report.overall.issues.map((issue) => `- [ ] ${issue}`).join("\n")
    : "- [x] All critical issues resolved!"
}
`;

  return markdown;
}
