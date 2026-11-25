---
id: T051
title: Ruler zero and units
slug: omadesign-0-5-8-ruler-zero-and-units
excerpt: Drag the ruler corner to set zero. Double-click resets it. px, mm, cm, in, and pt follow document DPI and leave the artwork in pixels.
tags: [omadesign, 0.5.8, rulers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-zero-and-units/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-zero-and-units/og.png
---

## The habit

The zero on an Illustrator ruler is not the artboard corner forever. You drag the crosshair where the two rulers meet, drop it on the trim, or on the spine, or on the top-left of a phone screen you are drawing at two times scale. Every tick after that is measured from the place you care about. Double-click that corner and zero snaps home. You do this ten times a day and you never open a dialog to do it.

Units are the other habit. A poster wants millimeters. A type spec wants points. A screen wants pixels. In Photoshop you change the ruler unit and the pixels of the photograph stay the pixels of the photograph. The ruler is a skin. Affinity is the same. Right-click the ruler, pick mm or inches, and the file does not resample. If the unit change resized the artwork, every logo you had placed would jump, and every guide you had dragged would mean something else.

The hand already knows the corner. Grab the intersection. Drag. Let go. Double-click when you want the origin back. Right-click when the ticks should read in another unit. The numbers change. The drawing does not.

## The constraint

Omadesign stores artwork in document pixels. Width, height, paths, type size, and guide positions are pixel values in the `.oma`. DPI is a document property, set when you pick a size or a template. It is how a physical unit is computed for display. It is not a second geometry.

That forces the ruler to be a view. Changing millimeters to inches multiplies the labels by the document DPI. It does not rewrite path points, and it does not scale the artboard. A 300 DPI board and a 72 DPI board show different inch marks for the same pixel distance, because an inch is `DPI` pixels, a point is `DPI / 72` pixels, a millimeter is `DPI / 25.4` pixels, and a centimeter is `DPI / 2.54` pixels. If the document DPI is missing or not a positive number, the ruler math uses 72 for that conversion and still leaves the pixels alone.

There is no Creative Cloud document setting to sync, and no modal that offers to "convert the file to inches." One binary, one file, one coordinate space. The ruler corner writes an origin into the ruler settings. Those settings save with the project. Undo restores the previous origin or the previous unit in one step, because the change is a single ruler update, the same command that locks guides or toggles their visibility.

## What landed

Turn rulers on from View → Rulers if the edges are bare. The hover on that checkbox says what the corner does: drag it to set zero, double-click it to reset. The corner itself repeats the hint: "Drag to set ruler zero · double-click to reset."

Drag the top-left intersection onto the canvas. Where you release becomes zero. Ticks to the right and down count up from there. Ticks on the other side count the other way. Guides you drag out of the rulers still land in document pixels. The origin only changes how the ruler numbers them, and how you read a position against the job. Double-click the corner and the origin returns to `0, 0`. The ruler menu has the same command in words: Reset ruler zero.

Units are on the ruler menu and on View → Ruler units. The labels are Pixels (px), Millimeters (mm), Centimeters (cm), Inches (in), and Points (pt). Pick one. The ticks redraw. A guide that was 72 pixels from the old zero is still 72 pixels from that point in the file. At 72 DPI that distance reads as 1 inch and as 72 points. At 300 DPI it reads as 0.24 inch. The path did not move. Switch back to pixels and the tick is 72 again.

Right-click the top ruler or the left ruler to open that menu without leaving the edge. The same menu holds show and hide for guides (`Ctrl+;`), the lock command, and clear. Unit, origin, and guide visibility are neighbors because they are all ruler settings. They travel with the `.oma`. Reopen the file and the zero you set is the zero you get. The unit you picked is the unit on the ticks.

View → Rulers can hide the rulers entirely when you want the canvas clean. Hiding them does not zero the origin and does not switch the unit. Show them again and the same corner, the same ticks, and the same guides are back. Guides themselves can be locked, which is a separate switch. A locked guide still reads against the current unit. You just cannot drag it.

The Shortcut HUD does not steal this gesture. The corner is a pointer target. Double-click is the reset. No key is required. `F1` is there if you want the rest of the map.

## In the hand

Make a board at the size the job actually is. A print sheet at 300 DPI. A screen at 72 or 96. The DPI you chose is the DPI the ruler will use. Check it before you trust an inch mark. The ruler will not invent a DPI for you beyond the fallback of 72 when the number is unusable, and it will not resample the board to match a unit.

```
View → Rulers
```

Drag from the corner until the zero sits on the trim, or on the left edge of the live area, or on the center of a mark you are measuring from. Watch the ticks. They count from the drop point. Drag a guide out of the left ruler. It is a vertical line in pixels. The ruler labels it in the current unit, measured from the origin you just set.

Right-click the ruler. Choose Millimeters (mm) for the print sheet, or Points (pt) for the type spec, or Pixels (px) when you are back on a screen. The artwork stays. Toggle once more if you need to read both. Each change is undoable with `Ctrl+Z`. Redo is `Ctrl+Shift+Z`.

Double-click the corner when the next object should be measured from the document origin again. Or pick Reset ruler zero on the menu. The guides do not jump. Their pixel positions are unchanged. Only the numbering origin moved home.

Save. The origin and the unit are in the project. The PNG you export later is pixels, guides omitted, unit labels omitted. The ruler was never part of the picture. It was how you read the picture while you drew.

## The edge

Changing the unit refuses to change the artwork. Paths, type, frames, placed images, and guide positions stay in document pixels. The ruler is a display. Physical units follow the document DPI so a millimeter on a 300 DPI board is a real millimeter of that board, and the same pixel distance on a 72 DPI board reads as a longer physical length. That is the ruler telling the truth about DPI. It is not a scale tool.

There is no command here that resamples, reflows, or "converts the document" into inches. If the work has to be a different pixel size, you change the artboard or the frame. If the work has to be read in points for an hour, right-click the ruler, pick Points (pt), and double-click the corner when zero needs to go home.
