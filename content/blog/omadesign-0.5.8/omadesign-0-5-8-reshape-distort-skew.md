---
id: T042
title: Reshape distort skew
slug: omadesign-0-5-8-reshape-distort-skew
excerpt: Object → Reshape opens Distort, Skew, Perspective, or a nine-handle Warp mesh. Shift constrains. Ctrl reverses snapping. Enter finishes. The first handle you move converts live text and parameter shapes to paths.
tags: [omadesign, 0.5.8, reshape]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-reshape-distort-skew/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-reshape-distort-skew/og.png
---

## The habit

Free transform rotates and scales. Sometimes the poster needs a skew, a fake perspective on a plane, a distort that pulls one corner, or a mesh warp that bends a wordmark like a flag. Illustrator splits these across Free Transform, Shear, and Envelope Distort. Affinity puts them on a node mode or a warp group. Photoshop's Free Transform covers scale, rotate, skew, distort, and perspective on pixels, and you learned the modifier keys there even if you do not remember the names.

The part you care about is the cage. Handles appear. You drag one. The artwork follows. Shift keeps the drag straight. Enter commits. Esc bails out of the drag you are in the middle of. If Esc committed a mess, you would stop using Esc, and Esc is the key that has to stay safe.

The other part is the conversion. A live rectangle and a live headline do not have a mesh. The first real drag turns them into paths. You want that to happen when you move a handle, not when you merely open the command and look. And you want undo to bring the rectangle back, and the text back, because opening warp to "see what it looks like" is normal and should not be a trap.

Photographs are the boundary you already understand from Photoshop. A placed photo warps as pixels there. In a vector studio, a warp that silently rasterized the photo would be a different command. If the tool does not warp photos, it should leave them on move, scale, and rotate, the tools that already work.

## The constraint

Reshape works on vector artwork in Design. The cage is a mode, not a second document. The inspector switches modes and finishes the edit, so Distort, Skew, Perspective, and Warp mesh are one menu and one place to change your mind. You do not export a mesh to a plugin and import a path.

The mesh has nine handles. That is the cage you drag.

Each completed drag is one undo step. You can pull a corner, release, pull another, and Ctrl+Z only the second pull. Esc cancels the drag you have not completed. If no drag is active, Esc leaves the mode. You get out without a phantom edit. Changing tools, documents, selections, or personas leaves the cage as well. You cannot strand a warp in progress by clicking Layout.

Shift constrains the handle the way Shift constrains everything else you drag. Ctrl reverses snapping for that drag. Snapping is still Ctrl+Shift+; as a toggle. The hold-Ctrl rule is the temporary one, and reshape uses it so a handle can ignore a guide without you turning snapping off for the whole document.

The first moved handle converts live text and parameter shapes to paths. Looking at the cage does not. Undo restores the original form. Stroke widths stay uniform. A warp that scaled the stroke with the distortion would turn a 4 pixel line into a wedge, and the poster would look like a raster filter. Radial gradients stay radial. A linear gradient on rotated artwork maps from the pose the art is actually in, so the fade does not slide off the skewed mark.

Placed photographs keep Move, scale, and rotate. Reshape does not take them. One less surprise raster in the `.oma`.

## What landed

Select vector artwork in Design. Choose Object → Reshape, then Distort, Skew, Perspective, or Warp mesh. The cage appears. Drag a handle. The inspector can switch modes while you are in the edit, and it can finish the edit. You are not locked to the mode you entered if the skew should have been perspective.

Nine handles on the mesh. Drag the handle that sits on the part of the cage you want to bend. That is the whole mesh: nine grips, no denser grid hiding under them.

Shift constrains the handle's movement. Ctrl, held during the drag, reverses snapping. Release Ctrl and snapping returns to whatever Ctrl+Shift+; had set.

Enter finishes. Done in the inspector finishes too. Esc cancels the current drag and restores it. Esc with no drag active leaves the mode. Each drag you complete is one undo. Ctrl+Z removes that drag. The earlier drags stay until you undo those too.

The first handle you actually move converts live text to paths and converts parameter shapes to paths. A rectangle becomes a path. A headline becomes paths. Undo of that edit restores the original form. The words come back. The rectangle's parameters come back. If you only opened Reshape and left with Esc, you never moved a handle, and you never paid that conversion.

Stroke width stays uniform across the warp. Radial gradients stay radial. On rotated artwork, a linear gradient maps from the correct pose, so the endpoints follow the art you skewed.

Placed photographs stay on move, scale, and rotate. Free transform, Ctrl+T, keeps live text and shape parameters editable. Reshape converts, and only after a handle moves. Use Ctrl+T when the text has to stay text.

## In the hand

Set a headline with T. Select it with V. Choose Object → Reshape → Warp mesh. Look at the nine handles. Press Esc without dragging. You leave the mode. Double-click the headline. The caret still works. The type is type.

Open Warp mesh again. Drag the middle handle on the top edge. That is the first moved handle. The text converts to paths. Bend until the flag shape is right. Hold Shift if a handle should move straight. Hold Ctrl if a guide is stealing the handle. Enter to finish.

Ctrl+Z. The headline is text again if that drag was the conversion. That is the point of one undo restoring the original form. Redo with Ctrl+Shift+Z or Ctrl+Y if the warp was right and your hand was ahead of your judgment.

Try Skew on a rectangle that is still a parameter shape. Drag. It becomes a path. Undo if you wanted the corner radius back as a number. Perspective is the same cage idea with the perspective mode. Distort pulls the free corners. Switch modes in the inspector if you started in the wrong one, and finish from there.

```
Object → Reshape → Distort
Object → Reshape → Skew
Object → Reshape → Perspective
Object → Reshape → Warp mesh     Nine handles
Shift                            Constrain the handle
Ctrl                             Reverse snapping while held
Enter                            Finish
Esc                              Cancel the drag, or leave the mode
Ctrl+Z                           One completed drag, or the original form
```

A rotated path with a linear gradient: skew it and watch the fade. It should stay on the pose you see. If you are warping a stroked compound outline, the hole stays, and the contours move together under the cage.

Save after Enter, not in the middle of a drag. The `.oma` stores the paths you finished. A photograph you wanted warped stays rectangular, at whatever scale and rotation Move gave it.

## The edge

Reshape refuses placed photographs. They keep move, scale, and rotate. The cage is for vector artwork in Design. A photo in the poster does not become a mesh, and it does not get rasterized by this command.

Esc refuses to commit the drag you are still holding. It restores that drag. A second Esc, with nothing in progress, leaves the mode. The first handle that actually moves is the one that converts live text and parameter shapes, and Ctrl+Z gives those back.

Choose Object → Reshape → Warp mesh, drag the handle you mean, and press Enter when the bend is the one you want.
