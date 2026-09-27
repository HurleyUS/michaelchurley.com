import { NextRequest, NextResponse } from "next/server";
import {
  BookingError,
  bookingEmailsConfigured,
  clientIp,
  isRateLimited,
  sendBookingEmails,
} from "@/lib/booking-server";

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    if (isRateLimited(clientIp(request.headers))) {
      return NextResponse.json(
        { error: "Too many booking requests. Please try again later." },
        { status: 429 },
      );
    }

    // Check if Resend is configured
    if (!bookingEmailsConfigured()) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const body = await request.json();
    await sendBookingEmails(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof BookingError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Booking email error:", error);
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
