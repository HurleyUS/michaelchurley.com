import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateBookingICS } from '@/lib/ics';

// Only initialize Resend if API key is present
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const OWNER_EMAIL = process.env.ADMIN_EMAIL || 'michaelmonetized@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'notify@uncap.us';

// Rate limiting: 5 bookings per hour per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many booking requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, date, timeSlot } = body;

    // Validate required fields
    if (!name || !email || !date || !timeSlot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate ICS file content
    const icsContent = generateBookingICS({
      name,
      email,
      message: message || 'No message provided',
      date,
      timeSlot,
      duration: 30, // 30-minute meetings
    });

    // Format date for display
    const displayDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Convert 24h to 12h format for display
    const [hours, minutes] = timeSlot.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayTime = `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;

    // ICS attachment
    const icsAttachment = {
      filename: 'meeting.ics',
      content: Buffer.from(icsContent).toString('base64'),
    };

    // Send email to the person who booked
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Meeting Confirmed: ${displayDate} at ${displayTime}`,
      html: `
        <h1>Meeting Confirmed!</h1>
        <p>Hi ${name},</p>
        <p>Your meeting with Michael C. Hurley has been scheduled.</p>
        <h2>Details</h2>
        <ul>
          <li><strong>Date:</strong> ${displayDate}</li>
          <li><strong>Time:</strong> ${displayTime} (EST)</li>
          <li><strong>Duration:</strong> 30 minutes</li>
        </ul>
        <p>Please add the attached calendar invite to your calendar.</p>
        <p>If you need to reschedule, please reply to this email or contact Michael directly.</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Michael C. Hurley<br />
          <a href="https://michaelchurley.com">michaelchurley.com</a><br />
          <a href="tel:+18285931935">+1 (828) 593-1935</a>
        </p>
      `,
      attachments: [icsAttachment],
    });

    // Send email to Michael
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New Booking: ${name} - ${displayDate} at ${displayTime}`,
      html: `
        <h1>New Meeting Booked</h1>
        <h2>Details</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          ${phone ? `<li><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></li>` : ''}
          <li><strong>Date:</strong> ${displayDate}</li>
          <li><strong>Time:</strong> ${displayTime} (EST)</li>
          <li><strong>Duration:</strong> 30 minutes</li>
        </ul>
        ${message ? `<h2>Message</h2><p>${message}</p>` : ''}
        <p>Calendar invite attached.</p>
      `,
      attachments: [icsAttachment],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking email error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
