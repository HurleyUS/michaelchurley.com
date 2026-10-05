import type { Metadata } from "next";
import NaarchyExperience from "./experience";
import "./naarchy.css";

export const metadata: Metadata = {
  title: "Naarchy — A little space for everything",
  description:
    "Your files, clipboard, music, focus timer, and calendar. One little island at the top of your Linux desktop. Free and open source for Omarchy and Hyprland.",
  alternates: { canonical: "/portfolio/naarchy" },
  openGraph: {
    title: "Naarchy. A little space for everything.",
    description: "A free, open-source island for your Linux desktop.",
    url: "/portfolio/naarchy",
    images: [
      {
        url: "/naarchy/social-card.png",
        width: 1200,
        height: 630,
        alt: "Naarchy — A little space for everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naarchy. A little space for everything.",
    images: ["/naarchy/social-card.png"],
  },
};

export default function NaarchyPage() {
  return <NaarchyExperience />;
}
