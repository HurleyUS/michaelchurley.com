---
id: T106
title: Export matrix
slug: omadesign-0-5-8-export-matrix
excerpt: Export writes PNG at 1×, 2×, and 3×, plus JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster. Layers a format cannot keep may become pixel layers, with notes. There is no native .af or .ai writer.
publishedAt: 2026-09-07T01:41:01Z
tags: [omadesign, 0.0.2-alpha, export]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-matrix/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-matrix/og.png
---

## The habit

Export in Illustrator is a long menu and an even longer PDF preset. You pick SVG for the web and PDF/X for the press, and you still save the `.ai`, because the export isn't the file you will edit tomorrow. Photoshop's Export As and Save a Copy split the same way: PNG and JPEG for delivery, PSD for the layers. Affinity exports PDF, SVG, PSD, and its own package. So export is a grid of formats, and you already know which one you need. You also know what happens when that grid offers a native format the app can't write faithfully. A "save as AI" that is really a PDF with an `.ai` extension has burned people, and a "save as AFDESIGN" from a tool that doesn't know Affinity's current structure will burn them again.

You want the writers that actually exist, named clearly, with the scale factors for PNG, and a plain statement of the formats this app won't write.

## The constraint

The master is the `.oma`. Export produces a second file using a writer compiled into the same binary. No Creative Cloud export service or Affinity runtime runs behind the menu, so if a writer isn't in the binary, the format isn't in the menu. PSD, PDF, and OpenRaster writers are in the binary. Illustrator's private `.ai` structure isn't, and neither are Affinity's `.af`, `.afdesign`, `.afphoto`, and `.afpub` structures. Interchange with those applications goes through PDF, SVG, or PSD, which they can open. They can also open the files they wrote themselves, which you still have, because import never overwrote them.

A layer the destination can't represent has to become something visible. The rule here is that it becomes a pixel layer with a conversion note, the same idea as import notes. Effects are never silently dropped. A group that had to be rasterized becomes one named layer in the PDF, and the `.oma` still has the objects inside the group. You edit the `.oma` and re-export when the delivery needs to change.

Ctrl+E is the export chord, listed as Export in the shortcut table. In Photo it exports the developed image as PNG, because Photo's job is the developed picture. In the other studios it takes the PNG path too, and the rest of the formats cover deliveries PNG can't. Headless `--convert` writes `.oma`, `.svg`, `.png`, `.jpg` or `.jpeg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Animated SVG and Lottie JSON are separate export writers. Layout can also export the selected frame as PNG, SVG, or HTML. That HTML is a snapshot of the frame for viewing, and the app doesn't build websites. It is a separate command and doesn't count as another print format.

## What landed

The export set is PNG at 1×, 2×, and 3×, JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster.

PNG is the raster delivery, including the scaled versions for screens that need 2× or 3×. JPEG is the other flat raster format. SVG is the vector delivery. Project-font text in an SVG is drawn as outlines so it looks right on a machine without the font kit, and the `.oma` keeps the editable text. Animated SVG and Lottie JSON are the motion deliveries. File > Lottie brings motion in, and the JSON export takes it out to a Lottie player.

Layered PSD and PSB export is RGB, 8-bit, with separate layers. Vectors, native text, transformations, and effects the PSD writer can't keep as live objects are rendered into their own pixel layers. A supported color overlay can stay editable. Opaque canvas paper exports as a background layer. You can open the PSD in Photoshop and see the layers. If the type has to change as type, edit the master `.oma`.

PDF export writes pages, paths, raster images with alpha, opacity and blending, and optional-content layer metadata: names, order, visibility, and locks. Text becomes vector outlines. Gradients, masks, effects, and complex compositing render at document resolution into the affected layer or group, while unaffected vector layers stay editable paths. A rendered group becomes one named PDF layer, and hidden layers keep their visibility state. Pass-through blending that depends on the backdrop can force a whole page to render. Every fallback writes a note. Fallback images are limited to 64 megapixels each and a 512 MiB total pixel budget.

OpenRaster export follows the public 0.0.6 layout, with layers, `stack.xml`, a merged preview, and a thumbnail no larger than 256×256. Vector artwork renders per layer, and a group with a mask or effect becomes one pixel layer. That archive gives you a way back to GIMP and to anything else that reads ORA. There is no `.xcf` writer.

Layers a destination can't carry may become individual pixel layers, and the conversion notes describe those changes. Read them before you treat an export as the master.

There is no native writer for `.af`, `.afdesign`, `.afphoto`, `.afpub`, or `.ai`. Give Affinity a PDF, an SVG, or a PSD, and give Illustrator a PDF or an SVG. Keep the `.oma`. The optional Affinity bridge only imports, and installing it doesn't add an exporter.

For one screen instead of the whole document, Layout's frame export is File > Export frame PNG / SVG / HTML for the selected frame.

## In the hand

Finish the edit in the `.oma` and press Ctrl+S.

For a bitmap at the document's pixel size, press Ctrl+E, which is the PNG export. In Photo, Ctrl+E writes the developed PNG from the photo pipeline at full resolution, with crop and rotation. For a screen that needs a double-resolution asset, use the 2× PNG export, and 3× exists for the same reason. Use JPEG when the file has to be small and the image has no transparency to keep.

For a logo on the web, export SVG. Open the SVG and confirm that project-font words are paths. To change the words, edit them in the `.oma` and export again.

For a press or for Illustrator, export PDF. Open View > Document conversion notes and read any fallback notes. A page you rasterized on purpose is still a page, and the vectors that could stay vectors did. Send the PDF and keep the `.oma`.

For Photoshop, export PSD or PSB. You get a layered RGB, 8-bit file, and text will be pixels in it, as the note says. For GIMP, export OpenRaster or PSD. GIMP can open both, but it won't get a `.xcf` from this app.

For motion, export Lottie JSON or animated SVG, depending on the player you are handing it to.

Headless conversion refuses to write onto its own input. `omadesign --convert poster.oma --output poster.pdf` writes a new path. Don't point `--output` at an `.oma` you still need.

## The edge

There is no native `.af*` writer and no native `.ai` writer, so the export menu never produces an Affinity or Illustrator document and calls it compatible. PDF, SVG, and PSD are the interchange formats, and the `.oma` is the file you reopen tomorrow.

A layer the export format can't keep becomes pixels, with a note. The writer never drops an effect and hands you a clean-looking file that hides the loss.
