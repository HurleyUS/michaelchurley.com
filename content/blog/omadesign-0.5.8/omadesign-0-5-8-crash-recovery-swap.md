---
id: T009
title: Crash recovery swap
slug: omadesign-0-5-8-crash-recovery-swap
excerpt: "Idle a second and Omadesign writes ~/.local/share/omadesign/<id>.oma.swp. Save deletes it. The Recovered tab lists the leftovers. Recents lists files you opened."
publishedAt: 2026-09-06T10:27:01Z
tags: [omadesign, 0.0.1-alpha, recovery]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-crash-recovery-swap/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-crash-recovery-swap/og.png
---

## The habit

Most people know crash recovery as a dialog they didn't ask for. Photoshop reopens with a recovered panel and a timestamp. Illustrator offers a recovered file with a name you don't remember choosing. Affinity shows a recovery prompt on the next launch. The good versions let you keep the recovered work or throw it away. The bad versions scatter `filename (recovered)` copies through the folder you were saving into, and six months later you don't know which one is the poster.

The other habit is autosave as a second document: a cloud copy, or a `~` file next to the original that some other app treats as the original. You attach the tilde file to an email, and the client opens garbage or yesterday's version.

On Linux, swap files predate all of those apps. Editors write `filename.swp` beside the work or under a state directory and delete it on a clean save, so you only see the swap when the process died. That model suits a studio that stores everything in one `.oma`.

## The constraint

There is one document with one undo stack. A crash copy can't be a second format with its own history, or you would recover into a file that can't redo the stroke you wanted. The snapshot has to be the same `.oma` format the app already opens, written to a separate location and marked as a leftover.

Idle time is the trigger. A snapshot on every mouse move would fight the brush and the pen, and a timer you have to configure in three places is just another dialog. One second of idle is long enough that the app isn't saving a drag in progress, and short enough that if the compositor kills the app you don't lose the morning.

The swap has to live outside the project folder, so clients and rsync jobs never pick it up as a deliverable. `~/.local/share/omadesign/<id>.oma.swp` is per user and per document id, under the usual local-share directory. Save deletes it. After a clean save there is nothing to recover, so the splash screen shouldn't keep offering yesterday's work.

The welcome screen already has tabs, and **Recovered** is the tab for leftovers. **Your Work > recent** is a different list: every `.oma` under your home directory that discovery is allowed to see. The manual also says Recents lists `.oma` files you actually opened. Those are deliberately two ideas. Opened files, discovered files, and crash leftovers are three separate lists. Startup Config can open New, Templates, Recent, or Recovered, and it can remember the last tab. Recovery stays one tab and never becomes a modal that blocks the other three.

## What landed

This post describes recovery as it works in 0.5.8, which the release notes do not list as new. The manual describes it in one place, next to the document tabs.

Stay idle for a second and Omadesign writes:

```text
~/.local/share/omadesign/<id>.oma.swp
```

`<id>` is the document's internal id, and you are never expected to type it. Save deletes that file. If the process dies before the next save, the swap remains, and the splash screen's **Recovered** tab lists it.

**Recents** lists `.oma` files you actually opened. **Your Work > recent** finds every `.oma` beneath your home directory, at any depth, sorted by last modification with the newest first. **Recovered** lists recovery snapshots separately from both. Discovery skips hidden directories, Trash, and symlinks. **Refresh** picks up files you moved in from outside, and it has nothing to do with recovery. A swap appears only on the Recovered tab, because it is a leftover.

On that tab, **Shift-click** starts a multi-select, and further clicks add or remove items. **Recover selected** opens the leftovers you marked, and **Open selected** is the matching action in the ordinary browser. **Clear** or Escape drops the selection.

Recovery work done earlier in the studio's history still powers that tab. Changed snapshots compress in the background. A stale result is rejected before it can replace a saved state. Dirty-state bugs around save, undo, live type, and closing an inactive tab were fixed, so a tab you weren't looking at can't corrupt the snapshot you need. From the outside, the rule is simple: the Recovered file is the idle snapshot, the saved `.oma` is the saved file, and neither silently turns into the other.

Quitting Photo works in a similar way but uses different files. Unsaved photo settings get Save all, Discard, or Cancel before the palette and artwork save steps, and the app waits for those writes. A Photo `.omaphoto` sits beside the camera file and is unrelated to `.oma.swp`. A Design save doesn't store the RAW.

## In the hand

Open a document and draw.

```sh
omadesign
```

Press `R` and drag a rectangle, then stop moving the pointer. After about a second the studio writes the swap under `~/.local/share/omadesign/`. You don't have to watch that directory. The only trigger is the idle second, and there is no progress bar.

Press `Ctrl+S` and save the `.oma` somewhere under your home directory that isn't hidden. The swap for that document is deleted, so this session won't appear in Recovered later as a crash.

To see the tab work, you need a leftover: a killed process, a session that ended without saving, or a swap that save didn't get to delete. On the next launch, open the welcome screen and choose **Recovered**. The leftover is listed there, separate from Recent. Select it and choose **Recover selected** to open it. Decide whether that snapshot is the work you wanted, and if it is, save it to a real path with `Ctrl+S`. That save deletes its swap, like any other save.

If you want the next launch to open on that tab:

```text
omadesign → Config → welcome tab → Recovered
```

Remember-last-tab puts you back on whichever welcome tab you left, and Recent, Templates, New, and Recovered stay separate choices. A red filter icon on Your Work means a mode filter is on, which is unrelated to Recovered. Clear it with **All modes** when the list looks short. If the work was never saved, look in Recovered.

**Your Work > recent** also shows an `.oma` you saved, newest modification first, even if you never opened it through Recents, because discovery walks your home directory. A file you opened but never saved still belongs to the list of files you actually opened, which the manual calls Recents. A swap stays in Recovered until you save or dismiss it. That makes three lists, and you use the one that matches what went wrong.

## The edge

Save deletes the swap, so a saved document never lingers as a crash leftover. Recovered is not a project folder to edit by hand and rsync to a client. The deliverable is the `.oma` you saved, and the swap is an idle copy that exists in case the process dies.

Discovery never treats hidden directories, Trash, or symlinks as your work. A swap lives under `~/.local/share/omadesign/`, which the home browser sees as a hidden path. That is why swaps appear on the Recovered tab and never as thumbnails in the Your Work grid, and why **Refresh** on Your Work won't show crash leftovers.

A stale snapshot is rejected before it can replace a saved state, so a late write that finishes out of order can't roll a good save backwards.
