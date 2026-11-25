---
id: T020
title: Theme fallback chain
slug: omadesign-0-5-8-theme-fallback-chain
excerpt: "On launch, Omadesign reads the current Omarchy colors.toml, then the named theme file, then stock Catppuccin. The first file that is there wins."
tags: [omadesign, 0.5.8, theme]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-theme-fallback-chain/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-theme-fallback-chain/og.png
---

## The habit

You have watched apps invent a theme ladder and then lie about it. A desktop sets GTK. An Electron app reads a subset. A design tool ships "match system" and then opens in its own charcoal because the match failed quietly. Illustrator and Photoshop never promised to read a Linux theme file. Affinity's UI color is an app preference. On Omarchy the file is real and it is yours: `colors.toml`, in a known place, switched when you switch themes.

The failure mode is a tool that only looks at one path. You use the state directory Omarchy updates when the current theme changes. The app looks at the config tree from a tutorial written last year. You get yesterday's palette, or you get the app's built-in skin, and you waste twenty minutes deciding you configured Omarchy wrong.

The other failure is the reverse. The app requires its own copy of the theme in its own dot-directory. You keep two Catppuccin checkouts. They drift. The terminal and the studio disagree by one crust shade and it is all you can see.

A short, ordered list of files is the habit that works. Try the current theme. Then the named theme in the config directory. Then a stock palette that ships with the app so the window can still open on a machine that has never run Omarchy's theme switcher. Stop at the first one that exists.

## The constraint

Chrome follows the desktop. The `.oma` does not store that chrome. Welcome has no light/dark toggle, because a toggle would be a second source of truth next to the files. The binary has to know exactly which file it read, in an order you can check with `ls` before you file a bug.

Omarchy already has two locations people meet in the wild. The current theme is linked or written under the state directory, so a switch is one place. The theme library lives under the config directory, one folder per theme, and "current" is a name. If the app read only the library, a switch that updates state and not your mental model of the folder name would look like a stuck theme. If it read only state, a fresh config with themes on disk and an empty state directory would open unthemed. The chain is the constraint made visible.

Stock Omarchy Catppuccin has to be last. It is the floor when the other two reads find nothing. It is not a private brand skin that overrides a theme you actually set. Putting it first would make every Omarchy theme look like the default and the feature would be a lie. Putting a random "Omadesign dark" first would do the same thing with a different paint.

The read happens on launch. There is no watcher described in the manual that live-reloads `colors.toml` while you drag a slider in another app. Relaunch and the chain runs again. That keeps the studio's frame loop out of the business of polling your whole home directory. Icons stay Phosphor Light across all three stops. The font chain is separate: `omarchy font current`, then fontconfig `sans-serif`, then `OMADESIGN_FONT` if you set it. Colors and type are two ladders. Do not expect a theme file to change the menu font, and do not expect a font file to change the crust color.

0.5.8's welcome fade uses the lighter color from whatever this chain resolved, against the dark ground. The chain is older than that polish. The polish consumes its result.

## What landed

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

## In the hand

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

## The edge

The chain stops at the first file that is there. It does not merge the three stops into one palette. Stock Catppuccin is only the stop you reach when the two theme files are absent.

Stock Catppuccin does not override a theme you have. It appears when steps one and two are absent. If your Omarchy theme is loaded and the studio still shows the stock palette, the current file is not where the chain looks, or the process you launched is an older binary. `~/.local/bin/omadesign --version` should report 0.5.8 for this install. The paths above are the ones that binary reads.

The chain will not recolor open documents. Fills, strokes, palettes, and brand colors stay in the file and in `.omacolors` / `.omabrand`. Relaunch after a theme switch and the poster matches the save. Only the chrome moves.

There is no per-document theme and no theme written into the idle swap. Recovered documents come back as documents. They do not come back as skins.

Check `~/.local/state/omarchy/current/theme/colors.toml`, then launch `omadesign`. That file, when it is there, is the chrome you are about to see.
