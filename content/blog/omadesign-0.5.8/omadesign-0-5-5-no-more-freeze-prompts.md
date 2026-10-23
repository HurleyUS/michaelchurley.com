---
id: R055-01
title: No more Hyprland freeze prompts, and Photo or Layout without an artboard
slug: omadesign-0-5-5-no-more-freeze-prompts
excerpt: "The 0.5.5 nightly moved native file choosers off the event loop, so Hyprland stops asking to kill Omadesign while Open or Save is up. Photo and Layout also open straight from the start screen, no artboard."
publishedAt: 2026-09-20T22:00:49Z
tags: [omadesign, 0.5.5, hyprland, workspace]
coverImage: /blog/omadesign-0-5-5/omadesign-0-5-5-no-more-freeze-prompts/og.png
---

## The habit

You press Ctrl+O, the file chooser opens, and you take a few seconds to find the folder. On Hyprland, a dialog then pops up saying the app is not responding and offers to terminate it. The app is fine and waiting for you, but that prompt is one misclick away from losing unsaved work.

The second habit starts when you want to grade photos or build a screen. The app hands you an artboard first, because every document started with one.

## The constraint

The compositor pings windows to check that they are alive. If the app's event loop is blocked while a native chooser has focus, the ping goes unanswered and Hyprland assumes the app has hung. The fix had to keep the event loop free without letting the chooser's result land in the wrong place.

That second part matters. If you open a chooser from one document, switch tabs, and then pick a file, the result should not modify the other document. A cancelled chooser should do nothing.

## What landed

This shipped first as a nightly prerelease, v0.5.5-nightly.1, while 0.5.4 stayed the stable release. The same changes reached stable in 0.5.6.

**File choosers off the event loop.** Native Open, Save and other file choosers run on a worker, outside the application event loop. Omadesign keeps answering the compositor while the chooser has focus, which addresses Hyprland's false terminate/wait prompt. The chooser belongs to the document that opened it. Cancelled or stale results cannot modify another document. An untitled document's pending close resumes only after its save succeeds.

The release validation points to a measurement from the 0.5.4 development build, which had the same chooser implementation. It recorded 14 ping/pong pairs during 21 seconds of chooser focus, a maximum response of 0.065 ms, and no terminate/wait dialog. It was not re-measured for the nightly.

**Photo and Layout without an artboard.** Both open directly from the start screen without creating an artboard. An artboardless Layout workspace keeps that state when saved and reopened.

**Startup preferences.** Choose the start screen, a fixed mode, or Remember last mode. A separate setting chooses the start screen's New, Templates, Recent or Recovered page, including Remember last tab.

**Photo folder thumbnails.** Choosing a Photo folder starts loading its supported images as full-width thumbnail cards, with filenames in tooltips. Previews reflect saved adjustments, crop and rotation. Loading runs in the background, bounds preview memory, and releases offscreen textures.

The rest of the nightly rearranged the app's chrome, with icon mode tabs, a document thumbnail rail, and Arrange and Align in the right inspector. Those changes are useful, and they are outside the scope of this post.

## In the hand

On Hyprland, press Ctrl+O and leave the chooser open. Go make coffee. When you come back, there is no terminate/wait dialog.

From the start screen, pick Photo and point it at a folder. Cards fill in while you look. Or pick Layout and start drawing frames with no artboard in the way. Save, reopen, and it is still artboardless.

## The edge

Artboardless Layout is a new saved state. Older releases do not preserve it, so reopen and save those workspaces in 0.5.5 or later.

The Hyprland fix keeps the event loop responsive. It does not change which chooser your desktop provides.

The nightly passed 551 tests locally, with 5 existing optional tests skipped. Details are in the [nightly release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.5-nightly.1) and [PR #82](https://github.com/michaelmonetized/omadesign/pull/82). All of this is in the stable line now, so use the normal installer:

```sh
curl -fsSL https://omadesign.app/install | sh
```
