---
id: T040
title: Combine and release
slug: omadesign-0-5-8-combine-and-release
excerpt: Group is Ctrl+G. Ungroup is Ctrl+Shift+G, and it does not fuse paths. Combine into a compound is Ctrl+8. Release compound is Ctrl+Shift+8. Artwork and guides do not mix in one combine.
publishedAt: 2026-08-29T16:35:47Z
tags: [omadesign, 0.5.8, compounds]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-combine-and-release/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-combine-and-release/og.png
---

## The habit

Ctrl+G is group. It has been group in Illustrator for decades. You select the icon and the type, you group them, you move them as one, you double-click to edit inside, you ungroup when the lockstep is over. Affinity uses the same chord. The paths inside a group stay separate paths. Ungroup gives them back. Nobody expects Ctrl+G to weld the letterforms into a single outline.

Combine is the other habit, and it has been glued to the group key in too many conversations. A compound path, the kind with a hole, is how a donut stays one fill. Illustrator makes that with Object → Compound Path → Make, and the shortcut a lot of hands remember is not the group shortcut. Release compound is how you get the contours back as separate objects when the hole was a mistake. The weld and the group are different objects. One moves children together. The other builds a single path with contours and counters.

The sloppy version treats the group key as the compound key. You hit Ctrl+G expecting a hole, you get a group, the overlap paints twice, and you think the boolean failed. Or a cheat sheet tells you Ctrl+G combines and Ctrl+Shift+G releases, and you ungroup a logo trying to release a compound. The children scatter. The compound you wanted was never there.

Guides get caught in the same gesture. You meant to combine two construction lines. A piece of the logo was still selected. A weld of ink and a non-printing guide is garbage. The command has to refuse.

## The constraint

Omadesign keeps both objects, and it gives them different keys, because one key cannot mean both. Group is Ctrl+G. It creates an editable layer group. Ungroup is Ctrl+Shift+G. It releases the group and it does not combine paths. The paths come out as paths. Nothing was fused, so nothing has to be unfused.

Combine, the compound, is Ctrl+8. Release compound is Ctrl+Shift+8. The 8 is the compound key so the G key can stay the group key your hand already trusts. Pathfinder Union and the other booleans stay their own commands under Object → Pathfinder. Three results: a group, a compound from Ctrl+8, a boolean from the menu. You pick the one you meant.

Combine and Release, the compound pair, preserve guide state, rotation, stacking, and gradient endpoints in one undo step. A compound that forgot its rotation would jump on release. A linear gradient that forgot its endpoints would have to be redrawn. Radial fills stay radial and follow each resulting object's bounds. The file cannot keep one shared radial center stretched across contours that you just separated. That limit is in the open. You see each piece take its own bounds. Edit an older two-color radial in Appearance and it upgrades to multi-stop stops.

One undo. Ctrl+Z after Ctrl+8 puts the separate objects back, with the guide state, the rotation, the stacking, and those gradient endpoints. You do not rebuild the stack by hand.

Artwork and guides do not mix. Combine and Pathfinder require either artwork or guides. A mixture is rejected. Guides are construction. Artwork is the poster. One command does not get to average them.

## What landed

Select the objects that should travel together and stay individually editable. Press Ctrl+G. You get a layer group. The group expands in the layer tree. You can rename it, hide it, lock it, and reorder it as a unit. Children move with it. Double-click an item to edit that item until you select something else or clear the selection. Groups select, move, duplicate, and align as units.

Press Ctrl+Shift+G to ungroup. The group is gone. The paths are not combined. They were not combined on the way in. Ungroup is not a boolean and it is not a release-compound. If you wanted the contours fused, you have not done that yet.

Select the vectors that should become one compound. Press Ctrl+8. That is Combine. The compound carries the contours. Press Ctrl+Shift+8 to release the compound. That is Release. Guide state, rotation, stacking, and gradient endpoints come through the round trip, and the pair is one undo per command.

Linear gradients keep their endpoints through that combine and release. A radial fill stays radial. On a release that produces separate objects, each one follows its own bounds. Plan on resetting a radial if you had imagined one center shared by every released piece. Shape gradients follow the resulting silhouette, holes included, which is the shape-gradient rule everywhere else too.

Stacking stays. The order you had is the order you get back on release. Rotation stays. A compound you built from rotated art does not snap back to axis-aligned on the way out.

Pathfinder remains the boolean menu: Union, Subtract, Intersect, XOR, Divide. Repeated unions and subtractions in 0.5.8 produce editable compounds with holes intact. That is a boolean result you can double-click into. Ctrl+8 is the combine key beside that workflow, not a rename of Ctrl+G.

Drag objects onto the center of a group or a Layout frame to nest them. Shift-click rows to select several. Reorder with insertion lines, or with Ctrl+[ and Ctrl+] on a layer row. None of those chords combine paths. They arrange the group you already made.

## In the hand

Build a small mark from two strokes and a filled shape. Select all three. Press Ctrl+G. Drag the group. The three move together. Double-click one stroke. Nudge it. Click away. Press Ctrl+Shift+G. You have three objects again. Look at them. They are the same three paths. Nothing welded.

Select two overlapping filled shapes that should share a compound. Press Ctrl+8. One compound. If you needed a hole from a boolean, use Object → Pathfinder → Subtract first, and keep the result. Ctrl+8 is the combine. The menu is the boolean. Use the one the drawing needs.

Press Ctrl+Shift+8 when the compound should become separate contours again. Check the rotation and the linear gradient. They should be the ones you had. Press Ctrl+Z. The compound returns, one step, endpoints included.

Try the refusal on purpose once, so you recognize it. Convert a rectangle to a guide with Object → Guides → Convert selection to guides. Select that guide and a real shape. Press Ctrl+8. The mixture does not run. Select two guides and combine those, or select two shapes and combine those.

```
Ctrl+G          Group. Paths stay paths.
Ctrl+Shift+G    Ungroup. Does not combine paths.
Ctrl+8          Combine into a compound.
Ctrl+Shift+8    Release compound.
Ctrl+Z          One step, endpoints and rotation included.
```

Save the `.oma`. Groups and compounds reopen as what you saved. The keys will be the same tomorrow. G groups. 8 combines.

If a cheat sheet in your head says Ctrl+G makes the compound, retire that sheet. In this studio Ctrl+G is the group. The compound is the 8 key, with Shift when you want it released.

## The edge

Combine refuses a mixture of artwork and guides. Pathfinder refuses the same mixture. The selection is artwork, or the selection is guides. The command tells you by not doing the weld. Fix the selection and press Ctrl+8 again.

Ungroup refuses to fuse anything on the way out. Ctrl+Shift+G releases a group. It leaves paths as paths. Release of a compound is Ctrl+Shift+8, and that is the key that separates contours which were actually combined.

Press Ctrl+G to group. Press Ctrl+8 when the objects should become one compound.
