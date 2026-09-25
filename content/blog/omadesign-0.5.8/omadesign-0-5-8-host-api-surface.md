---
id: T126
title: Host API surface
slug: omadesign-0-5-8-host-api-surface
excerpt: API 1 is a short list of oma calls. Shapes, fills, effects, brushes, palettes, SVG, pixels, and a status message. Each run gets a fresh Lua VM.
publishedAt: 2026-09-22T11:37:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-host-api-surface/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-host-api-surface/og.png
---

## The habit

ExtendScript hands you the whole application. You can walk the object model, open files and call almost anything a panel can call, which is why a script from 2011 still reaches into a palette that has since moved. Photoshop scripting is the same idea with a different dictionary. Affinity's macros record gestures more than they offer a stable set of calls. When the scripting interface is the entire app, every internal rename breaks a script, and every script is one `require` away from reading a path you didn't mean to give it.

The calls you actually make from job to job are a shorter list. Add a shape, move it, replace its geometry. Set a fill or a gradient, or the effect stack. Drop in SVG paths. Read and write pixels. Load a brush, save a palette, and post a status message. Those calls should take native values, so the result is editable in the same inspectors as a shape you drew with `R` and `G`.

Menus have their own habits. Photoshop puts filters in one menu, actions in another, brushes in a panel and swatches in a third. Illustrator splits effects, graphic styles, symbols and scripts. Affinity splits macros, assets and brushes. You learn each menu by what it does to your file. A filter burns pixels. An effect stays live. A symbol is a master. A brush is a preset you paint with after the menu closes. When a plugin system collapses all of that into "run script," you stop trusting the menu, because you can't tell whether Run will stamp geometry, bake pixels, or start listening to every selection change for the rest of the day.

You also learn preconditions the hard way. A drop shadow on an empty selection does nothing or errors. A pixel filter on a vector layer does something you didn't intend. A brush preset fired with no raster layer selected turns into a support ticket. The category should tell you the precondition before you press the button.

## The constraint

A plugin runs on a worker, in a fresh Lua 5.4 VM, against a snapshot. It can't hold a pointer into the live studio. Anything that needs to persist has to live in the `.oma` or in a preset the host stores, because the VM is thrown away when the action returns. `oma` exists while `run` executes. It doesn't exist while the host reads the manifest, so top-level code can only return the table and define functions.

The calls have to produce native document commands instead of a private scene graph. A gradient a plugin builds has to open in the gradient editor. A shadow has to open in FX. A path has to take node edits under `A`, and a compound path has to stay a compound path. Pixel writes have to be one undo. I kept the API to that list so a plugin can't open a back door into the file system or the network through some convenient extra call.

One binary has one plugin manager. It can't grow a private panel for each category without turning Plugins into a second application. The document is still one `.oma`, so a category isn't a file format. It's a label on an action, plus the host call that action is allowed to make, plus the studio state that call requires.

API 1 keeps the labels accurate by keeping the calls narrow:

- A filter maps pixels on a layer index.
- An effect replaces a shape's native effect stack.
- An icon imports SVG paths.
- A brush sets the Raster preset and stops there.
- A tool consumes a gesture.
- A behavior names an event and stays off until the manager's behavior checkbox is on.
- A batch command edits documents, and it's the one you can point at a folder from the shell.
- A pattern adds shapes.
- A gradient builds a native multistop fill.
- A swatch writes to the personal palette library.

An action that needs a different kind of power doesn't get it by choosing a friendlier category name.

## What landed

The API version is 1. The manifest sets `api = 1`, and `ctx.api` reports the same number. `run(ctx, params)` receives the document width, height and name, the active layer index or nil, the selection, the layers, and the gesture or nil.

Selection entries carry `layer`, `id`, `name`, `geom`, `style` and `rotation`. Layer entries carry `index`, `name`, `locked`, `visible`, and `raster` as `{width, height}` or nil. Gesture points are `{x, y}` in document coordinates, plus `alt`, `shift` and `ctrl`. Lua arrays start at 1, while layer indexes and pixel coordinates start at 0. Shape ids are integers. Geometry and fills use the native tagged JSON. `omadesign --inspect document.oma` prints a real document if you want to see the tags, and the source types are in `src/geom.rs`, `src/document.rs` and `src/filter.rs`.

### The calls

`oma.add_shape` returns `layer, id`. Kinds are `rect`, `ellipse`, `line`, `path` and `geometry`. Rectangles take `radius`. Paths take `points` and an optional `closed`. Geometry takes a native `geom` table, including a path with anchors, handles, `smooth` and `radius`. The host creates a vector layer when it needs one.

`oma.translate(layer, id, dx, dy)` moves a shape. `oma.set_geometry` replaces geometry and can write an editable compound path. `oma.remove` deletes a vector shape. All three address a shape by layer and id. `oma.set_fill` takes a hex color, `"none"` or a native fill table.

`oma.gradient(colors, kind)` builds a native multistop fill. Kind is `linear`, `radial`, `conic` or `shape`, and the stops stay editable in the gradient editor. `oma.set_effects` replaces a shape's effect stack with tagged tables: Blur, Shadow, InnerShadow, Offset, Morphology, Saturate, Brightness, Contrast, Invert, HueRotate, ColorMatrix, Turbulence, Displacement. `oma.color(hex)` returns `{r, g, b, a}` with channels from 0 to 255, which is the format shadow colors use.

`oma.brush` activates a Raster preset. `oma.palette(name, colors)` adds a named palette to the personal library. `oma.read_asset(relative_path)` reads a UTF-8 file inside the plugin folder. `oma.svg(svg_text, x, y, width)` imports paths as editable artwork and keeps the aspect ratio. `oma.pixel(layer, x, y)` returns the source `r, g, b, a`, or transparent black out of bounds. `oma.map_pixels(layer, callback)` replaces pixels. The callback is `function(r, g, b, a, x, y)` and returns four channels. `oma.message(text)` sets the status line and isn't a document edit.

Action parameters are `number`, `text`, `color` and `boolean`, each with an `id`, a `label` and a typed `default`. Numbers can set `min` and `max`. Colors are `#RRGGBB` or `#RRGGBBAA`. The host validates parameters for both the desktop and the command line, and rejects unknown ones, so a typo doesn't show up as half the document changing.

Each run is a new VM, and Lua globals don't survive between runs. Keep artwork in the document and presets in the plugin. The standard libraries available are table, string, math, utf8 and the basic functions. `require` isn't there, so a plugin is one `main.lua` plus assets read through `oma.read_asset`.

### Categories

The manager's category menu is fixed: **Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients, Swatches**. An action's `category` string picks one of those. Any other string is still allowed. It shows up when the menu is set to **All categories** but doesn't get its own entry in the dropdown. Buttons in the list read `Category · Name`, and the search box hint is **Find a plugin or action…**.

Studio starter works as the map, with one action for each job.

**Filters** run `oma.map_pixels` or `oma.pixel` on a raster layer. Midnight duotone is the example. You need a Raster document with a raster layer selected. The callback sees straight RGBA from 0 to 255 and has to return alpha if you want transparency kept. `oma.pixel` reads the source image for the whole pass, so a neighborhood filter doesn't feed back on pixels it already wrote. The pass is one Undo.

**Effects** call `oma.set_effects` on selected vector objects. Soft offset shadow replaces the shape's stack with a native Shadow. The host understands the same effects the FX studio writes: blur, shadow, inner shadow, offset, morphology, saturate, brightness, contrast, invert, hue rotate, color matrix, turbulence and displacement. A stack holds up to 32 effects. Blur stops at 512, morphology radius at 64, and offsets and displacement at 4096. Turbulence stops at 8 octaves and a base frequency of 1. Hidden, locked and guide shapes aren't targets.

**Icons** call `oma.svg` after `oma.read_asset`. Orbit icon is the example. Paths and presentation attributes come through, and a local `url(#gradient)` fragment is allowed. External references, stylesheets and CSS escapes are rejected, and icon fonts need to be outlined as paths first. The result is editable vector artwork with its aspect ratio preserved, in one Undo.

**Brushes** call `oma.brush`. Size runs from 1 to 2048. Hardness, opacity and flow run from 0 to 1. Spacing runs from 0.05 to 4, and color is hex. The studio switches to Pixel and the Brush tool. You still need a raster layer under the brush when you paint, and the preset isn't a document undo step.

**Tools** set `tool = true` and read `ctx.gesture`. Ribbon path is the example. **Patterns** call `oma.add_shape`. **Gradients** call `oma.gradient` with `linear`, `radial`, `conic` or `shape`, then `oma.set_fill`. **Swatches** call `oma.palette`, and the colors persist as an ordinary personal palette. **Batch** actions are ordinary document edits with a command id. Translate selection's id is `nudge`. **Behaviors** set `event` to `selection_changed` or `document_opened`. They don't run from a Run button. They run when the behavior checkbox is on.

## In the hand

Save a folder with a `main.lua` that returns `api = 1`, a stable id, a name, a version and one action. The id can use letters, digits, dots, hyphens and underscores, with no leading dot. Action ids have to be unique within the plugin. The version number is yours, separate from the app's.

The guide's color-dots example is the smallest pattern. `run` loops and calls `oma.add_shape` with `kind = "ellipse"`, a position, a 12 pixel size, the color parameter and the name Dot. `oma.message` tells you the circles are editable. Install the folder from **Plugins > Manage plugins > Install folder…** and press **Run**. Press `V` and move one dot. Press `Ctrl+Z` and the whole row disappears.

To see geometry tags, draw a curve with `P`, save, and run `omadesign --inspect` on the `.oma`. The path table it prints is the table `kind = "geometry"` accepts. Anchors carry `pt`, `h_in`, `h_out`, `smooth` and `radius`.

To recolor a selection, loop over `ctx.selection` and call `oma.set_fill` or `oma.gradient`. Press `G` afterward and you'll see native stops. To add a shadow, call `oma.set_effects` with a `Shadow` table, and the FX studio shows the same shadow.

To read pixels without feedback, call `oma.pixel` from inside `oma.map_pixels`. The source stays the same for the whole pass. Return alpha on purpose. Out-of-bounds reads are transparent black, so an edge kernel doesn't invent color.

To browse by category, open **Plugins > Manage plugins**, leave the dropdown on **All categories** and scroll through Studio starter. You should see twelve rows, one button per action, each labeled with its category and name (for example "Filters · Midnight duotone"). Switch the dropdown to **Filters** and only Midnight duotone remains. **Brushes** leaves Soft ink brush and Dry marker brush. **Behaviors** leaves Selection count and Document dimensions. The plugin's enable checkbox is above those rows, and a disabled plugin doesn't offer its buttons.

Pick the row that matches the artwork you have:

- Vector objects selected on the same layer, not hidden or locked: Effects, Gradients or Batch.
- A raster layer active in a Raster document: Filters, and Brushes before you paint.
- Nothing selected and you want new artwork: Icons or Patterns.
- A drag you haven't made yet: Tools, then **Activate tool**.
- A folder of files later on: Batch, from the shell, with `--command` set to the action id.

## The edge

`oma` isn't available while the manifest loads, so top-level code that calls it fails discovery. The VM has no globals that persist, no file handles and no network sockets, because those libraries aren't loaded. `oma.read_asset` stays inside the plugin folder. Hidden, locked and guide shapes aren't writable. A call that builds document edits commits as one Undo or not at all.

The category string doesn't grant a power the action never calls, and it doesn't relax a precondition. A filter without a raster layer fails its assert. An effect with an empty selection fails its assert. A brush doesn't become a document command because you filed it under Batch. The command line says so in one line: brush and palette actions run in the desktop Plugins menu, and batch commands have to edit documents. Canvas tools need a gesture, and the shell has no gesture to give them.
