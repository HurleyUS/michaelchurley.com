---
id: T125
title: Opt-in behaviors
slug: omadesign-0-5-8-opt-in-behaviors
excerpt: Document and selection behaviors ship off. One checkbox opts in, remembers the choice, and a behavior’s own output does not fire itself again.
publishedAt: 2026-09-22T11:36:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-opt-in-behaviors/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-opt-in-behaviors/og.png
---

## The habit

You have installed a script that "helps" by talking every time the selection changes. In Illustrator that is a startup script or an event listener you forgot was in the Scripts folder. In Photoshop it is an event-based action that logs a line, or worse, duplicates a layer, on every click. In Affinity it is a macro you bound and then could not find the off switch for. The first day it feels clever. The second day the status line is noise and a behavior that edits artwork has started reacting to its own edit.

The habit you actually want is closer to a panel you open. Selection info when you ask. A document size when you open a file, if you asked. Silence on a deadline. The off switch has to be one control you can see, and it has to stay off across launches until you flip it.

## The constraint

Plugins run in-process, on a background worker, against the one `.oma` in the tab. An event listener with no gate would fire during manifest load, during a drag, and during the plugin's own commit. The commit updates the selection. If that update counted as a new selection event, a behavior that rewrites geometry would queue itself, and the 15 second cap would be the only thing that stopped it. Undo would fill with identical steps.

The host can see two moments that matter for API 1: the document tab changed, and the vector selection changed. Those are the only events. They stay disconnected until a checkbox in the manager is on. The checkbox writes a file next to the plugins so the choice survives a restart. When a behavior's result is applied, the studio records the new selection as the baseline before it looks for the next event. The write the behavior just made does not count as a reason to run the behavior again.

## What landed

A behavior is an action with `event` set. The two legal values are `selection_changed` and `document_opened`. Anything else is rejected at inspect time. The error is **Supported events: selection_changed, document_opened**. A normal action leaves `event` unset and runs from **Run**. A tool leaves it unset and uses `tool = true`.

Studio starter ships two behaviors, both enabled as actions inside an enabled plugin, both still quiet. **Selection count** uses `selection_changed`. It sends `oma.message` with the number of vector objects in `ctx.selection`, in the form `3 vector objects selected`. **Document dimensions** uses `document_opened`. It sends the document name, width, and height: `Poster · 1920 × 1080` when those are the numbers. Neither one edits geometry. A behavior you write may edit geometry. The same gate applies.

The checkbox label in **Lua plugins** is **Run enabled plugins’ document and selection behaviors**. It starts off. Turning it on writes `behaviors.json` in the plugin root, `~/.local/share/omadesign/plugins/behaviors.json`, containing `true`. Turning it off writes `false`. The next launch reads that file. A missing file is off.

While the checkbox is on, the studio watches. Welcome screen open: no events. A drag or other operation in progress: no events, and any queued events are cleared. The plugin has to be enabled with its own checkbox. Disabled plugins are skipped. The action's event string has to match this moment.

A document switch, including the tab identity changing, queues `document_opened` for every enabled plugin that has an action on that event. A selection that differs from the last baseline queues `selection_changed`. The queue holds at most 128 pending events. They run one at a time. If a plugin is already running, the next event waits. A second overlapping run is refused with **A plugin is already running**.

When the worker returns, the usual commit rules apply. Cancel, a switched document, a moved selection, or a changed document fingerprint discards the result. On success, document edits are one Undo batch and the status line shows the message. The studio then sets its remembered selection and document id to the values after the commit. The event check later in the same turn sees no difference. That is the recursion stop. The behavior does not trigger on its own output.

`oma.message` is a status line. It does not mark the document dirty by itself. A behavior that only reports a count leaves the `.oma` alone and leaves Undo alone.

## In the hand

Open **Plugins → Manage plugins**. Confirm Studio starter is checked. Find **Behaviors · Selection count** and **Behaviors · Document dimensions** in the list so you know they are installed. Leave the behavior checkbox off. Click objects on the canvas. The status line stays on whatever you were doing. Open another tab. No dimension line.

Turn on **Run enabled plugins’ document and selection behaviors**. Click one rectangle. When the worker finishes, the status line reads `1 vector objects selected`. Shift-click a second object. The line updates to `2 vector objects selected`. The document history does not grow, because the action only called `oma.message`.

Switch tabs, or open a document with `Ctrl+O`. **Document dimensions** runs for the tab you landed on. The status line shows that document's name and pixel size. Switch back. It runs again for the document you returned to, because the tab identity changed.

Turn the checkbox off. Select something else. Silence. Quit the app and launch it. The checkbox is where you left it, because `behaviors.json` was written.

If you write a behavior that moves shapes on `selection_changed`, run it once by changing the selection. The move commits as one Undo. The selection the plugin returned is now the baseline. It does not immediately run again because of that move. Change the selection with the mouse and it runs once more. `Ctrl+Z` reverses the document edit from that run.

Welcome mode does not feed events. An in-progress pen gesture does not feed events. Cancel run still means the result is discarded and the picture is unchanged.

## The edge

Off is the default, and off is remembered. Enabling the plugin is not the opt-in. The behavior checkbox is. A behavior does not run because its row exists in the list, and its own commit does not queue another copy of itself. The only events are selection changes and document opens. There is no timer, no pointer-move stream, and no "every edit" hook in this API.

Turn the checkbox on, then click the artwork. The count lands in the status line once.
