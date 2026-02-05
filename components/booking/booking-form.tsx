"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// Generate time slots from 7:30 AM to 8:30 PM (30-min intervals)
function generateTimeSlots(): string[] {
  const slots: string[] = [];
  // 7:30 AM = 7.5 hours, 8:30 PM = 20.5 hours
  for (let h = 7; h <= 20; h++) {
    if (h === 7) {
      slots.push("07:30");
    } else {
      slots.push(`${h.toString().padStart(2, "0")}:00`);
      if (h < 20 || (h === 20 && true)) {
        slots.push(`${h.toString().padStart(2, "0")}:30`);
      }
    }
  }
  // Add 20:00 and 20:30 (8:00 PM and 8:30 PM)
  return slots.filter(s => {
    const [hh, mm] = s.split(":").map(Number);
    const minutes = hh * 60 + mm;
    return minutes >= 7 * 60 + 30 && minutes <= 20 * 60 + 30;
  });
}

const ALL_TIME_SLOTS = generateTimeSlots();

function formatTimeSlot(slot: string): string {
  const [hours, minutes] = slot.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getDayName(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

function getMonthDay(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Get available time slots for a given date (only future times)
function getAvailableSlotsForDate(date: Date, now: Date): string[] {
  const isToday = formatDate(date) === formatDate(now);
  
  if (!isToday) {
    return ALL_TIME_SLOTS;
  }
  
  // For today, filter out past times (with 30min buffer)
  const currentMinutes = now.getHours() * 60 + now.getMinutes() + 30;
  
  return ALL_TIME_SLOTS.filter(slot => {
    const [hh, mm] = slot.split(":").map(Number);
    const slotMinutes = hh * 60 + mm;
    return slotMinutes > currentMinutes;
  });
}

// Get next N weekdays (M-F) that have available slots
function getWeekdaysWithSlots(startDate: Date, count: number, now: Date): Date[] {
  const days: Date[] = [];
  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0);
  
  while (days.length < count) {
    const dayOfWeek = current.getDay();
    // Only M-F (1-5)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Check if this day has any available slots
      const slots = getAvailableSlotsForDate(current, now);
      if (slots.length > 0) {
        days.push(new Date(current));
      }
    }
    current.setDate(current.getDate() + 1);
  }
  
  return days;
}

type Step = "select" | "details" | "success";

export default function BookingForm() {
  const [step, setStep] = useState<Step>("select");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startOffset, setStartOffset] = useState(0); // How many weekdays forward from today
  const [now, setNow] = useState(() => new Date());

  const createBooking = useMutation(api.bookings.create);

  // Update "now" every minute to keep slots fresh
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Get the start date based on offset
  const startDate = useMemo(() => {
    const date = new Date(now);
    date.setHours(0, 0, 0, 0);
    
    // Skip forward by startOffset weekdays
    let skipped = 0;
    while (skipped < startOffset) {
      date.setDate(date.getDate() + 1);
      const dow = date.getDay();
      if (dow >= 1 && dow <= 5) {
        // Also check if this day has slots
        const slots = getAvailableSlotsForDate(date, now);
        if (slots.length > 0) {
          skipped++;
        }
      }
    }
    
    return date;
  }, [startOffset, now]);

  // Get 3 days to display
  const visibleDays = useMemo(() => {
    return getWeekdaysWithSlots(startDate, 3, now);
  }, [startDate, now]);

  const canGoBack = startOffset > 0;

  const handlePrev = () => {
    if (canGoBack) {
      setStartOffset(Math.max(0, startOffset - 3));
    }
  };

  const handleNext = () => {
    setStartOffset(startOffset + 3);
  };

  const handleSlotSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep("details");
  };

  const handleBookNow = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!selectedDate || !selectedTime) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      await createBooking({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date: formatDate(selectedDate),
        timeSlot: selectedTime,
      });

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          date: formatDate(selectedDate),
          timeSlot: selectedTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send confirmation emails");
      }

      setStep("success");
    } catch (err) {
      console.error("Booking error:", err);
      setError("Something went wrong. Please try again or contact directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step === "details") setStep("select");
  };

  const handleReset = () => {
    setStep("select");
    setSelectedDate(null);
    setSelectedTime(null);
    setName("");
    setEmail("");
    setPhone("");
    setError(null);
    setStartOffset(0);
  };

  // Slot selection view
  if (step === "select") {
    return (
      <div className="w-full">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10">
            {canGoBack && (
              <Button variant="ghost" size="icon" onClick={handlePrev}>
                <PiCaretLeftBold />
              </Button>
            )}
          </div>
          <h3 className="text-lg font-semibold">Select a Time</h3>
          <Button variant="ghost" size="icon" onClick={handleNext}>
            <PiCaretRightBold />
          </Button>
        </div>

        {/* 3-column day view */}
        <div className="grid grid-cols-3 gap-3">
          {visibleDays.map((date) => {
            const slots = getAvailableSlotsForDate(date, now);
            const emptySlots = Math.max(0, 5 - slots.length);

            return (
              <div key={formatDate(date)} className="flex flex-col">
                {/* Day header */}
                <div className="text-center mb-2 pb-2 border-b">
                  <div className="font-semibold">{getDayName(date)}</div>
                  <div className="text-sm text-muted-foreground">{getMonthDay(date)}</div>
                </div>

                {/* Scrollable slots container */}
                <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-1">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => handleSlotSelect(date, slot)}
                      className={cn(
                        "px-2 py-2 text-sm rounded-md border transition-all",
                        "hover:border-primary hover:bg-primary/5",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      )}
                    >
                      {formatTimeSlot(slot)}
                    </button>
                  ))}
                  {/* Muted booked placeholders if less than 5 slots */}
                  {emptySlots > 0 && slots.length < 5 && Array.from({ length: emptySlots }).map((_, i) => (
                    <div
                      key={`booked-${i}`}
                      className="px-2 py-2 text-sm rounded-md border border-muted bg-muted/30 text-muted-foreground text-center"
                    >
                      Booked
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          All times are in Eastern Time (EST)
        </p>
      </div>
    );
  }

  // Details form
  if (step === "details") {
    return (
      <div className="w-full">
        <button
          onClick={handleBack}
          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
        >
          ← Back
        </button>
        <h3 className="text-lg font-semibold text-center mb-1">Book Your Meeting</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">
          {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime && formatTimeSlot(selectedTime)}
        </p>
        <form onSubmit={handleBookNow} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 555-5555"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Booking..." : "Book Now"}
          </Button>
        </form>
      </div>
    );
  }

  // Success
  return (
    <div className="text-center py-4">
      <div className="text-5xl mb-4">✓</div>
      <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
      <p className="text-muted-foreground mb-4">
        Check your email for the calendar invite.
      </p>
      <Button onClick={handleReset} variant="outline">Book Another Meeting</Button>
    </div>
  );
}
