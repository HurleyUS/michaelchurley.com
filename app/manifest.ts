import { MetadataRoute } from "next";
import { Catppuccin } from "@/tailwind.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michael C. Hurley",
    short_name: "michaelchurley.com",
    description: "Hire Michael C. Hurley a professional business operator.",
    start_url: "https://www.michaelchurley.com",
    scope: "/",
    display: "standalone",
    background_color: Catppuccin.Mocha.Base,
    theme_color: Catppuccin.Mocha.Base,
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
