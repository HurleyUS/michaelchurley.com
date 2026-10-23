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

Most people have installed a script that tries to help by reacting every time the selection changes. In Illustrator it's a startup script or an event listener you forgot was in the Scripts folder. In Photoshop it's an event-based action that logs a line, or worse, duplicates a layer, on every click. In Affinity it's a macro you bound and then couldn't find the off switch for. It seems clever on the first day. By the second day the status line is noise, and a behavior that edits artwork has started reacting to its own edits.

What you actually want works more like a panel you open: selection info when you ask for it, a document size when you open a file if you asked for that, and silence on a deadline. The off switch has to be one visible control, and it has to stay off across launches until you turn it on.

## The constraint

Plugins run in-process, on a background worker, against the one `.oma` in the tab. An event listener with no gate would fire during manifest loading, during a drag and during the plugin's own commit. The commit updates the selection. If that update counted as a new selection event, a behavior that rewrites geometry would queue itself again, and only the 15 second cap would stop it. Undo would fill with identical steps.

For API 1, the host watches two moments: the document tab changed, and the vector selection changed. Those are the only events, and they stay disconnected until a checkbox in the manager is on. The checkbox writes a file next to the plugins so the choice survives a restart. When a behavior's result is applied, the studio records the new selection as the baseline before looking for the next event, so the behavior's own write never counts as a reason to run it again.

## What landed

A behavior is an action with `event` set. The two allowed values are `selection_changed` and `document_opened`, and anything else is rejected at inspect time with **Supported events: selection_changed, document_opened**. A normal action leaves `event` unset and runs from **Run**. A tool also leaves it unset and uses `tool = true`.

Studio starter ships two behaviors. Both are enabled actions inside an enabled plugin, and both stay quiet by default. **Selection count** uses `selection_changed` and sends `oma.message` with the number of vector objects in `ctx.selection`, in the form `3 vector objects selected`. **Document dimensions** uses `document_opened` and sends the document name, width and height, such as `Poster · 1920 × 1080`. Neither one edits geometry. A behavior you write may edit geometry, and the same gate applies.

The checkbox in **Lua plugins** is labeled **Run enabled plugins’ document and selection behaviors**, and it starts off. Turning it on writes `behaviors.json` in the plugin root, `~/.local/share/omadesign/plugins/behaviors.json`, containing `true`. Turning it off writes `false`. The next launch reads that file, and a missing file means off.

While the checkbox is on, the studio watches for events, with some exceptions. With the welcome screen open, there are no events. During a drag or another operation in progress, there are no events and any queued events are cleared. The plugin also has to be enabled with its own checkbox, since disabled plugins are skipped, and the action's event string has to match the moment.

A document switch, including a change in tab identity, queues `document_opened` for every enabled plugin with an action on that event. A selection that differs from the last baseline queues `selection_changed`. The queue holds at most 128 pending events, and they run one at a time. If a plugin is already running, the next event waits, and a second overlapping run is refused with **A plugin is already running**.

When the worker returns, the usual commit rules apply. The result is discarded if the run was cancelled, or if the document switched, the selection moved or the document fingerprint changed. On success, document edits go in as one Undo batch and the status line shows the message. The studio then updates its remembered selection and document id to the post-commit values, so the event check later in the same turn sees no difference. That's what stops recursion. A behavior never triggers on its own output.

`oma.message` only sets the status line and doesn't mark the document as changed. A behavior that only reports a count leaves the `.oma` and Undo alone.

## In the hand

Open **Plugins > Manage plugins** and confirm Studio starter is checked. Find **Behaviors · Selection count** and **Behaviors · Document dimensions** in the list so you know they're installed. Leave the behavior checkbox off. Click objects on the canvas, and the status line keeps showing whatever you were doing. Open another tab, and no dimension line appears.

Turn on **Run enabled plugins’ document and selection behaviors** and click one rectangle. When the worker finishes, the status line reads `1 vector objects selected`. Shift-click a second object and it updates to `2 vector objects selected`. The document history doesn't grow, because the action only called `oma.message`.

Switch tabs, or open a document with `Ctrl+O`. **Document dimensions** runs for the tab you landed on and shows that document's name and pixel size. Switch back and it runs again for the document you returned to, because the tab identity changed.

Turn the checkbox off and select something else. Nothing appears. Quit and relaunch, and the checkbox is where you left it, because `behaviors.json` was written.

If you write a behavior that moves shapes on `selection_changed`, trigger it once by changing the selection. The move commits as one Undo, and the selection the plugin returned becomes the new baseline, so the move doesn't trigger another run. Change the selection with the mouse and it runs once more. `Ctrl+Z` reverses that run's document edit.

The welcome screen doesn't feed events, and neither does an in-progress pen gesture. Cancel run still discards the result and leaves the picture unchanged.

## The edge

Off is the default, and the app remembers it. Enabling the plugin isn't the opt-in. The behavior checkbox is. A behavior doesn't run just because its row is in the list, and its own commit never queues another copy of itself. The only events are selection changes and document opens. This API has no timer, no pointer-move stream and no hook for every edit.
