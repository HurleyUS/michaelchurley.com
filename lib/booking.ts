/**
 * Booking rules shared by the /book widget and the WebMCP booking tools.
 * Slots are 30-minute meetings, Monday to Friday, 7:30 AM to 8:30 PM Eastern Time.
 */
export const BOOKING_TIMEZONE = "America/New_York";
export const BOOKING_DURATION_MINUTES = 30;
/** Same-day slots must start at least this many minutes from now. */
export const BOOKING_LEAD_MINUTES = 30;

const FIRST_SLOT_MINUTES = 7 * 60 + 30;
const LAST_SLOT_MINUTES = 20 * 60 + 30;

function minutesToSlot(total: number) {
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}`;
}

/** "07:30" through "20:30" in 30-minute steps. */
export const ALL_TIME_SLOTS: string[] = Array.from(
  { length: (LAST_SLOT_MINUTES - FIRST_SLOT_MINUTES) / 30 + 1 },
  (_, i) => minutesToSlot(FIRST_SLOT_MINUTES + i * 30),
);

export function slotMinutes(slot: string) {
  const [hh = 0, mm = 0] = slot.split(":").map(Number);
  return hh * 60 + mm;
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type BookingRequest = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  date: string; // YYYY-MM-DD (Eastern Time)
  timeSlot: string; // HH:MM (Eastern Time)
};

type CreateBooking = (args: BookingRequest & { phone: string }) => Promise<unknown>;

/** Client-side checks the widget runs before submitting. Returns an error message or null. */
export function validateBookingRequest(input: BookingRequest): string | null {
  if (!input.name.trim() || !input.email.trim()) return "Please fill in your name and email";
  if (!EMAIL_PATTERN.test(input.email.trim())) return "Please enter a valid email address";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date) || !ALL_TIME_SLOTS.includes(input.timeSlot)) {
    return "Please pick an available time";
  }
  return null;
}

/**
 * Creates a booking the way the /book widget does: store it in Convex, then POST /api/booking,
 * which rate-limits by IP and sends the confirmation emails with a calendar invite.
 */
export async function submitBooking(input: BookingRequest, createBooking: CreateBooking) {
  const payload = {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: (input.phone ?? "").trim(),
    ...(input.message?.trim() ? { message: input.message.trim() } : {}),
    date: input.date,
    timeSlot: input.timeSlot,
  };
  await createBooking(payload);
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? "Failed to send confirmation emails");
  }
  return payload;
}

/** Wall-clock date and minutes-since-midnight for an instant in a time zone. */
export function zonedParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
    weekday: get("weekday"),
  };
}

/** The UTC instant for a wall-clock date + "HH:MM" in a time zone. */
export function zonedToInstant(date: string, slot: string, timeZone: string) {
  const [y = 1970, m = 1, d = 1] = date.split("-").map(Number);
  const guess = Date.UTC(y, m - 1, d, 0, slotMinutes(slot));
  // Adjust by the zone's offset at that moment (twice to settle DST edges).
  let instant = guess;
  for (let i = 0; i < 2; i++) {
    const p = zonedParts(new Date(instant), timeZone);
    const [py = 1970, pm = 1, pd = 1] = p.date.split("-").map(Number);
    const asUtc = Date.UTC(py, pm - 1, pd, 0, p.minutes);
    instant += guess - asUtc;
  }
  return new Date(instant);
}

/** Open slots (Eastern Time) between two YYYY-MM-DD dates, inclusive, using the widget's rules. */
export function availableSlots(dateFrom: string, dateTo: string, now = new Date()) {
  const today = zonedParts(now, BOOKING_TIMEZONE);
  const days: { date: string; slots: string[] }[] = [];
  const cursor = new Date(`${dateFrom}T12:00:00Z`);
  const end = new Date(`${dateTo}T12:00:00Z`);
  for (let i = 0; cursor <= end && i < 62; i++) {
    const date = cursor.toISOString().slice(0, 10);
    const dow = cursor.getUTCDay();
    if (dow >= 1 && dow <= 5 && date >= today.date) {
      const slots =
        date === today.date
          ? ALL_TIME_SLOTS.filter((s) => slotMinutes(s) > today.minutes + BOOKING_LEAD_MINUTES)
          : ALL_TIME_SLOTS;
      if (slots.length) days.push({ date, slots });
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}
