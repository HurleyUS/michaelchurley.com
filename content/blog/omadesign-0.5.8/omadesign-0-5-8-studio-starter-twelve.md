---
id: T121
title: Studio starter twelve
slug: omadesign-0-5-8-studio-starter-twelve
excerpt: Studio starter ships twelve Lua actions on first install. A duotone, a shadow, an SVG icon, two brushes, a canvas tool, a pattern, a gradient, a palette, a batch nudge, and two behaviors that stay off until you opt in.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-studio-starter-twelve/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-studio-starter-twelve/og.png
---

## The habit

You already keep a starter kit. In Illustrator it is an Actions set, a swatch library, and a folder of SVG icons you have to find again on the new machine. In Photoshop it is a recorded filter and a brush you exported so you could load it on the other desk. In Affinity it is a macro plus a brush pack. The first hour is reassembly. You want one shadow, one pixel treatment, one icon, two brushes, a way to draw a path from a drag, a pattern, a gradient, a palette with a name, a nudge you can aim at a folder of files, and two quiet reports that tell you what you selected and how big the document is. You want to see that kit run before you sit down to write your own.

## The constraint

Omadesign 0.5.8 is one native Linux binary. The picture is one `.oma`. A finished document edit is one Undo step. Lua 5.4.9 and plugin API 1 are built into that binary. There is no second installer for a scripting runtime, and there is no panel that fetches a starter pack off the network before you can press Run.

That forces the shape. The twelve actions ship inside the Linux package. The first installation copies them into the live plugin folder. Later updates of the app leave that folder alone if you have already got it, including a copy you edited. A clean tree is written beside it so you can read the source without touching the copy that actually runs. Behaviors stay out of the event stream until a checkbox you can see is on. A brush preset and a palette write settings, and those settings are not pretending to be a document undo step. The document actions are.

## What landed

**Plugins → Manage plugins** lists **Studio starter**, id `org.omadesign.studio-starter`, version 1.0.0. The live copy after the first install is `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. The clean source the package keeps for you is `~/.local/share/omadesign/plugin-examples/studio-starter`. The same tree is what you download as `studio-starter-1.0.0.omaplug` if you want to install it by hand.

The window is titled **Lua plugins**. Each plugin has an enable checkbox. Actions show as `Category · Name`. The category list is Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients, Swatches. The twelve actions are one of each job the tweet names, with the two brushes and the two behaviors making the count.

**Midnight duotone** is the pixel filter. It reads the active raster layer, mixes each pixel toward a dark navy and a pale ink by luminance, and returns the original alpha. Strength runs from 0 to 1 and starts at 1.

**Soft offset shadow** writes a native drop shadow on the selected vector objects. Blur starts at 12. Offset starts at 8. The shadow color is `#11182780`. The effect stays in the native effect stack, so the FX controls can still edit it.

**Orbit icon** reads `orbit.svg` from the plugin folder and places it centered, at a size that starts at 160. The paths come in as editable vectors.

**Soft ink brush** and **Dry marker brush** call the native Raster brush. Soft ink starts at size 36, hardness 0.25, flow 0.28, opacity 0.85, spacing 0.08, color `#BAC2DE`. Dry marker is fixed: size 18, hardness 0.95, flow 0.55, opacity 0.9, spacing 0.32, color `#A6E3A1`. Running either one switches the studio to Pixel and selects the Brush tool. That change is a preset, not a document edit.

**Ribbon path** is the canvas tool. Stroke width starts at 14. Color starts at `#A6E3A1`. You activate it, drag, and the gesture draws a preview line. On release it adds an open path named Ribbon, fill none, with that stroke.

**Dot field** builds a grid of 10 pixel ellipses, centered on the canvas. Columns start at 8, rows at 6, spacing at 32, fill `#A6E3A1`. Rows and columns are capped at 40. Every circle is a normal shape.

**Aurora gradient** paints the selection with a three-stop linear gradient, `#89B4FA`, `#CBA6F7`, `#A6E3A1`. The native gradient editor still owns the stops afterward.

**Night studio swatches** adds a personal palette named Night studio: `#11111B`, `#1E1E2E`, `#BAC2DE`, `#89B4FA`, `#A6E3A1`, `#F38BA8`. It saves into the personal color library. That save is separate from the document's Undo stack.

**Translate selection** moves the selected vectors. Horizontal starts at 16, vertical at 0. Its command id is `nudge`, which is the name the batch command line uses.

**Selection count** listens for `selection_changed` and puts a count in the status bar. **Document dimensions** listens for `document_opened` and reports the document name and pixel size. Both sit in Behaviors. Both stay quiet until you opt in.

## In the hand

Install the app. Open a document. Choose **Plugins → Manage plugins**. Studio starter is already in the list if this was a first install and the enable box is on.

For the duotone, switch to a Raster document, select the raster layer, choose **Filters · Midnight duotone**, leave Strength at 1, and press **Run**. The status line reports the plugin message or **Plugin completed · Undo restores document edits**. Alpha stays.

For the shadow, select the vector shapes, choose **Effects · Soft offset shadow**, and press **Run**. `Ctrl+Z` takes the whole effect off in one step.

For the icon, choose **Icons · Orbit icon** and press **Run**. The SVG lands centered at 160 pixels unless you typed another size.

For a brush, choose **Brushes · Soft ink brush** or **Dry marker brush** and press **Run**. The persona is Pixel. The Brush tool is up. Paint on a raster layer.

For the ribbon, choose **Tools · Ribbon path** and press **Activate tool**. Drag. A line follows the pointer. Release. A stroked path named Ribbon is in the layer. Press Escape, or **Plugins → Exit plugin tool**, if you armed the tool and do not want the stroke. Fewer than two points does not invent a path.

For the pattern, choose **Patterns · Dot field** and press **Run**. The circles are ordinary ellipses. Select one and move it.

For the gradient, select a shape, choose **Gradients · Aurora gradient**, and press **Run**. Press `G` afterward if you want the Gradient tool on those stops.

For the palette, choose **Swatches · Night studio swatches** and press **Run**. Open the Palettes tab. Night studio is in Personal. Saving the `.oma` is a different button from saving that library.

For the nudge, select vectors, choose **Batch · Translate selection**, and press **Run**. They move 16 pixels on x unless you changed Horizontal. The command id is `nudge`.

Leave the behavior checkbox alone until you want the status line talking. Its label is **Run enabled plugins’ document and selection behaviors**. The choice is written to `behaviors.json` in the plugin folder and read back next launch.

## The edge

The folder under `plugin-examples` is the clean source. It is not the copy the manager runs. Editing that tree does nothing to the live plugin until you install the folder or the `.omaplug`. An app update does not replace `plugins/org.omadesign.studio-starter` when that folder is already there, so a local edit survives. Reinstalling through the manager renames the previous folder to a hidden `.backup-…` name and puts it back if the new copy fails to land.

Behaviors do not run because the plugin is enabled. The manager checkbox is a second switch, and it is off until you turn it on.

Open **Plugins → Manage plugins**, choose **Filters · Midnight duotone**, and press **Run**.
