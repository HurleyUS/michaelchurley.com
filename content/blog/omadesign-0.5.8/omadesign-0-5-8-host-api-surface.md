---
id: T126
title: Host API surface
slug: omadesign-0-5-8-host-api-surface
excerpt: API 1 is a short list of oma calls. Shapes, fills, effects, brushes, palettes, SVG, pixels, and a status message. Each run gets a fresh Lua VM.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-host-api-surface/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-host-api-surface/og.png
---

## The habit

ExtendScript hands you the application. You can walk the object model, open files, and call almost anything the panel can call, which is why a script from 2011 still reaches into a palette that moved. Photoshop's scripting surface is the same idea with a different dictionary. Affinity's macros record gestures more than they offer a stable set of calls. When the surface is "the whole app," every internal rename is a broken script, and every script is one `require` away from reading a path you did not mean to hand it.

What you actually call, job to job, is smaller. Add a shape. Move it. Replace its geometry. Set a fill or a gradient. Set the effect stack. Drop in SVG paths. Read and write pixels. Load a brush. Save a palette. Say something in the status bar. You want those calls to take native values, so the result is editable in the same inspectors as a shape you drew with `R` and `G`.

## The constraint

The plugin runs on a worker, in a fresh Lua 5.4 VM, against a snapshot. It cannot hold a pointer into the live studio. Persistent memory has to live in the `.oma` or in the preset the host stores, because the VM is thrown away when the action returns. `oma` exists while `run` executes. It does not exist while the host is reading the manifest, so top-level code can only return the table and define functions.

The calls have to produce native document commands, not a private scene graph. A gradient a plugin builds has to open in the gradient editor. A shadow has to open in FX. A path has to take nodes under `A`. A compound path has to stay a compound path. Pixel writes have to be one undo. The surface stays on that list so a plugin cannot grow a back door into the file system or the network by calling something that looked convenient.

## What landed

API version is 1. The manifest sets `api = 1`. `ctx.api` reports the same number. `run(ctx, params)` receives the document width, height, and name, the active layer index or nil, the selection, the layers, and the gesture or nil.

Selection entries carry `layer`, `id`, `name`, `geom`, `style`, and `rotation`. Layer entries carry `index`, `name`, `locked`, `visible`, and `raster` as `{width, height}` or nil. Gesture points are `{x, y}` in document coordinates, plus `alt`, `shift`, and `ctrl`. Lua arrays start at 1. Layer indexes and pixel coordinates start at 0. Shape ids are integers. Geometry and fills use the native tagged JSON. `omadesign --inspect document.oma` prints a real document if you need to see the tags. The source types live in `src/geom.rs`, `src/document.rs`, and `src/filter.rs`.

The calls:

`oma.add_shape` returns `layer, id`. Kinds are `rect`, `ellipse`, `line`, `path`, and `geometry`. Rectangles take `radius`. Paths take `points` and optional `closed`. Geometry takes a native `geom` table, including a path with anchors, handles, `smooth`, and `radius`. The host creates a vector layer when it needs one.

`oma.translate(layer, id, dx, dy)` moves a shape. `oma.set_geometry` replaces geometry, including an editable compound. `oma.remove` deletes a vector shape. `oma.set_fill` takes a hex color, `"none"`, or a native fill table.

`oma.gradient(colors, kind)` builds a native multistop fill. Kind is `linear`, `radial`, `conic`, or `shape`. Stops stay editable in the gradient editor. `oma.set_effects` replaces that shape's effect stack with tagged tables: Blur, Shadow, InnerShadow, Offset, Morphology, Saturate, Brightness, Contrast, Invert, HueRotate, ColorMatrix, Turbulence, Displacement. `oma.color(hex)` returns `{r, g, b, a}` with channels 0 to 255, which is what shadow colors want.

`oma.brush` activates a Raster preset. `oma.palette(name, colors)` adds a named palette to the personal library. `oma.read_asset(relative_path)` reads a UTF-8 file inside the plugin folder. `oma.svg(svg_text, x, y, width)` imports paths as editable artwork and keeps the aspect. `oma.pixel(layer, x, y)` returns source `r, g, b, a`, or transparent black out of bounds. `oma.map_pixels(layer, callback)` replaces pixels. The callback is `function(r, g, b, a, x, y)` and returns four channels. `oma.message(text)` sets the status line.

Parameters on the action are `number`, `text`, `color`, and `boolean`, each with `id`, `label`, and a typed `default`. Numbers may set `min` and `max`. Colors are `#RRGGBB` or `#RRGGBBAA`. The host validates them for the desktop and the command line. Unknown parameters are rejected.

Each run is a new VM. Lua globals do not survive. Keep artwork in the document and presets in the plugin. The standard libraries you get are table, string, math, utf8, and the basic functions. `require` is absent, so a plugin is one `main.lua` plus assets read through `oma.read_asset`.

## In the hand

Save a folder with `main.lua` that returns `api = 1`, a stable id, a name, a version, and one action. The id is letters, digits, dots, hyphens, underscores, no leading dot. Action ids are unique inside the plugin. The version is yours, not the app's.

The guide's color-dots example is the smallest pattern. `run` loops and calls `oma.add_shape` with `kind = "ellipse"`, a position, a 12 pixel size, the color parameter, and the name Dot. `oma.message` tells you the circles are editable. Install the folder from **Plugins → Manage plugins → Install folder…**. Press **Run**. Press `V` and move one dot. Press `Ctrl+Z` and the whole row leaves.

To see geometry tags, draw a curve with `P` and run `omadesign --inspect` on a saved `.oma`. The path table you read is the table `kind = "geometry"` accepts. Anchors carry `pt`, `h_in`, `h_out`, `smooth`, and `radius`.

To recolor a selection, loop `ctx.selection` and call `oma.set_fill` or `oma.gradient`. Press `G` afterward. The stops are native. To shadow it, call `oma.set_effects` with a `Shadow` table. The FX studio shows the same shadow.

To read pixels without feedback, call `oma.pixel` from inside `oma.map_pixels`. The source stays stable for the whole pass. Return alpha on purpose. Out-of-bounds reads are transparent black, so an edge kernel does not invent color.

## The edge

`oma` is not available while the manifest is loading. Top-level code that calls it fails discovery. The VM does not keep globals, file handles, or a network socket, because those libraries are not there. `oma.read_asset` stays inside the plugin folder. Hidden, locked, and guide shapes are not writable. A call that builds document edits still commits as one Undo or not at all.

Write the manifest, install the folder, and press **Run**.
