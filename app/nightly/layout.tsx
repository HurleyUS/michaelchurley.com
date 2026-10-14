import type { Metadata } from "next";
import "./nightly.css";

export const metadata: Metadata = {
  title: "Nightly · Daily Stand Up",
  description:
    "Michael Hurley’s nightly stand-up dashboard — public project updates and announcements.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.michaelchurley.com/nightly" },
};

export default function NightlyLayout({ children }: { children: React.ReactNode }) {
  return <div className="nightly-root">{children}</div>;
}
