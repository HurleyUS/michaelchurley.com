import type { Metadata } from "next";

import { GlassKitMock } from "@/registry/twelveux/kit/mock";

export const metadata: Metadata = {
  title: "twelveux glass kit",
  description: "The 2009–2012 twelve.ux chrome, under Glass.",
  alternates: { canonical: "https://www.michaelchurley.com/twelveux/kit" },
};

export default function TwelveuxKitPage() {
  return <GlassKitMock />;
}
