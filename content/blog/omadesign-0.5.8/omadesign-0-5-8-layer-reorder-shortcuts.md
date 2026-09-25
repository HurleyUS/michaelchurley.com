---
id: T022
title: Layer reorder shortcuts
slug: omadesign-0-5-8-layer-reorder-shortcuts
excerpt: "Select a layer row, then Ctrl+[ or Ctrl+] to reorder it. Add Shift to send it to the back or front of its group. Each reorder is one undo."
publishedAt: 2026-09-20T17:50:29Z
tags: [omadesign, 0.5.4, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-reorder-shortcuts/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-reorder-shortcuts/og.png
---

## The habit

You reorder layers by dragging and with brackets. Illustrator uses `Ctrl+]` and `Ctrl+[` to step an object forward and backward, and `Ctrl+Shift+]` and `Ctrl+Shift+[` to send it to the front or back. Photoshop uses the same shortcuts on layers, and Affinity matches them closely enough that you don't have to look down. The menu says Arrange, Bring Forward, Send Backward, Bring to Front, Send to Back. Most people use the menu once and never again.

Dragging depends on the insertion line. You grab the layer name, not the eye icon, and drop it on a line between two rows. Drop it on a row instead and you might have meant "nest in this group," which is a different action. Good panels show a line for between and a highlight for inside. Bad panels guess, and you end up with a logo nested in a button group that takes three drags to undo.

Groups make the shortcuts risky if they ignore structure. Send to Front on a child should mean the front of its group, not the front of the whole poster, unless you asked for that. Otherwise every "front" pulls the icon out of the button and paints it over the footer, and you undo and start dragging instead.

Undo has to reverse one reorder, not a reorder plus a re-sort plus a renamed layer. `Ctrl+Z` returns the stack to its previous order.

## The constraint

There's one layer stack in one `.oma`, and personas don't keep private stacks. A rectangle drawn in Design, a frame drawn in Layout and a pixel layer added for painting are all rows in the same tree. Reordering changes draw order. It doesn't convert a vector to pixels or write a second file.

The shortcuts have to be Illustrator's, because that's the muscle memory I said Omadesign would support. The shortcut table maps them as:

- `Ctrl+]` brings the target forward one step.
- `Ctrl+[` sends it backward one step.
- `Ctrl+Shift+]` sends it to the front.
- `Ctrl+Shift+[` sends it to the back.

The manual binds the Shift variants to the group you're in. Select a layer row and `Ctrl+[` and `Ctrl+]` reorder it. Add Shift and it goes to the back or front of its group, without jumping out of the group to the document root. That keeps a button's label behind the button shape and inside the button group.

When the selection came from the canvas, the same shortcuts mean object stacking. Click an object with Move and the brackets go back to stacking. The app can't use one meaning for "whatever was selected somewhere," so the target is either the layer row or the canvas object, and you choose by where you click. Either way it's one undo.

Dragging is the mouse version of the same edit. An insertion line reorders, and the center of a group or Layout frame nests. Groups move with their children, so a parent never moves and leaves its children at the old index. Each reorder is one undo step. A drag that nests is also one step, and undo restores the previous parent.

Stack children in Layout reads layer order, so reordering is how you change an auto-layout's visual order. The shortcut and the insertion line are the controls, and the stack has no hidden index of its own.

## What landed

Select a layer row. `Ctrl+[` moves it backward and `Ctrl+]` moves it forward. `Ctrl+Shift+[` sends it to the back of its group, and `Ctrl+Shift+]` sends it to the front of its group. The manual's Keys line lists Front as `Ctrl+Shift+]` and Back as `Ctrl+Shift+[`.

Drag a layer name onto an insertion line to reorder without the keyboard. Groups move with their children. Drag onto the center of a group or Layout frame to nest. Shift-click object rows to select several. It's still one undo.

Click an object on the canvas and the bracket shortcuts go back to object stacking. Click the layer row again when you want to reorder. The key does the reorder, and the HUD only shows the shortcut while Ctrl is held.

Hidden and locked objects stay out of canvas selection matching. A reorder doesn't clear a lock or show a hidden row.

Dragging a placed image layer onto the center of a Layout frame converts it to an image fill and keeps its position, rotation, opacity, blend and effects. An existing layer mask gets baked into the image alpha. Undo restores the image layer and its editable mask. That drop nests, while the insertion line reorders.

## In the hand

Draw three rectangles.

```text
R
```

Drag three times, then open the layer list. The last rectangle you drew is at the top of its container. Click that row, not the canvas.

```text
Ctrl+[
```

It steps backward, and the middle rectangle now paints above it. Press `Ctrl+[` again and it's at the back of its group or layer.

```text
Ctrl+Shift+]
```

It jumps to the front of its group. Undo once:

```text
Ctrl+Z
```

The order from before the front-send is back. The original draws stay unless you keep stepping back, because each reorder was its own step. Redo is `Ctrl+Shift+Z`.

Drag the layer name and a line appears between rows. Dropping on the line reorders. Drag the same name onto the middle of a group row and it nests. `Ctrl+Z` takes it back out. If the group's children moved with it, they stay with it, so you don't reattach them one by one.

Now click one of the rectangles on the canvas with `V` and press `Ctrl+]`. That stacks the selected object, because the target is the canvas selection. Click the layer row and press `Ctrl+]` again, and you're reordering inside the list. That's the switch the manual describes, and the click chooses.

Turn on **Stack children** on a Layout frame and reorder the children with `Ctrl+[`. The visual stack follows the layer order, and the gap and padding stay as they were.

Save.

```text
Ctrl+S
```

Reopen the `.oma` and the order is the one you left.

## The edge

Shift-bracket sends a row to the back or front of its group. It doesn't move the object out of the group to the document root. Drag onto the center of a parent when you want to nest, and onto the insertion line when you want to reorder among siblings. They're different edits, and undo knows which one you did.

While the target is a canvas selection, the brackets stack objects instead of reordering the list. If you wanted the layer list, click the row. The app doesn't guess.

Each reorder is one undo step, never bundled with a rename, a visibility toggle or a convert-to-path. A rectangle you only reordered is still a rectangle, and live text you only reordered is still live text.

A group moves with its children, so you can't reorder the group and leave the children at the old position. To move one child on its own, double-click into the group, or ungroup with `Ctrl+Shift+G`, then reorder.
