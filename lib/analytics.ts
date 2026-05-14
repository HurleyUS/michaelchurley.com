// Analytics event tracking utilities for launch KPIs
"use client";

import { usePostHog } from "posthog-js/react";
import { useCallback, useEffect } from "react";

// Define launch KPI events
export enum LaunchEvents {
  // Page views
  PAGE_VIEW = "page_view",
  PAGE_LEAVE = "page_leave",

  // Lead generation
  CONTACT_FORM_VIEW = "contact_form_view",
  CONTACT_FORM_START = "contact_form_start",
  CONTACT_FORM_SUBMIT = "contact_form_submit",
  CONTACT_FORM_SUCCESS = "contact_form_success",

  // Portfolio engagement
  PORTFOLIO_VIEW = "portfolio_view",
  PORTFOLIO_ITEM_CLICK = "portfolio_item_click",
  PORTFOLIO_DEMO_CLICK = "portfolio_demo_click",
  PORTFOLIO_CODE_CLICK = "portfolio_code_click",

  // Blog engagement
  BLOG_VIEW = "blog_view",
  BLOG_POST_VIEW = "blog_post_view",
  BLOG_POST_READ_TIME = "blog_post_read_time",
  BLOG_POST_SHARE = "blog_post_share",

  // Conversions
  HIRE_INTEREST = "hire_interest",
  EMAIL_SIGNUP = "email_signup",
  PHONE_CALL_CLICK = "phone_call_click",
  EMAIL_CLICK = "email_click",

  // Technical engagement
  GITHUB_CLICK = "github_click",
  LINKEDIN_CLICK = "linkedin_click",
  RESUME_DOWNLOAD = "resume_download",

  // User experience
  SEARCH_PERFORMED = "search_performed",
  NAVIGATION_CLICK = "navigation_click",
  SCROLL_DEPTH = "scroll_depth",
  SESSION_DURATION = "session_duration",
}

// Event properties interface
interface EventProperties {
  [key: string]: string | number | boolean | null | undefined;
}

// Launch KPI event properties
interface LaunchKPIProperties extends EventProperties {
  page_title?: string;
  page_url?: string;
  referrer?: string;
  user_agent?: string;
  viewport_width?: number;
  viewport_height?: number;
  session_id?: string;
  timestamp?: string;
}

interface ContactFormProperties extends LaunchKPIProperties {
  form_section?: string;
  field_count?: number;
  form_id?: string;
}

interface PortfolioProperties extends LaunchKPIProperties {
  portfolio_title?: string;
  portfolio_slug?: string;
  portfolio_category?: string;
  portfolio_technologies?: string;
}

interface BlogProperties extends LaunchKPIProperties {
  blog_title?: string;
  blog_slug?: string;
  blog_category?: string;
  blog_tags?: string;
  read_percentage?: number;
  read_time_seconds?: number;
}

// Analytics hook for tracking events
export function useAnalytics() {
  const posthog = usePostHog();

  // Track launch KPI event
  const trackEvent = useCallback(
    (event: LaunchEvents, properties?: LaunchKPIProperties) => {
      if (!posthog) return;

      const enhancedProperties: LaunchKPIProperties = {
        ...properties,
        page_title: document.title,
        page_url: window.location.href,
        referrer: document.referrer || "direct",
        user_agent: navigator.userAgent,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        timestamp: new Date().toISOString(),
        ...properties,
      };

      posthog.capture(event, enhancedProperties);
    },
    [posthog],
  );

  // Track page view with enhanced properties
  const trackPageView = useCallback(
    (properties?: LaunchKPIProperties) => {
      trackEvent(LaunchEvents.PAGE_VIEW, properties);
    },
    [trackEvent],
  );

  // Track contact form interactions
  const trackContactForm = useCallback(
    (
      action:
        | LaunchEvents.CONTACT_FORM_VIEW
        | LaunchEvents.CONTACT_FORM_START
        | LaunchEvents.CONTACT_FORM_SUBMIT
        | LaunchEvents.CONTACT_FORM_SUCCESS,
      properties?: ContactFormProperties,
    ) => {
      trackEvent(action, properties);
    },
    [trackEvent],
  );

  // Track portfolio interactions
  const trackPortfolio = useCallback(
    (
      action:
        | LaunchEvents.PORTFOLIO_VIEW
        | LaunchEvents.PORTFOLIO_ITEM_CLICK
        | LaunchEvents.PORTFOLIO_DEMO_CLICK
        | LaunchEvents.PORTFOLIO_CODE_CLICK,
      properties?: PortfolioProperties,
    ) => {
      trackEvent(action, properties);
    },
    [trackEvent],
  );

  // Track blog interactions
  const trackBlog = useCallback(
    (
      action:
        | LaunchEvents.BLOG_VIEW
        | LaunchEvents.BLOG_POST_VIEW
        | LaunchEvents.BLOG_POST_READ_TIME
        | LaunchEvents.BLOG_POST_SHARE,
      properties?: BlogProperties,
    ) => {
      trackEvent(action, properties);
    },
    [trackEvent],
  );

  // Track conversion events
  const trackConversion = useCallback(
    (
      action:
        | LaunchEvents.HIRE_INTEREST
        | LaunchEvents.EMAIL_SIGNUP
        | LaunchEvents.PHONE_CALL_CLICK
        | LaunchEvents.EMAIL_CLICK
        | LaunchEvents.GITHUB_CLICK
        | LaunchEvents.LINKEDIN_CLICK
        | LaunchEvents.RESUME_DOWNLOAD,
      properties?: LaunchKPIProperties,
    ) => {
      trackEvent(action, properties);
    },
    [trackEvent],
  );

  // Identify user for enhanced tracking
  const identifyUser = useCallback(
    (userId: string, properties?: Record<string, any>) => {
      if (!posthog) return;
      posthog.identify(userId, properties);
    },
    [posthog],
  );

  // Set user properties
  const setUserProperties = useCallback(
    (properties: Record<string, any>) => {
      if (!posthog) return;
      posthog.setPersonProperties(properties);
    },
    [posthog],
  );

  return {
    trackEvent,
    trackPageView,
    trackContactForm,
    trackPortfolio,
    trackBlog,
    trackConversion,
    identifyUser,
    setUserProperties,
  };
}

// Scroll depth tracking hook
export function useScrollDepthTracking() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    let maxScrollDepth = 0;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;

          // Track scroll depth milestones
          if (
            scrollPercent >= 25 &&
            scrollPercent < 50 &&
            maxScrollDepth < 25
          ) {
            trackEvent(LaunchEvents.SCROLL_DEPTH, { depth_percent: 25 });
          } else if (
            scrollPercent >= 50 &&
            scrollPercent < 75 &&
            maxScrollDepth < 50
          ) {
            trackEvent(LaunchEvents.SCROLL_DEPTH, { depth_percent: 50 });
          } else if (
            scrollPercent >= 75 &&
            scrollPercent < 100 &&
            maxScrollDepth < 75
          ) {
            trackEvent(LaunchEvents.SCROLL_DEPTH, { depth_percent: 75 });
          } else if (scrollPercent >= 100 && maxScrollDepth < 100) {
            trackEvent(LaunchEvents.SCROLL_DEPTH, { depth_percent: 100 });
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [trackEvent]);
}

// Session duration tracking hook
export function useSessionDurationTracking() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const sessionStart = Date.now();

    const trackSessionDuration = () => {
      const duration = Math.round((Date.now() - sessionStart) / 1000);
      trackEvent(LaunchEvents.SESSION_DURATION, { duration_seconds: duration });
    };

    // Track session duration on page unload
    const handleBeforeUnload = () => {
      trackSessionDuration();
    };

    // Track session duration periodically (every 30 seconds)
    const interval = setInterval(() => {
      trackSessionDuration();
    }, 30000);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      trackSessionDuration();
    };
  }, [trackEvent]);
}

// Analytics validation utilities
export function validateAnalyticsSetup(): {
  isConfigured: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check PostHog configuration
  if (typeof window !== "undefined") {
    // @ts-ignore - posthog is global
    if (!window.posthog) {
      issues.push("PostHog not initialized");
    }

    // Check environment variables
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      issues.push("PostHog API key not configured");
    }

    // Check if analytics is working
    try {
      // @ts-ignore - posthog is global
      if (window.posthog && !window.posthog.__loaded) {
        issues.push("PostHog not loaded properly");
      }
    } catch (error) {
      issues.push("PostHog accessibility error");
    }
  }

  // Check SEO meta tags
  if (typeof document !== "undefined") {
    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );

    if (!title) issues.push("Missing page title");
    if (!description) issues.push("Missing meta description");
    if (!ogTitle) issues.push("Missing Open Graph title");
    if (!ogDescription) issues.push("Missing Open Graph description");
  }

  return {
    isConfigured: issues.length === 0,
    issues,
  };
}

// Export event dictionary for documentation
export const EVENT_DICTIONARY = {
  [LaunchEvents.PAGE_VIEW]: "User views a page",
  [LaunchEvents.PAGE_LEAVE]: "User leaves a page",
  [LaunchEvents.CONTACT_FORM_VIEW]: "Contact form is viewed",
  [LaunchEvents.CONTACT_FORM_START]: "User starts filling contact form",
  [LaunchEvents.CONTACT_FORM_SUBMIT]: "Contact form is submitted",
  [LaunchEvents.CONTACT_FORM_SUCCESS]: "Contact form submission successful",
  [LaunchEvents.PORTFOLIO_VIEW]: "Portfolio section viewed",
  [LaunchEvents.PORTFOLIO_ITEM_CLICK]: "Portfolio item clicked",
  [LaunchEvents.PORTFOLIO_DEMO_CLICK]: "Portfolio demo link clicked",
  [LaunchEvents.PORTFOLIO_CODE_CLICK]: "Portfolio code link clicked",
  [LaunchEvents.BLOG_VIEW]: "Blog section viewed",
  [LaunchEvents.BLOG_POST_VIEW]: "Blog post viewed",
  [LaunchEvents.BLOG_POST_READ_TIME]: "Blog post reading time tracked",
  [LaunchEvents.BLOG_POST_SHARE]: "Blog post shared",
  [LaunchEvents.HIRE_INTEREST]: "User expresses hiring interest",
  [LaunchEvents.EMAIL_SIGNUP]: "User signs up for email",
  [LaunchEvents.PHONE_CALL_CLICK]: "Phone number clicked",
  [LaunchEvents.EMAIL_CLICK]: "Email address clicked",
  [LaunchEvents.GITHUB_CLICK]: "GitHub profile clicked",
  [LaunchEvents.LINKEDIN_CLICK]: "LinkedIn profile clicked",
  [LaunchEvents.RESUME_DOWNLOAD]: "Resume downloaded",
  [LaunchEvents.SEARCH_PERFORMED]: "Search performed",
  [LaunchEvents.NAVIGATION_CLICK]: "Navigation item clicked",
  [LaunchEvents.SCROLL_DEPTH]: "Page scroll depth milestone",
  [LaunchEvents.SESSION_DURATION]: "Session duration tracked",
};
