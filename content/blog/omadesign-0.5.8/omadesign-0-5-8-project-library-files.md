---
id: T090
title: Project library files
slug: omadesign-0-5-8-project-library-files
excerpt: Project kits sit beside the work as .omacolors, .omatype, and .omabrand/. A saved document uses the nearest enclosing folder that has any of them, or starts beside the document.
tags: [omadesign, 0.5.8, palettes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-project-library-files/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-project-library-files/og.png
---

## The habit

Creative Cloud Libraries taught a bad address. The swatches live "in the cloud," the logo lives "in the library," and the document on disk is a guest. Move the job to another machine and you sign in, wait for the sync, and hope the library name matches the one from memory. Illustrator and Photoshop both route that habit through the same account. Affinity is closer to files, and people still email a pack of PNGs plus a screenshot of the colors because nobody agreed where the kit lives.

The hand wants a folder. Copy the folder, you copied the job. The colors are a file you can open in a text editor when a hex is wrong. The font roles are a file that points at font files inside the project, not at a font menu on one laptop. The logos are files in a directory, nested if the brand has sections. Hidden files are fine. Designers can turn on hidden files. A dot in the name is a better lock than an account.

You also want the document to find that folder without a prompt every time. Save the poster inside the client directory. Open it next month. The sidebar should already be looking at the client kit, not at your personal swatches and not at the previous client's bank.

## The constraint

One `.oma` is the artwork. It should not have to embed every logo, every weight, and every palette in order for the next file in the same job to match. Embed the one you placed. Share the kit as siblings. That split keeps the document small and the kit reusable. It also means the kit must be discoverable from the document's path. A project setting buried in a preference file will not travel when you copy the folder to another machine. The discovery has to be "look at the directories I am inside."

The nearest enclosing folder wins. You might keep `client/brand/` and also `client/posters/april/poster.oma`. If any of the kit files exist at `client/` and none exist closer, the poster uses `client/`. If a tighter folder also has a kit, the tighter one wins. That is how a subproject can diverge without a settings dialog. If nothing encloses the document, the kit starts beside the document. You are not sent hunting for a default library in a hidden application support folder you have never seen.

Unsaved documents have no path yet. They cannot do the walk. **Choose a project** is the explicit answer. The folder button is the same idea later: switch libraries on purpose when the nearest folder is not the one you want today.

The names start with a dot so a casual directory listing stays about the art. `.omacolors`, `.omatype`, `.omabrand/`. Copying by hand means showing hidden files. The manual says so because people will forget, and a kit that "did not copy" is usually a kit the file manager hid.

## What landed

Three files, beside the work.

**`.omacolors`** holds the palettes. It is readable JSON. One file can hold several named palettes, each with hex colors. An eight-digit hex keeps transparency. You can export and import this file from the Palettes tab. You can also read it. A handwritten file may be the full collection, a single palette object, or a bare array of hex strings. Older saves that used RGBA objects still load, and they become this portable shape when you save them again.

**`.omatype`** names the font roles. Paths inside it are relative to `.omabrand/`. The font files live in `.omabrand/fonts/`. A role has a name you chose, Heading or Body or whatever the job calls it, and a pointer at a TTF or OTF in that fonts folder. No absolute path. Copy the project and the pointer still resolves.

**`.omabrand/`** holds the assets and the font files. Logos, images, SVG, other `.oma` artwork, nested folders if you grouped them. An optional `.omabrand/brand.json` sets the bank's display name. Without that file, the project folder's name is the display name. Artwork stays inside `.omabrand/`. The name file does not store absolute paths.

A saved document uses the nearest enclosing folder that contains any of these. One of them is enough to mark the folder as the project. If none exist on the walk up, the library starts beside the document. For a document that has never been saved, use **Choose a project** and pick the folder. The folder button switches libraries explicitly when you need a different kit than the one the path found.

Welcome uses the same mark. **Projects → recent** finds directories containing `.omabrand` anywhere under your home directory. A project needs no account. Click the folder card and you are browsing that kit's world, subprojects first, then the documents.

The Fieldwork example in the app is a portable reference of this shape: palettes, SVG marks, the hidden sidecars. Copy those beside a job, or point the sidebar at the example folder, and the tab shows a real kit.

## In the hand

Save the document inside the client folder, or create the kit beside it. In a terminal, hidden names are visible. In a file manager, turn hidden files on before you trust a copy.

```
client/.omacolors
client/.omatype
client/.omabrand/
client/.omabrand/fonts/
client/.omabrand/brand.json
client/poster.oma
```

Open `poster.oma`. The sidebar's project palettes and brand bank are `client/`, because that folder encloses the document and holds the kit. Make a subfolder `client/posters/` and move only the `.oma`. The nearest enclosing kit is still `client/`, as long as `posters/` does not contain its own `.omacolors`, `.omatype`, or `.omabrand/`. Put a kit inside `posters/` and the poster switches to that nearer folder. The walk is the setting.

New unsaved tab: **Choose a project**, pick `client`. The tabs bind to that folder even though the artwork has no path yet. Save the artwork into `client` afterward so the next open finds the same place without being told.

The folder button is the override. Point it at another directory when this session should edit a different kit. You are switching libraries explicitly. You are not changing the hex inside a file you did not mean to open.

Copy the job to a laptop. Copy `.omacolors`, `.omatype`, and the whole `.omabrand/` directory, hidden files included. Open the `.oma` over there. The colors, the roles, and the assets resolve. No sign-in.

## The edge

Discovery refuses a farther folder when a nearer one already has any of the three. The nearest enclosing kit wins. It also refuses to invent a kit from an unsaved document. No path, no walk. **Choose a project** is the step.

The files refuse absolute paths. Font roles are relative to `.omabrand/`. The brand name file does not point at artwork somewhere else on the disk. Move the folder and the references still point inside it.

Show hidden files, copy `.omacolors`, `.omatype`, and `.omabrand/` with the document, and the kit opens where the poster opens.
