---
id: R054-03
title: Layout goes responsive: Stack, Wrap, Grid, breakpoints, components
slug: omadesign-0-5-4-responsive-layout
excerpt: "0.5.4 grew Layout from frames and a vertical stack into Stack, Wrap and Grid with Fixed/Hug/Fill sizing, Phone and Tablet breakpoints, document-local components with variants, and color and number variables."
publishedAt: 2026-09-20T17:47:29Z
tags: [omadesign, 0.5.4, layout, components]
coverImage: /blog/omadesign-0-5-4/omadesign-0-5-4-responsive-layout/og.png
---

## The habit

You design a card once. Then you need it in a row of three on desktop, stacked on phone, and with the title a size smaller on tablet. Then you need twelve of them, and a change to the button color should reach all twelve.

In 0.5.0, Layout could nest frames, pack a stack with gap and padding, and pin children with constraints. That handles one screen at one width. It does not handle the card at three widths, or twelve linked copies of it.

## The constraint

Everything had to stay in the `.oma`. Components, variables, breakpoint rules and overrides save with the document and reopen the way you left them.

Breakpoints could not destroy the base design. If you resize a frame down to phone and back, the desktop settings you authored have to come back.

Instances had to keep local edits. A text change on one card should survive the next time someone edits the main component's color.

## What landed

**Arrangement.** Select a frame and enable Arrange children automatically, or select objects and press Shift+A. Choose Stack, Wrap or Grid. Stack and Wrap flow horizontally or vertically. Grid uses equal-width columns. Set alignment, distribution, gaps, and padding, with independent top, right, bottom and left values.

**Sizing.** Width and height size independently:

- **Fixed** keeps its size unless constraints or stretching control that axis.
- **Hug** measures its contents. Use Hug height on paragraphs so wrapping pushes the next object down.
- **Fill** takes available parent space, shared with siblings, within min/max limits.

Absolute position takes an overlay out of the stack flow, with Min, Max, Stretch, Center or Scale constraints. Clip content clips descendants at the frame edge. Lock aspect ratio makes height follow the resolved width.

**Breakpoints.** Under Breakpoint overrides, add a Phone or Tablet rule and set its maximum viewport width. Rules can change layout mode, direction, gap, padding and grid columns on frames, and font size on text. Returning to desktop width restores the authored base settings. The inspector's Phone, Tablet and Desktop buttons resize the actual selected frame.

**Components.** Select a frame and choose Components > Create component. Insert instance makes a linked copy. Edit the main and the instances follow. Text and appearance edits on an instance become local overrides that survive later edits to the main. Add variant on the main component creates a new definition, and instances switch between variants with a picker. Reset overrides and Detach are both there.

**Variables.** Under Design variables, add a Color or Number. Bind colors to Fill or Stroke, and numbers to Gap, Padding or Corners. Change the variable and linked objects update. Local value unlinks one property. Deleting a variable keeps the current appearance and detaches its references.

Image fills also landed, with Fill, Fit or Stretch and focal-point controls, embedded in the document.

## In the hand

Start from Open Fieldwork starter in the Layout inspector with nothing selected. It is an editable example with responsive layout, component variants and linked screens. Work on a copy.

Or build your own. Draw a frame with F, drop three rectangles in it, press Shift+A, and switch to Wrap. Set the children to Fill width. Add a Phone rule that flips direction to vertical. Click Phone, then Desktop, and the base layout comes back.

Turn one card into a component, insert two instances, change the text on one, then recolor the main. The recolor propagates, and the text override stays.

## The edge

I listed these limits in the release:

- Components and variables belong to one document. There are no shared remote libraries and no variable modes.
- Grid uses uniform columns, without spanning or custom track sizing.
- Breakpoints override layout and type size. They do not cover every visual property.
- Text is a single styled run, with no rich inline styling.
- There is no native Figma or Framer import or round-trip.

The full walkthrough is in the [Layout guide](https://github.com/michaelmonetized/omadesign/blob/master/docs/layout.md).
