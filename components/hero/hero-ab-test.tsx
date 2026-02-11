"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import Image from "next/image";
import Logo from "@/components/ui/logo";

type Variant = "signature" | "photo" | null;

export default function HeroABTest() {
  const [variant, setVariant] = useState<Variant>(null);

  useEffect(() => {
    // Try to get variant from PostHog feature flag first
    if (posthog.isFeatureEnabled !== undefined) {
      const flagVariant = posthog.getFeatureFlag("hero-image-test");
      if (flagVariant === "photo") {
        setVariant("photo");
        return;
      } else if (flagVariant === "signature") {
        setVariant("signature");
        return;
      }
    }

    // Fallback: Cookie-based 50/50 split
    const cookieName = "hero_ab_variant";
    const existingCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));

    if (existingCookie) {
      const value = existingCookie.split("=")[1] as Variant;
      setVariant(value);
    } else {
      // Random 50/50 split
      const newVariant: Variant = Math.random() < 0.5 ? "signature" : "photo";
      // Set cookie for 30 days
      document.cookie = `${cookieName}=${newVariant}; path=/; max-age=${60 * 60 * 24 * 30}`;
      setVariant(newVariant);

      // Track the variant assignment in PostHog
      posthog.capture("hero_ab_test_assigned", {
        variant: newVariant,
      });
    }
  }, []);

  // Don't render until we know the variant (prevents flash)
  if (!variant) {
    return (
      <div className="flex flex-col z-[0] absolute inset-0 opacity-50 pointer-none items-center justify-center sm:items-end sm:relative sm:z-[auto]">
        <div style={{ width: (2802 / 25) * 2, height: (1674 / 25) * 2 }} />
      </div>
    );
  }

  if (variant === "photo") {
    return (
      <div className="flex flex-col z-[0] absolute inset-0 opacity-50 pointer-none items-center justify-center sm:items-end sm:relative sm:z-[auto] sm:opacity-100">
        <Image
          src="/michael-hero.jpeg"
          width={224}
          height={224}
          alt="Michael C. Hurley"
          className="rounded-full border-4 border-primary/20 shadow-2xl object-cover w-56 h-56"
          priority
        />
      </div>
    );
  }

  // Default: signature SVG
  return (
    <div className="flex flex-col z-[0] absolute inset-0 opacity-50 pointer-none items-center justify-center sm:items-end sm:relative sm:z-[auto]">
      <Logo multiplier={2} />
    </div>
  );
}
