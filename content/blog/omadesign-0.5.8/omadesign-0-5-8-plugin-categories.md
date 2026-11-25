---
id: T123
title: Plugin categories
slug: omadesign-0-5-8-plugin-categories
excerpt: Plugin actions declare a category. Filters, effects, icons, brushes, tools, behaviors, batch, patterns, gradients, and swatches each have a precondition, and the manager groups them that way.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-categories/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-categories/og.png
---

## The habit

Photoshop puts filters in one menu, actions in another, brushes in a panel, and swatches in a third. Illustrator splits effects, graphic styles, symbols, and scripts. Affinity splits macros, assets, and brushes. You learn the menu by the damage it does. A filter burns pixels. An effect stays live. A symbol is a master. A brush is a preset you paint with after the menu closes. When a plugin system collapses all of that into "run script," you stop trusting the menu, because you cannot tell whether Run will stamp geometry, bake pixels, or start listening to every selection change for the rest of the day.

You also learn the precondition the hard way. A drop shadow on an empty selection does nothing or errors. A pixel filter on a vector layer does something you did not mean. A brush preset fired with no raster layer selected becomes a support ticket. The category should tell you the precondition before you press the button.

## The constraint

One binary has one plugin manager. It cannot grow a private panel per category without turning Plugins into a second application. The document is still one `.oma`, so a category is not a file format. It is a label on an action, plus the host call that action is allowed to make, plus the studio state that call requires.

API 1 keeps the label honest by keeping the calls narrow. A filter maps pixels on a layer index. An effect replaces a shape's native effect stack. An icon imports SVG paths. A brush sets the Raster preset and stops there. A tool consumes a gesture. A behavior names an event and stays off until the manager's behavior checkbox is on. A batch command edits documents and is the one you can point at a folder from the shell. A pattern adds shapes. A gradient builds a native multistop fill. A swatch writes the personal palette library. If the action needs a different kind of power, it does not get it by picking a friendlier category name.

## What landed

The manager's category menu is fixed: **Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients, Swatches**. An action's `category` string picks one of those. Any other string is still legal. It shows up when the menu is on **All categories**, and it does not get a private slot in the dropdown. The button in the list reads `Category · Name`. The search box hint is **Find a plugin or action…**.

Studio starter is the map, one action per job.

Filters run `oma.map_pixels` or `oma.pixel` on a raster layer. Midnight duotone is the example. You need a Raster document and a raster layer selected. The callback sees straight RGBA, 0 to 255, and it has to return alpha if you want the transparency kept. `oma.pixel` reads the source image for the whole pass, so a neighborhood filter does not feedback on pixels it already wrote. The pass is one Undo.

Effects call `oma.set_effects` on selected vector objects. Soft offset shadow replaces that shape's stack with a native Shadow. The stacks the host understands are the same ones the FX studio writes: blur, shadow, inner shadow, offset, morphology, saturate, brightness, contrast, invert, hue rotate, color matrix, turbulence, displacement. Up to 32 effects. Blur stops at 512. Morphology radius stops at 64. Offsets and displacement stop at 4096. Turbulence stops at 8 octaves and a base frequency of 1. Hidden, locked, and guide shapes are not targets.

Icons call `oma.svg` after `oma.read_asset`. Orbit icon is the example. Paths and presentation attributes come through. A local `url(#gradient)` fragment is allowed. External references, stylesheets, and CSS escapes are rejected. Icon fonts need to be outlined paths. The result is editable vector artwork, aspect preserved, one Undo.

Brushes call `oma.brush`. Size is 1 to 2048. Hardness, opacity, and flow are 0 to 1. Spacing is 0.05 to 4. Color is hex. The studio switches to Pixel and the Brush tool. You still need a raster layer under the brush when you paint. The preset is not a document undo step.

Tools set `tool = true` and read `ctx.gesture`. Ribbon path is that action. Patterns call `oma.add_shape`. Gradients call `oma.gradient` with `linear`, `radial`, `conic`, or `shape`, then `oma.set_fill`. Swatches call `oma.palette` and the colors persist as an ordinary personal palette. Batch actions are ordinary document edits with a command id. Translate selection's id is `nudge`. Behaviors set `event` to `selection_changed` or `document_opened` and do not run from the Run button's habit. They run when the behavior checkbox is on.

`oma.add_shape` accepts `rect`, `ellipse`, `line`, `path`, and `geometry`. `oma.translate`, `oma.set_geometry`, and `oma.remove` address a shape by layer and id. `set_geometry` can write an editable compound path. `oma.message` is a status line, not a document edit.

## In the hand

Open **Plugins → Manage plugins**. Leave the dropdown on **All categories** and scroll Studio starter. You should see ten rows if you count the two brushes and the two behaviors inside the twelve, each prefixed with its category. Switch the dropdown to **Filters**. Only Midnight duotone remains. Switch to **Brushes**. Soft ink and Dry marker remain. Switch to **Behaviors**. Selection count and Document dimensions remain. The enable checkbox on the plugin is above those rows. A disabled plugin does not offer its buttons.

Pick the row that matches the artwork you have. Vector objects selected, same layer, neither hidden nor locked: Effects, Gradients, or Batch. A raster layer active in a Raster document: Filters, then paint after Brushes. Nothing selected and you want new artwork: Icons or Patterns. A drag you have not made yet: Tools, then **Activate tool**. A folder of files later: Batch, from the shell, with `--command` set to the action id.

Parameters sit on the action before Run. Numbers have min and max. Colors are `#RRGGBB` or `#RRGGBBAA`. Booleans and text are the other kinds. The host checks them for the desktop and for the command line. An unknown parameter is rejected. You do not discover a typo by watching half the document change.

## The edge

The category string does not grant a power the action forgot to call, and it does not relax a precondition. A filter without a raster layer fails the assert. An effect with an empty selection fails the assert. A brush does not become a document command because you filed it under Batch. The command line says so in one line: brush and palette actions run in the desktop Plugins menu, and batch commands have to edit documents. Canvas tools need a gesture. The shell has no gesture to give them.

Set the category dropdown, select the artwork that category expects, and press **Run**.
