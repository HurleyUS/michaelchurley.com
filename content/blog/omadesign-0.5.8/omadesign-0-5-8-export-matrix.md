---
id: T106
title: Export matrix
slug: omadesign-0-5-8-export-matrix
excerpt: Export writes PNG at 1×, 2×, and 3×, plus JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster. Layers a format cannot keep may become pixel layers, with notes. There is no native .af or .ai writer.
tags: [omadesign, 0.5.8, export]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-matrix/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-matrix/og.png
---

## The habit

Export in Illustrator is a long menu and a longer PDF preset. You pick SVG for the web, PDF/X for the press, and you still save the `.ai` because the export is not the file you will edit tomorrow. Photoshop’s Export As and Save a Copy split the same way: PNG and JPEG for delivery, PSD for the layers. Affinity exports PDF, SVG, PSD, and its own package. The habit is a matrix. You already know which box you need. You also know the lie a matrix tells when it offers a native format it cannot write faithfully. A "save as AI" that is really a PDF with an `.ai` extension has burned people. A "save as AFDESIGN" from a tool that does not know Affinity’s current structure will burn them again.

You want the writers that exist, named, with the scale factors for PNG, and a straight sentence about the formats this app will not emit.

## The constraint

The master is the `.oma`. Export is a second file, produced by a writer compiled into the same binary. There is no Creative Cloud export service and no Affinity runtime hiding behind the menu. If a writer is not in the binary, the format is not in the menu. PSD, PDF, and OpenRaster are in the binary. Illustrator’s private `.ai` structure is not. Affinity’s `.af`, `.afdesign`, `.afphoto`, and `.afpub` structures are not. Interchange with those applications is PDF, SVG, or PSD. They can open those. They can also open the files they themselves wrote, which you still have, because import never overwrote them.

A layer the destination cannot represent has to become something visible. The rule here is a pixel layer, with a conversion note. The note is the same idea as import notes. Effects are not silently dropped. A group that had to rasterize becomes one named layer in the PDF, and the `.oma` still has the objects inside the group. You edit the `.oma`. You re-export when the delivery has to change.

Ctrl+E is the export chord. In the shortcut table it is Export. In Photo, that chord exports the developed image as PNG, because Photo’s job is the developed picture. In the other studios the chord takes the PNG path. The rest of the matrix is there for the deliveries PNG is not. Headless `--convert` writes `.oma`, `.svg`, `.png`, `.jpg` or `.jpeg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Animated SVG and Lottie JSON are export writers beside that list. Layout can also export the selected frame as PNG, SVG, or HTML. HTML is a snapshot of the frame, not a website. It sits next to the matrix. It is not a secret eighth print format.

## What landed

The export set is PNG at 1×, 2×, and 3×, JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster.

PNG is the raster delivery, including the scaled variants when a screen needs 2× or 3×. JPEG is the other flat raster. SVG is the vector delivery. Project-font text in an SVG is drawn as outlines so the appearance survives a machine that does not have the kit. The `.oma` keeps the editable text. Animated SVG and Lottie JSON are the motion deliveries. File → Lottie is how motion comes back in. The JSON is how a Lottie player takes it out.

Layered PSD and PSB export is RGB, 8-bit, with separate layers. Vectors, native text, transformations, and effects the PSD writer cannot keep as live objects are rendered into their individual pixel layers. A supported color overlay can stay editable. Opaque canvas paper exports as a background layer. You can open that PSD in Photoshop and see layers. You edit the master in the `.oma` if the type has to change as type.

PDF export writes pages, paths, raster images with alpha, opacity and blending, and optional-content layer metadata: names, order, visibility, and locks. Text becomes vector outlines. Gradients, masks, effects, and complex compositing render at document resolution into the affected layer or group. Unaffected vector layers stay editable paths. A rendered group becomes one named PDF layer. Hidden layers keep their visibility state. Backdrop-dependent pass-through can force a whole page to render. Every fallback writes a note. Fallback images are bounded: 64 megapixels each, 512 MiB total pixel budget.

OpenRaster export follows the public 0.0.6 layout. Layers, `stack.xml`, a merged preview, and a thumbnail no larger than 256×256. Vector artwork renders per layer. A masked or effected group becomes one pixel layer. That archive is a way back to GIMP and to anything else that reads ORA. There is no `.xcf` writer.

Layers a destination cannot carry may become individual pixel layers. The conversion notes describe those changes. Read them before you call the export the master.

There is no native writer for `.af`, `.afdesign`, `.afphoto`, `.afpub`, or `.ai`. Hand Affinity a PDF, an SVG, or a PSD. Hand Illustrator a PDF or an SVG. Keep the `.oma`. The optional Affinity bridge is an importer. It does not grow an exporter because you installed it.

Layout’s frame export is File → Export frame PNG / SVG / HTML for the selected frame. Use it when the delivery is one screen, not the whole document matrix.

## In the hand

Finish the edit in the `.oma`. Press Ctrl+S.

For a bitmap at the document’s pixel size, press Ctrl+E. That is the PNG export. In Photo, Ctrl+E writes the developed PNG from the photo pipeline, full resolution, with crop and rotation. For a screen that needs a double-resolution asset, use the 2× PNG export. 3× is there for the same reason. JPEG when the channel has to be small and the image has no transparency to keep.

For a logo on the web, export SVG. Open the SVG and confirm project-font words are paths. Edit the words in the `.oma`, then export again.

For a press or for Illustrator, export PDF. Open View → Document conversion notes and read any fallback. The PDF page you rasterized on purpose is still a page. The live vectors that could stay vectors stayed. Send the PDF. Keep the `.oma`.

For Photoshop, export PSD or PSB. You get RGB, 8-bit, layered. Text will be pixels in that file. The note says so. For GIMP, export OpenRaster or PSD. GIMP can open both. It will not receive a `.xcf` from this app.

For motion, export Lottie JSON or animated SVG, matching the player you are handing it to.

Same-file headless conversion is refused. `omadesign --convert poster.oma --output poster.pdf` writes a new path. Do not point `--output` at the `.oma` you still need.

## The edge

There is no native `.af*` writer and no native `.ai` writer. The matrix will not emit an Affinity document or an Illustrator document and call it interchangeable. PDF, SVG, and PSD are the interchange. The `.oma` is the file you reopen tomorrow.

A layer the export format cannot keep becomes pixels, with a note. The writer will not drop the effect and leave you a clean file that lies about it.

Press Ctrl+E for the PNG. Export PDF, SVG, or PSD when that is the file the other application can actually open.
