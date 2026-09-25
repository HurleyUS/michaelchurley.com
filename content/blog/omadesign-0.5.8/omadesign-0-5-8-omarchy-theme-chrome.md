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

## Theme fallback chain

### The habit

You have watched apps invent a theme ladder and then lie about it. A desktop sets GTK. An Electron app reads a subset. A design tool ships "match system" and then opens in its own charcoal because the match failed quietly. Illustrator and Photoshop never promised to read a Linux theme file. Affinity's UI color is an app preference. On Omarchy the file is real and it is yours: `colors.toml`, in a known place, switched when you switch themes.

The failure mode is a tool that only looks at one path. You use the state directory Omarchy updates when the current theme changes. The app looks at the config tree from a tutorial written last year. You get yesterday's palette, or you get the app's built-in skin, and you waste twenty minutes deciding you configured Omarchy wrong.

The other failure is the reverse. The app requires its own copy of the theme in its own dot-directory. You keep two Catppuccin checkouts. They drift. The terminal and the studio disagree by one crust shade and it is all you can see.

A short, ordered list of files is the habit that works. Try the current theme. Then the named theme in the config directory. Then a stock palette that ships with the app so the window can still open on a machine that has never run Omarchy's theme switcher. Stop at the first one that exists.

### The constraint

Chrome follows the desktop. The `.oma` does not store that chrome. Welcome has no light/dark toggle, because a toggle would be a second source of truth next to the files. The binary has to know exactly which file it read, in an order you can check with `ls` before you file a bug.

Omarchy already has two locations people meet in the wild. The current theme is linked or written under the state directory, so a switch is one place. The theme library lives under the config directory, one folder per theme, and "current" is a name. If the app read only the library, a switch that updates state and not your mental model of the folder name would look like a stuck theme. If it read only state, a fresh config with themes on disk and an empty state directory would open unthemed. The chain is the constraint made visible.

Stock Omarchy Catppuccin has to be last. It is the floor when the other two reads find nothing. It is not a private brand skin that overrides a theme you actually set. Putting it first would make every Omarchy theme look like the default and the feature would be a lie. Putting a random "Omadesign dark" first would do the same thing with a different paint.

The read happens on launch. There is no watcher described in the manual that live-reloads `colors.toml` while you drag a slider in another app. Relaunch and the chain runs again. That keeps the studio's frame loop out of the business of polling your whole home directory. Icons stay Phosphor Light across all three stops. The font chain is separate: `omarchy font current`, then fontconfig `sans-serif`, then `OMADESIGN_FONT` if you set it. Colors and type are two ladders. Do not expect a theme file to change the menu font, and do not expect a font file to change the crust color.

0.5.8's welcome fade uses the lighter color from whatever this chain resolved, against the dark ground. The chain is older than that polish. The polish consumes its result.

### What landed

On launch the app reads theme colors in this order, and this is the order the manual prints:

1. `~/.local/state/omarchy/current/theme/colors.toml`
2. `~/.config/omarchy/themes/<current>/colors.toml`
3. Stock Omarchy Catppuccin, if nothing else is there.

`<current>` is the theme name Omarchy has selected. You do not pass it as an Omadesign flag. The studio asks the desktop's convention.

The first file that is there supplies the chrome. Browser panels on the 0.5.8 welcome screen fade from that theme's lighter color into the dark welcome ground. Persona tabs, tools, the Shortcut HUD, and the wordmark menu sit in the same resolution. The filter icon's blue hover and red active are state colors drawn on top of that chrome, not alternate themes.

Stock Catppuccin is the third stop. It is in the binary so a machine without Omarchy's theme files still gets a coherent window: the Catppuccin palette Omarchy itself treats as home, not a one-off gray. Ubuntu and Arch machines that are not running Omarchy land here unless those paths exist for some other reason. Asahi Omarchy with a normal theme setup lands on step one or step two and never needs the stock copy.

The chain does not consult Creative Cloud, a user account, or the open `.oma`. Cloud sign-in can sit in the File menu and do nothing to `colors.toml`. Recovery swaps, templates, and plugins do not carry a theme. A Lua plugin can paint pixels in a document. It does not get to rewrite the three-step read.

Config's UI font and size are preferences under `~/.config/omadesign`. They are not step four of the color chain. Anonymous usage is off by default and is not a theme service.

This is standing behavior in 0.5.8. The release notes do not claim the ladder was added that day. They do ship a welcome screen that assumes the ladder, including the transparent logo on the dark ground and the lighter theme color in the panels.

### In the hand

See what you have before you launch.

```sh
ls -l ~/.local/state/omarchy/current/theme/colors.toml
ls ~/.config/omarchy/themes
```

If the state file exists, that is the file Omadesign will use. Remember the colors. Then:

```sh
omadesign
```

The chrome should match that file. Open **+ Vector** or a blank document and glance at the title bar and the HUD. Same palette.

If the state file is absent and `~/.config/omarchy/themes/<current>/colors.toml` exists, the launch uses that second file. Put the state file back and launch again. State is first, so it wins while it is present.

On a machine with neither path, stock Omarchy Catppuccin is the chrome. The window opens. You can draw. Add Omarchy's theme later, relaunch, and the chain picks up the file you added.

```sh
omarchy font current
```

That command is the desktop face. `OMADESIGN_FONT` is a one-shot UI face. Neither edits `colors.toml`.

Switch themes in Omarchy, then launch the studio again. Welcome has no second theme menu. **Config** under the wordmark is font, size, startup, rulers, hints, guides, photo keys, and usage. Palette edits belong in `colors.toml`.

### The edge

The chain stops at the first file that is there. It does not merge the three stops into one palette. Stock Catppuccin is only the stop you reach when the two theme files are absent.

Stock Catppuccin does not override a theme you have. It appears when steps one and two are absent. If your Omarchy theme is loaded and the studio still shows the stock palette, the current file is not where the chain looks, or the process you launched is an older binary. `~/.local/bin/omadesign --version` should report 0.5.8 for this install. The paths above are the ones that binary reads.

The chain will not recolor open documents. Fills, strokes, palettes, and brand colors stay in the file and in `.omacolors` / `.omabrand`. Relaunch after a theme switch and the poster matches the save. Only the chrome moves.

There is no per-document theme and no theme written into the idle swap. Recovered documents come back as documents. They do not come back as skins.

Check `~/.local/state/omarchy/current/theme/colors.toml`, then launch `omadesign`. That file, when it is there, is the chrome you are about to see.
