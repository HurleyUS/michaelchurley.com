---
id: T023
title: Free transform
slug: omadesign-0-5-8-free-transform
excerpt: "Ctrl+T puts the selection into Move with scale and rotation handles ready. Live text stays live. Shape parameters stay editable. The command is also under Object."
publishedAt: 2026-09-06T10:30:01Z
tags: [omadesign, 0.0.1-alpha, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-free-transform/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-free-transform/og.png
---

## The habit

`Ctrl+T` is free transform in Photoshop, and your hand hits it even when you're holding a vector tool. A box appears. The corners scale, the area just outside them rotates, Enter commits and Esc cancels. In Photoshop that commit usually produces pixels, which is fine because the layer was pixels already.

In Illustrator it's the bounding box you usually already have, plus a separate **Free Transform** tool for scaling, rotating, reflecting or shearing without hunting for handles. The risky command next door is Expand. Expand turns a live rectangle, live type or a live stroke into paths. People trigger it from a default button or a script, and the headline is outlines for good. Undo only helps until the file is saved, closed and reopened by someone else.

Affinity has a similar split. The transform panel and selection handles edit the object as it is, and convert-to-curves is a separate, explicit command. You can scale a text frame all day and still change the word.

Omadesign has to support the same shortcut and handles without a silent expand. `Ctrl+T` should mean "give me scale and rotation on what I selected." It shouldn't bake the object into paths to make the handles easier to implement.

## The constraint

In one `.oma`, objects stay the kind of object you drew for as long as possible, and undo is one step. A transform that also converted to paths would be two edits under one shortcut, and `Ctrl+Z` would become guesswork. Either the shortcut converts, and undo has to reverse the conversion and the transform together, or it doesn't convert. I chose the second. Live text stays text. A rectangle keeps its rectangle parameters, including corner radius. A polygon keeps its side count. You can still edit those values in Transform after scaling.

Move already has eight scale handles and a rotation handle above the box, so free transform doesn't need a second geometry engine. `Ctrl+T` switches the current selection into Move with those handles ready. The Object menu has the same command for when your hand is on the mouse. `F1` lists it with the other shortcuts, and the HUD can show it as a Ctrl command while Ctrl is held, without running it.

Reshape covers edits that aren't a plain scale or rotation. Distort, skew, perspective and a nine-handle warp mesh are under **Object > Reshape**. The first handle you move there converts live text and parameter shapes to paths, because a warped shape isn't a rectangle anymore. Undo restores the original. Reshape is allowed to convert because the operation needs paths. Free transform isn't, because scaling doesn't. The rule is to do the least destructive thing the handle needs.

The shortcut is `Ctrl+T`. Bare `T` is the Type tool. The shortcut table lists free transform as Ctrl plus T with Shift up, and adding Shift doesn't call a second transform.

## What landed

**Free transform** is `Ctrl+T`. It switches the current selection into Move with the scale handles and rotation handle ready. The same command is under **Object**. It keeps live text and shape parameters editable. That's the manual's wording, and it's how the command behaves. The menu entry and the F1 line landed with the transform work.

When you press it:

- The tool becomes Move, `V`, even if you were in the Pen or Type tool.
- Eight handles scale the selection.
- The handle above the box rotates it.
- Shift constrains the move if you drag the object, and the HUD shows the modifier while you hold it.
- Alt-drag still clones, because you're in Move and that's how Move clones.
- Corner dots still round a rectangle, because those are Move's dots.
- Type stays type. Double-click to edit the text after you scale the frame.
- Transform still shows the object's parameters, such as position, size, rotation and corner radius.

Drag a handle and the object updates. `Ctrl+Z` undoes that drag as one step. Reshape is the mode that uses Enter to finish and Esc to cancel the current drag. Free transform uses Move's undo.

Object > Reshape is still one menu away for distort, skew, perspective and the warp mesh. The first handle you move on live text or a parameter shape converts it to paths. That boundary is what makes `Ctrl+T` safe to press.

## In the hand

Select a rectangle and a text object.

```text
V
```

Shift-click so both are selected, or Shift-drag a box around them.

```text
Ctrl+T
```

The handles appear. Drag a corner and both objects scale. Drag the handle above the box and both rotate around the selection. Press `Ctrl+Z` once and the rotation is undone. Press it again and the scale is undone. Two edits, two undos.

Click only the text and press `Ctrl+T`. Scale it wide, then double-click it. The caret is in the text, and you can change a word. Character studio still shows the font, size, tracking, leading and OpenType features, because scaling didn't turn the text into outlines.

Click only the rectangle and drag a corner dot to change the radius. Transform still lets you type the radius as a number, because `Ctrl+T` didn't remove that field. Press `A` for the Node tool only when you're ready to convert. Until then, the rectangle stays a rectangle.

Try the menu path once:

```text
Object → Free transform
```

You get the same handles and the same Move tool. Press `P` to go back to the Pen. The selection keeps its new geometry, because changing tools doesn't revert the scale.

To see the difference with Reshape, Alt-drag a copy. Choose **Object > Reshape > Distort** and drag a cage handle. The copy converts to paths, and `Ctrl+Z` restores it. That undo is why conversion is allowed there. Go back to the original and press `Ctrl+T` again. It's still a parameter shape, because you never reshaped it.

Place a photo in the design and press `Ctrl+T`. It scales and rotates with the same handles. The RAW file on disk isn't touched. The layer in the `.oma` is the placed image, and Move handles it, not Reshape.

Save with `Ctrl+S` and reopen. The text is still text, the corner radius is still a radius, and the rotation is still there.

## The edge

Free transform won't expand live text or turn a parameter shape into paths. If the type has become outlines, someone used **Object > Convert to path**, moved the first handle in Reshape, or made a node edit that converted the shape. Undoing those commands in the same session restores the live object.

`Ctrl+T` doesn't start the warp mesh, distort cage, skew or perspective. Those are under **Object > Reshape**. Enter and Esc finish or cancel a reshape drag. A free-transform scale doesn't need either to apply.

Bare `T` doesn't free-transform. It selects the Type tool, and a click places a text object. The transform shortcut is Ctrl and T together.

A placed photograph doesn't become a vector with this shortcut. It only scales and rotates. If the image came from Photo, Place stored 8-bit pixels in the document and left the RAW and `.omaphoto` outside it.
