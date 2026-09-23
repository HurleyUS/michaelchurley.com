---
id: T004
title: Welcome logo 0.5.8
slug: omadesign-0-5-8-welcome-logo-0-5-8
excerpt: "The 0.5.8 welcome screen uses the corrected transparent logo, 25% larger, on a dark ground. Panels fade from the lighter theme color into that chrome."
tags: [omadesign, 0.5.8, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-welcome-logo-0-5-8/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-welcome-logo-0-5-8/og.png
---

## The habit

You judge a studio in the first second, before a tool key matters. Illustrator's start screen is a gray field and a product mark you have seen for years. Photoshop's home is tiles and a cloud identity. Affinity opens closer to the document, with the app chrome already in the color you set in preferences. On the web, every tool you use has trained the same reflex: if the logo sits in a white box on a dark page, the asset is wrong. Someone exported a flattened PNG and called it done.

You also know the splash that ignores the desktop. A fixed purple, a fixed charcoal, a wordmark in a color that clashes with the terminal you were just in. Omarchy users live in a theme file. Catppuccin, or whatever colors.toml you switched to this morning. The welcome mark has to sit in that room. A sticker on top of the room is a bug you see every launch.

The other habit is scale. A shy logo in the corner reads as a placeholder. A logo that blows out the header reads as a poster nobody asked for. The mark should be obvious, and the creation buttons should still be the thing you click.

## The constraint

One binary, and the welcome screen is inside it. There is no separate start-screen skin you download. The document model does not matter yet, because you have not made an `.oma`. What matters is that chrome follows the desktop on purpose. The app reads Omarchy theme colors. UI type comes from `omarchy font current`, then fontconfig. Icons are Phosphor Light. The welcome screen uses that palette and that font. It has no light/dark switch of its own.

That constraint decides the logo. If the mark is an opaque rectangle, it punches a hole in whatever colors.toml you loaded. The asset has to be the transparent logo and wordmark SVGs the project already supplied, preserved, not redrawn as a baked bitmap. Dark surroundings give the transparent shapes a ground. The panels and the creation buttons cannot be a second unrelated gray. They take the lighter theme color and fade into that dark chrome, so the screen is one surface.

Undo, camera files, and plugins are irrelevant on this screen. The constraint that still binds is local-first. **Your Work** and **Projects** read directories under your home folder. The logo is the header of a file browser, not the header of an account wall. **Sign up for cloud** can sit in the column. The mark does not wait on it.

## What landed

0.5.8 is the release that fixed this screen. The release notes name it directly. The supplied transparent logo and wordmark SVGs stay intact, and so does the project-folder SVG. The welcome logo is 25% larger than it was. It sits on a dark background. Browser panels and creation buttons fade from the lighter theme color into that dark chrome.

What you see when the window opens:

- The mark is the corrected transparent logo, larger, with the dark welcome ground showing through the open parts of the SVG.
- The file browsers and the creation controls are not a flat slab in a different color family. Their gradient runs from the lighter theme color into the dark chrome around the logo.
- The type on that screen is the desktop font, same rule as the rest of the app.
- The icons stay Phosphor Light. The logo change did not swap the icon set.

The welcome screen is still the local browser described in the manual. **Your Work → recent** finds `.oma` files under your home directory. **Recovered** lists recovery snapshots. **Projects → recent** finds directories that contain `.omabrand`. Center actions are **+ Vector**, the Vector file icon, **+ Raster**, **+ Layout**, the Layout file icon, **+ Photo**, the Photo folder and image icons, and **+ Project**. The larger logo sits over that layout. It does not replace it.

About, opened from the wordmark in the title bar, shows the refined logo, the branded version, and the full semantic version. The welcome mark and the About mark come from the same decision: use the supplied artwork, keep it transparent, let the theme supply the room.

Validation for 0.5.8 included native welcome screenshots. The public site got transparent branding in the same release. The in-app welcome is the screen you actually launch. That is the one with the 25% larger logo.

This was a 0.5.8 change. Earlier builds already followed the desktop theme. They did not yet have this corrected transparent welcome mark at the new size, on the dark ground, with the lighter theme color fading through the panels and the creation buttons.

## In the hand

Launch the studio:

```sh
omadesign
```

Look at the header before you click anything. The logo should read as vectors on the dark welcome background, not as a white tile. If your Omarchy theme is a light Catppuccin or a custom colors.toml, the panels still fade from that theme's lighter color into the dark chrome. The mark stays on the dark ground either way. You do not toggle an in-app appearance mode to make this true. There is no such toggle on the welcome screen.

Click **+ Vector**. The creation surface you enter uses the same fade. Come back. Click a recent `.oma` thumbnail. The document opens. The welcome logo's job is done for this session. The next launch shows it again, at the same size, from the same SVG.

Change the desktop theme in Omarchy, then launch again. The panels pick up the new lighter color. The logo asset does not get recolored into a different drawing. Transparency is what lets the ground show through. If the mark looked muddy before, it was the asset. 0.5.8 is the correction and the enlargement together.

Open **omadesign** in the title bar and choose **About** when you want the version next to the refined logo. Welcome itself shows 0.5.8 after this install. The logo is not a version stamp. The version is text. The logo is the mark.

If you set `OMADESIGN_FONT` to a `.ttf`, the UI type follows that file. The logo geometry does not follow it. Wordmarks in SVG stay the supplied drawing. Body text and labels pick up the font. That split is the point. A theme font should not redraw the studio's name as outlines you did not ship.

## The edge

The welcome screen will not grow a private light/dark switch to flatter the logo. The palette is the Omarchy palette. Stock Catppuccin is only the last stop in the theme read order, when the theme files are missing. The logo does not carry its own background color to fake a theme.

The enlargement is the welcome logo. It is not a new document size, a new artboard preset, or a change to how **+ Vector** scales a template. Twenty-five percent is the mark on that screen. The creation buttons stay the buttons. The browsers stay at most three columns of masonry thumbnails. A bigger logo does not mean a bigger file grid.

The SVG is preserved. 0.5.8 does not flatten it into a rectangle with a baked fill. If you are looking at a white box behind the wordmark, you are not looking at this build.

Launch `omadesign` and read the mark against the dark ground before you press `R`.
