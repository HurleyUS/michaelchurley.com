---
id: T096
title: Brand accepted formats
slug: omadesign-0-5-8-brand-accepted-formats
excerpt: A brand bank takes PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and .oma. SVG uses the supported import subset. Save bank copy… clones the bank, its name, and its nested folders to another project.
tags: [omadesign, 0.5.8, brand]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-accepted-formats/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-accepted-formats/og.png
---

## The habit

A brand pack arrives as a zip of everything the last studio exported. PNG for the web logo. JPEG for a photograph you were told not to recompress, and then they recompressed it. WebP because someone was modern. TIFF from print. A BMP from a tool that should not still be in the building. A GIF that is a single frame pretending to be simple. SVG for the mark that has to stay sharp. And, if you are lucky, the actual working file, which in this studio is an `.oma`.

Illustrator will place most of the rasters and then argue with the SVG. Photoshop will open the rasters and rasterize the SVG if you force it. Affinity will take a wide set and still choke on an SVG that used a filter the importer never promised. The hand wants the bank to say yes to the ordinary files and to be plain about SVG. The subset you can import as vectors is the subset the bank will hold as vectors. A complex SVG does not get to look accepted and then place as a surprise.

The other habit is duplication. A new client spinoff needs the same bank. You want a command that clones the whole cupboard to the other project folder. Name included. Nested folders included. Not a zip you rebuild by hand, and not a copy that flattens `logos/print` into a single directory of collisions.

## The constraint

`.omabrand/` is a directory of files, not a package format. The files inside have to be files the placer already knows how to turn into artwork. The studio places PNG, JPEG, WebP, TIFF, BMP, and GIF as images. It imports SVG through the SVG path it already has. It opens `.oma` as native artwork, with shapes, text, masks, and motion, new IDs on place. Adding a format the canvas cannot place would mean tiles you can see and cannot use. The list is the list of things place already understands.

SVG is the uneven one. The app has a supported import subset. Complex SVG features may not carry over. The tile and the place use that same importer. If the mark depends on a structure outside the subset, place the native `.oma` you built it in. The `.oma` is the editable file. The SVG is the interchange file, with that ceiling.

**Save bank copy…** clones to another project folder: assets, nest, display name, typography kit, and font files. Those fonts live under `.omabrand/`. Palettes do not. They are `.omacolors` beside the bank. Export the palette collection on its own when the other project needs the swatches. The native dialog asks for the destination. The source bank stays. The destination is a new copy.

## What landed

Banks accept **PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`**. Add assets of those types and they become tiles. Filter chips line up with the split you actually browse: **Image**, **SVG**, and **omadesign**. The rasters, including GIF, sit under Image. SVG sits under SVG. `.oma` sits under omadesign.

SVG uses the supported import subset. Simple vector marks come in as vectors. Complex features may not carry over. The tile's preview is that import, drawn in the background like any other thumbnail. Place the tile and you place that result, as a copy, at the drop point or at the artboard center on a double-click. If the SVG arrived thinner than the source file, the source file in the bank is still the original SVG bytes you added. The place is the subset. You can still open the SVG in another editor. The bank did not rewrite it into a private form.

`.oma` assets place as editable artwork. Shapes stay shapes. Text stays text. Masks and motion tracks come with the copy. Object IDs are fresh. Ctrl+Z removes the placement in one step. The file in the bank remains the file in the bank.

**··· → Save bank copy…** copies the whole bank to another project folder. The display name comes along. Nested folders come along. Assets come along. The typography kit and its fonts come along, because **Save bank copy…** copies the assets, the typography kit, and the fonts. The destination can load that bank and see the same nest, the same name, and the same roles. Font files sit in the copied `.omabrand/fonts/`. Share those fonts only under their license. The command copies the files.

Palettes stay a separate export. **Export collection…** on the Palettes tab writes `.omacolors`. Put that file in the destination folder if the swatches should travel. Save bank copy will not invent it. A hand copy of a project is the same split: `.omabrand/` for the cupboard and the fonts, `.omacolors` for the colors, `.omatype` for the role names. The role file points at `fonts/…` inside the brand directory. Copy the brand directory without `.omatype` and the fonts may be present while the role names are not. Use **Save bank copy…** when you want the command that knows the kit. Copy by hand when you want all three, with hidden files visible.

## In the hand

**··· → Add assets…** and select the pack.

```
.png  .jpg  .jpeg  .webp  .tif  .tiff  .bmp  .gif  .svg  .oma
```

Watch the tiles. Rasters show as images. SVG shows as the subset the importer could read. An `.oma` shows as a document tile. Drag to place. Double-click to center on the selected artboard, or on the document if no artboard is selected. Ctrl+Z if the copy was a test.

When a second project needs the cupboard:

```
··· → Save bank copy…
```

Choose the other project folder. The dialog is the native one. When it finishes, that folder has its own `.omabrand/`, with the name, the nested folders, the assets, and the fonts. Open a document saved inside that folder, or Load bank and point at it. The tiles match. The roles match, once the typography side of the copied kit is what you load there.

If the colors need to travel too, switch to **Palettes** and **Export collection…** into the destination as `.omacolors`. Load palettes there if the destination already had a book. Conflicting names get suffixes. Save the palette so the merge sticks. The bank copy did not do this step. You do it with your eyes open.

Leave the source project alone. Save bank copy wrote a second cupboard. Add assets never moved the files you picked from the dump. Two copies is the point. One to work from, one that stayed.

## The edge

The bank refuses formats outside PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`. SVG refuses to promise more than the supported import subset. Complex features may not carry over, and the place uses that same subset.

**Save bank copy…** refuses to flatten the nest and refuses to drop the name. It copies the bank, the typography kit, and the fonts to the other project. It does not take `.omacolors` with it. Export the palette collection yourself when the swatches should follow.

Add the SVG you can already import, and use Save bank copy… when the other folder needs the whole cupboard.
