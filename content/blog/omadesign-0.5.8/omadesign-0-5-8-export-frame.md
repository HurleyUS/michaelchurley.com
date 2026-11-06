---
id: T057
title: Export frame
slug: omadesign-0-5-8-export-frame
excerpt: File → Export frame PNG, SVG, or HTML writes the selected frame and its children. The rest of the artboard stays in the .oma.
publishedAt: 2026-09-15T23:37:15Z
tags: [omadesign, 0.5.0, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-frame/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-frame/og.png
---

## The habit

You built the screen beside the brand board. The artboard is full of notes, alternate icons, a type ramp, and two phone frames, and the developer, or the slide, needs just one of those phones. In Figma you select the frame and export it, and the rest of the file stays put. You don't crop a PNG of the whole canvas in a second app and hope you hit the bounds.

Illustrator's artboard export is the print version of the same idea: export this board and skip the others. Photoshop's export selection is the raster version, where the selection is the boundary and anything outside it is ignored.

If you have used HTML export, you know it as a snapshot you open in a browser to look at structure. The production site is built separately, and you still edit the source file. The HTML is a picture of one frame, made of boxes, that you can hand to someone who won't open the studio.

## The constraint

The `.oma` is the master. Exporting a frame writes a different file, a PNG, an SVG, or an HTML document, and must never flatten the project you have open or delete the siblings next to the frame on the canvas. The boundary is the selected frame plus its descendants. Unrelated layers and sibling objects outside that frame are left out. The frame's name becomes the exported document's name, its bounds become the exported size, and coordinates shift so the frame's top-left corner is the origin of the new file.

Some things are stripped along the way. Guides are studio rails, so they are cleared from the exported document. Comments pinned on the canvas are review marks, so they are cleared too. A cloud link on the project isn't copied into the snapshot. The PNG, SVG, and HTML contain only the frame's picture and structure. The `.oma` you save afterward still has the guides, the comments, the siblings, and the cloud link if you pushed one.

The command doesn't guess. If no frame is selected, the status line says "Select a frame to export" and the menu items stay disabled. If the frame's width or height isn't a positive finite number, the export fails with "Frame dimensions must be finite and positive." A broken box never silently becomes a one-pixel file.

HTML from this command is a snapshot. The manual lists it beside PNG and SVG as File > Export frame PNG / SVG / HTML. It writes a page you can open and leaves the `.oma` as the file you keep editing. You look at the HTML and edit the frame in the studio.

PNG uses the same Scale setting as the rest of the File export menu: 1×, 2×, or 3×. SVG and HTML ignore that scale and write the frame's vector and box structure. The file dialog is the native one, and you pick the destination. The status line reports "exported" with the path, or "write failed" or "export failed" with the reason. A successful export adds no step to the document's undo stack, because the `.oma` didn't change.

## What landed

File > Export frame PNG…, Export frame SVG…, and Export frame HTML… sit under a Layout frame label in the File menu, below the document-wide exporters. They are enabled when a frame is selected. When the selection is a frame, the inspector repeats them in a section titled Export frame, with PNG, SVG, and HTML buttons. Both routes run the same three commands.

The export collects the frame and every descendant. Ancestor layers needed to hold that tree come along, filtered down to those shapes, and other layers are dropped. In the copy, the frame is detached from its parent so the snapshot has it as the root. Image fills that the frame's tree actually uses can come along. Layout tokens are copied only if something in the export uses them, so a frame export never carries the project's entire token list.

The snapshot has a transparent background, is sized to the frame's bounds, and has a single artboard of that size. The writer for the format you picked then runs on that temporary document. PNG goes through the raster exporter at the current 1×, 2×, or 3× scale. SVG goes through the frame SVG writer. HTML goes through the layout HTML writer, which turns the stacks, constraints, and boxes into a page you can open.

Guides, comment pins, and the rest of the artboard are left out of the snapshot. Switch back to the canvas and all of them are still there. Save the `.oma` when you want to update the master. The export is already on disk as its own file.

Document export still covers the whole tab: PNG, JPEG, SVG, animated SVG, Lottie, PSD, PSB, PDF, and OpenRaster. Those commands work on the document, while the frame commands work on the selection. Use the frame commands when the phone is the deliverable and the scratch space around it isn't.

A photograph only exports with the frame if it is an image fill or a pixel layer inside the frame's tree. A photo on another artboard stays behind, because anything outside the frame is outside the file.

## In the hand

Select the screen frame. If clicking on the canvas keeps selecting a child, click the frame's name in the Layers studio instead. The inspector shows Export frame once the frame itself is selected.

If the PNG should be 2× or 3× for a sharp slide, set Scale in the File menu. Leave it at 1× for a 1:1 bitmap. Scale doesn't affect the SVG or the HTML.

```
File → Export frame PNG…
File → Export frame SVG…
File → Export frame HTML…
```

Pick a folder in the native dialog, and the status line names the file you wrote. Open the PNG and you see the frame, without the type ramp that was sitting 400 pixels to the left. Open the SVG in a browser, or back in the studio with File > Open, and you get that frame's artwork at its bounds. Open the HTML and you get a snapshot of the boxes, which is for viewing and isn't a project you can keep designing in.

Return to Omadesign. The `.oma` tab is untouched, with the guides and the other phone still there, and the export didn't add an undo step. If the scale was wrong, delete the PNG, change Scale, and export again.

With no frame selected, the items are grayed out or the status line tells you to select a frame. If you select a rectangle that isn't a frame, the frame exporters stay off. Use Object > Wrap selection in frame if that rectangle should have been a frame, then export.

If the file name should match the screen, name the frame before you export, because the snapshot takes the frame's name. Rename it in the transform name field, then run the export.

## The edge

Frame export leaves out every object that isn't the selected frame or one of its descendants. Siblings, other artboards, guides, and canvas comments stay in the `.oma` and out of the PNG, SVG, and HTML.

The HTML is only a snapshot of one frame. The file you reopen tomorrow, with the stacks, pins, type, and the rest of the board, is the `.oma`.
