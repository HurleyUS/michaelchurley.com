"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PiCalendarPlusLight } from "react-icons/pi";
import BookingForm from "./booking-form";
import { ReactNode } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface BookingModalProps {
  trigger?: ReactNode;
  iconOnly?: boolean;
}

export default function BookingModal({ trigger, iconOnly }: BookingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ||
          (iconOnly ? (
            <Button size="icon" aria-label="Book a meeting">
              <PiCalendarPlusLight />
            </Button>
          ) : (
            <Button>
              <PiCalendarPlusLight className="mr-2" />
              Book a Meeting
            </Button>
          ))}
      </DialogTrigger>
      <DialogContent className="max-w-[42rem] max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>Book a Meeting</DialogTitle>
          <DialogDescription>
            Select a time slot and enter your details to book a meeting.
          </DialogDescription>
        </VisuallyHidden>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
}
