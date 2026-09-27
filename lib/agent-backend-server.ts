import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import type { AgentBackend } from "@/lib/agent-tools";
import type { BookingRequest } from "@/lib/booking";
import {
  BookingError,
  bookingEmailsConfigured,
  isRateLimited,
  sendBookingEmails,
} from "@/lib/booking-server";
import { getLlmsPosts } from "@/lib/llms";
import { pageMarkdown } from "@/lib/page-markdown";
import { jsonResume, resumeMarkdown } from "@/lib/resume";
import { blogJson, portfolioJson } from "@/lib/site-json";

/** Server backend for the /mcp tools: same data functions the routes use, same booking path. */
export function serverBackend(ip: string): AgentBackend {
  return {
    resume: async () => jsonResume(),
    resumeMarkdown: async () => resumeMarkdown(),
    portfolio: async () => portfolioJson(),
    blog: async () => blogJson(await getLlmsPosts()),
    pageMarkdown: (path) => pageMarkdown(path.split("/").filter(Boolean)),
    book: async (request: BookingRequest) => {
      if (isRateLimited(ip)) {
        throw new BookingError("Too many booking requests. Please try again later.", 429);
      }
      if (!bookingEmailsConfigured()) throw new BookingError("Email service not configured", 503);
      const payload = {
        name: request.name,
        email: request.email,
        phone: request.phone ?? "",
        ...(request.message ? { message: request.message } : {}),
        date: request.date,
        timeSlot: request.timeSlot,
      };
      await fetchMutation(api.bookings.create, payload);
      await sendBookingEmails(payload);
    },
  };
}
