---
id: T011
title: Five personas one document
slug: omadesign-0-5-8-five-personas-one-document
excerpt: "Design, Layout, Pixel, Photo, and Motion share one Linux binary, one .oma, and one layer stack. You change the tool well, not the file."
tags: [omadesign, 0.5.8, personas]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-five-personas-one-document/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-five-personas-one-document/og.png
---

## The habit

You already switch rooms to finish one piece of work. Illustrator for the mark and the type. Photoshop for the retouch. After Effects for the move. Between them: export a PSD, export a PNG, import, notice the type is outlines, fix it in the first app, export again. Affinity built StudioLink so Designer, Photo, and Publisher can share a document without that bounce. The habit it replaced is the habit Adobe's three icons still teach. The habit it kept is "which app am I in."

You know the failure mode. A linked file goes stale. A color profile shifts. The artboard size rounds off. The animation app cannot see the live text, so somebody outlines it "just for the render" and the outlines become the source. Two weeks later the headline is wrong in the only file anyone can edit.

On Linux the extra failure is the missing app. One of the three is a Flatpak with a portal in the way. One is not built for the distro. You do the job in whichever window actually launched. The file format becomes whatever that window could save.

## The constraint

Omadesign is one native binary. The document is one `.oma`. The layer stack is one stack. Undo is one step on that document, in the tab you have focused. A persona is which tools are in your hand, not which file you converted to.

That constraint forbids a handoff format between drawing and painting. Raster lives on a pixel layer in the same `.oma` as the vectors. Layout frames live in that same document as the poster. Motion keys refer to the artboard you drew. The rest pose stays the drawing. Photo can grade a camera file, and it writes a `.omaphoto` beside the original. **Place in Design** brings an 8-bit developed layer into the document. The `.oma` save does not swallow the RAW, and Design does not rewrite the camera file. The persona boundary is exactly there: Photo's source of truth for the capture stays outside the design file. Everything you constructed lives in the `.oma`.

Five tool wells, one process. No Creative Cloud session between them. No second window required to press `B` after you pressed `T`. Compact windows get a persona picker so the choice still fits. The title bar carries mode tabs with Phosphor icons: the curve, the brush, layout, images, the running figure. Hover text keeps the mode name. You can land the next launch in a remembered mode from **omadesign → Config**, or always start from the welcome screen.

Plugins, cloud, and export stay optional doors. File → Sign in is there when you want a review upload. The personas do not wait on it. PNG, JPEG, SVG, animated SVG, Lottie, PSD, PDF, and OpenRaster are exports. They are not how you talk to yourself between Design and Pixel.

## What landed

The five personas, as the manual tables them, in the 0.5.8 studio:

| Persona | You are… | First tools |
| --- | --- | --- |
| **Design** | a mark, a poster, a layout | Move `V`, Pen `P`, Rectangle `R`, Type `T` |
| **Layout** | a screen, a landing, a dashboard | Frame `F`, Rectangle `R`, Type `T` |
| **Pixel** | painting or retouching | Brush `B`, Eraser `E`, Clone `J`, Wand `W` |
| **Photo** | grading a photograph | Crop `C`, develop sliders, Place in Design |
| **Motion** | animating the artboard | Space play, `K` key, File → Lottie |

Design is the default when you open a vector document or a template. Vector on the welcome screen leads to Design. Raster leads to Pixel. **+ Layout** leads to frames. **+ Photo** opens the photo workspace, a folder, or a file. Motion has no empty-workspace button. You open it when the canvas has something to move.

The layer stack is shared. Eye and lock work per object. A pixel layer is a layer. A frame is in the document. A group moves with its children. Opacity and blend on a vector object live in the transform inspector. Placed images use the layer opacity and blend above the Layers tree. A frame's opacity hits its whole subtree. Pass through on a group decides whether child blends reach the backdrop. None of that is a persona-specific file. You change persona and the stack is still the stack.

This is the model 0.5.8 ships. The five rooms were the product well before this release's welcome polish and Lua plugins. 0.5.8 did not split them into five binaries, and it did not merge them into one tool well with every key live at once. Keys that do not belong to the current persona do not switch tools. `B` paints in Pixel. In Design the first keys are `V`, `P`, `R`, and `T`.

## In the hand

```sh
omadesign
```

Open **+ Vector**, take a template, and land in Design. Press `T` and set a headline. Press `R` and drag a block behind it. You are making the poster in the `.oma`.

Switch to Layout when the same file needs a screen. Press `F` and drag a frame. Draw another frame inside it and it nests. The headline you set in Design is still in the document. You did not export a PDF to "send it to layout."

Switch to Pixel. If there is no pixel layer, add one in the Layers studio. Press `B` and paint. The type stays type. The rectangle stays a rectangle. Paint is pixels on that layer, in this file.

Open Photo from its persona when the job is a capture. Crop with `C`. Move the Light, Color, and Detail controls. **Save settings** writes `.omaphoto` next to the original. **Place in Design** drops the developed 8-bit image into the document as a pixel layer, with undo. The RAW is still the RAW.

Switch to Motion when the poster should move. The timeline sits under the canvas. The drawing you did is the rest pose. Press Space to play. Press `K` to key position, rotation, and scale. **File → Export Lottie…** or **File → Export animated SVG…** when you need a file someone can play. Static PNG, JPEG, and SVG export the rest pose. The clip stays in the `.oma`.

Save once.

```text
Ctrl+S
```

One `.oma`. Reopen it. The layers you painted, the frames you nested, and the keys you set come back with the vectors. Photo's RAW development comes back from the `.omaphoto`, not from inside that save.

## The edge

A persona switch does not fork the document. There is no "export for Pixel" step inside the studio. If you wanted five files, you would export on purpose, from File, to a format you named.

Photo will not hide the camera original inside the `.oma`. Place in Design is an 8-bit layer. Further grade work still belongs to the RAW and the settings file beside it. Design save does not rewrite that camera file. That boundary is the one the single document is not allowed to blur.

Motion will not rewrite the rest pose to store an animation. The keys live in the clip. Delete the animation and the drawing remains. Lottie export errors clearly when the composition has pixel layers, layer masks, or effects it cannot keep. Animated SVG is the export that retains masks and effects. The persona will not silently drop them to make a file.

Empty Motion is not a welcome button. Draw first. Then animate the artboard you already have.

Switch persona on the open `.oma`. Press the first key for that room. The file under `Ctrl+S` is still the same file.
