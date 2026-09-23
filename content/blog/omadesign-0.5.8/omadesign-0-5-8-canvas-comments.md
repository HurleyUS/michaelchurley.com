---
id: T059
title: Canvas comments
slug: omadesign-0-5-8-canvas-comments
excerpt: Write a note, pin it on the canvas, and resolve it. The pin is stored in the .oma. The inspector shows how many are still open on the frame.
tags: [omadesign, 0.5.8, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-comments/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-comments/og.png
---

## The habit

Review on a screen is a pin. In Figma you click the button that is wrong, you type "this tracks too tight," and the pin stays on the frame until someone resolves it. The open count tells you the frame is unfinished. Illustrator often gets a magenta text object you hope the export hides. Photoshop keeps notes in a panel. The habit worth keeping is the pin on the canvas, attached to the frame, with a resolved state, saved in the same file as the screen.

There is a second habit, the client one. They are not in your studio. They mark a flat image in a browser. Those marks belong to that export, at that version. They are not the same object as the pin you dropped while you were still moving the type. Mixing them is how a resolved thread comes back from the dead on the wrong snapshot.

## The constraint

Canvas comments have to be data in the `.oma`. One document, one undo stack. A pin has a position, an author, a body, a resolved flag, an optional frame id, and a thread. Creating it, resolving it, and replying are document commands. `Ctrl+Z` returns the previous list of pins in one step. There is no separate comment database required for your own notes. Format 5, the same version that added frames, is the file that can hold them. They round-trip with the project.

The author is your name if the local identity has one. Otherwise the pin says "You." That name is not a cloud login. Cloud sign-in is File → Sign in. Local notes do not wait on it.

An empty body is refused. The status line says "Type a comment first." A pin with no words is noise. The click does not count.

The frame link is taken from the frame you have selected, if you have one. Otherwise the pin attaches to the frame that contains the click. The inspector's job is the open count: unresolved pins on that frame. Resolve a pin and the count drops. The pin can still be drawn. It is not deleted.

Cloud review is a different store, on purpose. File → Push project + review export uploads a versioned `.oma` and a flat snapshot. Reviewers mark that snapshot in the browser, or you load the same threads with Review annotations in the desktop. Those threads stay on the snapshot they were written on. A later push does not move them onto the new pixels by magic. Resolve and Reopen in that window call the cloud, then tell you to refresh. That path needs the account, the membership, and the network. The canvas pin does not.

Frame export makes the split visible. Export frame PNG, SVG, or HTML clears comments from the snapshot document. The rails and the pins are studio state. The delivered file is the frame. Your `.oma` still has the pins after the export. You did not resolve them by exporting.

## What landed

Write the note. Pin it on the canvas. The status line says "Comment pinned," the draft clears, and the pin is in the document. On the canvas an open pin draws as a numbered mark in orange. A resolved pin draws in green. The number is the pin's place in the list, starting at one. The position is the document point you clicked, so zoom and pan do not lose it. Save the `.oma`. Reopen. The pins are at the same points, with the same resolved flags, on the same frames.

Resolve flips the flag. That edit is one undo. A reply appends to the thread and marks the pin open again, because a new sentence means the question is back. The reply needs words. A blank reply is ignored. The author on the reply follows the same rule as the pin: your identity name, or "You."

The open count the inspector shows is the number of unresolved pins on the frame. Resolved pins stay in the file and stay out of that count. Hide a frame's artwork and the count is still about the pins, not about visibility of the pixels. The count is how you know the screen has leftover questions.

These pins sit with the document, beside the frames. They are not layer rows you group with `Ctrl+G`, and they are not snap targets. They are marks.

The cloud window is the other review tool, and it is opt-in. Sign in. Push project + review export. Invite a reviewer if the work is shared. Review annotations loads the threads for a chosen export version: author, open or resolved, body, replies. Resolve or Reopen updates that thread. The button label follows the state. The status line says "Thread updated. Refresh to load the latest review." None of that writes a canvas pin, and a canvas pin does not appear in that list by itself. Push the project when you want a snapshot. Pin on the canvas when the note is for you, in the file, while the frame is still moving.

Publishing to the showcase is a further owner action. It sends a flat export and a title. Private pins stay out of that gallery. Leave the cloud signed out and the canvas pins still save in the `.oma`.

## In the hand

Select the frame the note belongs to. Write the sentence in the comment draft. Click the canvas on the word, or the button, or the gap that is wrong. Read the status line. "Comment pinned" means the `.oma` has the mark. "Type a comment first" means the click was ignored and the document did not change.

Look at the frame's open count in the inspector. It includes the new pin. Zoom in. The number sits on the point you clicked. Pan away and back. It is still there.

Fix the tracking. Resolve the pin. The mark turns from the open color to the resolved color. The open count drops. `Ctrl+Z` if you resolved the wrong one. The flag returns with the rest of the pin list, one step.

```
Write the note
Click the canvas to pin it
Resolve when the frame is done
```

Save with `Ctrl+S`. The pins are in the project file, with the frames. They are not in the PNG you export from File → Export frame PNG. Open that PNG. No orange marks. Open the `.oma`. The marks are back. That split is what you want when a client should see the screen and you should still see the question.

If the note is for someone else, on a version you are willing to freeze, use the cloud path. File → Sign in. Approve the code the desktop shows. Push project + review export. The reviewer marks the flat snapshot. You open Review annotations, read the thread, Resolve or Reopen, refresh. Keep using canvas pins for the questions that belong to the live file. They will not collide, because they are not the same list.

Reply on a local pin when the note needs a second sentence. The pin opens again. The count comes back. Resolve it when that sentence is handled. Undo still walks those edits one at a time.

## The edge

A canvas pin refuses to become a cloud thread. It lives in the `.oma`, on a document point, optionally on a frame, with an open count in the inspector. Cloud review lives on a pushed snapshot. Resolve in one place does not resolve the other. Export of the frame leaves the pins in the project and out of the PNG, the SVG, and the HTML.

An empty note refuses to pin. You get "Type a comment first," and the file is unchanged. Write the sentence, click the place, and the mark is real.
