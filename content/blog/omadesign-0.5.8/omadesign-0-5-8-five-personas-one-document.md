---
id: T011
title: Five personas one document
slug: omadesign-0-5-8-five-personas-one-document
excerpt: "Design, Layout, Pixel, Photo, and Motion share one Linux binary, one .oma, and one layer stack. You change the tool well, not the file."
publishedAt: 2026-09-15T23:33:15Z
tags: [omadesign, 0.5.8, personas, design, layout, pixel, photo, motion]
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

## Design persona tools

### The habit

Illustrator's left toolbar is a column you can hide and relearn after every reinstall. The keys underneath it are the part your hand kept. `V` selects. `P` draws a path. Illustrator's rectangle key is `M`. The manual here is explicit: Rectangle is `R`. `T` is type in all of them. Affinity Designer uses the same cluster, with the Move tool as the way back to a finished pen path.

You know the bounce those keys sit inside. Draw in Illustrator. Jump to Photoshop to try a texture. Jump back because the type was still live over there. The keys are familiar. The file boundary is not. Every trip risks an outline, a rasterized headline, a missing font dialog.

The first minute in Design should be those four keys and nothing else asking for attention. Move, pen, rectangle, type. A mark. A poster. A layout that is still vectors. The rest of the well can wait until the thing exists.

### The constraint

One binary, so Design is not an Illustrator process beside a Photoshop process. One `.oma`, so the rectangle and the paragraph are objects in the file you will still have open when you switch to Pixel or Motion. One layer stack. One undo step per change. No Creative Cloud session between `T` and the glyph.

The persona is a filter on the keyboard. A tool key switches tools only when that tool belongs to the persona you are in. Design's first row is Move, Pen, Rectangle, and Type. Brush, eraser, clone, and wand belong to Pixel. Frame's key belongs to Layout. Crop belongs to Photo. If `B` did something destructive in a vector poster "because the key is global," the persona split would be a costume. The shortcut table refuses that. The key returns without a tool change when the tool is not in this persona.

Live objects are the other half. Type stays type under Move and under free transform. A rectangle keeps its parameters, including the corner radius you set with the corner dots, until you actually edit it as a path. The first tools have to support that. A Design persona that expanded everything on first click would be a different app. Group is `Ctrl+G`. Ungroup is `Ctrl+Shift+G`. Compound is `Ctrl+8`. Those are commands, not the first tools. They stay available. They are not what `V`, `P`, `R`, and `T` mean.

Chrome follows the desktop. The tool you are in shows up in the Shortcut HUD at the bottom, upper row for the tool, lower row for letter keys. You do not have to read a manual to see that `P` is the pen once you have pressed it. `F1` is the full list when you want it.

### What landed

Design is the default persona for a vector document and for the 52 templates. The manual's line for it: you are making a mark, a poster, or a layout. The first tools are Move `V`, Pen `P`, Rectangle `R`, and Type `T`. That is the 0.5.8 behavior because that is the manual's behavior in this release. The welcome polish in 0.5.8 did not rename these keys.

**Move** `V`. Click to select. Drag to move. Eight handles scale. The handle above the box rotates. Shift-click adds or removes an object. Shift-drag a selection box to add. Dragging a selected object moves the whole selection. Shift constrains that move. Alt-drag clones. Corner dots round a rectangle.

**Pen** `P`. Click a corner. Click-drag a smooth point. A twitch under 3 pixels stays a corner. Shift constrains to 45 degrees. Alt-drag breaks handle symmetry. The cubic draws as you go. Enter or a double-click finishes an open path. Esc drops the last point, then cancels. Click the first point to close. Click an open endpoint to continue it, or to join it to the path you are drawing.

**Rectangle** `R`. Drag. Shift constrains. Corner radius lives in Transform, and on the corner dots while you are in Move. Ellipse is `O`, polygon `Y`, star `S`, line `L`, when you need them. They are the same drag-and-constrain family. They are not the first four.

**Type** `T`. Click to place. Type on the canvas. The first keystroke replaces the "Type" placeholder. Enter is a new line. Esc or a click away finishes. Double-click existing type to edit. Character studio: font, size, tracking, leading, OpenType for kerning, ligatures, tabular figures, and small caps.

Around them, still in Design: Node `A`, Pencil `N`, Gradient `G`, Eyedropper `I`, Artboard `Shift+O`, Zoom `Z`, Hand `H` or Space. Free transform is `Ctrl+T`. The first four are the priority.

### In the hand

Open a blank vector document or one of the 52. Design is already the persona.

```text
V
```

You are in Move. If something is selected, click empty canvas to let go, or press the key and then click the object you want.

```text
R
```

Drag. Hold Shift if the poster wants a square. Let go. The rectangle is a rectangle. Drag a corner dot if it needs a radius. The object stays a rectangle with a radius, not a pile of paths.

```text
P
```

Click, click, click for a polygon of corners. Click the first point to close. Or click-drag to pull handles, then Enter to leave the path open. Shift while you place a point locks 45 degrees. Esc once removes the last point. Esc again cancels the path in progress.

```text
T
```

Click the page. Type the headline. The placeholder word disappears on the first character. Enter for a second line. Click away. Double-click the text later when the wording changes. The font list includes what the machine has. Project fonts from the brand library show up in that picker when the document is attached to a project.

```text
V
```

Move the headline. Shift constrains the drag to horizontal, vertical, or 45 degrees. Alt-drag clones it. Eight handles scale the frame of the object. The handle above the box rotates it. `Ctrl+Z` undoes one of those steps. `Ctrl+Shift+Z` redoes.

Look at the bottom of the window. The Shortcut HUD's upper row follows the tool you just chose. Hold Shift and the row shows the constrained gesture. Release and the normal hints return. `Ctrl+/` hides the strip if you want the canvas edge to yourself.

Save.

```text
Ctrl+S
```

The file is an `.oma`. The type is still type inside it.

### The edge

These four keys do not open another application, and they do not export a handoff. Pixel is a persona switch away, on a pixel layer you add when the document is still vector-only. `B` does not flatten the poster from inside Design. The key does not switch to the brush while this persona is active.

Move's corner dots do not run **Object → Break path**. A rectangle with a radius stays a parameterized rectangle. The first time you edit that shape with the node tool, it converts to a path. That conversion is the node tool's boundary, not `R` and not `V`.

`T` does not outline the glyphs. Live text stays editable. **Object → Convert to path** is an explicit command, for when you want letter outlines and holes and are willing to give up the text object. Undo restores the text. Free transform, `Ctrl+T`, also keeps the text live. You do not fall into an expand by scaling with Move.

Group, ungroup, and compound are `Ctrl+G`, `Ctrl+Shift+G`, and `Ctrl+8`. They are not hidden under `V`. Use them when you mean them.

Press `V`, then `P`, then `R`, then `T`. You are in Design, in the `.oma`, with the objects still editable.

## Layout persona tools

### The habit

A UI mockup usually means a second app. Sketch, Figma, Adobe XD, or a page in Illustrator that you promised would stay "the source" and then redrew in the screen tool. Affinity's answer is Publisher or Designer with artboards, plus StudioLink when Photo has to retouch a picture on the same spread. The hand knows the drill. Draw a frame. Put a rectangle in it. Put type in it. Pin the children so a resize of the frame does not leave the button behind. Export a PNG for a deck, or SVG for a developer who asked nicely.

The keys are simple when the file is the same file. Frame. Rectangle. Type. Everything else is a property of the frame you just drew.

### The constraint

One `.oma`, one layer stack, one binary. A screen, a landing page, and a dashboard have to be frames in the document that already holds the mark. Otherwise Layout is a second product with a handoff, and the persona model is a label. There is no XD file to round-trip. There is no Figma URL required to see the button.

The first tools stay few. Frame `F`, Rectangle `R`, Type `T`. Move, pen, and the rest of Design are still in the studio, on the Design persona, over the same objects. Layout's keyboard leads with the frame so a mockup starts as structure. `R` and `T` match Design on purpose. You should not learn a new rectangle key because you are drawing a screen.

Frames have to nest, stack, and pin, or they are only rectangles with a different name. A child frame drawn inside a parent nests. **Stack children** packs the children in layer order, vertical or horizontal, with gap, padding, and stretch. Constraints pin a child to min, max, both edges, center, or scale when the parent resizes. Those are inspector states on the frame, not a plugin and not a second document.

Export of a frame is PNG, SVG, or HTML for the frame you selected. It is an export. It does not replace the `.oma`. Cloud review is opt-in and separate: File → Sign in, then a push if you want a versioned design and a flat snapshot. You can comment on the canvas without that account. Write a note, pin it, resolve it. The inspector shows open counts on the frame.

Undo stays one step. Nesting a frame, toggling stack, and moving a child are ordinary edits. Templates open unsaved, beside any tab you already had.

### What landed

Layout is the persona for a screen, a landing, or a dashboard. First tools: Frame `F`, Rectangle `R`, Type `T`. This is the manual's table, as it stands in 0.5.8. The release did not invent Layout, and it did not move these keys.

**Frame** `F`. Drag a frame. Draw another frame inside it and it nests. **Object → Wrap selection in frame** puts the current selection in a frame when you drew the contents first. Image placeholders live in the inspector.

**Rectangle** `R` and **Type** `T` behave as they do in Design. Drag a rectangle. Shift constrains. Click for type, replace the "Type" placeholder on the first keystroke, Enter for a new line, Esc or click away to finish. Double-click to edit again. Character studio is the same studio: font, size, tracking, leading, OpenType.

**Auto-layout.** Select a frame and turn on **Stack children**. Choose vertical or horizontal. Set gap, padding, and stretch. Children pack in layer order. Reorder a layer and the stack follows. `Ctrl+[` and `Ctrl+]` are the reorder chords when a layer row is selected. Shift with those chords sends the row to the back or front of its group.

**Constraints.** A child of a frame can pin to min, max, both edges, center, or scale. Resize the parent and the pin is the behavior you set, not a fresh manual layout.

**Export.** **File → Export frame PNG / SVG / HTML** writes the selected frame. The `.oma` remains the editable file.

**Templates.** **+ Layout** on the welcome screen opens Fieldwork (a responsive prototype), a mobile screen, a landing hero, a dashboard, and a card stack. The same starters live under **File → Template library → Layout starters**. The Layout file icon on welcome is the blank size chooser.

**Comments.** Write a note, pin it on the canvas, resolve it. Open counts show on the frame in the inspector.

Photo and Layout can open from the start screen without creating an artboard. A saved artboard-less Layout document keeps that state when you reopen it.

### In the hand

```sh
omadesign
```

Click **+ Layout**. The sheet stays at the width it opened. Choose a mobile screen, a landing hero, a dashboard, a card stack, or Fieldwork. **Use this template**, or double-click. The document is unsaved. Layout is the persona.

```text
F
```

Drag a frame inside the screen. Drag a second frame inside the first. It nests. In the inspector, turn on **Stack children**. Set a gap and padding. Drag the parent's edge. The children follow the stack.

```text
R
```

Drag a rectangle inside the frame for a button shape. Shift if it should be square.

```text
T
```

Click and type the button label. Click away. Select the type object and pin it with constraints if it should stay centered when the button frame changes width. The pin options are min, max, both edges, center, or scale.

Select the screen frame. **File → Export frame PNG**, or SVG, or HTML, for a snapshot someone can open without the studio. The `.oma` tab is still open. `Ctrl+S` writes the real file.

Drop a comment on the frame if a note belongs on the canvas. Resolve it when the note is done. The inspector's count is the list you did not keep in a chat window.

Need the mark from the poster in this same file? It is already on the layer stack if you drew it here. If it lives in another `.oma`, open that file in a tab with `Ctrl+O` and copy across. Paste lands objects at their original positions. You are not exporting a PDF to move a logo between two tabs of the same app.

Switch to Design, press `P`, and draw a mark beside the frames. Switch back to Layout. The mark is in the document. `F` still makes frames. The persona changed the first keys, not the file.

### The edge

Layout does not require a cloud account to draw, stack, constrain, comment, or export a frame. **File → Sign in** opens a browser approval when you want it. Push project and review export upload a versioned design and a flat snapshot. Cloud projects pull a shared design into a new document. Review annotations load cloud feedback. Publishing and competition entry are separate owner actions. None of those run because you pressed `F`.

Frame export does not convert the `.oma` into HTML as the source of truth. PNG, SVG, and HTML are outputs of the selected frame. Reopen the work from the `.oma`.

**Stack children** packs in layer order. It does not invent a new order behind your back. If the visual order is wrong, reorder the layers, including with `Ctrl+[` and `Ctrl+]`, and the stack follows. Groups move with their children.

Motion is still not an empty welcome action. A Layout frame can be artwork you animate later, in the Motion persona, on this document. The rest pose stays the layout you built. Space plays the clip. The frame tool does not key a timeline by itself.

Press `F`, then `R`, then `T`, in the Layout persona, in the same `.oma` as the drawing.

## Pixel persona tools

### The habit

Photoshop is a pixel document that learned vectors. You open it to paint, clone, and select. `B` is the brush. `E` is the eraser. `J` cycles the healing and clone family, and you Alt-click or Option-click to set a source. `W` is the quick selection or magic wand, depending on the year and the tool preset you last left behind. Affinity Photo matches that hand closely enough that you can sit down and retouch without reading. The file you get is a pixel file. Vectors in that world are guests, or they live in Designer and come across a link.

The failure you know is the flatten. Someone paints a shadow on the poster and saves a TIFF. The headline is no longer type. The logo is no longer a compound path. Next week's copy change starts with a reconstruct.

The other failure is the selection that paints the whole layer. You meant to drop a blemish. The brush ignored the marching ants. You undo, if undo is one step and not "the whole session since Tuesday."

Pixel in this studio has to feel like that Photoshop hand, on a layer, in the vector document you already have open.

### The constraint

One `.oma`. Vectors stay objects. Paint needs a place to live that is not "the whole file, now a bitmap." That place is a pixel layer. If the document is vector-only, the Layers studio is where you add one. The brush does not create that layer by converting the poster. You add it, then you paint.

The persona owns the keys. `B`, `E`, `J`, and `W` are the first Pixel tools. In Design those letters are not a silent flatten. A tool key only changes tools when the tool exists in the current persona. Fill is `K` here. In Motion, `K` keys transforms. The letter follows the room you are in. That is the constraint that keeps one keyboard from meaning five destructive things at once.

Undo is one step. A stroke you hate comes back with `Ctrl+Z`. Selections limit paint, fill, clone, heal, and smudge. Delete clears selected pixels. The ants stay until Esc. Shift adds to the selection. The brush does not get to wander outside the ants because a pixel tool "felt free."

Filters and effects exist in the Raster studio, and they are a separate commit: Apply runs on the full image in the background and makes one undo step. Cancel leaves the document untouched. This post is the tools in the hand, not that dialog. The constraint they share is the same layer. You do not export a PNG to blur it and import it back.

Masks stay editable in the project. Black hides, white reveals. The eraser hides on a mask. Apply to Pixels bakes, and one undo restores both the pixels and the mask. You can retouch without baking on the first stroke.

### What landed

Pixel is the painting and retouching persona. First tools, from the manual: Brush `B`, Eraser `E`, Clone `J`, Wand `W`. Raster lives on a pixel layer in the same `.oma` as your vectors. Welcome's **+ Raster** opens a blank raster size chooser and leads here. A vector document can grow a pixel layer later without becoming a different file.

**Brush** `B`. Size is `[` and `]`. Hardness is `Shift+[` and `Shift+]`. The brush paints on the active pixel target.

**Eraser** `E`. On a mask, the eraser hides.

**Clone** `J`. Alt-click sets the source. Then paint the destination.

**Wand** `W`. Tolerance lives in Brush. The marching ants stay until you press Esc. Shift adds.

Next to those, still in this persona:

- **Fill** `K`.
- **Smudge** `M`.
- **Healing brush** `Shift+J`. Alt-click clean texture on the active image, then paint over the blemish. The stroke blends sampled texture with the destination's local color and keeps transparency. The source stays fixed for that stroke. Undo restores the whole stroke.
- **Marquee** `Shift+M`, **elliptical marquee** `Shift+O`, **lasso** `Q`. Drag to select. Delete clears the selected pixels. Paint, fill, clone, heal, and smudge stay inside the selection.
- **Eyedropper** `I`. The sampled color shows in the sidebar.

`Ctrl+D` in Pixel clears an existing pixel selection. `Super+D` duplicates. Those two chords share a letter and do not share a job. Deselect is the pixel selection. Duplicate is the object.

Add a layer mask from the layer context menu's **Mask** submenu, or **Add layer mask** in Pixel: reveal all, hide all, or start from the current pixel selection. Switch between Pixels and Mask in the inspector. Invert flips the mask. Remove reveals the untouched layer. Choose Pixels before the healing brush or the clone brush when you want those tools on the image.

Raster studio filters and effects are the committed cousins of these tools. Apply is one undo. Duplicate the layer first if you still want the unfiltered pixels as their own layer. The tools above are the direct paint. The dialog is the bake.

### In the hand

Open the poster `.oma`, or start from **+ Raster** with a size.

```sh
omadesign
```

Switch to Pixel. If Layers has no pixel layer, add one. Select it.

```text
B
```

Paint. Tap `[` a few times if the mark is too big. `]` goes the other way. Hold Shift and tap `[` to soften. The vectors underneath are still objects. Toggle the pixel layer's eye if you need to see them alone.

```text
W
```

Click a region. Ants appear. Press `B` again and paint. The stroke stays inside the selection. Esc clears the ants. `Ctrl+D` clears them too, in this persona.

```text
J
```

Alt-click a clean area to set the clone source. Paint over the spot you are covering. `Ctrl+Z` removes that stroke.

```text
Shift+J
```

Alt-click clean texture. Paint the blemish. One undo restores the whole heal stroke, not a dab at a time.

Need a hard-edged hole? `Shift+M`, drag a rectangle, press Delete. The pixels inside the marquee clear. The rest of the layer stays.

Switch to Design and press `T`. Edit the headline. Switch back to Pixel. The pixel layer is still in the stack, still pixels. `Ctrl+S` writes one `.oma` containing both.

On a mask: add one that hides all, press `B`, paint with white to reveal. Or press `E` and hide. Remove the mask if you want the layer untouched again. Apply to Pixels only when you mean to bake, and remember that one undo brings the mask and the pixels back.

### The edge

The brush will not invent a pixel layer by flattening the document. Vector-only files stay vector-only until you add a pixel layer from Layers. Paint lives on that layer. The pen path you drew in Design is still a path.

`B` does not fire in Design as a flatten shortcut. Change persona, then paint. `K` in this room is Fill. It is not the Motion key command. If you wanted animation keys, you are in the wrong persona, and the drawing has not been turned into a clip by accident.

Selections hold the paint. Wand, marquee, ellipse, and lasso limit brush, fill, clone, heal, and smudge. They do not limit them "except for the healing brush." Heal stays inside the ants too. Esc or `Ctrl+D` is how you let go. Delete removes pixels inside the selection. It does not delete the layer. **Delete layer/object** in the layer menu is the command that removes the item.

Filters do not half-apply. Cancel leaves the document alone. Apply is one undo step on the full-resolution image or mask. That dialog is not a second file.

Press `B` on a pixel layer in the `.oma` you already use for the vectors. `[` and `]` set the size while you paint.

## Photo persona tools

### The habit

Lightroom and Capture One taught you a browser, a develop module, and a catalog. Photoshop taught you Camera Raw as a dialog on the way into a pixel document. Affinity Photo develops a RAW into the document you then retouch. The muscle memory inside the dialog is the same. Crop. Exposure. White balance. A tone curve. Color. Detail. Then the picture lands on a layout.

The part you watch like a hawk is the original. A develop pass that writes into the camera file is a bad surprise. Sidecars exist so the NEF, CR3, or DNG you copied off the card stays the file you copied off the card. You can delete the sidecar and be back to the camera's file. You cannot undo a rewritten RAW with `Ctrl+Z` if the app already closed.

### The constraint

One binary, so Photo is a persona, not a second install. One `.oma` for the design you are building. The camera file is not that document. A design save that embedded every RAW you ever placed would turn a poster into a disk. A design save that rewrote the RAW to "remember the grade" would destroy the capture. The constraint forces a split you can explain in one sentence. Development settings live in a small `.omaphoto` beside the original. The original bytes stay. **Place in Design** copies an 8-bit developed image into a pixel layer in the `.oma`, with undo. You keep the RAW and the sidecar if you want to grade again.

Undo inside Photo is Photo's own history. It is not the poster's undo, and it is not a license to touch the camera file. Quitting asks Save all, Discard, or Cancel for unsaved photo settings before palette and artwork saves, and it waits for the writes to finish.

The decoder is in the binary. You do not install a converter and you do not wait on a download to open a file. glibc 2.35 builds already bundle it. Recognized families include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer extension list in the format notes. An extension names a family. It does not promise every camera and every compression mode. There is no RAW writer. Export is JPEG, PNG, or TIFF, as a new file.

Crop has to be `C`, because that is the key the rest of the studio already published for this job. The develop controls have to be sliders in named groups, not a wall of every vendor's label. Light, Color, Detail. Curve, mixer, and grading open when you need them.

### What landed

Photo is the persona for grading a photograph. First tools: Crop `C`, the develop sliders, then **Place in Design**. This is the standing behavior in 0.5.8, including the RAW rules the format notes spell out. The 0.5.8 packages bundle the RAW decoder. They do not add a writer.

Open a photo, browse a folder, drop files, or load samples. **+ Photo** on the welcome screen opens the workspace. The folder icon chooses a folder. The image icon chooses a file. Imports and folder scans run in the background. The library shows camera metadata when it has it. The first display preview's long edge is at most 1600 pixels. Zoom in and the full-resolution tiles arrive in the background while the current preview stays up. Results from an older photo or an older adjustment are discarded.

The Develop panel groups **Light**, **Color**, and **Detail**. Tone curve, color mixer, and color grading expand when you need them. **Before** compares the default development. For a RAW, Before is the default camera-balanced development, the embedded JPEG left out of that comparison. **Auto light** balances exposure and contrast. RAW exposure and white balance use the 16-bit linear source.

**Save settings** writes the adjustments beside the original. `photo.png` pairs with `photo.png.omaphoto`. A RAW looks like `DSC_0001.NEF.omaphoto`. The settings file does not contain the image. Keep the names matched and keep the pair together. Resume with **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…**. Either file restores the original pixels and the saved adjustments.

**Place in Design** adds an 8-bit developed pixel layer. Undo removes that placement as a step on the design. Retain the RAW and the `.omaphoto` for later. Export JPEG, PNG, or TIFF in the background at full developed resolution, including crop and rotation. RAW PNG and TIFF keep 16-bit channels. JPEG is 8-bit delivery. Exported files do not keep the sensor mosaic or the camera's edit history.

Crop commits with Enter and cancels with Esc during the drag. A held mouse button cannot silently restart the crop after you cancel. Space or Hand pans. `Ctrl+0` fits. `Ctrl+1` is 100%. Pinch, Ctrl-scroll, and Alt-scroll zoom.

### In the hand

```sh
omadesign
```

Open Photo and point it at a folder, or drop one RAW on the window.

```text
C
```

Drag the crop. Enter applies. Esc cancels the drag in progress. Rotate if the camera orientation needs a human decision on top of the orientation the decoder already honored.

Move **Light** until exposure and contrast sit. Open the tone curve if the slider is not the shape you want. Switch to **Color** for white balance and the mixer. **Detail** for sharpening and noise. **Before** shows the default development. **Auto light** is there when you want a starting balance and then your own numbers.

```text
Ctrl+S
```

In Photo, save writes the `.omaphoto` next to the original. It does not write the camera file. Look at the directory. Two files, matched names. The RAW's modification time stays the camera's, aside from whatever the filesystem does when you only read it. The settings file is the new one.

**Place in Design.** The poster, or a new design document, gains an 8-bit pixel layer of the developed image. `Ctrl+Z` on that document removes the placement. The `.omaphoto` is still beside the RAW. Grade again later and place again if the layout needs a new development.

Export PNG or TIFF when a printer or a website needs pixels and you are not placing into this `.oma`. The export is a new file. The original path is untouched.

Copy a look only when you mean to. **Copy adjustments** is `Ctrl+Shift+C`. Select other photos. **Paste adjustments** is `Ctrl+Shift+V`. Crop and rotation stay off unless you turn those categories on. That batch is its own topic. The tool in the hand for one picture is still `C` and the sliders.

### The edge

The original photograph is never rewritten. There is no RAW writer. JPEG XL-compressed DNG, GPR, EIP packages, and R3D video are outside this build. Only the first image of a multi-image RAW is developed, with a conversion note. Images over 64 megapixels are rejected, and inputs over 512 MiB are rejected. Lens corrections, proprietary camera looks, and unsupported DNG opcodes are not recreated. The render is not trying to match Lightroom, Capture One, or the in-camera JPEG.

Opening settings reports a missing original, a changed original, or invalid settings, and does not replace the photo you currently have open. Opening the original with unusable settings shows default development and a note. A failed save keeps your edits so you can retry. Edits you make while a save is finishing stay marked unsaved.

A Design `.oma` save does not store the RAW source or its settings. If the sidecar and the camera file part ways, the grade does not hide inside the poster. Place in Design already baked an 8-bit layer for the layout. That layer is not the negative.

Press `C`, grade, then **Save settings**. The `.omaphoto` is the grade. The camera file stays the camera file.

## Motion persona tools

### The habit

After Effects is a timeline that imports what you drew somewhere else. You precompose. You convert text to shapes because the font did not travel. You discover the Illustrator file you linked was updated, or was not. Photoshop's timeline is a different habit: frames on a pixel document. Affinity's motion tools, where you have used them, still feel like a visit to another room. The file you export is an MP4 or a GIF. The file you can still edit is the one that stayed behind, if you were careful.

Lottie changed the delivery habit for interface work. A JSON file, Bodymovin, plays in a product. Designers learned to keep a "simple shapes only" version of the mark because the exporter drops what it cannot say. The honest tools tell you about the drop. The quiet ones write a file that is missing the shadow and hope you do not notice.

The hand, once you are in a timeline, is play and keyframes. Space plays. You set a key, move the clock, set another key. The artwork at time zero should be the artwork you drew, not a pose the timeline invented and then baked.

### The constraint

The artboard you drew is the rest pose. Motion does not rewrite it. That single rule decides the persona. There is no empty Motion document on the welcome screen, because there is nothing to animate until Design or Layout has made objects. The clip lives in the `.oma` with the drawing. Static PNG, JPEG, and SVG export the rest pose. The animation is not a second source file you have to keep in sync by hand.

Tracks are the properties the drawing already has, plus reveal: X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. A preset has to become ordinary keys, with its own undo, or you would own a magic object the rest of the timeline cannot edit. Presets replace only the channels they affect, inside their time range, and they extend the clip if they need to. Unrelated animation stays.

`K` keys transforms for the selection. In Pixel that letter is Fill. The persona is the constraint that makes the letter safe. You are in Motion, so `K` writes X, Y, rotation, and scale. It does not fill a pixel layer.

Delete has three meanings and they have to stay in order. A selected diamond deletes that key. Delete with the object name selected, or with no key selected, removes the animation and leaves the drawing. Delete again removes the object. If the first Delete destroyed the artwork, nobody would key anything.

Lottie is Bodymovin 5.x for shape animation, trim paths, and fill masks. It cannot carry pixel layers, layer masks, and effects. The export has to fail with a clear error. Animated SVG keeps those. The constraint is one document, two exports, no silent data loss.

### What landed

Open the Motion persona. The timeline sits under the canvas. This is the behavior in 0.5.8. The thirteen presets and the Lottie path landed with the motion work and are what this release runs. Welcome still has no **+ Motion** button.

Select vector artwork. The inspector offers **Draw stroke, Pop in, Slam, Shake, Fill up, Slide up, Slide down, Slide left, Slide right, Fly, Zoom, Buzz, and Fade in**. Draw stroke needs a visible stroke. Fill up needs a closed shape with a fill. Incompatible objects, locked objects, hidden objects, and guides are skipped.

Duration sits above the presets. **Timing & energy** opens delay, stagger, intensity, and start-at-playhead. Each application is one undo. The preset becomes keys. Drag a diamond to retime one.

Select a shape and drag it. That writes keys at the playhead. The first key at a time greater than zero also plants the rest pose at zero, so the object animates from where you drew it.

`K` keys X, Y, rotation, and scale for the selection. Diamonds on the row are keys. Drag a diamond to retime. Click a diamond and Delete removes that key. Cycle ease on a selected key.

Space plays. Home jumps to the start. End jumps to the end. The repeat icon is loop.

**File → Export animated SVG…** writes animated transforms plus stroke and fill reveals, and it keeps masks and effects. Text is outlined in that exported file so the glyph geometry matches the canvas. The source text in the `.oma` stays editable.

**File → Export Lottie…** writes Bodymovin 5.x. Pixel layers, layer masks, and effects produce a clear error. Use animated SVG for those compositions. **File → Import Lottie…** brings a shape-layer Lottie onto the timeline. Import is a basic shape subset. The `.oma` is what keeps the full editable animation.

### In the hand

Draw the piece in Design or Layout. A logo, a button, a title. Leave the type as type. Save if you want a checkpoint, then switch persona.

```text
Motion
```

The timeline is under the canvas. Select the mark. Pick **Fade in** or **Slide up**. Set duration. Open **Timing & energy** if you need stagger across several objects. Apply. Press Space. The preview plays. Press Space again to stop. Home returns to the start. The canvas at time zero shows the drawing you made.

Select one shape. Move the playhead. Drag the shape. A key lands at the playhead. If that time is past zero, the rest pose is planted at zero too. Press `K` to key X, Y, rotation, and scale without dragging. Drag the diamond if the beat is late. Click it and press Delete to remove only that key.

```text
K
```

```text
Space
```

Want the motion gone and the art kept? Click the object's name on the timeline, or make sure no diamond is selected. Press Delete. The animation leaves. The vectors remain. Press Delete again only if you mean to delete the object itself.

Export when the preview is the one you want.

```text
File → Export animated SVG…
```

or, for shape animation without pixels, masks, or effects:

```text
File → Export Lottie…
```

If Lottie errors, it is telling you the composition has something that exporter does not keep. Export animated SVG for that file, or remove the pixel layer from the export plan. The `.oma` still has everything. Static SVG export, `Ctrl+E` and the SVG choice, remains the rest pose. The clip does not bake into that still.

Reopen the `.oma` tomorrow. The keys are in the document. The type is still editable. The animated SVG you exported yesterday is a delivery file, outlines and all. Edit in the `.oma`, then export again.

### The edge

Motion will not rewrite the rest pose to store the clip. The drawing at rest stays the drawing. Keys are data on top. Delete the animation before you delete the object, and the object is still there to prove it.

Lottie will not quietly drop pixel layers, layer masks, or effects. The export errors. Animated SVG is the path that keeps masks and effects. Import will not turn an arbitrary Lottie into the full Omadesign document model. It brings in a basic shape-layer subset. Keep the `.oma` if you need the editable clip.

Presets skip locked, hidden, and guide objects, and they skip artwork that does not match the preset. Draw stroke does nothing useful on an object with no visible stroke. Fill up does nothing useful on an open path with no fill. You get keys on the objects that qualify. You do not get a surprise conversion of guides into animated artwork.

There is no welcome button that creates an empty Motion document. Make the artboard first. Then press Space.

Press `K` to key the selection. Press Space to play it. The rest pose is still the thing you drew.
