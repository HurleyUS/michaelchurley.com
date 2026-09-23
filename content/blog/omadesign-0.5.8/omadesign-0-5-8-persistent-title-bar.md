---
id: T006
title: Persistent title bar
slug: omadesign-0-5-8-persistent-title-bar
excerpt: "0.5.8 keeps the title bar visible so open-document thumbnails stay put. The menu is the Omadesign wordmark, without a second Open or Preferences link."
tags: [omadesign, 0.5.8, chrome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-persistent-title-bar/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-persistent-title-bar/og.png
---

## The habit

Start screens eat chrome. Illustrator's home, Photoshop's home, a dozen web apps: the window drops its normal bar, shows a billboard, and rebuilds the frame when you finally open a file. The document tabs you had a second ago jump. The menu you use for Preferences moves. You click the wrong Open because Open was a marketing button on the splash and a menu item two pixels away.

Affinity is closer to a normal desktop window. The tab bar stays a tab bar. You still learn which Preferences live in the app menu and which live in a gear on the home screen. Duplicate labels are how people save the wrong thing or open a second copy of a file they already had.

On a tiling window manager the title bar is also how you see which window is the studio. Hide it on the welcome screen and the compositor's decoration, or the lack of one, is all you have. Bring it back a moment later and every thumbnail reflows. Your eye loses the document you were about to click.

## The constraint

One window. Several `.oma` documents, each in a tab, each with its own undo. The welcome screen is a mode of that same window, not a second process. If the title bar vanishes while you are choosing a file, the open-document thumbnails have nowhere stable to sit. The 0.5.8 decision is to leave the bar visible so those thumbnails stay put when you start working.

The menu has to be one menu. The manual puts **Config | Update | About | Docs** on a click of **omadesign** in the title bar. Open is already `Ctrl+O` and a tab action. Preferences are Config, saved under `~/.config/omadesign` or `XDG_CONFIG_HOME`. A welcome screen that also prints Open and Preferences as extra links makes two of each. You will click the wrong one. The wordmark is the menu. The duplicate links go away.

The bar also has to survive the dark welcome ground from the same release. The logo SVG and the wordmark SVG are the supplied transparent art. The menu uses that wordmark. It does not typeset a second name in the UI font and call it a logo.

Document tabs themselves sit above the canvas once you are drawing. `Ctrl+N` and `Ctrl+O` belong to them. The title bar is the strip that stays when welcome is showing, so the jump from "pick a file" to "edit the file" does not relocate the thumbnails of what is already open.

## What landed

0.5.8 keeps the title bar visible on Welcome. That is a release-note item, reviewed with the native welcome screenshots. Open-document thumbnails stay where they were when you leave the splash and start working.

The menu is the Omadesign wordmark. Click **omadesign** in the title bar. The entries are **Config**, **Update**, **About**, and **Docs**.

- **Config** is the UI font and size, startup mode, welcome tab, rulers, shortcut hints, guide locking, photo provider keys, and optional anonymous usage. Anonymous usage is off unless you turn it on.
- **Update** checks the release channel. When a newer compatible package exists, it runs the official installer, waits for ongoing work, writes a full local recovery snapshot, and restarts with the same open documents and photo adjustments.
- **About** shows the refined logo, the branded version, and the full semantic version. On this install that version is 0.5.8.
- **Docs** opens [omadesign.app/docs](https://omadesign.app/docs/).

Duplicate Open and Preferences links are gone from that surface. Open remains `Ctrl+O`, the welcome thumbnails, and **File → Open**. Preferences remain Config. You do not get a second pair of labels competing with the wordmark.

The title bar is also where the persona mode tabs live in the current workspace: Phosphor icons for the modes, hover text with the mode name, centered in the bar. The persistent bar is what keeps that strip from appearing and disappearing with the welcome screen. You start working, the thumbnails stay, the wordmark stays.

Welcome can show an available update in its own column. That path opens the existing update details before the explicit install-and-restart. It does not add the old Preferences link back. One update story, two ways to reach it: the column when an update is sitting there, and **Update** under the wordmark when you go looking.

## In the hand

```sh
omadesign
```

Before you click a thumbnail, look at the top edge. The title bar is there on the welcome screen. The wordmark is the menu, not a caption. Open a document you already had in the window, or create one with **+ Vector** and **Use this template**. Watch the open-document thumbnails. They stay put. The bar does not collapse to "make room" for the canvas and then shove those thumbnails somewhere else.

Click the wordmark.

```text
omadesign → Config | Update | About | Docs
```

Change the startup mode or the welcome tab in Config if you want the next launch to land on Recent or Recovered. Close Config. The bar is still there. Press `Ctrl+O` to open another `.oma`. That is Open. It is not a link under the logo.

Press `Ctrl+N` for a new tab. The title bar does not become a different menu because a second document exists. Close a tab with its close button. If the work is unsaved, the dialog is Save, Discard, or Cancel. The wordmark is not part of that dialog. The dialog belongs to the tab.

When you want the version, click the wordmark and choose **About**. Welcome also shows 0.5.8. You should see one version, from the build you installed, not a second version string typed into a leftover Preferences link.

If you are on a window manager that draws no server-side decoration, this in-window bar is the studio's own strip. Leave it visible. The thumbnails use it as their anchor when the welcome browser and the canvas trade places.

## The edge

The title bar does not swallow Open. It stops repeating Open. `Ctrl+O` still opens a document into a tab. Welcome thumbnails still open a document. **File → Open** still reads PSD, PSB, XCF, PDF, SVG, OpenRaster, and supported Affinity files through the bridge, into their own tab, at their original size. Save still writes `.oma` and leaves the source file alone.

The bar does not hide on Welcome to enlarge the logo. The logo grew 25% in this same release on the dark ground. The bar stayed. Those are separate decisions. A bigger mark was not allowed to evict the thumbnails.

Preferences are Config. There is no second preferences window reached by a leftover link. Guide locking, rulers, shortcut hints, and the UI font are in that one panel, stored under `~/.config/omadesign`.

Click the **omadesign** wordmark, then **Config**, when you need the setting. Press `Ctrl+O` when you need a file.
