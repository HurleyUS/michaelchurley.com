---
id: T137
title: One binary not three apps
slug: omadesign-0-5-8-one-binary-not-three-apps
excerpt: Design, Layout, Pixel, Photo, and Motion are personas in one Linux binary. The letters V, P, T, and B stay put. F1 lists the rest while the same .oma stays open.
tags: [omadesign, 0.5.8, personas]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-one-binary-not-three-apps/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-one-binary-not-three-apps/og.png
---

## The habit

A poster that needs type, a photograph, and a three-second move is three sittings in the Adobe set. Illustrator for the mark, Photoshop for the picture, After Effects for the move, and a round of exports between them so each app can see what the last one decided. Affinity's answer is StudioLink, and it is clever: Designer, Photo, and Publisher can hand work across without the export ritual, inside the suite you installed. You still learn where one app ends and the next begins. The file you double-click has a type. The tool letters reset at the boundary often enough that you hesitate.

What the hand wants is duller. `V` still selects. `P` is still the pen. `T` is still type. `B` is still the brush. The window you already have is the window you keep. Switching the job switches the tools, not the process.

## The constraint

Omadesign is one native binary on Linux. One launch, one dock icon, one `~/.local/bin/omadesign`. Personas are modes of that process: Design, Layout, Pixel, Photo, Motion. They share the key table, with gates where a tool does not exist. They share the Shortcut HUD and `F1`. A second process would mean a second undo stack and a file to throw over the wall every time the brief changed from vectors to pixels.

The document that holds the poster is one `.oma`. Tabs are documents, not apps. `Ctrl+N` and `Ctrl+O` open tabs in the same window. Persona changes do not write a sibling file and do not ask you to export a PDF just to keep going. Photo is the exception you have to keep straight: development settings live in a `.omaphoto` beside the camera file, and they enter the `.oma` when you Place in Design, as pixels. The persona is still the same binary.

## What landed

The manual's table is the map.

Design is a mark, a poster, a layout. First tools: Move `V`, Pen `P`, Rectangle `R`, Type `T`. It is the default persona.

Layout is a screen, a landing, a dashboard. Frame `F`, Rectangle `R`, Type `T`. Frames nest. Stack children, constraints, and frame export live here, in the same document as the drawing.

Pixel is painting or retouching. Brush `B`, Eraser `E`, Clone `J`, Wand `W`. Paint sits on a pixel layer. You add one from the Layers studio if the document started as vectors.

Photo is grading a photograph. Crop `C`, the develop sliders, Place in Design. The library browses a folder. Adjustments are Light, Color, and Detail. The original file stays the original file.

Motion is animating the artboard. Space plays, `K` sets keys, **File → Lottie** exports. The artboard you drew is the rest pose. Motion does not rewrite it. The clip is stored in the `.oma`.

Welcome sends you to the right room without a second install. **+ Vector** and the vector templates open into Design. **+ Raster** opens a blank pixel document. **+ Layout** opens frame starters. **+ Photo** opens the photo workspace. Motion has no empty-workspace button, because it starts from artwork that already exists. The funnel on the welcome browser filters by Vector, Raster, Layout, Photo, or Motion. One recent list. Files are `.oma`.

The HUD sits at the bottom in every persona that shows the canvas. Upper row follows the tool. Lower row is the letters. `Ctrl+/` hides it. `F1` opens the full shortcut list. Hold a modifier and the strip shows that modifier's chords. Tool letters that do not exist in the persona do nothing. Photo keeps Hand, Zoom, Crop, and Eyedropper. `V`, `P`, `T`, and `B` are the four the day-one hand asks for, and they are legal in Design and Pixel as the table defines them. `B` in a vector document still means Brush. You need a raster layer under it before paint sticks.

Chrome follows the desktop. Omarchy theme colors, the font from `omarchy font current` or fontconfig sans-serif, Phosphor Light icons. There is no separate light and dark switch inside the app. You are in one window the whole time.

## In the hand

Launch `omadesign`. Stay on the welcome screen long enough to see one browser. Click **+ Vector** or a blank size. You are in Design. Press `R`, then `T`, then `P`. Press `V` and move what you made.

Add a pixel layer. Switch to Pixel. Press `B` and paint. Press `E`. The layer stack is the same stack. The rectangle is still there. Press `Ctrl+Z` and you undo the stroke, in the same history as the rectangle, because it is one document.

Switch to Layout if the brief grew a screen. Press `F` and drag a frame over the artwork, or wrap a selection. The poster and the frame share the file. Export a frame from the File menu when you need a PNG of that screen. The `.oma` remains the master.

Open Motion when something should move. Select the type. Press `K`. Press Space. The playhead runs. Press Space again. Switch back to Design. The rest pose is the artboard. The keys are still in the file. `Ctrl+S` writes one `.oma`.

For a photograph, switch to Photo, open the camera file, grade it, **Save settings**, then **Place in Design**. You are back in the poster. The placed layer is an 8-bit develop. The RAW and the `.omaphoto` stay beside each other on disk for the next grade. Same binary. You did not export a TIFF from another application to get there.

Press `F1` in whichever persona you are in. The list is one list. The chords that persona cannot run are the ones its gate turns off. You do not load a second keymap.

## The edge

One binary does not mean every tool letter works in every persona, and it does not mean the RAW file is embedded in the poster. Photo keeps its settings in the sidecar until you place pixels. Motion will not start from an empty welcome button. There is no second process to alt-tab into for the pen, the brush, or the timeline. StudioLink's idea, suite tools in reach of each other, is the habit this window is built to satisfy with personas and one file.

Press `V`, then `P`, then `B`, in the same window. Press `F1` when a letter needs a name.
