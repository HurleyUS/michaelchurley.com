"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  PiPaperPlaneTilt,
  PiSpinner,
  PiCheckCircle,
  PiWarningCircle,
} from "react-icons/pi";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-md p-lg text-center bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
        <PiCheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
          Message Sent!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Thanks for reaching out. I&apos;ll get back to you within 24-48 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-md"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md w-full">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-sm p-md bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
        >
          <PiWarningCircle className="w-5 h-5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-md">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "submitting"}
        />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, business needs, or how I can help..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
          rows={5}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="gap-2 self-end"
      >
        {status === "submitting" ? (
          <>
            <PiSpinner className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <PiPaperPlaneTilt className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
