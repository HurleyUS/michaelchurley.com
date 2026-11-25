---
id: T139
title: Brand kit on disk
slug: omadesign-0-5-8-brand-kit-on-disk
excerpt: Palettes live in .omacolors, font roles in .omatype, and logos in .omabrand/. Copy the project folder. No account is required to open the kit on another machine.
tags: [omadesign, 0.5.8, brand]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-kit-on-disk/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-kit-on-disk/og.png
---

## The habit

Creative Cloud Libraries are where a lot of kits went to live. Swatches, logos, character styles, synced through an account, available on the machines that are signed in, missing on the machines that are not. You have emailed a `.ase` and a zip of fonts as the backup plan. Affinity's assets and palettes export to files you can pass around, and you still end up writing the README that says which file is the logo and which file is the type. The kit you can trust on a Linux box with no login is a folder. The names are stable. Another machine opens the folder and sees the same colors, the same roles, the same files.

You also know the failure mode of hidden files. A copy that skips dotfiles arrives without the kit and nobody notices until the swatches are empty.

## The constraint

A project in Omadesign needs no account. Welcome finds project folders by the `.omabrand` directory anywhere under your home folder. Cloud sign-in is optional and separate. The kit cannot live in a library service if yesterday's job has to open on another machine that has never signed in.

So the kit is three names beside the work. `.omacolors` is the palettes. `.omatype` names the font roles. `.omabrand/` holds the assets and the font files. A saved document uses the nearest enclosing folder that contains any of them. If none exists, the kit starts beside the document. An unsaved document asks you to **Choose a project**. The folder button can point at a different library on purpose. These names start with a dot. A file manager that hides dotfiles will hide the kit. Turn hidden files on when you copy by hand.

Palette saves and artwork saves are different. Quitting asks about unsaved palettes first, then unsaved artwork. A kit that auto-wrote into the `.oma` would vanish the moment you sent someone the pictures without the folder, and a kit stored only in the document would not be shared by the next file in the same project.

## What landed

The right sidebar has Inspect, Palettes, and Brand.

Palettes are Personal or Project. Personal colors are available across your work and live in the personal library, which is also where a plugin's `oma.palette` writes. Project colors go in the current project folder. **+ Palette**, name it, **Rename**. Add the current color, pull fill and stroke **From selection**, or type a hex and press **+**. `#RRGGBBAA` carries alpha. Choose Fill or Stroke, then click a swatch. The swatch menu replaces, copies the hex, or removes. **Save** on the palette writes the collection. That save state is separate from `Ctrl+S` on the artwork.

`.omacolors` is JSON. Several named palettes can sit in one file, or a single palette object, or a bare array of hex strings. Older RGBA objects still load and become the portable form on the next save. **Load palettes…** merges and suffixes conflicting names. **Export selected palette…** and **Export collection…** write files you can hand over. If the file changes on disk while you have unsaved palette edits, Save is blocked. Export a copy or **Reload saved colors**.

Brand → **Load bank…** or **Create bank**. Assets copy into `.omabrand/`. Originals stay where they were. PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma` are accepted. Drag a tile onto the canvas, or double-click to place at the selected artboard's center. Placement undoes with `Ctrl+Z`. In Photo, double-click places the asset into Design. Optional `brand.json` sets the display name. Without it, the folder name is the name. **Save bank copy…** copies the bank, the typography kit, and the fonts into another project folder.

Typography → **Add fonts…** copies TTF or OTF into the project. Fonts are usable inside the app without installing them on the computer. Name a role Heading, Body, Caption, and **Save role**. **Apply** uses that face on the selection or on the next text you create. The Character panel lists **Project fonts**. Applying a face to artwork supports Undo. The kit's names and files have their own save. `.omatype` stores roles with paths relative to `.omabrand/`, under `fonts/`. **Load kit…** merges another kit and copies its font files. **Save copy…** writes the kit into another folder. Removing a role keeps the font file for text that already uses it.

SVG export draws project-font text as outlines so the picture survives. The `.oma` keeps the text editable, including after you move the project, including new characters. Saving artwork into another folder copies the faces that artwork uses into that folder's `.omabrand/fonts/`.

Welcome's **Projects → recent** is this folder, found by `.omabrand`, with subprojects and descendant `.oma` files. **Edit brand…** opens the editor. **+ Project** starts one. **Team** shows up only while you are signed into cloud and a shared project exists. Local browsing does not wait on that.

## In the hand

Make a folder for the job. In the app, **Choose a project** and point at it, or save the `.oma` inside it and let the nearest kit win. Open Palettes, choose Project, add the colors you are actually using, and press **Save**. You should see `.omacolors` in the folder once hidden files are visible.

Open Brand, **Create bank**, add the logo SVG and a wordmark PNG. Drag the logo onto the artboard. `Ctrl+Z` if it landed wrong. Open Typography, add the two font files, name the roles, **Save role**, select the headline, **Apply**.

Copy the folder to another machine, dotfiles included. Install Omadesign there if it is not already in `~/.local/bin`. Open the `.oma`. The type is still editable. The swatches are in Project. The bank tiles are the same files. No sign-in dialog stands in front of the folder.

On the machine you started from, export the palette collection as well if you want `.omacolors` spelled out in the destination. **Save bank copy…** carries assets, the type kit, and the fonts. The manual's Fieldwork example in the repo is a portable sample of the same layout.

If a plugin installed Night studio into Personal, that palette is yours across projects. Copy `.omacolors` when the colors belong to this job and should travel with it.

## The edge

Skip the dotfiles and the kit does not arrive. `.omacolors`, `.omatype`, and `.omabrand/` are the kit. Palette save and font-kit save are not `Ctrl+S`. A conflict on disk blocks the palette save until you reload or export. SVG outlines the project fonts in the export. The `.oma` keeps them editable. Share the fonts under their licenses. An account is not required to open any of this. Cloud is a separate, optional share of a project you already have on disk.

Copy the project folder with hidden files on. Open the `.oma` on the other machine.
