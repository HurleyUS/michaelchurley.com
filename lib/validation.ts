// Input validation utilities for improved reliability
import { z } from "zod";

// Common validation schemas
export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required");

export const nameSchema = z
  .string()
  .min(1, "Name is required")
  .max(100, "Name must be less than 100 characters")
  .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters");

export const messageSchema = z
  .string()
  .min(1, "Message is required")
  .max(5000, "Message must be less than 5000 characters");

export const phoneSchema = z
  .string()
  .optional()
  .refine(
    (val) =>
      !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, "")),
    "Please enter a valid phone number",
  );

// Contact form validation
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Blog post validation
export const blogPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(50000, "Content must be less than 50000 characters"),
  excerpt: z
    .string()
    .max(500, "Excerpt must be less than 500 characters")
    .optional(),
  tags: z.array(z.string()).max(10, "Maximum 10 tags allowed").optional(),
  published: z.boolean().optional(),
});

export type BlogPostData = z.infer<typeof blogPostSchema>;

// Portfolio item validation
export const portfolioItemSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description must be less than 1000 characters"),
  technologies: z
    .array(z.string())
    .min(1, "At least one technology is required")
    .max(20, "Maximum 20 technologies allowed"),
  url: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  githubUrl: z
    .string()
    .url("Please enter a valid GitHub URL")
    .optional()
    .or(z.literal("")),
  imageUrl: z
    .string()
    .url("Please enter a valid image URL")
    .optional()
    .or(z.literal("")),
  featured: z.boolean().optional(),
});

export type PortfolioItemData = z.infer<typeof portfolioItemSchema>;

// Sanitization utilities
export function sanitizeString(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .trim()
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
    .substring(0, 10000); // Limit length
}

export function sanitizeEmail(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .trim()
    .toLowerCase()
    .replace(/[^\w@.-]/g, "") // Only allow word chars, @, dot, hyphen
    .substring(0, 254); // RFC 5321 limit
}

export function sanitizeHtml(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Rate limiting helpers
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: Request) => string;
}

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  key: string,
  config: RateLimitConfig,
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Clean up old entries
  for (const [k, v] of rateLimitStore.entries()) {
    if (v.resetTime < windowStart) {
      rateLimitStore.delete(k);
    }
  }

  const existing = rateLimitStore.get(key);
  const resetTime = now + config.windowMs;

  if (!existing || existing.resetTime < windowStart) {
    // First request in window or window expired
    rateLimitStore.set(key, { count: 1, resetTime });
    return { allowed: true, remaining: config.maxRequests - 1, resetTime };
  }

  if (existing.count >= config.maxRequests) {
    // Limit exceeded
    return { allowed: false, remaining: 0, resetTime: existing.resetTime };
  }

  // Increment count
  existing.count++;
  return {
    allowed: true,
    remaining: config.maxRequests - existing.count,
    resetTime: existing.resetTime,
  };
}

// Error handling utilities
export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string,
    public code?: string,
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

export class RateLimitError extends Error {
  constructor(
    message: string,
    public retryAfter: number,
  ) {
    super(message);
    this.name = "RateLimitError";
  }
}

export function handleApiError(error: unknown): {
  message: string;
  status: number;
} {
  if (error instanceof ValidationError) {
    return { message: error.message, status: 400 };
  }

  if (error instanceof RateLimitError) {
    return { message: error.message, status: 429 };
  }

  if (error instanceof z.ZodError) {
    const firstError = error.issues[0];
    if (firstError) {
      return {
        message: `${firstError.path.join(".")}: ${firstError.message}`,
        status: 400,
      };
    }
    return { message: "Validation failed", status: 400 };
  }

  if (error instanceof Error) {
    console.error("API Error:", error);
    return { message: "Internal server error", status: 500 };
  }

  console.error("Unknown API Error:", error);
  return { message: "Internal server error", status: 500 };
}
