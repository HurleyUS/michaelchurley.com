import type { Metadata } from "next";

import { OgMock } from "@/registry/twelveux/og/mock";

export const metadata: Metadata = {
  title: "twelveux og",
  description: "The 2009–2012 twelve.ux chrome. Exact clone of the WHATWG-era mock.",
  alternates: { canonical: "https://www.michaelchurley.com/twelveux/og" },
};

export default function TwelveuxOgPage() {
  return <OgMock />;
}
