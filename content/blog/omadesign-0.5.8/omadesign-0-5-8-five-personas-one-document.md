---
id: T011
title: Five personas one document
slug: omadesign-0-5-8-five-personas-one-document
excerpt: "Design, Layout, Pixel, Photo, and Motion share one Linux binary, one .oma, and one layer stack. You change the tool well, not the file."
publishedAt: 2026-09-15T23:33:15Z
tags: [omadesign, 0.5.0, personas, design, layout, pixel, photo, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-five-personas-one-document/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-five-personas-one-document/og.png
---

## The habit

Most designers already switch apps to finish one piece of work: Illustrator for the mark and the type, Photoshop for the retouch, After Effects for the animation. In between, you export a PSD or a PNG, import it, notice the type is outlines, fix it in the first app and export again. Affinity built StudioLink so Designer, Photo and Publisher can share a document without that back-and-forth. It removed the habit Adobe's three icons still teach, but kept the question of which app you're in.

The failures are familiar. A linked file goes stale. A color profile shifts. The artboard size gets rounded. The animation app can't see live text, so somebody outlines it "just for the render," and the outlines become the source. Two weeks later the headline is wrong in the only file anyone can edit.

On Linux there's an extra failure: the missing app. One of the three is a Flatpak with a portal in the way, or isn't built for your distro. You do the job in whichever window actually launched, and the file format becomes whatever that window could save.

Each kind of work has its own habits too. Illustrator's left toolbar is a column you hide and relearn after every reinstall, but your hand keeps the keys: `V` selects, `P` draws a path, and `T` is type everywhere. Illustrator's rectangle key is `M`, and the manual here is explicit that Rectangle is `R`. Affinity Designer uses the same cluster, with the Move tool as the way back to a finished pen path. A UI mockup usually means a second app, like Sketch, Figma, Adobe XD, or an Illustrator page that was supposed to stay "the source" until someone redrew it in the screen tool. Affinity's answer is Publisher or Designer with artboards, plus StudioLink when Photo has to retouch a picture on the same spread.

Photoshop is a pixel document that learned vectors. `B` is the brush and `E` the eraser. `J` cycles the healing and clone family, and you Alt-click or Option-click to set a source. `W` is quick selection or the magic wand, depending on the year and which preset you left active. Affinity Photo matches closely enough that you can retouch without reading anything. The failure there is flattening. Someone paints a shadow on the poster and saves a TIFF, the headline stops being type, the logo stops being a compound path, and next week's copy change starts with a rebuild. Another failure is a brush that ignores the marching ants and paints the whole layer, when undo might mean "everything since Tuesday."

Lightroom and Capture One taught people a browser, a develop module and a catalog. Photoshop taught Camera Raw as a dialog on the way into a pixel document, and Affinity Photo develops a RAW into the document you then retouch. Inside the dialog it's always crop, exposure, white balance, a tone curve, color and detail, and then the picture lands in a layout. The part you watch closely is the original. Sidecars exist so the NEF, CR3 or DNG you copied off the card stays exactly that file. You can delete a sidecar and be back to the camera's file, but you can't `Ctrl+Z` a rewritten RAW after the app has closed.

After Effects is a timeline that imports what you drew elsewhere. You precompose, convert text to shapes because the font didn't travel, and discover the linked Illustrator file was or wasn't updated. Photoshop's timeline is frames on a pixel document, and Affinity's motion tools still feel like another room. You export an MP4 or a GIF, and the editable file is whatever stayed behind, if you were careful. Lottie changed delivery for interface work, with a Bodymovin JSON that plays inside a product. Designers learned to keep a "simple shapes only" version of the mark because the exporter drops what it can't represent. Good tools tell you about the drop. Quiet ones write a file missing the shadow and hope you don't notice. In a timeline, Space plays, you set a key, move the clock and set another key, and the artwork at time zero should be the artwork you drew.

## The constraint

Omadesign is one native binary. The document is one `.oma`, with one layer stack, and undo is one step on the document in the focused tab. A persona is which tools are in your hand, not which file you converted to.

That rules out a handoff format between drawing and painting. Raster lives on a pixel layer in the same `.oma` as the vectors, and Layout frames live in the same document as the poster. Motion keys refer to the artboard you drew, and the rest pose stays the drawing. Photo can grade a camera file and writes a `.omaphoto` next to the original. **Place in Design** brings an 8-bit developed layer into the document. The `.oma` save doesn't swallow the RAW, and Design doesn't rewrite the camera file. That's exactly where the persona boundary sits. The capture's source of truth stays outside the design file, and everything you built lives in the `.oma`. A design save that embedded every RAW you ever placed would turn a poster into a disk, and one that rewrote the RAW to remember the grade would destroy the capture.

There are five tool sets in one process, with no Creative Cloud session between them and no second window needed to press `B` after `T`. Compact windows get a persona picker so the choice still fits. The title bar has mode tabs with Phosphor icons (the curve, the brush, layout, images and the running figure), and hover text shows the mode name. From **omadesign > Config** you can have the next launch open in a remembered mode, or always start from the welcome screen.

Plugins, cloud and export stay optional. File > Sign in is there when you want a review upload, and the personas don't wait on it. PNG, JPEG, SVG, animated SVG, Lottie, PSD, PDF and OpenRaster are exports, not how you move work between Design and Pixel.

The persona filters the keyboard. A tool key only switches tools when that tool belongs to the current persona, and otherwise the key does nothing. Design leads with Move, Pen, Rectangle and Type. Brush, eraser, clone and wand belong to Pixel, Frame belongs to Layout and Crop belongs to Photo. If `B` did something destructive to a vector poster because keys were global, the persona split would be cosmetic. Fill is `K` in Pixel, while in Motion `K` keys transforms. The letter follows the room you're in, which stops one keyboard from meaning five destructive things at once.

Objects stay live. Type stays type under Move and Free transform. A rectangle keeps its parameters, including a corner radius set with the corner dots, until you actually edit it as a path. Group is `Ctrl+G`, Ungroup is `Ctrl+Shift+G` and Compound is `Ctrl+8`. They're commands that stay available, not what `V`, `P`, `R` and `T` mean.

The interface follows the desktop. The Shortcut HUD at the bottom shows the current tool on its upper row and letter keys on the lower row, so once you press `P` you can see it's the pen. `F1` shows the full list.

For Layout, a screen, a landing page and a dashboard have to be frames in the document that already holds the mark. Otherwise Layout would be a second product with a handoff. There's no XD file to round-trip and no Figma URL needed to see the button. The first tools stay few: Frame `F`, Rectangle `R` and Type `T`. `R` and `T` match Design on purpose, so you don't learn a new rectangle key to draw a screen. Frames have to nest, stack and pin, or they're just rectangles with another name. A child frame drawn inside a parent nests. **Stack children** packs children in layer order, vertically or horizontally, with gap, padding and stretch. Constraints pin a child to min, max, both edges, center or scale when the parent resizes. Those are inspector settings on the frame, not a plugin or a second document. Frame export writes PNG, SVG or HTML of the selected frame and doesn't replace the `.oma`. Cloud review is opt-in and separate: File > Sign in, then a push if you want a versioned design and a flat snapshot. You can comment on the canvas without an account. Nesting a frame, toggling stack and moving a child are ordinary one-step edits, and templates open unsaved next to any tab you already had.

For Pixel, paint needs somewhere to live that isn't the whole file turned into a bitmap. That place is a pixel layer. If the document is vector-only, you add one in the Layers studio. The brush never creates it by converting the poster. Selections limit paint, fill, clone, heal and smudge. Delete clears selected pixels, and the ants stay until Esc. Filters and effects in the Raster studio are a separate commit. Apply runs on the full image in the background as one undo step, and Cancel leaves the document untouched. You never export a PNG to blur it and import it back. Masks stay editable in the project. Black hides and white reveals, and the eraser hides on a mask. Apply to Pixels bakes, and one undo restores both the pixels and the mask.

For Photo, undo is Photo's own history, separate from the poster's undo, and it never touches the camera file. Quitting asks Save all, Discard or Cancel for unsaved photo settings before palette and artwork saves, and waits for those writes to finish. The decoder is in the binary, so there's no converter to install or download to wait on, and the glibc 2.35 builds already bundle it. Recognized families include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF and the longer list in the format notes. An extension names a family and doesn't promise every camera or compression mode. There's no RAW writer, and export is JPEG, PNG or TIFF as a new file. Crop is `C`, because that's the key the rest of the app already uses for this job. The develop controls are sliders in named groups (Light, Color and Detail) instead of a wall of every vendor's labels, and curve, mixer and grading open when you need them.

For Motion, the artboard you drew is the rest pose, and Motion doesn't rewrite it. There's no empty Motion document on the welcome screen, because nothing can be animated until Design or Layout has made objects. The clip lives in the `.oma` with the drawing, and static PNG, JPEG and SVG exports show the rest pose. Tracks are the properties the drawing already has, plus reveals: X, Y, rotation, scale, opacity, stroke reveal and fill reveal. A preset has to turn into ordinary keys with its own undo, or you'd end up with a special object the rest of the timeline can't edit. Presets replace only the channels they affect, inside their time range, and extend the clip if they need to, so unrelated animation stays. Delete has three meanings that have to stay in order. With a diamond selected, it deletes that key. With the object name selected, or no key selected, it removes the animation and leaves the drawing. Pressed again, it removes the object. If the first Delete destroyed the artwork, nobody would key anything. Lottie is Bodymovin 5.x for shape animation, trim paths and fill masks. It can't carry pixel layers, layer masks or effects, so that export has to fail with a clear error, while animated SVG keeps them. One document, two exports, no silent data loss.

## What landed

The manual lists the five personas like this:

| Persona | You are… | First tools |
| --- | --- | --- |
| **Design** | a mark, a poster, a layout | Move `V`, Pen `P`, Rectangle `R`, Type `T` |
| **Layout** | a screen, a landing, a dashboard | Frame `F`, Rectangle `R`, Type `T` |
| **Pixel** | painting or retouching | Brush `B`, Eraser `E`, Clone `J`, Wand `W` |
| **Photo** | grading a photograph | Crop `C`, develop sliders, Place in Design |
| **Motion** | animating the artboard | Space play, `K` key, File > Lottie |

Design is the default when you open a vector document or a template. On the welcome screen, Vector leads to Design and Raster leads to Pixel. **+ Layout** leads to frames, and **+ Photo** opens the photo workspace, a folder or a file. Motion has no empty-workspace button. You open it once the canvas has something to move.

The layer stack is shared. Eye and lock work per object. A pixel layer is a layer, a frame is in the document and a group moves with its children. Opacity and blend on a vector object live in the transform inspector, and placed images use the layer opacity and blend controls above the Layers tree. A frame's opacity applies to its whole subtree. Pass through on a group decides whether child blends reach the backdrop. None of that is stored per persona. You change persona and the stack is still the same stack.

Keys that don't belong to the current persona don't switch tools. `B` paints in Pixel, while in Design the first keys are `V`, `P`, `R` and `T`.

### Design

Design is the default persona for a vector document and for the 52 templates. The manual describes it as making a mark, a poster or a layout, with Move `V`, Pen `P`, Rectangle `R` and Type `T` as the first tools.

**Move** `V`. Click to select and drag to move. Eight handles scale and the handle above the box rotates. Shift-click adds or removes an object, and Shift-drag draws a box that adds to the selection. Dragging a selected object moves the whole selection, and Shift constrains that move. Alt-drag clones. Corner dots round a rectangle.

**Pen** `P`. Click for a corner and click-drag for a smooth point. A twitch under 3 pixels stays a corner. Shift constrains to 45 degrees, and Alt-drag breaks handle symmetry. The curve draws as you go. Enter or a double-click finishes an open path. Esc drops the last point, then cancels. Click the first point to close, or click an open endpoint to continue it or join it to the path you're drawing.

**Rectangle** `R`. Drag, and Shift constrains. Corner radius is in Transform, and on the corner dots while you're in Move. Ellipse is `O`, polygon `Y`, star `S` and line `L`. They're the same drag-and-constrain family, just not among the first four.

**Type** `T`. Click to place and type on the canvas. The first keystroke replaces the "Type" placeholder. Enter starts a new line, and Esc or a click away finishes. Double-click existing type to edit it. Character studio has font, size, tracking, leading and OpenType for kerning, ligatures, tabular figures and small caps.

Design also has Node `A`, Pencil `N`, Gradient `G`, Eyedropper `I`, Artboard `Shift+O`, Zoom `Z`, and Hand `H` or Space. Free transform is `Ctrl+T`. The first four come first.

### Layout

Layout is the persona for a screen, a landing page or a dashboard, with Frame `F`, Rectangle `R` and Type `T` as its first tools, per the manual's table.

**Frame** `F`. Drag a frame, then draw another inside it and it nests. If you drew the contents first, **Object > Wrap selection in frame** puts the current selection in a frame. Image placeholders are in the inspector.

**Rectangle** `R` and **Type** `T` work as they do in Design. Drag a rectangle, and Shift constrains. Click for type, and the first keystroke replaces the "Type" placeholder. Enter starts a new line, and Esc or a click away finishes. Double-click to edit again. Character studio is the same, with font, size, tracking, leading and OpenType.

**Auto-layout.** Select a frame and turn on **Stack children**. Choose vertical or horizontal and set gap, padding and stretch. Children pack in layer order, so reordering a layer reorders the stack. With a layer row selected, `Ctrl+[` and `Ctrl+]` reorder it, and adding Shift sends it to the back or front of its group.

**Constraints.** A child of a frame can pin to min, max, both edges, center or scale. When you resize the parent, the child follows the pin you set.

**Export.** **File > Export frame PNG / SVG / HTML** writes the selected frame, and the `.oma` stays the editable file.

**Templates.** **+ Layout** on the welcome screen opens Fieldwork (a responsive prototype), a mobile screen, a landing hero, a dashboard and a card stack. The same starters are under **File > Template library > Layout starters**. The Layout file icon on the welcome screen opens the blank size chooser.

**Comments.** Write a note, pin it on the canvas and resolve it when it's done. Open counts show on the frame in the inspector.

Photo and Layout can open from the start screen without creating an artboard, and a saved artboard-less Layout document stays that way when you reopen it.

### Pixel

Pixel is the painting and retouching persona. The manual's first tools are Brush `B`, Eraser `E`, Clone `J` and Wand `W`. Raster lives on a pixel layer in the same `.oma` as your vectors. The welcome screen's **+ Raster** opens a blank raster size chooser and leads here. A vector document can gain a pixel layer later without becoming a different file.

**Brush** `B`. `[` and `]` change the size, and `Shift+[` and `Shift+]` change hardness. The brush paints on the active pixel target.

**Eraser** `E`. On a mask, the eraser hides.

**Clone** `J`. Alt-click to set the source, then paint the destination.

**Wand** `W`. Tolerance is in Brush. The marching ants stay until you press Esc, and Shift adds.

The persona also has:

- **Fill** `K`.
- **Smudge** `M`.
- **Healing brush** `Shift+J`. Alt-click clean texture on the active image, then paint over the blemish. The stroke blends sampled texture with the destination's local color and keeps transparency. The source stays fixed for the stroke, and undo restores the whole stroke.
- **Marquee** `Shift+M`, **elliptical marquee** `Shift+O` and **lasso** `Q`. Drag to select. Delete clears the selected pixels. Paint, fill, clone, heal and smudge stay inside the selection.
- **Eyedropper** `I`. The sampled color shows in the sidebar.

In Pixel, `Ctrl+D` clears an existing pixel selection and `Super+D` duplicates. They share a letter but not a job. Deselect applies to the pixel selection and duplicate applies to the object.

Add a layer mask from the **Mask** submenu in the layer's context menu, or with **Add layer mask** in Pixel. You can reveal all, hide all or start from the current pixel selection. Switch between Pixels and Mask in the inspector. Invert flips the mask, and Remove reveals the untouched layer. Choose Pixels before using the healing or clone brush on the image.

The Raster studio's filters and effects are the committed version of these tools. Apply is one undo, so duplicate the layer first if you want to keep the unfiltered pixels on their own layer. The tools above paint directly, and the dialog bakes.

### Photo

Photo is the persona for grading a photograph. Its first tools are Crop `C` and the develop sliders, then **Place in Design**.

You can open a photo, browse a folder, drop files or load samples. **+ Photo** on the welcome screen opens the workspace, the folder icon chooses a folder and the image icon chooses a file. Imports and folder scans run in the background, and the library shows camera metadata when it has it. The first display preview is at most 1600 pixels on its long edge. When you zoom in, full-resolution tiles load in the background while the current preview stays up, and results for an older photo or adjustment are discarded.

The Develop panel groups **Light**, **Color** and **Detail**, and tone curve, color mixer and color grading expand when you need them. **Before** compares against the default development. For a RAW, that's the default camera-balanced development, with the embedded JPEG left out of the comparison. **Auto light** balances exposure and contrast. RAW exposure and white balance use the 16-bit linear source.

**Save settings** writes the adjustments next to the original. `photo.png` pairs with `photo.png.omaphoto`, and a RAW looks like `DSC_0001.NEF.omaphoto`. The settings file doesn't contain the image, so keep the names matched and the pair together. Resume with **File > Open**, a drop, or **Photo > Library > ··· > Open photo or settings…**. Either file restores the original pixels and the saved adjustments.

**Place in Design** adds an 8-bit developed pixel layer, and undo removes the placement as a step on the design. Keep the RAW and the `.omaphoto` for later. Export writes JPEG, PNG or TIFF in the background at full developed resolution, including crop and rotation. PNG and TIFF from a RAW keep 16-bit channels, and JPEG is 8-bit delivery. Exported files don't keep the sensor mosaic or the camera's edit history.

Crop commits with Enter and cancels with Esc during the drag, and a held mouse button can't silently restart the crop after you cancel. Space or Hand pans, `Ctrl+0` fits and `Ctrl+1` shows 100%. Pinch, Ctrl-scroll and Alt-scroll zoom.

### Motion

Open the Motion persona and the timeline sits under the canvas. The thirteen presets and the Lottie export landed with the motion work, and the welcome screen still has no **+ Motion** button.

Select vector artwork and the inspector offers **Draw stroke, Pop in, Slam, Shake, Fill up, Slide up, Slide down, Slide left, Slide right, Fly, Zoom, Buzz and Fade in**. Draw stroke needs a visible stroke, and Fill up needs a closed shape with a fill. Incompatible, locked and hidden objects and guides are skipped.

Duration sits above the presets, and **Timing & energy** opens delay, stagger, intensity and start-at-playhead. Each application is one undo, and the preset becomes keys. Drag a diamond to retime one.

Select a shape and drag it to write keys at the playhead. If the first key is at a time after zero, the rest pose is also planted at zero, so the object animates from where you drew it.

`K` keys X, Y, rotation and scale for the selection. The diamonds on the row are keys. Drag one to retime it, or click it and press Delete to remove that key. You can cycle ease on a selected key.

Space plays, Home jumps to the start, End jumps to the end and the repeat icon loops.

**File > Export animated SVG…** writes animated transforms plus stroke and fill reveals, and keeps masks and effects. Text is outlined in the exported file so the glyphs match the canvas, while the source text in the `.oma` stays editable.

**File > Export Lottie…** writes Bodymovin 5.x. Pixel layers, layer masks and effects produce a clear error, so use animated SVG for those compositions. **File > Import Lottie…** brings a shape-layer Lottie onto the timeline. Import covers a basic shape subset, and the `.oma` is what keeps the full editable animation.

## In the hand

```sh
omadesign
```

Here's the whole loop in one file. Open **+ Vector**, pick a template and you're in Design. Press `T` and set a headline, then press `R` and drag a block behind it. You're making the poster in the `.oma`.

Switch to Layout when the same file needs a screen. Press `F` and drag a frame, then draw another inside it and it nests. The headline from Design is still in the document, and you didn't export a PDF to get it into layout.

Switch to Pixel. If there's no pixel layer, add one in the Layers studio. Press `B` and paint. The type stays type and the rectangle stays a rectangle, and the paint is pixels on that layer, in this file.

Open Photo when the job is a photograph. Crop with `C` and adjust the Light, Color and Detail controls. **Save settings** writes a `.omaphoto` next to the original. **Place in Design** drops the developed 8-bit image into the document as a pixel layer, with undo. The RAW is still the RAW.

Switch to Motion when the poster should move. The timeline sits under the canvas and your drawing is the rest pose. Press Space to play and `K` to key position, rotation and scale. Use **File > Export Lottie…** or **File > Export animated SVG…** when someone needs a playable file. Static PNG, JPEG and SVG exports show the rest pose, and the clip stays in the `.oma`.

Save once.

```text
Ctrl+S
```

That's one `.oma`. Reopen it and the layers you painted, the frames you nested and the keys you set come back with the vectors. Photo's RAW development comes back from the `.omaphoto`, not from this save.

### Design

Open a blank vector document or one of the 52 templates. Design is already the persona.

```text
V
```

You're in Move. If something is selected, click empty canvas to deselect, or click the object you want.

```text
R
```

Drag, holding Shift if the poster needs a square, and let go. It's a rectangle. Drag a corner dot if it needs a radius, and it stays a rectangle with a radius instead of a pile of paths.

```text
P
```

Click, click, click for a polygon of corners and click the first point to close. Or click-drag to pull handles, then press Enter to leave the path open. Holding Shift while placing a point locks it to 45 degrees. Esc once removes the last point, and Esc again cancels the path.

```text
T
```

Click the page and type the headline. The placeholder disappears on the first character. Press Enter for a second line and click away. Double-click the text later when the wording changes. The font list includes the machine's fonts, and when the document is attached to a project, project fonts from the brand library appear in that picker too.

```text
V
```

Move the headline. Shift constrains the drag to horizontal, vertical or 45 degrees, and Alt-drag clones it. The eight handles scale the object and the handle above the box rotates it. `Ctrl+Z` undoes one step and `Ctrl+Shift+Z` redoes.

Look at the bottom of the window. The Shortcut HUD's upper row follows the tool you just chose. Hold Shift and the row shows the constrained gesture, and release it to see the normal hints. `Ctrl+/` hides the strip if you want the full canvas.

Save with `Ctrl+S`. The file is an `.oma`, and the type inside is still type.

### Layout

Click **+ Layout** on the welcome screen. The sheet stays at the width it opened. Choose a mobile screen, landing hero, dashboard, card stack or Fieldwork, then click **Use this template** or double-click. The document is unsaved and Layout is the persona.

```text
F
```

Drag a frame inside the screen, then drag a second frame inside the first so it nests. In the inspector, turn on **Stack children** and set a gap and padding. Drag the parent's edge and the children follow the stack.

Press `R` and drag a rectangle inside the frame for a button shape, with Shift if it should be square. Press `T`, click and type the button label, then click away. Select the text and pin it with constraints if it should stay centered when the button frame changes width. The pin options are min, max, both edges, center or scale.

Select the screen frame and choose **File > Export frame PNG**, SVG or HTML for a snapshot someone can open without the app. The `.oma` tab is still open, and `Ctrl+S` saves the real file.

If a note belongs on the canvas, drop a comment on the frame and resolve it when it's done. The inspector's count replaces the list you'd otherwise keep in a chat window.

If the mark from the poster is in this file, it's already on the layer stack. If it's in another `.oma`, open that file in a tab with `Ctrl+O` and copy it across. Paste puts objects at their original positions, so moving a logo between two tabs never needs a PDF export.

Switch to Design, press `P` and draw a mark next to the frames. Switch back to Layout and the mark is in the document, and `F` still makes frames. The persona changed the first keys, not the file.

### Pixel

Open the poster `.oma`, or start from **+ Raster** with a size. Switch to Pixel. If Layers has no pixel layer, add one and select it.

```text
B
```

Paint. Tap `[` a few times if the brush is too big, and `]` to go the other way. Hold Shift and tap `[` to soften the edge. The vectors underneath are still objects, and you can toggle the pixel layer's eye to see them alone.

```text
W
```

Click a region and ants appear. Press `B` and paint, and the stroke stays inside the selection. Esc clears the ants, and in this persona `Ctrl+D` does too.

```text
J
```

Alt-click a clean area to set the clone source, then paint over the spot you're covering. `Ctrl+Z` removes that stroke.

```text
Shift+J
```

Alt-click clean texture and paint the blemish. One undo restores the whole heal stroke instead of one dab at a time.

For a hard-edged hole, press `Shift+M`, drag a rectangle and press Delete. The pixels inside the marquee clear and the rest of the layer stays.

Switch to Design, press `T` and edit the headline. Switch back to Pixel and the pixel layer is still in the stack, still pixels. `Ctrl+S` saves one `.oma` containing both.

On a mask, add one that hides all, press `B` and paint white to reveal, or press `E` to hide. Remove the mask if you want the layer untouched again. Only use Apply to Pixels when you mean to bake, and remember that one undo brings back both the mask and the pixels.

### Photo

Open Photo and point it at a folder, or drop one RAW on the window.

```text
C
```

Drag the crop. Enter applies and Esc cancels the drag in progress. Rotate if the image needs a human decision beyond the orientation the decoder already applied.

Adjust **Light** until exposure and contrast look right, and open the tone curve if the slider doesn't give you the shape you want. Switch to **Color** for white balance and the mixer, and **Detail** for sharpening and noise. **Before** shows the default development. **Auto light** gives you a starting balance to refine.

In Photo, `Ctrl+S` writes the `.omaphoto` next to the original and never writes the camera file. Check the directory and you'll see two files with matched names. The RAW keeps the camera's modification time, apart from whatever the filesystem does when a file is only read. The settings file is the new one.

Click **Place in Design**, and the poster or a new design document gets an 8-bit pixel layer of the developed image. `Ctrl+Z` on that document removes the placement. The `.omaphoto` stays next to the RAW, so you can grade again later and place again if the layout needs a new version.

Export PNG or TIFF when a printer or website needs pixels and you aren't placing into this `.oma`. The export is a new file, and the original path is untouched.

Copy a look only when you mean to. **Copy adjustments** is `Ctrl+Shift+C`. Select other photos and use **Paste adjustments**, `Ctrl+Shift+V`. Crop and rotation stay off unless you turn those categories on. Batch work has its own post. For one picture, it's `C` and the sliders.

### Motion

Draw the piece in Design or Layout, like a logo, a button or a title. Leave the type as type. Save if you want a checkpoint, then switch persona.

```text
Motion
```

The timeline is under the canvas. Select the mark, pick **Fade in** or **Slide up** and set the duration. Open **Timing & energy** if you need a stagger across several objects, then apply. Press Space to play the preview and again to stop. Home returns to the start, where the canvas shows the drawing you made.

Select one shape, move the playhead and drag the shape. A key lands at the playhead, and if that time is after zero, the rest pose is planted at zero too. Press `K` to key X, Y, rotation and scale without dragging. Drag the diamond if the beat is late, or click it and press Delete to remove only that key.

```text
K
```

```text
Space
```

To remove the motion and keep the art, click the object's name on the timeline, or make sure no diamond is selected, and press Delete. The animation goes and the vectors stay. Press Delete again only if you want to delete the object.

Export when the preview looks right.

```text
File → Export animated SVG…
```

Or, for shape animation without pixels, masks or effects:

```text
File → Export Lottie…
```

If Lottie shows an error, the composition has something that exporter can't keep. Export animated SVG for that file, or take the pixel layer out of the export plan. The `.oma` still has everything. Static SVG export, `Ctrl+E` and the SVG option, still shows the rest pose, and the clip isn't baked into that still.

Reopen the `.oma` the next day. The keys are in the document and the type is still editable. The animated SVG you exported is a delivery file, outlines included. Edit in the `.oma` and export again.

## The edge

A persona switch never forks the document, and there's no "export for Pixel" step inside the app. If you want five files, you export them on purpose from File, in formats you choose.

Design's four keys don't open another application or export a handoff. Pixel is a persona switch away, on a pixel layer you add when the document is still vector-only. `B` doesn't flatten the poster from inside Design, because the key doesn't switch to the brush in that persona. Likewise, `K` in Pixel is Fill, not the Motion key command. If you wanted animation keys, you're in the wrong persona, and nothing has turned the drawing into a clip by accident.

Move's corner dots never run **Object > Break path**, so a rectangle with a radius stays a parameter rectangle. The first time you edit that shape with the Node tool, it converts to a path. That conversion belongs to the Node tool, not to `R` or `V`.

`T` never outlines glyphs, and live text stays editable. **Object > Convert to path** is the explicit command for when you want letter outlines with holes and are willing to give up the text object, and undo restores the text. Free transform, `Ctrl+T`, also keeps text live, so scaling with Move never expands anything. Group, ungroup and compound are `Ctrl+G`, `Ctrl+Shift+G` and `Ctrl+8`, not hidden under `V`.

Layout doesn't require a cloud account to draw, stack, constrain, comment or export a frame. **File > Sign in** opens a browser approval when you want it. Push project and review export upload a versioned design and a flat snapshot. Cloud projects pull a shared design into a new document, and review annotations load cloud feedback. Publishing and competition entry are separate owner actions. None of those happen because you pressed `F`.

Frame export doesn't turn the `.oma` into HTML as the source of truth. PNG, SVG and HTML are outputs of the selected frame, and you reopen the work from the `.oma`. **Stack children** packs in layer order and never invents a new order. If the visual order is wrong, reorder the layers, including with `Ctrl+[` and `Ctrl+]`, and the stack follows. Groups move with their children.

The brush never creates a pixel layer by flattening the document. Vector-only files stay vector-only until you add a pixel layer from Layers, and the pen path you drew in Design stays a path. Selections hold all the paint tools. Wand, marquee, ellipse and lasso limit brush, fill, clone, heal and smudge, with no exception for the healing brush. Esc or `Ctrl+D` releases the selection. Delete removes pixels inside the selection, not the layer. **Delete layer/object** in the layer menu removes the item. Filters never half-apply. Cancel leaves the document alone, and Apply is one undo step on the full-resolution image or mask, not a second file.

Photo never hides the camera original inside the `.oma`, and it never rewrites the original. Place in Design is an 8-bit layer for the layout, not the negative. Further grading still belongs to the RAW and the settings file next to it. There's no RAW writer. JPEG XL-compressed DNG, GPR, EIP packages and R3D video are outside this build. Only the first image of a multi-image RAW is developed, with a conversion note. Images over 64 megapixels and inputs over 512 MiB are rejected. Lens corrections, proprietary camera looks and unsupported DNG opcodes aren't recreated, and the render isn't trying to match Lightroom, Capture One or the in-camera JPEG.

Opening settings reports a missing original, a changed original or invalid settings, and doesn't replace the photo you have open. Opening an original whose settings are unusable shows the default development and a note. A failed save keeps your edits so you can retry, and edits made while a save is finishing stay marked unsaved. If the sidecar and camera file get separated, the grade isn't hiding in the poster.

Motion never rewrites the rest pose to store an animation. The keys live in the clip on top of the drawing. Delete the animation and the drawing remains, which proves it. Lottie export errors clearly when the composition has pixel layers, layer masks or effects it can't keep, instead of silently dropping them, and animated SVG is the export that keeps masks and effects. Import doesn't turn an arbitrary Lottie into the full Omadesign document model. It brings in a basic shape-layer subset, so keep the `.oma` if you need the editable clip.

Presets skip locked, hidden and guide objects, and artwork that doesn't fit the preset. Draw stroke does nothing on an object with no visible stroke, and Fill up does nothing on an open path with no fill. Qualifying objects get keys, and guides never get turned into animated artwork.

There's no welcome button for an empty Motion document. Draw the artboard first, then animate it.
