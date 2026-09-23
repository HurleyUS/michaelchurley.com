---
id: T057
title: Export frame
slug: omadesign-0-5-8-export-frame
excerpt: File → Export frame PNG, SVG, or HTML writes the selected frame and its children. The rest of the artboard stays in the .oma.
tags: [omadesign, 0.5.8, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-frame/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-frame/og.png
---

## The habit

You built the screen beside the brand board. The artboard is full of notes, alternate icons, a type ramp, two phone frames. The developer, or the slide, needs one of those phones. In Figma you select the frame and export that frame. The rest of the file stays put. You do not crop a PNG of the whole canvas in a second app and hope you hit the bounds.

Illustrator's artboard export is the print version of the same idea. Export this board, not every board. Photoshop's "export selection" is the raster version. The selection is the boundary. Siblings outside it are someone else's problem, later.

HTML, when you have used it, is a snapshot you can open in a browser to look at structure. It is not the production site. You still have the source file. You still edit the source file. The HTML is a picture of one frame, made of boxes, that you can hand to someone who will not open the studio.

## The constraint

The `.oma` is the master. Exporting a frame has to write a different file: a PNG, an SVG, or an HTML document. It must not flatten the project you have open, and it must not delete the siblings that live next to the frame on the canvas. The boundary is the selected frame plus its descendants. Unrelated layers stay out. Sibling objects that are not inside that frame stay out. The frame's own name becomes the name of the exported document. Its bounds become the exported size. Coordinates shift so the frame's top left is the origin of that new file.

That boundary is also a strip list. Guides are studio rails. They are cleared from the exported document. Comments pinned on the canvas are review marks. They are cleared too. A cloud link on the project is not copied into the snapshot. The PNG, the SVG, and the HTML are the frame's picture and structure. The `.oma` you save afterward still has the guides, the comments, the siblings, and the cloud link if you had pushed one.

The command refuses to guess. If no frame is selected, the status line says "Select a frame to export" and the menu items stay disabled. If the frame's width or height is not a positive finite number, the export fails with "Frame dimensions must be finite and positive." A broken box does not become a one-pixel mystery file without telling you.

HTML from this command is a snapshot. The manual lists it beside PNG and SVG: File → Export frame PNG / SVG / HTML. It writes a page you can open. It leaves the `.oma` as the file you keep editing. You look at the HTML. You edit the frame in the studio.

PNG uses the same Scale row as the rest of the File export menu: 1×, 2×, or 3×. SVG and HTML do not multiply by that scale. They write the frame's vector and box structure. The file dialog is the native one. You pick the destination. The status line reports "exported" plus the path, or "write failed" / "export failed" with the reason. The open document's undo stack does not gain a step for a successful export, because the `.oma` did not change.

## What landed

File → Export frame PNG…, Export frame SVG…, and Export frame HTML… sit under a Layout frame label in the File menu, below the document-wide exporters. They enable when a frame is selected. The inspector repeats them when the selection is a frame: a section titled Export frame, with buttons PNG, SVG, and HTML. Either path calls the same three commands.

The export collects the frame and every descendant. Ancestor layers that are required to hold that tree come along, filtered down to those shapes. Other layers are dropped. The frame is un-parented in the copy so the snapshot is a root. Image fills that the frame's tree actually references can come along. Layout tokens are copied only if something in the export references them. You do not get the project's entire token list in a button export.

The snapshot is transparent, sized to the frame's bounds, with a single artboard of that size. Then the writer for the format you picked runs on that temporary document. PNG goes through the raster exporter at the current 1×, 2×, or 3× scale. SVG goes through the frame SVG writer. HTML goes through the layout HTML writer, which turns the stack, the constraints, and the boxes into a page you can open.

Guides that were ruling the screen are not in the snapshot. Comment pins are not in the snapshot. The rest of the artboard is not in the snapshot. Switch back to the canvas. All of that is still on the canvas. Save the `.oma` when you want the master. The export is already on disk as its own file.

Document export is still there for the whole tab: PNG, JPEG, SVG, animated SVG, Lottie, PSD, PSB, PDF, OpenRaster. Those commands look at the document. The frame commands look at the selection. Use the frame commands when the phone is the deliverable and the scratch space around it is not.

A photograph has to be an image fill or a pixel layer inside the frame's tree before it will export with the frame. A photo on another artboard stays behind. Outside the frame means outside the file.

## In the hand

Select the screen frame. Click its name in the Layers studio if the click on the canvas keeps hitting a child. The inspector shows Export frame once the selection is the frame itself.

Set Scale in the File menu if the PNG should be 2× or 3× for a sharp slide. Leave it at 1× for a 1:1 bitmap. Scale does not affect the SVG or the HTML.

```
File → Export frame PNG…
File → Export frame SVG…
File → Export frame HTML…
```

Pick a folder in the native dialog. The status line names the file you wrote. Open the PNG. You see the frame. You do not see the type ramp that was sitting 400 pixels to the left. Open the SVG in a browser or back in the studio through File → Open. You get that frame's artwork at its bounds. Open the HTML. You get a snapshot of the boxes. You do not get a project to keep designing in.

Return to Omadesign. The `.oma` tab is untouched. Guides are still there. The other phone is still there. A successful export is not an undo step. Delete the PNG if the scale was wrong, change Scale, export again.

Export with no frame selected and the items are gray, or the status line tells you to select a frame. Select a rectangle that is not a frame and the frame exporters stay off. Object → Wrap selection in frame if that rectangle should have been a frame. Then export.

Name the frame before you export if the file name should match the screen. The snapshot takes the frame's name. Rename in the transform name field, then run the export.

## The edge

Frame export refuses every object that is not the selected frame or a descendant of it. Siblings, other artboards, guides, and canvas comments stay in the `.oma` and stay out of the PNG, the SVG, and the HTML.

It also refuses to turn that HTML into the master. The HTML is a snapshot of one frame. The file you reopen tomorrow, the file with the stacks, the pins, the type, and the rest of the board, is the `.oma`. Select the frame, run one of the three commands, and leave the project open.
