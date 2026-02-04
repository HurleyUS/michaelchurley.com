import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend if API key is present
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const OWNER_EMAIL = 'michaelmonetized@gmail.com';
const FROM_EMAIL = 'notify@uncap.us';

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification email to Michael
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : `New Contact from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Details</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          ${subject ? `<li><strong>Subject:</strong> ${subject}</li>` : ''}
        </ul>
        <h2>Message</h2>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Sent from the contact form at <a href="https://michaelchurley.com">michaelchurley.com</a>
        </p>
      `,
    });

    // Send confirmation email to the sender
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thanks for reaching out! - Michael C. Hurley',
      html: `
        <h1>Thanks for your message!</h1>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
        <h2>Your Message</h2>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li><a href="https://michaelchurley.com/book">Book a meeting</a> if you'd like to chat directly</li>
          <li>Call or text me at <a href="tel:+18285931935">+1 (828) 593-1935</a></li>
        </ul>
        <p>Best regards,<br />Michael C. Hurley</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          <a href="https://michaelchurley.com">michaelchurley.com</a>
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
