---
id: T048
title: Convert selection to guides
slug: omadesign-0-5-8-convert-selection-to-guides
excerpt: Object → Guides → Convert selection to guides turns vectors into non-printing contours you can still edit. Curves, compounds, shapes, and live text keep their data. Release guides restores the artwork.
tags: [omadesign, 0.5.8, guides]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-convert-selection-to-guides/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-convert-selection-to-guides/og.png
---

## The habit

Sometimes the guide is not a straight line from the ruler. It is the curve of a logotype, the bowl of a letter, the edge of a compound path, the bounding box of a photograph. In Illustrator you select the path and choose View → Guides → Make Guides. The path stops printing and starts snapping. Release Guides turns it back into artwork, and if you are lucky the style comes back with it. A Bézier should stay a Bézier. Text should stay text. A compound should keep its holes.

You edit guides. You move one. You pull a node on a curved guide so the snap follows the curve. You release it when the construction line turns out to be the final mark, and the edits you made as a guide are still in the artwork.

A placed photo is the exception you want handled literally. The pixels stay. A guide appears around the bounds. You snap to the frame of the picture. You do not trace the photograph into vectors by asking for a guide.

Exports forget guides. PNG, JPEG, SVG, Lottie. The `.oma` remembers them. That split is the whole reason guides exist. Construction in the working file. A clean picture on the way out.

## The constraint

Convert selection to guides has to be reversible inside one undo model, and the reverse has to include the edits. Object → Guides → Convert selection to guides turns vector artwork into editable, non-printing contours. Release guides restores them as artwork, including geometry edits you made while they were guides. Both actions undo normally. Ctrl+Z after a convert gives you the artwork back as it was. Ctrl+Z after a release gives you the guides back. You do not keep a hidden duplicate "just in case the release is lossy." The command is not lossy on the data it claims to keep.

What it keeps: curves, compound paths, shapes, and live text keep their original data and style. Béziers stay Béziers. Text stays text. Compounds keep their holes. A convert that ran Convert to path in secret would destroy the headline to make a snap target. Flip is the command that asks you to convert text to paths first. This one does not. You can guide a live headline, snap other type to its cap line or its curve, and release it later as type you can still retype.

Move, Node, and Reshape still edit a guide. Snapping follows the actual curve, including a Shift-constrained drag. A curved guide that snapped as if it were its bounding box would be a ruler guide with extra steps. The point of converting a path is the path.

A placed image does not become a vector trace. It gets a separate guide around its bounds. The pixels stay. You still have the photograph. You also have a rectangular construction line on its frame.

PNG, JPEG, SVG, and Lottie leave guides out. The project save keeps them. Hidden guides, Ctrl+;, do not take the pointer and do not snap. Guides start locked, so a node edit waits on View → Guides → Unlock all guides.

## What landed

Select vector artwork. Choose Object → Guides → Convert selection to guides. The vectors become non-printing contours. They stay editable. A curve is still a curve. A compound path still has its holes. A parameter shape still has its data. Live text still has its characters and its style. The look you had is the look the guide keeps, and it does not print.

Move, V, still moves a guide when guides are unlocked. Node, A, still edits points and handles. Reshape still runs on vector artwork, and the first handle you move still converts live text and parameter shapes to paths. Undo restores the original form. If you only needed to move or edit nodes, stay on V and A.

Snapping follows the real curve, including a Shift-constrained drag. Alignment lines and gap measurements still appear. A hidden guide does not join that set.

Release guides restores the artwork. Geometry you edited while it was a guide is in the restored art. The style is intact. A headline you did not warp is still a headline. A compound still has its counters. Both the convert and the release are normal undo steps.

A placed image takes a different result. The command creates a separate guide around the image bounds and retains the pixels. The photograph is still the photograph. The guide is the frame. You can snap to the frame. You can move the guide. The pixels were not outlined.

Project saves keep the arrangement. Reopen the `.oma` and the guides are guides, edits included. Exports omit them: PNG, JPEG, SVG, animated SVG, Lottie. Ctrl+; hides them with the ruler guides. View → Clear ruler guides is the ruler set. A converted logo stays until you release it or remove it yourself.

Combine and Pathfinder refuse a mixture of guides and artwork. A converted guide selected together with a live shape will not boolean and will not combine. Select guides with guides, or release the guide back to artwork and then run the boolean. The refusal is the fence between construction and ink.

## In the hand

Select the logotype paths. Object → Guides → Convert selection to guides. The contours stop being ink. Pull a headline with T and drag it until it snaps to the curve. Hold Shift if the headline's move should stay horizontal while it catches that curve.

Press A if a node on the guide should move. Unlock guides first if the drag will not take: View → Guides → Unlock all guides. Move the node. The snap target is the new curve. Lock all guides when the curve is right.

Choose Release guides when that logotype should be ink again. The node you moved is still moved. The fills and strokes you had are back on a printing object. Press Ctrl+Z if the release was early. You are on guides again, edit included.

Select a placed photograph. Convert selection to guides. You get a guide on the bounds. The photo is still visible as pixels. Snap a caption to the frame. The pixels did not become paths.

```
Object → Guides → Convert selection to guides
V / A / Reshape                         Still edit, guides unlocked
Release guides                          Artwork again, edits kept
Ctrl+Z                                  Convert or release, one step
Ctrl+;                                  Hide, including these guides
PNG JPEG SVG Lottie                     Guides left out
```

Save. Reopen once if you do not trust guides yet. They are there. Export a PNG and look at it. The construction curve is not in the picture. The `.oma` still has it the next time you need to align a new line of type.

If the selection will not combine with a shape, it is still a guide. Release guides, then Ctrl+8 or Pathfinder, when you mean to weld ink to ink.

## The edge

Exports refuse guides. PNG, JPEG, SVG, and Lottie leave them out. The `.oma` keeps them, including curves, compounds, shape data, live text, and the geometry edits you made before release. You do not strip guides by hand to get a clean file.

A placed image refuses to be traced by this command. The pixels stay. A separate guide appears around the bounds. Convert to path is still the explicit way to outline live text when a flip or a committed warp needs outlines. Convert to guides leaves the text as text.

Select the curve, choose Object → Guides → Convert selection to guides, and snap the next object to the contour you can still edit.
