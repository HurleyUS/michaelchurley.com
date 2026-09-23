---
id: T019
title: Omarchy theme chrome
slug: omadesign-0-5-8-omarchy-theme-chrome
excerpt: "Studio chrome follows Omarchy theme colors and the desktop font. Icons are Phosphor Light. Point OMADESIGN_FONT at a .ttf when you want a different UI face."
tags: [omadesign, 0.5.8, theme]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-omarchy-theme-chrome/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-omarchy-theme-chrome/og.png
---

## The habit

You theme the desktop once and then every app argues. Illustrator has its own brightness slider. Photoshop has another. Affinity has a UI gray you set in Preferences and forget until you change rooms. The browser has a prefers-color-scheme bit. The terminal has the theme you actually like, the one you spent an evening on. By Thursday the studio is a light gray island on a dark desktop, or the reverse, and the font in the menus is whatever the toolkit defaulted to in 2014.

Omarchy users already made the choice in a theme file and a font command. `omarchy font current` is the face. `colors.toml` is the palette. Phosphor is the icon set a lot of that desktop already speaks. An app that ships a private dark skin and a private icon font on top of that is a guest that brought its own furniture and shoved yours against the wall.

The habit you want from a native tool is dull and specific. Launch it. The chrome matches the desktop you were just in. The icons match the other Omarchy tools. If you need a different UI face for a talk or a screenshot, you can point at one file and not rebuild the app.

## The constraint

One binary, running on Linux, aimed at Omarchy as a first-class desktop and still runnable on Ubuntu and Arch. The document is an `.oma` and does not store your desktop theme inside the poster. Client files should not change color because you switched from Mocha to Latte. Theme is chrome. Artwork is artwork. That split is the constraint.

There is no in-app light/dark switch on the welcome screen. A second switch would fight `colors.toml` and you would never know which one won. The app reads the desktop theme on launch. UI type comes from `omarchy font current`, then from fontconfig's `sans-serif` if that has nothing to say. Icons are Phosphor Light, drawn from Phosphor's own font, not from a random system dingbat page.

The override has to be one environment variable, because a designer who wants a specific face for the UI already has the file. `OMADESIGN_FONT=/path/to/font.ttf`. Config also has a UI font and size control, stored with the other preferences under `~/.config/omadesign` or `XDG_CONFIG_HOME`. Those are the two places a face can come from. The theme colors still come from Omarchy. A font override is not a theme override.

0.5.8's welcome screen uses that same palette and adds a dark ground, a larger transparent logo, and panels that fade from the lighter theme color. The chrome rule did not get replaced by the welcome polish. The polish sits on top of the palette you already chose. Phosphor stays the icon weight for utility links, mode tabs, and tools.

Document color is a different system on purpose. The color studio, swatches, palettes in `.omacolors`, and brand assets in `.omabrand` belong to the work. They do not follow `colors.toml`. If they did, every poster would repaint when you changed desktops.

## What landed

Chrome follows the desktop. The manual's theme section and the first-five-minutes note say the same thing, and it is the behavior 0.5.8 launches with.

- Theme colors come from Omarchy. The read order is the next article. The short version: a current-theme `colors.toml`, then the theme directory's file, then stock Omarchy Catppuccin if both are missing.
- UI type is `omarchy font current`, then fontconfig `sans-serif`.
- Override the UI face with `OMADESIGN_FONT=/path/to/font.ttf`.
- Icons are Phosphor Light.
- The welcome screen uses the current Omarchy palette and the desktop font. It has no separate appearance toggle.
- **omadesign → Config** sets UI font and size, startup mode, welcome tab, rulers, shortcut hints, guide locking, photo provider keys, and the anonymous usage toggle. Preferences persist under `~/.config/omadesign`.

Mode tabs in the title bar use Phosphor icons for the personas: the curve, the brush, layout, images, the running figure. Hover text keeps the names Design, Pixel, Layout, Photo, and Motion. The 0.5.8 wordmark menu, filter icon, and segmented welcome controls use the same icon language and the same theme colors. Blue hover and red active on the filter are state colors on that Phosphor funnel, not a second theme.

The logo and wordmark are the supplied transparent SVGs. They are not recolored type. `OMADESIGN_FONT` changes UI text. It does not redraw the welcome mark. About shows the refined logo next to the version string. On this release the version you installed is 0.5.8.

Nothing in the theme path writes into the `.oma`. You can send the file to a machine with a different Omarchy theme and the vectors are the vectors. Their fills are the fills you set. The other person's chrome will follow their desktop. That is the feature working, not a missing embed.

## In the hand

Set the desktop the way you want it in Omarchy. Theme and font. Then:

```sh
omadesign
```

The welcome ground is the dark 0.5.8 chrome. The panels fade from your theme's lighter color. The utility icons are Phosphor. Open a document. The tool icons, the persona tabs, and the HUD sit in that same palette. Change the Omarchy theme. Launch the studio again. Chrome follows. The rectangle you drew does not recolor itself.

To force a UI face for one session:

```sh
OMADESIGN_FONT=/path/to/font.ttf omadesign
```

Menus and labels pick up that file. The wordmark SVG does not. Clear the variable and you are back to `omarchy font current`, then fontconfig `sans-serif`.

Open the wordmark menu and choose **Config** if you want a UI font and a size stored in preferences.

```text
omadesign → Config
```

Set the size you can read on this display. Shortcut hints can be turned off here too. Guide locking starts locked in this build. None of those checkboxes are the desktop palette. The palette is still `colors.toml`.

Draw with `R` and set a fill in the color studio. Save. Reload. Quit, switch the Omarchy theme, launch, reopen. The fill matches what you saved. The window chrome matches the new theme. If those two ever move together, something is wrong. They are supposed to be independent.

Phosphor Light is the weight you should see. If a panel has dropped back to a heavy system icon or a missing-glyph box, the icon font did not load. The license for Phosphor ships with the package. You do not install Phosphor from a package manager to get the tool icons.

## The edge

The welcome screen will not offer a private light/dark switch. Stock Catppuccin is the fallback when Omarchy's theme files are absent, not a skin you toggle against a live theme. If the files exist, they win. The order is the whole of that decision.

`OMADESIGN_FONT` will not theme the document and will not replace the logo SVG. It is one `.ttf` for UI type. Project fonts in the brand library are a different list. Those show up in the type tool's font picker so you can set headlines. They are not automatically the menu font.

Chrome will not write theme colors into the `.oma`. Palettes and brand colors are explicit saves, `.omacolors` and `.omabrand`, when you want a color to travel with the project. Leaving the theme out of the file is the boundary that keeps a desktop preference from becoming client artwork.

Anonymous usage, off unless you enable it, is not a theme sync. Nothing about the palette is an account.

Launch `omadesign` after you set the Omarchy theme. For a different UI face, launch with `OMADESIGN_FONT=/path/to/font.ttf`.
