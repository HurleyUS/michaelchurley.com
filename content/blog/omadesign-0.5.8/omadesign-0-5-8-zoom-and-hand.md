---
id: T036
title: Zoom and hand
slug: omadesign-0-5-8-zoom-and-hand
excerpt: Zoom is Z. Drag a box, click to zoom in, Alt-click to zoom out. Ctrl-click fits the artboard. Hand is H, and Space pans. Scroll zooms the canvas, not the panels.
tags: [omadesign, 0.5.8, canvas]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-zoom-and-hand/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-zoom-and-hand/og.png
---

## The habit

Z is zoom. You drag a box around the knot you need to see, and the view becomes that box. You click to step in. You Alt-click to step out. Illustrator does this. Affinity does this. Photoshop does this. The hand has done it since the tool had a magnifying glass icon. You do not want a tour of the zoom menu. You want the knot.

Fit is the other half. You get lost at 1600% and you need the page back. Ctrl-click with the zoom tool fits the artboard. A modified click fits the selection when you are working on one mark and the artboard is huge. If nothing is selected, that same modified click fits every object, so a stray path off in the pasteboard still gets included and you can see why the fit felt wrong.

The wheel is where apps embarrass themselves. You scroll to move down the page and the entire window, panels included, changes size. Or you pinch the trackpad and the sidebars grow until the canvas is a stamp in the middle. Zoom belongs to the canvas. The chrome stays put. Panels, tool strip, inspector: they are the desk. The canvas is the paper. Only the paper zooms.

Pan is Space, held, in every drawing app you already use. H is the hand you can leave selected. You hold Space while a shape tool is active, you drag the paper, you release Space, and you are back on the rectangle. If Space stuck as the hand, you would draw a pan by accident on the next drag.

## The constraint

The studio is one window. Document tabs, the tool strip, the layers, the inspector, and the canvas share it. A zoom that scaled egui's chrome would resize the controls you need in order to zoom back, which is a trap. Ctrl and the scroll wheel, Alt and the scroll wheel, Ctrl++, Ctrl+-, and a trackpad pinch all zoom the canvas. The keys say so because the mistake is so common.

Fit has two jobs and they cannot share one click. The artboard is the page. The selection is the work. Ctrl-click on Z fits the artboard. Ctrl+Shift-click fits the selection, or every object when the selection is empty. Ctrl+0 is Fit from the shortcut list. Ctrl+1 is 100%, actual size, which is the only honest answer when you are judging type. Those chords stay available while you are on other tools, because making someone switch to Z to hit 100% is how people ship the wrong size.

Space pans in Design. H pans. In Motion, Space plays the timeline. The hand key has to remain a pan, because Space's meaning follows the persona. You learn H once and it still moves the paper when you are animating. Photo uses Space or Hand to drag the view, middle-drag and two-finger scroll to pan, and pinch, Ctrl+scroll, and Alt+scroll to zoom. Ctrl+0 fits the photo there. Ctrl+1 is 100%. The Design page uses the artboard as its fit target. The photograph uses the photograph. Same fingers, the object in front of you.

With Z selected, two-finger scroll zooms. That is the trackpad version of "I am in the zoom tool, so the gesture zooms." Pinch zooms the canvas even when you are not on Z.

One `.oma`, one view of it. Fit and 100% are how you get back to a known magnification. History on the artwork stays the place you undo edits.

## What landed

Press Z. Drag a box. The view becomes that area. Click to zoom in one step. Alt-click to zoom out one step. Ctrl-click fits the artboard. Ctrl+Shift-click fits the selection. If nothing is selected, Ctrl+Shift-click fits every object.

Pinch the trackpad to zoom the canvas. Ctrl++ zooms in. Ctrl+- zooms out. The plus key on the chord also accepts the equals key, the one you actually hit without hunting for plus. Ctrl+scroll zooms the canvas. Alt+scroll zooms the canvas. With Z selected, two-finger scroll zooms. None of these resize the chrome.

Press H, or hold Space, and drag to pan. Release Space and the previous tool is what you are holding. Leave H selected when you are only navigating.

Ctrl+0 fits. Ctrl+1 is 100%. Front and back and the rest of the Ctrl chords stay themselves. Zoom in and out are the plus and minus chords above. You can run them while a shape tool is active. You do not park the rectangle to see it larger.

In Motion, Space plays. Home and End jump. The hand tool is still how you pan when play owns the spacebar. In Photo, Space pans, because there is no timeline play on that spacebar. If a pan does nothing useful and a clip starts, you are in Motion. Press H and drag.

Snapping and guides are unchanged by zoom. You see more or less of the same canvas. Ctrl+; still shows or hides guides. A zoomed-in node edit is the same Node tool. The points stay on the artwork. You got closer. You did not switch documents.

## In the hand

Press Z. Drag a box around a wordmark. The view fills with it. Click once if you need one more step. Alt-click until the poster is back to a size you can judge. Or Ctrl-click to fit the artboard in one move.

Select one icon. Press Z and Ctrl+Shift-click. The view fits that icon. Deselect, Ctrl+Shift-click again, and the view fits every object, including the one you left off the board. That is how you find it.

Press Ctrl+1 before you call a body size done. 100% is the shortcut. Press Ctrl+0 when you want Fit and your hand is not on Z.

Hold Space while you are on the pen. Drag the canvas until the next point is in view. Release Space. Click the point. The pen was the tool the whole time. The spacebar borrowed the hand.

On a trackpad, pinch. The canvas zooms. The layers stay the width they were. If you are on Z, a two-finger scroll zooms as well.

```
Z                  Zoom
Drag a box         Zoom to that area
Click              Zoom in one step
Alt-click          Zoom out one step
Ctrl-click         Fit the artboard
Ctrl+Shift-click   Fit the selection, or every object
Ctrl++  Ctrl+-     Zoom the canvas
Ctrl+0             Fit
Ctrl+1             100%
H  or  Space       Pan
```

The scroll chords are Ctrl+scroll and Alt+scroll. They zoom the canvas. Pinch does the same. The panels stay put, which is the entire point of aiming the gesture at the paper.

## The edge

Zoom refuses the chrome. Panels, the tool strip, and the inspector keep their size. The canvas takes Ctrl++, Ctrl+-, Ctrl+scroll, Alt+scroll, pinch, and the Z tool. A wheel gesture that resized the whole window is the bug this binding is there to prevent.

Space pans the Design canvas. In Motion, Space plays the clip. H is the pan that stays a pan.

Press Z, drag a box around the knot, and hold Space when you need to slide the paper without leaving the tool in your other hand.
