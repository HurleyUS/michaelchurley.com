---
id: T138
title: Vectors pixels photo motion
slug: omadesign-0-5-8-vectors-pixels-photo-motion
excerpt: Design, Pixel, Photo, and Motion share one layer stack in a .oma. Layout frames live in that file when the brief is a screen. The RAW stays beside it until you place.
tags: [omadesign, 0.5.8, documents]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-vectors-pixels-photo-motion/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-vectors-pixels-photo-motion/og.png
---

## The habit

The Adobe bounce is a file format bounce. Illustrator saves AI. Photoshop saves PSD. After Effects saves a project that references footage. You keep the three in a folder and you pray the versions match. A change to the type means re-export, relink, and a guess about whether the effect that looked right in one app survived. Affinity narrows that with documents that can carry vectors and pixels, and with StudioLink when you need the other toolset. You still feel the seam when the timeline is a different surface from the page.

You want one layer stack. Vectors and pixel layers in the same list. A frame around them when the job is a UI. A timeline under the same canvas when something moves. A photograph graded without a one-way bake, then placed when the grade is the one you mean.

## The constraint

The native file is `.oma`. JSON, rasters packed as PNG, motion clip included. One undo history for that document. Personas switch tools. They do not switch files. If Photo wrote the RAW into the `.oma`, every save of a poster would duplicate a sensor file, and a grade would be stuck inside one document. The constraint goes the other way. The camera file stays the camera file. `.omaphoto` stores the develop settings beside it. **Place in Design** copies an 8-bit developed image into the layer stack, with one Undo, and you keep the RAW and the sidecar for the next pass.

Motion stores keys in the same `.oma` and treats the artboard as the rest pose. It does not bake the animation into the vectors. Static export stays the rest pose. The clip remains available the next time you open the file. Layout frames, auto-layout, and constraints are objects in that same tree, format 6 when the document uses the features that need it. Older builds cannot silently strip those features. Other documents stay on format 5. This build reads formats 1 through 6.

## What landed

Design draws the vectors. Move, pen, type, shapes, gradients, effects, pathfinder, groups, compounds. Pixel paints on a pixel layer in that document: brush, eraser, clone, heal, smudge, masks, and the raster filters that apply pixels with their own one-step undo. A marquee limits a filter. Cancel in the filter dialog leaves the layer alone. Applied pixels save in the `.oma`.

The layer list shows both. Eye and lock work per object. Groups expand. Pass through on a group decides whether child blend modes see the backdrop. Opacity and blend live on the object and on the layer. Placed images use the layer's opacity and blend. You reorder with `Ctrl+[`, `Ctrl+]`, and the Shift variants for front and back. One stack. One tab.

Layout adds frames to that stack. `F` drags a frame. A frame drawn inside a frame nests. **Object → Wrap selection in frame**. Stack children, gap, padding, constraints. **File → Export frame** writes PNG, SVG, or HTML for the selected frame. Comments pin to the canvas. The poster and the screen mock live together. You do not maintain a second file for the UI unless you want one.

Photo opens DNG, CR2, CR3, NEF, ARW, RAF, ORF, RW2, and the rest of the recognized extensions, through the decoder built into the binary. **Save settings** writes `name.NEF.omaphoto` next to the original. The original bytes stay. **Place in Design** adds the developed 8-bit layer to the document you are building. Export JPEG, PNG, or TIFF from Photo when you need a delivery file. RAW PNG and TIFF keep 16-bit channels. The `.oma` you save from Design does not contain the RAW or the sidecar. Keep the pair on disk with matching names.

Motion opens on that same artboard. Tracks are X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. Presets become keys. `K` keys the selection. Space plays. Delete peels a key, then the animation, then the object, in that order. The drawing survives the animation's removal. Lottie export wants vectors. Pixel layers, masks, and effects produce an error from that exporter. Animated SVG keeps them. Import Lottie brings a basic shape subset back onto the timeline. The editable master is the `.oma`.

Document tabs sit above the canvas. Several `.oma` files can be open. Persona is per session of work on the document in front of you. `Ctrl+S` writes the tab you are in.

## In the hand

Start in Design. `R` a board, `T` a headline, `P` a rule. Add a pixel layer. Switch to Pixel. Paint a shadow by hand, or run a raster filter on that layer. Look at the Layers studio. The type, the rule, and the pixels are rows in one list.

Switch to Layout. Press `F` and draw a phone frame. Drag the headline's layer onto the frame if you want it nested. Turn on **Stack children** if the frame should pack. The vectors did not leave the file.

Switch to Photo from **+ Photo** or the persona. Open a CR3 or a DNG. Move exposure. **Save settings**. You now have the camera file and a small `.omaphoto`. **Place in Design**. Choose the poster tab's world. The developed image is a pixel layer. `Ctrl+Z` removes the placement. The sidecar is still next to the RAW.

Switch to Motion on the poster. Select the headline. Choose **Fade in** or press `K` and drag. Space plays. `Ctrl+S`. Quit. Open the `.oma` again. The type is editable. The pixels are there. The keys are there. Open the RAW again by opening the camera file or the sidecar. The grade is there, because it never lived only inside the poster.

**View → Document conversion notes** is for files you imported from somewhere else. A native document you built this way does not need a conversion story. The notes matter when the layer arrived as PSD or PDF. The `.oma` is the file you keep either way.

## The edge

The `.oma` holds the layer stack, the frames, the placed pixels, and the motion clip. It does not hold the RAW source or the Photo settings. Place is the door from a grade into the poster, and it is 8-bit. Lottie will not carry pixel layers. Static PNG and SVG export the rest pose, not the timeline. One stack does not mean one undo across Photo and Design. Photo has its own history until the pixels are placed.

Save the `.oma`. Leave the `.omaphoto` next to the camera file. Press Space in Motion when you want the same artboard to move.
