---
id: T022
title: Layer reorder shortcuts
slug: omadesign-0-5-8-layer-reorder-shortcuts
excerpt: "Select a layer row, then Ctrl+[ or Ctrl+] to reorder it. Add Shift to send it to the back or front of its group. Each reorder is one undo."
tags: [omadesign, 0.5.8, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-reorder-shortcuts/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-reorder-shortcuts/og.png
---

## The habit

You reorder layers with a drag, and you reorder them with brackets. Illustrator uses `Ctrl+]` and `Ctrl+[` to step an object forward and backward, and `Ctrl+Shift+]` and `Ctrl+Shift+[` to send it to the front or the back. Photoshop uses the same chords on layers. Affinity matches them closely enough that your hand does not look down. The menu says Arrange, Bring Forward, Send Backward, Bring to Front, Send to Back. You use the menu once, then you never use it again.

The drag habit is the insertion line. You grab the layer name, not the eyeball, and you drop it on a line between two rows. Drop it on the row itself and you might have meant "nest in this group," which is a different drop. Good panels show a line for between and a highlight for inside. Bad panels guess, and you nest a logo inside a button group you then have to undo in three drags.

Groups make the chords dangerous if they ignore structure. Send to Front on a child should mean the front of its group, not the front of the whole poster, unless you asked for the whole poster. Otherwise every "front" rips the icon out of the button and paints it over the footer. You undo, you try again, you start dragging.

Undo has to be one reorder, not "the reorder plus a resort plus a renamed layer." `Ctrl+Z` returns the stack to the previous order. That is the whole contract.

## The constraint

One layer stack in one `.oma`. Personas do not keep private stacks. A rectangle you drew in Design, a frame you drew in Layout, and a pixel layer you added for paint are rows in the same tree. Reorder changes draw order. It does not convert a vector into pixels and it does not write a second file.

The chord has to be the Illustrator chord, because that is the hand this studio said it would meet. The shortcut table maps them as:

- `Ctrl+]` brings the target forward one step.
- `Ctrl+[` sends it backward one step.
- `Ctrl+Shift+]` sends it to the front.
- `Ctrl+Shift+[` sends it to the back.

The manual binds the Shift variants to the group you are inside. Select a layer row. `Ctrl+[` and `Ctrl+]` reorder it. Add Shift and it goes to the back or the front of its group. It does not leap out of the group into the document root. That is the constraint that keeps a button's label behind the button shape and in the button group.

The same chords mean object stacking when the selection came from the canvas. Click an object with Move and you have returned the brackets to stacking. The app cannot have one meaning for "whatever was selected somewhere." The target is the layer row, or the target is the canvas object. You switch target by where you click. One undo either way.

Drag is the mouse form of the same edit. An insertion line reorders. The center of a group or a Layout frame nests. Groups move with their children, so you do not reorder a parent and leave the children behind on the old index. Each reorder is one undo step. A drag that nests is that one step too, and undo restores the previous parent.

Stack children in Layout reads layer order. Reorder is how auto-layout changes visual order. The shortcut and the insertion line are the controls. The stack does not keep a secret index.

## What landed

Select a layer row. `Ctrl+[` moves it backward. `Ctrl+]` moves it forward. `Ctrl+Shift+[` sends it to the back of its group. `Ctrl+Shift+]` sends it to the front of its group. The manual's Keys line prints Front as `Ctrl+Shift+]` and Back as `Ctrl+Shift+[`. This is the behavior in 0.5.8. The chords are older than the welcome-screen work in this release. They are the chords the binary still ships.

Drag a layer name onto an insertion line to reorder without the keyboard. The line is the target. Groups move with their children. Drag onto the center of a group or a Layout frame to nest. Hold Shift and click object rows to select several. The step is still one undo.

Click an object on the canvas and the bracket chords go back to object stacking. Click the layer row again when you want reorder. The key performs the reorder. The HUD only shows the chord while Ctrl is held.

Hidden and locked objects stay out of canvas selection matching. A reorder does not clear a lock and does not show a hidden row.

Dragging a placed image layer onto the center of a Layout frame converts it to an image fill and keeps position, rotation, opacity, blend, and effects. An existing layer mask bakes into the image alpha. Undo restores the image layer and its editable mask. That drop nests. The insertion line reorders.

## In the hand

Draw three rectangles.

```text
R
```

Drag three times. Open the layer list. The last one you drew is at the top of its container. Click that row. Do not click the canvas.

```text
Ctrl+[
```

It steps backward. The middle rectangle paints above it. Press `Ctrl+[` again. It is at the back of the group or the layer it lives on.

```text
Ctrl+Shift+]
```

It jumps to the front of its group. One undo:

```text
Ctrl+Z
```

The order before that front-send is back. You did not undo the original draws unless you keep stepping. Each reorder was its own step. Redo is `Ctrl+Shift+Z`.

Drag the layer name. A line appears between rows. Drop on the line. That is a reorder. Drag the same name onto the middle of a group row. That is a nest. `Ctrl+Z` lifts it back out. If the children came with the group, they still come with the group. You do not reattach them one by one.

Now click one of the rectangles on the canvas with `V`. Press `Ctrl+]`. You are stacking the selected object, because the target is the canvas selection. Click the layer row again. Press `Ctrl+]`. You are reordering inside the list. The two behaviors are the switch the manual describes. Use the click to choose.

Turn on **Stack children** on a Layout frame and reorder the children with `Ctrl+[`. The visual stack follows the layer order. Gap and padding stay. You did not redraw the frame.

Save.

```text
Ctrl+S
```

Reopen the `.oma`. The order you left is the order you get. The insertion line did not invent a different stack on load.

## The edge

Shift-bracket sends the row to the back or front of its group. It does not promote the object out of the group to the root of the document. Drag onto the center of a parent when you mean to nest. Drag onto the insertion line when you mean to reorder among siblings. The two drops are different edits. Undo knows which one you did.

The brackets do not reorder while the target is a canvas selection. They stack. If you wanted the layer list, click the row. The feature refuses to guess.

Each reorder is one undo step. It is not bundled with a rename, a visibility toggle, or a convert-to-path. A rectangle you only reordered is still a rectangle. Live text you only reordered is still live text.

A group moves with its children. You cannot reorder the group and leave the children at the old position in the tree. If you need one child to move alone, double-click into the group, or ungroup with `Ctrl+Shift+G`, then reorder.

Click the layer row. Press `Ctrl+]` to step it forward. Press `Ctrl+Shift+]` to put it at the front of its group.
