import type { Metadata } from "next";

import "./twelveux.css";

const title = "twelveux";
const description = "A shadcn/ui registry. First component: Glass.";
const url = "https://www.michaelchurley.com/twelveux";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Michael C. Hurley",
    type: "website",
  },
};

export default function TwelveuxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-twelveux className="dark">
      {children}
    </div>
  );
}
