---
id: T059
title: Canvas comments
slug: omadesign-0-5-8-canvas-comments
excerpt: Write a note, pin it on the canvas, and resolve it. The pin is stored in the .oma. The inspector shows how many are still open on the frame.
publishedAt: 2026-09-15T23:38:15Z
tags: [omadesign, 0.5.0, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-comments/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-comments/og.png
---

## The habit

Review on screen usually means pins. In Figma you click the button that is wrong, type "this tracks too tight," and the pin stays on the frame until someone resolves it. The open count tells you the frame is unfinished. In Illustrator the note often ends up as a magenta text object you hope the export hides. Photoshop keeps notes in a panel. The part worth keeping is the pin on the canvas, attached to the frame, with a resolved state, saved in the same file as the screen.

The second habit belongs to clients. They aren't in your studio, so they mark up a flat image in a browser. Those marks belong to that export at that version. They are separate from the pin you dropped while you were still moving the type. Mixing the two is how a resolved thread reappears on the wrong snapshot.

## The constraint

Canvas comments have to be data in the `.oma`, with one document and one undo stack. A pin has a position, an author, a body, a resolved flag, an optional frame id, and a thread. Creating a pin, resolving it, and replying are document commands, and `Ctrl+Z` restores the previous list of pins in one step. Your own notes don't need a separate comment database. File format 5, the same version that added frames, can hold them, and they round-trip with the project.

The author is your name if the local identity has one. Otherwise the pin says "You." That name has nothing to do with a cloud login. Cloud sign-in is File > Sign in, and local notes don't wait on it.

An empty body is refused, and the status line says "Type a comment first." A pin with no words would be noise, so the click is ignored.

The frame link comes from the frame you have selected, if any. Otherwise the pin attaches to the frame that contains the click. The inspector shows the open count, meaning the unresolved pins on that frame. Resolving a pin lowers the count. The pin is still drawn and is not deleted.

Cloud review deliberately uses a different store. File > Push project + review export uploads a versioned `.oma` and a flat snapshot. Reviewers mark up that snapshot in the browser, or, as of 0.5.3, you load the same threads with Review cloud annotations… in the desktop app. Those threads stay on the snapshot they were written on, and a later push does not move them onto the new pixels. Resolve and Reopen in that window call the cloud and then tell you to refresh. That path needs the account, the membership, and the network. The canvas pin needs none of them.

Frame export shows the split. Export frame PNG, SVG, or HTML removes comments from the snapshot document, because the rails and pins are studio state and the delivered file is only the frame. Your `.oma` still has the pins after the export. Exporting does not resolve them.

## What landed

Write the note and pin it on the canvas. The status line says "Comment pinned," the draft clears, and the pin is in the document. An open pin draws as a numbered orange mark, and a resolved pin draws in green. The number is the pin's position in the list, starting at one. The pin's position is the document point you clicked, so zooming and panning don't move it. Save the `.oma` and reopen it, and the pins are at the same points, with the same resolved flags, on the same frames.

Resolve flips the flag as one undoable edit. A reply appends to the thread and reopens the pin, because a new sentence means the question is open again. A reply needs words, and a blank reply is ignored. The reply's author follows the same rule as the pin: your identity name, or "You."

The inspector's open count is the number of unresolved pins on the frame. Resolved pins stay in the file and are left out of the count. Hiding a frame's artwork doesn't change the count, because it only counts pins. The count tells you the screen still has open questions.

The pins sit with the document, beside the frames. They are marks. They aren't layer rows you can group with `Ctrl+G`, and they aren't snap targets.

The cloud window is the other review tool, and it is opt-in. You sign in, choose Push project + review export, and invite a reviewer if the work is shared. Review cloud annotations… loads the threads for a chosen export version, showing author, open or resolved state, body, and replies. Resolve or Reopen updates that thread, and the button label follows the state. The status line says "Thread updated. Refresh to load the latest review." None of that writes a canvas pin, and canvas pins don't appear in that list. Push the project when you want a snapshot. Pin on the canvas when the note is for you, in the file, while the frame is still changing.

Publishing to the showcase is a separate owner action that sends a flat export and a title, and private pins stay out of that gallery. If you never sign in to the cloud, canvas pins still save in the `.oma`.

## In the hand

Select the frame the note belongs to and write the sentence in the comment draft. Click the canvas on the word, button, or gap that is wrong, then read the status line. "Comment pinned" means the `.oma` has the mark. "Type a comment first" means the click was ignored and the document didn't change.

Look at the frame's open count in the inspector, which now includes the new pin. Zoom in and the number sits on the point you clicked. Pan away and back, and it is still there.

Fix the tracking and resolve the pin. The mark changes from the open color to the resolved color, and the open count drops. If you resolved the wrong one, `Ctrl+Z` restores the flag along with the rest of the pin list in one step.

```
Write the note
Click the canvas to pin it
Resolve when the frame is done
```

Save with `Ctrl+S`. The pins are in the project file with the frames, and they are left out of the PNG you export with File > Export frame PNG. Open that PNG and there are no orange marks. Open the `.oma` and the marks are there. That way a client sees a clean screen and you still see your questions.

If the note is for someone else, on a version you are willing to freeze, use the cloud path. Choose File > Sign in and approve the code the desktop app shows. Choose Push project + review export. The reviewer marks up the flat snapshot. You open Review cloud annotations…, read the thread, click Resolve or Reopen, and refresh. Keep using canvas pins for questions about the live file. The two never collide, because they are separate lists.

Reply on a local pin when the note needs a second sentence. The pin reopens and the count goes back up. Resolve it when that sentence is handled. Undo still steps back through those edits one at a time.

## The edge

A canvas pin never becomes a cloud thread. It lives in the `.oma` at a document point, optionally on a frame, and counts toward the inspector's open count. Cloud review lives on a pushed snapshot, and resolving in one place doesn't resolve the other. Exporting a frame keeps the pins in the project and out of the PNG, SVG, and HTML.

An empty note won't pin. You get "Type a comment first," and the file is unchanged.
