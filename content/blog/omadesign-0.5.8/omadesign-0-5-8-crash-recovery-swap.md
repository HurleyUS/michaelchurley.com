---
id: T009
title: Crash recovery swap
slug: omadesign-0-5-8-crash-recovery-swap
excerpt: "Idle a second and Omadesign writes ~/.local/share/omadesign/<id>.oma.swp. Save deletes it. The Recovered tab lists the leftovers. Recents lists files you opened."
publishedAt: 2026-09-06T10:27:01Z
tags: [omadesign, 0.5.8, recovery]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-crash-recovery-swap/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-crash-recovery-swap/og.png
---

## The habit

You know crash recovery as a dialog you did not ask for. Photoshop reopens with a recovered panel and a timestamp. Illustrator offers a recovered file with a name you do not remember choosing. Affinity does the same job with a recovery prompt on the next launch. The good versions let you keep the recovered work or throw it away. The bad versions scatter `filename (recovered)` copies through the folder you were saving into, and six months later you do not know which one is the poster.

The other habit is autosave that is a second document. A cloud copy. A `~` file next to the original that some other app treats as the original. You attach the tilde file to an email. The client opens garbage, or they open yesterday.

On Linux the swap-file habit is older than any of those apps. Editors write `filename.swp` beside the work, or under a state directory, and delete it on a clean save. You only see the swap when the process died. That is the right shape for a studio that stores one `.oma` and means it.

## The constraint

One document. One undo stack on that document. A crash copy cannot be a second format with its own history, or you will recover into a file that cannot redo the stroke you wanted. The snapshot has to be the same `.oma` the app already knows how to open, written aside, marked as a leftover.

Idle is the trigger. A snapshot on every mouse move would fight the brush and the pen. A snapshot only on a timer you configure in three places is a dialog. One second of idle is long enough that a drag in progress is not the thing being serialized, and short enough that a kill from the compositor does not cost the morning.

The path has to be out of the project folder. Clients and rsync jobs should not pick up swaps as deliverables. `~/.local/share/omadesign/<id>.oma.swp` is per user, per document id, under the usual local-share directory. Save deletes it. A clean save means there is nothing to recover, so the splash must not keep offering yesterday's success.

The welcome screen already has tabs. **Recovered** is the tab for leftovers. **Your Work → recent** is a different list: every `.oma` under home that discovery is allowed to see. The manual also says Recents lists `.oma` files you actually opened. Those sentences name two ideas on purpose. Opened files, discovered files, and crash leftovers are not one pile. Startup Config can open New, Templates, Recent, or Recovered, and it can remember the last tab. Recovery stays one tab, not a modal that blocks the other three.

## What landed

This is the recovery behavior as it stands in 0.5.8. It is not a feature the release notes claim was born that day. The manual states it in one place, next to the document tabs.

Idle for a second and Omadesign writes:

```text
~/.local/share/omadesign/<id>.oma.swp
```

`<id>` is the document's id, not a slug you are expected to type. Save deletes that file. If the process dies before the next save, the swap remains. The splash **Recovered** tab lists those crash leftovers.

**Recents** lists `.oma` files you actually opened. **Your Work → recent** discovers every `.oma` beneath your home directory, at any depth, sorted by last modification, newest first. **Recovered** lists recovery snapshots separately from both. Discovery skips hidden directories, Trash, and symlinks. **Refresh** picks up files you moved in from outside. It is not how a swap becomes a poster. The swap shows up because it is a leftover, on the Recovered tab.

**Shift-click** to start a multi-select on that tab. Further clicks add or remove. **Recover selected** opens the leftovers you marked. **Open selected** is the matching action on the ordinary browser. **Clear** or Escape drops the selection.

Recovery work from earlier in the studio's life still describes the machinery under that tab. Changed snapshots compress in the background. A stale result is rejected before it can replace a saved state. Dirty-state edges around save, undo, live type, and closing an inactive tab were fixed so a tab you were not looking at does not corrupt the snapshot you need. You feel that as a simple rule. The Recovered file is the idle snapshot. The saved `.oma` is the saved `.oma`. One does not silently become the other.

Quitting Photo is a cousin, not the same file. Unsaved photo settings get Save all, Discard, or Cancel before the palette and artwork save steps, and the app waits for those writes. A Photo `.omaphoto` is beside the camera file. It is not an `.oma.swp`. Design save does not store the RAW.

## In the hand

Open a document and draw.

```sh
omadesign
```

Press `R` and drag a rectangle. Stop moving the pointer. After about a second the studio writes the swap under `~/.local/share/omadesign/`. You do not have to watch that directory. The contract is the idle, not a progress bar.

Press `Ctrl+S` and save the `.oma` somewhere under your home directory that is not hidden. The swap for that document is deleted. Check Recovered later and this session should not be sitting there as a crash.

To see the tab do its job, you need a leftover: a kill, a session that ended without Save, a swap that save did not get to delete. Next launch, open the welcome screen. Choose **Recovered**. The leftover is listed there, apart from Recent. Select it. **Recover selected** opens it. Decide whether that snapshot is the work you wanted. Save it with `Ctrl+S` to a real path if it is. That save deletes its swap, same rule as any other save.

If you want the next launch to land on that tab:

```text
omadesign → Config → welcome tab → Recovered
```

Remember-last-tab will put you back on whichever welcome tab you left. Recent, Templates, New, and Recovered stay separate choices. A red filter icon on Your Work is a mode funnel. It is not Recovered. Clear it with **All modes** when the list looks short. Look at Recovered when the work was never saved.

**Your Work → recent** will also show an `.oma` you saved, newest modification first, even if you did not open it through the Recents habit, because discovery walks home. A file you only opened and never saved still belongs to the "files you actually opened" list the manual calls Recents. A swap belongs to Recovered until you save or dismiss it. Three lists. Use the one that matches the failure.

## The edge

Save deletes the swap. A document you saved does not linger as a crash leftover. Recovered is not a second project folder you are supposed to edit by hand and rsync to a client. The deliverable is the `.oma` you saved. The swap is the idle copy that exists because the process may die.

Discovery will not treat hidden directories, Trash, or symlinks as your work. A swap lives under `~/.local/share/omadesign/`, which is a hidden path from the home browser's point of view. That is why it shows up through the Recovered tab and not as just another thumbnail in the masonry walk. Do not expect **Refresh** on Your Work to be the crash UI.

A stale snapshot is rejected before it replaces a saved state. Recovery does not get to roll a good save backwards because a late write finished out of order.

Idle for a second while the document is dirty. Save with `Ctrl+S` when you want that `~/.local/share/omadesign/<id>.oma.swp` gone.
