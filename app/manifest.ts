import { MetadataRoute } from "next";

// Catppuccin Mocha Base color (was imported from tailwind.config)
const MOCHA_BASE = "#1e1e2e";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michael C. Hurley",
    short_name: "michaelchurley.com",
    description: "Hire Michael C. Hurley a professional business operator.",
    start_url: "https://www.michaelchurley.com",
    scope: "/",
    display: "standalone",
    background_color: MOCHA_BASE,
    theme_color: MOCHA_BASE,
    icons: [
      {
        src: "favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
