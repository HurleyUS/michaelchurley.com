---
id: T032
title: Type tool
slug: omadesign-0-5-8-type-tool
excerpt: Type is T. Click, and the first keystroke replaces the word Type. Enter starts a new line. Esc or a click away finishes. Double-click comes back to edit.
publishedAt: 2026-08-29T16:31:47Z
tags: [omadesign, 0.0.0.0alpha-rc, type]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-type-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-type-tool/og.png
---

## The habit

You press T. In Illustrator, Affinity or Photoshop's type tool, the next click puts a text cursor on the page and you type the headline. In point type, Enter starts a new line. Escape, or a click on empty canvas, means you are done editing and the letters become an object again. Double-click when you realize you weren't done.

The placeholder is what wastes a minute. Some tools drop in lorem, or the word "Text," or a sample of the font name, and your first characters get appended to it. Then you select all and delete before you can write the real headline. Designers who got burned by that now press Cmd+A or Ctrl+A out of reflex on every new text object, because the tool mishandled the first keystroke.

Then there is the character panel: font, size, tracking and leading, and once the words are right, the OpenType row. You use kerning when a pair collides, ligatures when the wordmark wants them, tabular figures when a price has to line up, and small caps when the deck should speak in a smaller voice. You expect that panel next to the type, in the same inspector column as the fill.

Paste should depend on context. If you are inside the text, paste should insert characters. If you aren't, pasting copied words should create a text object. A tool that always makes a new object while you are editing drops a second headline on top of the caret. A tool that always inserts swallows a pasted sentence into the middle of a word when you meant to place a new layer.

## The constraint

Type is an object in the `.oma`, in the same document as the paths, and it has to stay editable. A studio that outlined every headline on creation would make tracking impossible and turn "change the date" into a redraw. Convert to path exists, and you have to choose it, because flip and some reshapes need outlines. On its own, the Type tool keeps the words as words.

Undo is one step. The first keystroke, a line break, a finished edit and a pasted sentence each have to be undoable with Ctrl+Z. If the placeholder survived into the real string, your first undo would remove the last letter of the headline and leave the word Type stuck to the front. Replacing the placeholder on the first keystroke keeps the history clean.

This tool doesn't do area text. You click to place, type on the canvas, and press Enter for a new line. A drag-out text frame with automatic wrapping is a different product decision, and this tool doesn't try to be one. Posters and marks mostly use point type, so the key is T and the click sets the origin.

Five personas share the document. Design is where you draw the mark and the poster, and T is one of the first four tools Design gives you, along with Move, Pen and Rectangle. Layout uses T too, on frames. Either way the object is still text, and you never export to a second app to change a word.

## What landed

Press T and click the canvas. A text object appears with the placeholder Type, and your first keystroke replaces that word, so you are writing the headline right away with nothing to select and delete.

Enter inserts a new line. Esc or a click elsewhere finishes the edit, and the object stays on the canvas as type. Double-click it when you need the caret back. That is the whole loop.

While the caret is active, typing goes into the object, and paste inserts into that text, so you can drop a sentence from another program into the headline you are editing. If you aren't editing text, Ctrl+V with plain text from outside Omadesign creates an editable text layer. External content lands in the center of the visible canvas. Images in the same paste become pixel layers, SVG becomes vectors and words become type. Whether the caret is active decides which of the two text results you get.

Character studio sits with the selection and covers font, size, tracking, leading and OpenType. The OpenType row has kerning, ligatures, tabular figures and small caps, and you set them on the text you just typed. When a brand kit is loaded, the font picker also lists Project fonts, so faces stored in the project appear here. You manage the kit itself in Brand > Typography, and the type tool is where you use the faces.

Free transform (Ctrl+T) keeps live text editable, so you can scale and rotate the headline and still double-click to change a word. Move (V) drags it, scales it from the eight handles and rotates it from the top handle, with Shift constraining the move. The letters stay letters through all of that.

Object > Convert to path turns the text into outlines. It keeps the letter shapes and the holes inside them, and the text is no longer editable. Undo restores the text. Flip asks you to convert first. Reshape converts on the first handle you actually move, and undo restores the original form. Until you do one of those, T still edits the words.

Text in project fonts stays editable in the `.oma` after the project moves, including typing new characters. SVG export draws those faces as outlines so the picture survives on a machine without the kit, while the source file keeps the text. That split comes from how the kit exports. For the type tool the rule is simple: what you see on the canvas is still editable type.

## In the hand

Press T and click under the poster title. The word Type appears. Type the real title, and the placeholder disappears on the first character. Press Enter for the second line, then Esc. The caret goes away and the object remains.

Press V if you need to move it, and hold Shift while dragging for a horizontal move. Double-click to fix a typo and press Esc again when the word is right.

Open Character studio and set the font and size. Add tracking if the headline is loose, and adjust leading if the two lines collide or drift apart. Turn on tabular figures if the line is a price, ligatures if the wordmark has an fi or fl that should be drawn as one, small caps for a short label, and kerning for a pair that clashes. Those four controls make up the OpenType row. Use the ones your typeface actually supports.

Copy a sentence from a brief. Double-click the text object, put the caret where the sentence belongs and press Ctrl+V, and the words are inserted. If you wanted a new text object from the paste, click away first and then press Ctrl+V. The new layer appears at the center of the view, and you can move it with V.

```
T            Type
Click        Place, placeholder "Type"
First key    Replaces the placeholder
Enter        New line
Esc          Finish
Click away   Finish
Double-click Edit again
Ctrl+V       Insert if the caret is up
```

Ctrl+Z undoes the last change, whether it was a bad line break, a bad paste or a bad size, one committed change at a time.

Save with Ctrl+S, and the words are in the `.oma`. Tomorrow you can double-click and keep typing.

## The edge

The first keystroke never appends to the placeholder. It replaces Type, so the headline starts clean.

Paste doesn't guess. With the caret inside text, it inserts. When you aren't editing text, it creates an editable text layer at the center of the visible canvas. If the words should be their own object, click away or press Esc before you paste.
