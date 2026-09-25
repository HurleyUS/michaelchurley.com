---
id: R053-01
title: Paste anything onto the canvas
slug: omadesign-0-5-3-paste-onto-the-canvas
excerpt: "0.5.3 fixed external paste. Ctrl+V takes screenshots, browser images, copied image files, text and SVG, and drops them at the center of the canvas you are looking at, as one Undo."
publishedAt: 2026-09-20T14:37:28Z
tags: [omadesign, 0.5.3, clipboard]
coverImage: /blog/omadesign-0-5-3/omadesign-0-5-3-paste-onto-the-canvas/og.png
---

## The habit

Take a screenshot, switch to the design app, and press Ctrl+V. That is one of the most common actions in any creative tool. Before 0.5.3 it did not work reliably in Omadesign when the content came from outside the app.

On Omarchy there is a second habit. Alt+V opens the clipboard-history picker, and you pick the image you copied three copies ago. That has to land too.

## The constraint

External paste has to decide what the content is. A screenshot is pixels. A block of text should become editable text. SVG source should become vectors you can edit.

It also has to decide where the content goes. If you panned and zoomed to the corner of a second artboard, the paste should appear where you are looking instead of at the document origin off-screen.

Internal copies are different. When you copy an object inside Omadesign and paste it, it should go back to its original position, even on another artboard. If you are editing text, paste should insert into that text instead of creating a new layer.

## What landed

Ctrl+V now accepts:

- screenshots
- images copied from a browser
- image files copied in a file manager
- plain text
- SVG source code and copied SVG files

External content appears at the center of the visible canvas, accounting for pan and zoom. Images become pixel layers. Text becomes an editable text layer. SVG becomes vector artwork.

Objects copied inside Omadesign paste at their original positions. Pasting while editing text inserts into the active text. Each paste is one Undo step.

Command+V forwarding through Omarchy's universal paste binding uses the same paste path. So does the Alt+V clipboard-history picker. Its Shift+Insert events now work with image-only clipboards and with leftover picker modifiers.

The work is [PR #77](https://github.com/michaelmonetized/omadesign/pull/77), released through [PR #78](https://github.com/michaelmonetized/omadesign/pull/78). 0.5.3 was built on the 0.5.2 nightly, so it is also the first tagged release with the reworked cloud collaboration.

## In the hand

Grab a screenshot with your usual Omarchy binding. Switch to Omadesign, pan off to the side, and press Ctrl+V. The screenshot shows up as a new pixel layer in the middle of your view. Press Ctrl+Z and it is gone in one step.

Copy a paragraph from a browser and paste it. You get a text layer you can double-click and edit. Copy an SVG icon's source and paste it. You get vector shapes.

Validation for this one was hands-on. 415 application tests and 4 native input-bridge tests passed. Real clipboard checks covered Wayland, X11, copied files, screenshots, SVG, text, history paste, save, and Undo/Redo. Both final Linux packages passed native WGPU checks on ARM64 and x86_64.

## The edge

Paste decides the layer type and the position. It does not guess a layout. You still move, scale and nest the pasted layer yourself.

After updating, relaunch. A window that is already open is still running the old binary. Run `omadesign --version` or `~/.local/bin/omadesign --version` to confirm 0.5.3 or later.

```sh
curl -fsSL https://omadesign.app/install | sh
```
