/**
 * ICS file generator for calendar events
 */

interface ICSEvent {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  organizer: { name: string; email: string };
  attendee: { name: string; email: string };
}

function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function escapeICSText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

function generateUID(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}@michaelchurley.com`;
}

export function generateICS(event: ICSEvent): string {
  const now = new Date();
  
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Michael C. Hurley//Booking System//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${generateUID()}`,
    `DTSTAMP:${formatICSDate(now)}`,
    `DTSTART:${formatICSDate(event.startTime)}`,
    `DTEND:${formatICSDate(event.endTime)}`,
    `SUMMARY:${escapeICSText(event.title)}`,
    `DESCRIPTION:${escapeICSText(event.description)}`,
    `ORGANIZER;CN=${escapeICSText(event.organizer.name)}:mailto:${event.organizer.email}`,
    `ATTENDEE;CN=${escapeICSText(event.attendee.name)};RSVP=TRUE;PARTSTAT=NEEDS-ACTION:mailto:${event.attendee.email}`,
  ];

  if (event.location) {
    lines.push(`LOCATION:${escapeICSText(event.location)}`);
  }

  lines.push(
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  );

  return lines.join('\r\n');
}

export function generateBookingICS(booking: {
  name: string;
  email: string;
  message: string;
  date: string; // ISO date string
  timeSlot: string; // HH:MM format
  duration?: number; // minutes, default 30
}): string {
  const duration = booking.duration || 30;
  
  // Parse the date and time
  const [year, month, day] = booking.date.split('-').map(Number);
  const [hours, minutes] = booking.timeSlot.split(':').map(Number);
  
  const startTime = new Date(year, month - 1, day, hours, minutes);
  const endTime = new Date(startTime.getTime() + duration * 60 * 1000);

  return generateICS({
    title: `Meeting with ${booking.name}`,
    description: `Booking request from ${booking.name}\n\nMessage: ${booking.message}\n\nContact: ${booking.email}`,
    startTime,
    endTime,
    organizer: {
      name: 'Michael C. Hurley',
      email: 'michaelmonetized@gmail.com',
    },
    attendee: {
      name: booking.name,
      email: booking.email,
    },
  });
}
