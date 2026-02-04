"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Generate available time slots (9 AM to 5 PM EST, 30-min intervals)
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00",
];

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

// Get next 14 days excluding weekends
function getAvailableDates(): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const current = new Date(today);
  current.setDate(current.getDate() + 1); // Start from tomorrow
  
  while (dates.length < 14) {
    const dayOfWeek = current.getDay();
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dates.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  
  return dates;
}

type Step = "date" | "time" | "details" | "confirm" | "success";

export default function BookingForm() {
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBooking = useMutation(api.bookings.create);
  const availableDates = useMemo(() => getAvailableDates(), []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError(null);
    setStep("confirm");
  };

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to Convex
      await createBooking({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        date: formatDate(selectedDate),
        timeSlot: selectedTime,
      });

      // Send emails with ICS
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
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
    if (step === "time") setStep("date");
    else if (step === "details") setStep("time");
    else if (step === "confirm") setStep("details");
  };

  const handleReset = () => {
    setStep("date");
    setSelectedDate(null);
    setSelectedTime(null);
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {["date", "time", "details", "confirm"].map((s, i) => (
          <div
            key={s}
            className={cn(
              "h-2 w-12 rounded-full transition-colors",
              step === s || ["date", "time", "details", "confirm"].indexOf(step) > i
                ? "bg-primary"
                : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Date Selection */}
      {step === "date" && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Select a Date</h2>
          <p className="text-muted-foreground text-center">Choose a day that works for you</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-6">
            {availableDates.map((date) => (
              <button
                key={formatDate(date)}
                onClick={() => handleDateSelect(date)}
                className={cn(
                  "flex flex-col items-center p-3 rounded-lg border transition-all",
                  "hover:border-primary hover:bg-primary/5",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
              >
                <span className="text-xs text-muted-foreground">{getDayName(date)}</span>
                <span className="text-lg font-semibold">{date.getDate()}</span>
                <span className="text-xs text-muted-foreground">{date.toLocaleDateString("en-US", { month: "short" })}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Time Selection */}
      {step === "time" && selectedDate && (
        <div className="space-y-4">
          <button
            onClick={handleBack}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-center">Select a Time</h2>
          <p className="text-muted-foreground text-center">
            {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <p className="text-sm text-muted-foreground text-center">All times are in Eastern Time (EST)</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => handleTimeSelect(slot)}
                className={cn(
                  "px-4 py-3 rounded-lg border transition-all text-sm font-medium",
                  "hover:border-primary hover:bg-primary/5",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
              >
                {formatTimeSlot(slot)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Details Form */}
      {step === "details" && (
        <div className="space-y-4">
          <button
            onClick={handleBack}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-center">Your Details</h2>
          <p className="text-muted-foreground text-center">
            {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime && formatTimeSlot(selectedTime)}
          </p>
          <form onSubmit={handleDetailsSubmit} className="space-y-4 mt-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message (optional)
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to discuss?"
                rows={4}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button type="submit" className="w-full" size="lg">
              Continue
            </Button>
          </form>
        </div>
      )}

      {/* Confirmation */}
      {step === "confirm" && selectedDate && selectedTime && (
        <div className="space-y-4">
          <button
            onClick={handleBack}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-center">Confirm Booking</h2>
          <div className="bg-muted/50 rounded-lg p-6 space-y-3 mt-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">
                {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium">{formatTimeSlot(selectedTime)} EST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium">30 minutes</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium">{name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{email}</span>
            </div>
            {message && (
              <div>
                <span className="text-muted-foreground">Message</span>
                <p className="mt-1">{message}</p>
              </div>
            )}
          </div>
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          <Button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? "Booking..." : "Confirm Booking"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            You will receive a calendar invite via email
          </p>
        </div>
      )}

      {/* Success */}
      {step === "success" && (
        <div className="text-center space-y-4">
          <div className="text-6xl">✓</div>
          <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
          <p className="text-muted-foreground">
            Check your email for the calendar invite. Looking forward to speaking with you!
          </p>
          <div className="pt-4">
            <Button onClick={handleReset} variant="outline">
              Book Another Meeting
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
