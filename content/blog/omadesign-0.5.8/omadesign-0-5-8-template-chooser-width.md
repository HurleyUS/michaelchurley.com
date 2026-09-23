---
id: T008
title: Template chooser width
slug: omadesign-0-5-8-template-chooser-width
excerpt: "The 0.5.8 template chooser opens at its final width and stays there as the pointer moves in. The 52 starters do not jump under the cursor."
tags: [omadesign, 0.5.8, templates]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-template-chooser-width/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-template-chooser-width/og.png
---

## The habit

You have lost clicks to a panel that resizes under the pointer. Illustrator's template and stock browsers, Photoshop's new-document presets, Affinity's template grids, a hundred web galleries: the panel opens narrow, the pointer enters, a scrollbar appears, the cards reflow, and the thing you meant to click is now one row down. You hit the neighbor. You undo a document you did not mean to create. You stop trusting the first click.

The other version is a chooser that animates open. Width eases from a sliver to the full sheet. Halfway through, hover states fire on cards that have not finished moving. On a 52-up grid that is not a flourish. It is a mis-click machine. Designers who live in the start screen learn to wait for the animation to finish. That wait is the bug.

A stable sheet is the habit you actually want. Open. The columns are where they will be. Move the pointer in. Nothing reflows. Then you can search, filter, and double-click without aiming twice.

## The constraint

The 52 vector templates ship inside the binary. They are editable paper, artwork, and copy. They use local fonts. They do not fetch a preview from a server when the pointer enters a card. **+ Layout** has its own starters, also local. The chooser can open at the width it needs on the first frame because it already knows the content. There is no second layout pass waiting on a network response that would force the sheet to grow.

One window, welcome and documents together. Existing work stays in its tab when a template opens. The chooser is not allowed to shove that window's layout around while you browse, or the open-document thumbnails the title bar is trying to hold still will jump too. 0.5.8 already keeps the title bar visible for that reason. A chooser that changes width on pointer entry would spend that stability on the first hover.

The gallery lays out visible rows, with previews that adapt to the size you pick. Portrait, square, and wide compositions are different artwork, not one design stretched. Search and the nine category filters change which cards you see. They should change the list inside a stable frame. The frame's width is not a function of which card is under the pointer.

The regression that guards this is pointer entry over a run of frames, in both Vector and Layout. The behavior you feel is simpler than the test: the width on open is the width that stays.

## What landed

0.5.8 opens the template chooser at its final width. The width stays there as the pointer moves in. No layout jump while you browse the 52 starters. The release notes call it the stable final width. The chooser was reviewed with the welcome screenshots, and the pointer-entry check covers Vector and Layout.

What the chooser contains once it is open, at that width:

- **+ Vector** on the welcome screen, or **File → Template library** while you are already drawing. Both reach the 52.
- **+ Layout** opens the frame starters: Fieldwork responsive prototype, mobile screen, landing hero, dashboard, and card stack. Those also live under **File → Template library → Layout starters**.
- Search by name or by the idea you have in your head.
- Filter the nine categories. The bank covers events, food, culture, community, editorial, branding, education, wellness, and products. Thirteen artwork families, 52 distinct compositions.
- A built-in document size, or a custom width, height, and DPI. There are built-in sizes enough to cover the usual poster, screen, and page jobs. Previews adapt to the proportions you choose.
- **Use this template**, or a double-click on the card.

The document that opens is unsaved. You can edit the paper, the artwork, and the copy. The tab you were in keeps the work that was already there. Very tiny sizes omit secondary copy that would be unreadable. Nothing in that flow asks the panel to grow because the pointer crossed the boundary.

Raster's welcome action is a size chooser, not the 52. The width fix is the template chooser. Vector and Layout are the two that the pointer-entry check watches.

All 52 are available immediately. The weekly drop plan is a reading list and a remix prompt per design. It does not withhold cards, and it does not publish anything on a timer. The grid you see at the stable width is the full local set, narrowed only by the search box and the category filter you set.

## In the hand

```sh
omadesign
```

Click **+ Vector**. The sheet opens at the width it is going to keep. Move the pointer in from outside the chooser, across the first row of cards, slowly. The columns stay. The card under the pointer is the card that was there when the sheet appeared. Hover can still show a name or a highlight. Hover is not allowed to change the width.

Type in the search box. Filter a category. The list inside the sheet changes. The sheet does not leap to a new width because a category has fewer cards, and it does not leap because the pointer is now over a tall portrait card. Pick a size, or type a width, a height, and a DPI. Previews adapt. The chooser's own width stays.

Double-click the card, or click it and press **Use this template**. An unsaved document opens in Design. `R`, `P`, and `T` work on that artwork. The template's type is live type. The shapes are shapes. Save with `Ctrl+S` when you want an `.oma`. The tab that held your previous document is still there.

Do the same with **+ Layout**. The sheet opens at its final width. Pointer entry leaves that width alone. Choose Fieldwork, a mobile screen, a landing hero, a dashboard, or a card stack. You get frames you can edit with `F`, `R`, and `T` in the Layout persona. **File → Template library → Layout starters** is the same set once you are inside a document.

Open the library from **File → Template library** while a real job is already on the canvas. Browse. The existing tab does not get replaced by the act of moving the pointer. Creating the template keeps that work and starts a fresh unsaved document beside it.

If you are checking this against 0.5.8 specifically, do the pointer move before you click a card. The bug was the jump. The fix is that there is nothing to wait out.

## The edge

A stable width does not freeze the grid. Search, category, and page size still change which previews you see and how those previews are cropped to the proportions you asked for. The edge is the chooser's frame. It does not reflow because the pointer entered.

The chooser also does not phone home for the 52. No network means no late-arriving thumbnail that would force a second layout. If a font the design wants is missing on the machine, the template still uses what is installed locally. It does not widen the panel to explain that.

Very small custom sizes drop secondary copy. That is a content rule, decided when the document is built, not a resize of the chooser under your hand.

Existing work stays in its tab. The chooser will not discard an unsaved document to make room for a starter. If that document needs a decision, the tab's own Save / Discard / Cancel dialog is the one that asks. The template sheet does not ask by jumping.

Click **+ Vector**. The width you see is the width you keep while the pointer moves in.
