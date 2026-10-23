---
id: R054-04
title: Present: prototype interactions and responsive HTML export
slug: omadesign-0-5-4-present-and-html-export
excerpt: "0.5.4 added Present to Layout. Click, Hover and Press trigger navigation, overlays and variant changes with Instant, Dissolve or Slide transitions, and a frame exports as standalone responsive HTML."
publishedAt: 2026-09-20T17:48:29Z
tags: [omadesign, 0.5.4, layout, prototyping]
coverImage: /blog/omadesign-0-5-4/omadesign-0-5-4-present-and-html-export/og.png
---

## The habit

A static mock shows what the design looks like. The client's next question is what happens when they tap something. You end up describing it in a comment, or wiring the same screens again in a separate prototyping tool.

The 0.5.0 HTML export was a plain snapshot. It showed the frame and did nothing when you clicked.

## The constraint

Prototype behavior had to live on the objects in the `.oma`, next to the design, so the screen and its interactions travel together.

Previewing had to leave the source alone. Testing a phone width in Present should not resize the frame you are designing.

The export also had to open in a browser on its own, as one file with embedded assets and working interactions. It is a prototype artifact, and I did not want it to pretend to be a website.

## What landed

**Interactions.** Select an object and add an Interaction.

- Triggers: Click, Hover, Press.
- Actions: Navigate, Back, Open overlay, Close overlay, Change variant.
- Transitions: Instant, Dissolve, Slide left, Slide right, with configurable duration.

Change variant needs a component instance. A Hover variant change restores the previous appearance when the pointer leaves.

**Present.** Choose Present to interact with the design. Switch viewport presets or enter a custom width to test responsive behavior. Present has its own viewport controls, so the source document does not change. Use the Back control, scroll the preview as needed, and press Esc to close it.

**Export.** Select a frame, use Export frame, and pick PNG, SVG or HTML. PNG and SVG export that frame's subtree. HTML produces a standalone responsive document with embedded assets and a small runtime for the supported prototype actions, including the referenced screens and variants.

**Fieldwork starter.** Fieldwork is an editable starter that demonstrates responsive layout, components and linked screens, so you have a working prototype to take apart. With nothing selected, it is in the Layout inspector as Open Fieldwork starter.

## In the hand

Open Fieldwork, or take two screens you already have. Select a button on the first screen and add an Interaction with a Click trigger, a Navigate action to the second screen, and Slide left. Put a Back action on the second screen. Choose Present, click through, then switch to a phone preset and click through again. Esc closes the preview.

Select the first frame and export it as HTML. Open the file in a browser and resize the window. The layout responds, and the navigation you wired works.

## The edge

Present covers the actions and transitions listed above and nothing more. It has no Smart Animate, spring physics, drag- or scroll-driven animation, conditional logic, forms or application data.

The HTML export is a design and prototype artifact. It does not include a CMS, an application backend or hosting. Browser output still needs a fidelity check against the native render, at more than one width, before you hand it to anyone.

Notes are in the [0.5.4 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.4) and the [Layout guide](https://github.com/michaelmonetized/omadesign/blob/master/docs/layout.md).
