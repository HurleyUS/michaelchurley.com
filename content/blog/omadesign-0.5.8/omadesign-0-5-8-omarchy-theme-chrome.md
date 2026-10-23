---
id: T019
title: Omarchy theme chrome
slug: omadesign-0-5-8-omarchy-theme-chrome
excerpt: "Studio chrome follows Omarchy theme colors and the desktop font. Icons are Phosphor Light. Point OMADESIGN_FONT at a .ttf when you want a different UI face."
publishedAt: 2026-08-29T16:25:47Z
tags: [omadesign, 0.0.0.0alpha-rc, theme]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-omarchy-theme-chrome/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-omarchy-theme-chrome/og.png
---

## The habit

You theme the desktop once, and then every app disagrees with it. Illustrator has its own brightness slider and Photoshop has another. Affinity has a UI gray you set in Preferences and forget until you move to a different room. The browser has a prefers-color-scheme setting. The terminal has the theme you actually like, the one you spent an evening on. By Thursday the design app is a light gray island on a dark desktop, or the reverse, and the menu font is whatever the toolkit defaulted to in 2014.

Omarchy users have already made that choice in a theme file and a font command. `omarchy font current` gives the face, `colors.toml` holds the palette, and Phosphor is the icon set much of the desktop already uses. An app that ships its own dark skin and icon font on top of that is a guest who brought their own furniture and pushed yours against the wall.

What you want from a native tool is simple. Launch it and the interface matches the desktop you were just using. The icons match the other Omarchy tools. If you need a different UI face for a talk or a screenshot, you point at one file without rebuilding the app.

## The constraint

Omadesign is one binary for Linux, built for Omarchy as a first-class desktop and still runnable on Ubuntu and Arch. The document is an `.oma`, and it doesn't store your desktop theme inside the poster. A client file shouldn't change color because you switched from Mocha to Latte. The theme applies to the interface and the artwork stays artwork. That split is the constraint.

The welcome screen has no light/dark switch. A second switch would compete with `colors.toml`, and you'd never know which one won. The app reads the desktop theme at launch. UI type comes from `omarchy font current`, or from fontconfig's `sans-serif` if that returns nothing. Icons are Phosphor Light, drawn from Phosphor's own font rather than whatever symbol font the system has.

The font override is one environment variable, because a designer who wants a specific UI face already has the file: `OMADESIGN_FONT=/path/to/font.ttf`. Config also has a UI font and size setting, stored with the other preferences under `~/.config/omadesign` or `XDG_CONFIG_HOME`. Those are the two places a face can come from. Theme colors still come from Omarchy, and a font override doesn't change them.

In 0.5.8 the welcome screen uses the same palette and adds a dark background, a larger transparent logo, and panels that fade from the theme's lighter color. That polish sits on top of the palette rule instead of replacing it. Phosphor stays the icon set for utility links, mode tabs and tools.

Document color is a separate system on purpose. The color studio, swatches, palettes in `.omacolors` and brand assets in `.omabrand` belong to the work and don't follow `colors.toml`. If they did, every poster would repaint whenever you changed desktops.

Apps that promise to follow the system theme often get it wrong. The desktop sets GTK, an Electron app reads part of it, and a design tool offers "match system" and then opens in its own charcoal because the match quietly failed. Illustrator and Photoshop never promised to read a Linux theme file, and Affinity's UI color is an app preference. On Omarchy the theme file is real and it's yours: `colors.toml`, in a known place, switched when you switch themes.

A common failure is a tool that checks only one path. Omarchy updates a state directory when the current theme changes, but the app reads the config tree from last year's tutorial. You get yesterday's palette or the app's built-in skin, and spend twenty minutes convinced you configured Omarchy wrong. The opposite failure is an app that wants its own copy of the theme in its own dot-directory. You end up with two Catppuccin checkouts that drift apart, and the terminal and the design app differ by one shade of crust, which is all you can see.

What works is a short, ordered list of files. Try the current theme, then the named theme in the config directory, then a stock palette shipped with the app so the window can open on a machine that has never run Omarchy's theme switcher. Stop at the first file that exists. The binary has to know exactly which file it read, in an order you can check with `ls` before filing a bug.

Omarchy has two locations people run into. The current theme is linked or written under the state directory, so switching updates one place. The theme library lives under the config directory with one folder per theme, and "current" is a name. If the app only read the library, a switch that updates state but not the folder you had in mind would look like a stuck theme. If it only read state, a fresh config with themes on disk and an empty state directory would open unthemed. The chain covers both.

Stock Omarchy Catppuccin has to come last. It's the fallback when the other two reads find nothing, not a brand skin that overrides a theme you set. Putting it first would make every Omarchy theme look like the default, and putting a custom "Omadesign dark" first would do the same with a different color.

The read happens at launch. The manual doesn't describe a watcher that live-reloads `colors.toml` while you work in another app. Relaunch and the chain runs again, which keeps the app from polling your home directory every frame. Icons stay Phosphor Light at all three stops. The font chain is separate: `omarchy font current`, then fontconfig `sans-serif`, then `OMADESIGN_FONT` if you set it. Colors and type are two separate lists, so a theme file won't change the menu font and a font file won't change the colors.

## What landed

### Interface follows the desktop

The manual's theme section and its first-five-minutes note say the same thing:

- Theme colors come from Omarchy. The app reads a current-theme `colors.toml`, then the theme directory's file, then stock Omarchy Catppuccin if both are missing. The full order is below.
- UI type comes from `omarchy font current`, then fontconfig `sans-serif`.
- `OMADESIGN_FONT=/path/to/font.ttf` overrides the UI face.
- Icons are Phosphor Light.
- The welcome screen uses the current Omarchy palette and the desktop font, with no separate appearance toggle.
- **omadesign > Config** sets UI font and size, startup mode, welcome tab, rulers, shortcut hints, guide locking, photo provider keys and the anonymous usage toggle. Preferences persist under `~/.config/omadesign`.

Mode tabs in the title bar use Phosphor icons for the personas: the curve, the brush, layout, images and the running figure. Hover text keeps the names Design, Pixel, Layout, Photo and Motion. The wordmark menu, filter icon and segmented welcome controls in 0.5.8 use the same icons and theme colors. The filter's blue hover and red active are state colors on the Phosphor funnel icon, not a second theme.

The logo and wordmark are the supplied transparent SVGs, not recolored type. `OMADESIGN_FONT` changes UI text and doesn't redraw the welcome mark. About shows the refined logo next to the version string.

Nothing in the theme path writes to the `.oma`. Send the file to a machine with a different Omarchy theme and the vectors and fills are exactly what you set. The other person's interface follows their desktop, which is how it's supposed to work.

### The fallback chain

At launch the app reads theme colors in this order, as printed in the manual:

1. `~/.local/state/omarchy/current/theme/colors.toml`
2. `~/.config/omarchy/themes/<current>/colors.toml`
3. Stock Omarchy Catppuccin, if nothing else is there.

`<current>` is the theme name Omarchy has selected. You don't pass it as an Omadesign flag. The app follows the desktop's convention.

The first file found supplies the colors. Since 0.5.8, the welcome screen's browser panels fade from that theme's lighter color into the dark welcome background. Persona tabs, tools, the Shortcut HUD and the wordmark menu use the same resolved palette, and the filter icon's hover and active colors are drawn on top of it.

Stock Catppuccin is the third stop. It's built into the binary so a machine without Omarchy's theme files still gets a consistent window, using the Catppuccin palette Omarchy itself treats as home instead of a one-off gray. Ubuntu and Arch machines that aren't running Omarchy land here unless those paths exist for some other reason. Asahi Omarchy with a normal theme setup lands on step one or two and never needs the stock copy.

The chain doesn't consult Creative Cloud, a user account or the open `.oma`. Cloud sign-in in the File menu has no effect on `colors.toml`. Recovery swaps, templates and plugins don't carry a theme. A Lua plugin can paint pixels in a document, but it can't change the three-step read.

Config's UI font and size are preferences under `~/.config/omadesign`, not a fourth step in the color chain. Anonymous usage is off by default and isn't a theme service.

The 0.5.8 release notes don't claim the chain was added in that release. They do ship a welcome screen that depends on it, including the transparent logo on the dark background and the lighter theme color in the panels.

## In the hand

Set your theme and font in Omarchy, then check what's on disk before you launch:

```sh
ls -l ~/.local/state/omarchy/current/theme/colors.toml
ls ~/.config/omarchy/themes
```

If the state file exists, that's the file Omadesign will use. Note its colors, then launch:

```sh
omadesign
```

The welcome background is dark and the panels fade from your theme's lighter color. The utility icons are Phosphor. Open **+ Vector** or a blank document, and the tool icons, persona tabs and HUD use the same palette. Change the Omarchy theme and launch again. The interface follows, and the rectangle you drew doesn't change color.

If the state file is missing and `~/.config/omarchy/themes/<current>/colors.toml` exists, the app uses that second file. Put the state file back and relaunch, and since state comes first, it wins while it's there.

On a machine with neither path, stock Omarchy Catppuccin is used. The window opens and you can draw. Add an Omarchy theme later, relaunch, and the chain picks up the new file.

```sh
omarchy font current
```

That command gives the desktop face. To force a different UI face for one session:

```sh
OMADESIGN_FONT=/path/to/font.ttf omadesign
```

Menus and labels use that file, and the wordmark SVG stays the same. Clear the variable and the app goes back to `omarchy font current`, then fontconfig `sans-serif`. Neither option edits `colors.toml`.

To store a UI font and size in preferences, open the wordmark menu and choose **Config**.

```text
omadesign → Config
```

Set a size you can read on this display. You can turn off shortcut hints here too. Guide locking starts locked in this build. None of these settings affect the palette, which still comes from `colors.toml`. There's no second theme menu on the welcome screen.

Draw with `R`, set a fill in the color studio and save. Quit, switch the Omarchy theme, launch and reopen the file. The fill matches what you saved and the window matches the new theme. The two are supposed to be independent, so if they ever change together, something is wrong.

You should see Phosphor Light icons. If a panel shows a heavy system icon or a missing-glyph box, the icon font didn't load. Phosphor's license ships in the package, and you don't need to install Phosphor from a package manager.

## The edge

The welcome screen won't offer a private light/dark switch. Stock Catppuccin is a fallback for when Omarchy's theme files are missing, not a skin you toggle against a live theme. If the files exist, they win.

The chain stops at the first file it finds and doesn't merge the three stops into one palette. If your Omarchy theme is loaded and the app still shows the stock palette, either the current file isn't where the chain looks, or you launched an older binary. `~/.local/bin/omadesign --version` should report the version you just installed, and the paths above are the ones that binary reads.

`OMADESIGN_FONT` doesn't theme the document or replace the logo SVG. It sets one `.ttf` for UI type. Project fonts in the brand library are a separate list. They appear in the Type tool's font picker for headlines and don't become the menu font.

Theme colors never go into the `.oma`, and the chain never recolors open documents. Fills, strokes, palettes and brand colors stay in the file and in `.omacolors` or `.omabrand`, which you save explicitly when a color should travel with the project. Keeping the theme out of the file stops a desktop preference from becoming client artwork. After a theme switch, only the interface changes.

There's no per-document theme and no theme saved in the idle swap, so recovered documents come back as documents, not skins. Anonymous usage, off unless you enable it, isn't a theme sync, and nothing about the palette depends on an account.
