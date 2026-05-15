import {
  sanitizeString,
  sanitizeEmail,
  sanitizeHtml,
  checkRateLimit,
  ValidationError,
  RateLimitError,
  handleApiError,
  contactFormSchema,
  blogPostSchema,
  portfolioItemSchema,
} from "@/lib/validation";
import { expect, test, describe, beforeEach, jest } from "@jest/globals";
import { z } from "zod";

describe("Validation utilities", () => {
  describe("sanitizeString", () => {
    test("removes control characters", () => {
      const input = "Hello\x00\x08World\x1F";
      const result = sanitizeString(input);
      expect(result).toBe("HelloWorld");
    });

    test("removes script tags", () => {
      const input = "Hello <script>alert('xss')</script> World";
      const result = sanitizeString(input);
      expect(result).toBe("Hello  World");
    });

    test("trims whitespace", () => {
      const input = "  Hello World  ";
      const result = sanitizeString(input);
      expect(result).toBe("Hello World");
    });

    test("limits length", () => {
      const input = "a".repeat(20000);
      const result = sanitizeString(input);
      expect(result.length).toBe(10000);
    });

    test("handles non-string input", () => {
      const result = sanitizeString(123 as any);
      expect(result).toBe("");
    });
  });

  describe("sanitizeEmail", () => {
    test("removes invalid characters", () => {
      const input = "test@example.com!@#";
      const result = sanitizeEmail(input);
      expect(result).toBe("test@example.com");
    });

    test("converts to lowercase", () => {
      const input = "Test@EXAMPLE.COM";
      const result = sanitizeEmail(input);
      expect(result).toBe("test@example.com");
    });

    test("trims whitespace", () => {
      const input = "  test@example.com  ";
      const result = sanitizeEmail(input);
      expect(result).toBe("test@example.com");
    });

    test("limits length", () => {
      const input = "a".repeat(300) + "@example.com";
      const result = sanitizeEmail(input);
      expect(result.length).toBe(254);
    });
  });

  describe("sanitizeHtml", () => {
    test("escapes HTML entities", () => {
      const input = '<script>alert("xss")</script>';
      const result = sanitizeHtml(input);
      expect(result).toBe("&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;");
    });

    test("escapes ampersands", () => {
      const input = "Tom & Jerry";
      const result = sanitizeHtml(input);
      expect(result).toBe("Tom &amp; Jerry");
    });

    test("handles non-string input", () => {
      const result = sanitizeHtml(123 as any);
      expect(result).toBe("");
    });
  });

  describe("checkRateLimit", () => {
    test("allows requests within limit", () => {
      const result = checkRateLimit("test-key", {
        windowMs: 60000,
        maxRequests: 10,
      });

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(9);
    });

    test("blocks requests over limit", () => {
      const config = { windowMs: 60000, maxRequests: 2 };

      // First two requests should be allowed
      checkRateLimit("test-key-2", config);
      checkRateLimit("test-key-2", config);

      // Third request should be blocked
      const result = checkRateLimit("test-key-2", config);
      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
    });

    test("resets after window expires", (done) => {
      const config = { windowMs: 100, maxRequests: 1 };

      // Use up the limit
      checkRateLimit("test-key-3", config);

      // Should be blocked immediately
      let result = checkRateLimit("test-key-3", config);
      expect(result.allowed).toBe(false);

      // After window expires, should be allowed again
      setTimeout(() => {
        result = checkRateLimit("test-key-3", config);
        expect(result.allowed).toBe(true);
        done();
      }, 150);
    });
  });

  describe("handleApiError", () => {
    test("handles ValidationError", () => {
      const error = new ValidationError("Invalid input", "email");
      const result = handleApiError(error);

      expect(result.message).toBe("Invalid input");
      expect(result.status).toBe(400);
    });

    test("handles RateLimitError", () => {
      const error = new RateLimitError("Too many requests", 60);
      const result = handleApiError(error);

      expect(result.message).toBe("Too many requests");
      expect(result.status).toBe(429);
    });

    test("handles ZodError", () => {
      const schema = z.object({ name: z.string().min(1) });

      try {
        schema.parse({ name: "" });
      } catch (error) {
        const result = handleApiError(error);
        expect(result.status).toBe(400);
        expect(result.message).toContain("name");
      }
    });

    test("handles generic Error", () => {
      const error = new Error("Something went wrong");
      const result = handleApiError(error);

      expect(result.message).toBe("Internal server error");
      expect(result.status).toBe(500);
    });

    test("handles unknown error", () => {
      const result = handleApiError("unknown error");

      expect(result.message).toBe("Internal server error");
      expect(result.status).toBe(500);
    });
  });

  describe("Schema validation", () => {
    test("contactFormSchema validates correct data", () => {
      const validData = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Subject",
        message: "This is a test message",
      };

      const result = contactFormSchema.parse(validData);
      expect(result).toEqual(validData);
    });

    test("contactFormSchema rejects invalid email", () => {
      const invalidData = {
        name: "John Doe",
        email: "invalid-email",
        subject: "Test Subject",
        message: "This is a test message",
      };

      expect(() => contactFormSchema.parse(invalidData)).toThrow();
    });

    test("blogPostSchema validates correct data", () => {
      const validData = {
        title: "Test Post",
        content: "This is test content",
        published: true,
      };

      const result = blogPostSchema.parse(validData);
      expect(result).toEqual(validData);
    });

    test("portfolioItemSchema validates correct data", () => {
      const validData = {
        title: "Test Project",
        description: "A test project",
        technologies: ["React", "TypeScript"],
        url: "https://example.com",
        featured: true,
      };

      const result = portfolioItemSchema.parse(validData);
      expect(result).toEqual(validData);
    });
  });
});
