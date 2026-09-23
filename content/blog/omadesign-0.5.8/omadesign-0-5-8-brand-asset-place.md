---
id: T095
title: Brand asset place
slug: omadesign-0-5-8-brand-asset-place
excerpt: Filter brand tiles by name, path, or type. Thumbnails load in the background and refresh about every three seconds. Drag onto the canvas or double-click to center. Ctrl+Z undoes the place.
tags: [omadesign, 0.5.8, brand]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-asset-place/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-asset-place/og.png
---

## The habit

You drag a logo off a library panel onto the artboard. Illustrator's Libraries panel does this, after the asset has finished syncing. Photoshop places, and you get a layer. Affinity's assets studio is the same drag, and a double-click drops the asset in the middle when you cannot be bothered to aim. The failure modes are familiar. The thumbnail is a blank box for a second and you drop the wrong tile. A file you updated in the folder five minutes ago still shows the old preview. The drop lands on an artboard you were not looking at because focus moved. Undo puts back one object, or it puts back fifty, and you are not sure which you will get.

Filter is the other habit. A bank of two hundred marks is not a grid you scroll by memory. You type the name. You type a piece of the folder path, `lockups/horizontal`. You hit a type chip: images, SVG, the native documents. Then you drag the one tile that survived.

The place has to be one undo. A logo that arrives as a group, a mask, and three paths is still one gesture. Ctrl+Z should remove the placement, not the top path.

## The constraint

The bank is files in `.omabrand/`. Thumbnails are a view. Decoding every image in a large bank on the UI thread will freeze the poster you are trying to place onto. Thumbnails load in the background. The grid lays out the visible rows and asks for the previews you can see. A texture cache has a bound. The panel stays a panel.

Files change outside the app. You export a new PNG into the bank from another tool. The tile should catch up without a restart. The refresh is about every three seconds, the same cadence as the palette library. **··· → Refresh now** exists when three seconds is too long because a client is watching. Refresh updates the tile. It does not place anything.

Placement targets matter. A drag puts the copy at the drop point. You aimed. A double-click has no aim. It uses the selected artboard's center. With no artboard selected, it uses the document center. You always know where an unaimed place will land. It will not land at a leftover coordinate from the previous document.

Photo is not an artboard tool in the same way. Double-click in Photo places the asset into Design. Drag placement is there when you are on artboards. You do not get a brand image pasted into the RAW viewer as if it were a develop layer.

A native `.oma` asset has to place as editable artwork. Shapes, text, masks, motion tracks. Fresh object IDs, so the placed copy is not a second pointer at the same objects as the file in the bank. One undo removes that placement. Escape cancels a load that has not finished. Switching documents cannot deliver a late place into the wrong tab.

## What landed

Filter the tiles by name, by folder path, or by file type. The type chips are **Image**, **SVG**, and **omadesign**. Image narrows to the raster files the bank accepts. SVG narrows to SVG. omadesign narrows to `.oma` artwork stored in the bank. A typed filter hits the name and the path, so a nested folder is part of how you search. `marks/leaf` finds the leaf inside marks. You do not scroll the whole cupboard.

Thumbnails load in the background. Empty tiles fill in as the decode finishes. You can scroll. Visible rows are the ones that spend the work. Files added or changed outside the app refresh about every three seconds. **··· → Refresh now** checks immediately. The canvas does not lock while this happens.

Drag a tile onto the canvas. The copy lands at the drop point. Double-click a tile and the copy lands at the center of the selected artboard. No artboard selected: document center. Both are placements of a copy. The file in `.omabrand/` stays. Edit the placed vectors and the bank file is unchanged. Edit the bank file and the thing you already placed does not live-update under you. You placed bytes. You did not subscribe.

**Ctrl+Z** undoes the place. One step. A native `.oma` that brought a stack of shapes, text, masks, and motion tracks still leaves in that one step. The IDs inside the placement were fresh on the way in, so the undo is not confused with objects that were already in the document.

In Photo, double-click an asset to place it in Design. You leave the develop view with a Design document that has the asset. Drag placement stays available when you are on artboards. You aim on a page. You do not aim on a photograph.

Escape cancels a pending load. A double-click or a drag that is still resolving can be refused before it lands. Switch tabs while something is in flight and the finished read cannot attach to the document that did not request it.

## In the hand

Open **Brand**. Load the bank if it is not already the one beside this document. Click **SVG**, or type the path fragment you remember.

```
lockup
```

The grid narrows. If the thumbnail is still arriving, wait for the background load, or hit **··· → Refresh now** after you drop a new file into `.omabrand/` from the file manager. Three seconds will also do it.

Drag the tile. Let go on the artboard where the mark belongs. It is a copy, at that point. If you wanted the center and not a careful drop, double-click the tile. Selected artboard: center of that artboard. Nothing selected: center of the document.

Wrong place:

```
Ctrl+Z
```

The placement is gone. The tile is still in the bank. Drag again.

If what you placed was an `.oma`, select a shape inside it. You can edit the shape. The text is text. A mask that was in the asset is a mask. Motion tracks that were in the asset are tracks, on these new object IDs. Saving the poster writes the poster. It does not rewrite the asset in the bank.

From Photo, double-click the tile when the logo needs to become a Design layer beside a picture you are grading. The place happens in Design. The RAW and its `.omaphoto` stay the photograph.

Press Escape if a load is pending and you chose the wrong tile or the wrong bank. Then filter again and place the one you meant.

## The edge

Place refuses to move the bank file. You get a copy at the drop point, or at the selected artboard's center, or at the document center when no artboard is selected. **Ctrl+Z** removes that copy in one step, including a native document that arrived as many objects.

A late load refuses the wrong tab. Refresh refuses to place on its own. It only updates tiles. Photo refuses a drag onto the develop surface as the way in. Double-click there sends the asset to Design.

Filter the tile, drag it, and press Ctrl+Z if the copy landed in the wrong place.
