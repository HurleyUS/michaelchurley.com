---
id: T135
title: Native dialogs context
slug: omadesign-0-5-8-native-dialogs-context
excerpt: Open, save, place, and export use the desktop file dialog. Right-click the canvas for Place, Trace, and the same edits. The status bar reports copy, cut, and paste.
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-native-dialogs-context/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-native-dialogs-context/og.png
---

## The habit

You already know your file manager's dialog. Places in the sidebar, the recent folder, the keyboard focus that types a path. Illustrator's dialog is close to that on the desktop and then grows its own browser. Photoshop's is the same story. A toolkit that embeds a browser to show you files makes you learn a second picker, and it makes every Open pay for a web view you did not ask to start. You want the dialog the rest of the machine uses.

You also want the right-click on the canvas to be the edits you were about to reach for in a menu: cut, copy, paste, duplicate, delete, guides, flip, front, back, group, compound, place, trace. And you want the status bar to say what the clipboard did, in numbers, so a paste of nothing is obvious.

## The constraint

The app is one native binary. The file picker is the desktop's picker. There is no embedded browser supplying Open, Save, Place, or Export. While that dialog is up, the canvas has to go quiet. A `Ctrl+Z` that lands in the document behind a modal is how you undo the wrong thing because the dialog ate the click and the shortcut fell through. The studio disables input for the duration of the dialog and skips the shortcut handler until the dialog returns.

The context menu has to show the same chords the key table uses, including the ones a short cheat sheet folds together. Group is `Ctrl+G`. Ungroup is `Ctrl+Shift+G`. Compound shape is `Ctrl+8`. If the menu printed a different story, the menu would be lying. Right-click on an object that is not selected has to select it first, or the menu would operate on the previous selection while your eye was on the thing under the pointer.

## What landed

Open, Save, Save As, Place, and Export call the native file dialog. So do the palette load and export, the font and brand pickers, the plugin install file and folder buttons, and the photo open dialog. Save offers an omadesign filter and a filename ending in `.oma`. Open offers All supported, omadesign, Photo settings, Camera RAW, Layered documents, Images, and Vector. Place offers Place, Camera RAW, Images, and Vector. Export suggests `export` plus the suffix. Photo's dialog title is **Open a photo or saved settings**. RAW extensions are listed in both cases, because camera files show up uppercase and lowercase and the portal filter is case-sensitive.

While the dialog is pending, the studio UI disables, and shortcuts do not run. You finish the dialog or cancel it. Then the keys mean keys again.

Right-click the canvas. If the pointer is on a shape that is not in the selection, that shape becomes the selection before the menu draws. The items are:

Cut, labeled `Ctrl+X`. Copy, `Ctrl+C`. Paste, `Ctrl+V`. Duplicate, labeled `Super+D`. Delete. Make guides, enabled when the selection can become guides. Release guides, enabled when it can. Flip horizontal and Flip vertical. Bring to front. Send to back. Group, `Ctrl+G`. Ungroup, `Ctrl+Shift+G`. Compound shape, `Ctrl+8`, enabled when two or more objects are selected. Place…. Trace to vector.

Those are the same edits as the Object menu and the key table. Place starts the place operation: the file dialog, then a click or a drag on the canvas, Enter for center, Escape to cancel. Trace to vector runs on the active raster layer, the same job as the Trace tool, `U`, and as **Object → Trace to vector**.

The status bar is the clipboard's receipt. A successful copy sets `copied N object` or `copied N objects`. Cut sets `cut` after that copy succeeds. Paste sets `pasted` and the new selection count. A failed copy sets `Could not copy:` and the reason. Style copy says `style copied`. Photo adjustment copy says adjustments were copied and that crop and rotation are excluded. Plugin completion and `oma.message` use the same strip. You do not need a toast.

Dropping files is the other way in. A drop of a layered document on the canvas or the welcome screen opens it. An ordinary image places. A `.oma` opens. Lottie imports. The dialog is for when you want the filters and the sidebar. The drop is for when the file is already in your hand.

## In the hand

Press `Ctrl+O`. The desktop dialog comes up. The studio behind it does not take a tool letter while you are in the dialog. Choose a `.oma` or a PSD or an SVG. Cancel once, on purpose, and press `V`. The Move tool still works, because the cancel released the pause.

Press `Ctrl+S` on an unsaved document. Name it. The filter is `.oma`.

Select two shapes. Right-click one of them. If it was not selected, it is selected now, and the other may have been replaced, because a right-click on an unselected shape takes the selection. Read the menu. Group shows `Ctrl+G`. Compound shape shows `Ctrl+8` and is live because two objects are selected. Choose Group if you want the container. Choose Compound shape if you want the boolean. Press `Ctrl+Z` to put it back.

Right-click empty canvas. Choose **Place…**. Pick a PNG. The cursor waits. Click to drop it, or drag a box. Look at the status behavior on the next copy: select the placed image, `Ctrl+C`, and read `copied 1 object`. `Ctrl+X` and the status says `cut`. `Ctrl+V` and it says `pasted`.

On a raster layer, right-click and choose **Trace to vector**. Or press `U` and click. Threshold, color count, and smoothness are in the Trace controls. Undo is one step.

Install a plugin with **Install plugin…** if you want to see the same dialog family from the manager. The filter is lua, omaplug, and zip. Cancel it. The canvas takes keys again.

## The edge

The picker is the desktop's picker. The studio does not run canvas shortcuts while it is open. The right-click menu will not compound a single object. That item stays disabled until two are selected. Right-click selects the shape under the pointer when it was not selected, so the menu applies to what you hit. Paste during text editing still inserts into the text. The status bar is the report. It does not grow a second clipboard UI.

Right-click the artwork. The chords on the menu are the chords in the key table. Press `Ctrl+O` when you want the desktop dialog.
