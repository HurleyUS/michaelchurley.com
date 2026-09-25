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

You press T. In Illustrator, in Affinity, in Photoshop's type tool, the next click puts a text cursor on the page. You type the headline. Enter means a new line when you are in point type. Escape, or a click on empty canvas, means you are done editing and the letters are an object again. Double-click means you were wrong about being done.

The placeholder is the part that wastes a minute. Some tools drop lorem, or the word "Text", or a sample of the font name, and your first characters append to it. You then select all and delete before you can write the real headline. The designers who got burned by that now hit Cmd+A or Ctrl+A as a reflex on every new text object. The reflex exists because the tool failed the first keystroke.

The other habit is the character panel. Font, size, tracking, leading. Then the OpenType row, once the headline is the right words: kerning when a pair collides, ligatures when the wordmark wants them, tabular figures when a price has to line up, small caps when the deck is shouting in a smaller voice. You expect that panel next to the type, in the same inspection column as the fill.

Paste is a split habit. If you are inside the text, paste should insert characters. If you are not, paste of copied words should become a text object. A tool that always makes a new object while you are editing will drop a second headline on top of the caret. A tool that always inserts will swallow a pasted sentence into the middle of a word when you thought you were placing a new layer.

## The constraint

Type is an object in the `.oma`, in the same document as the paths. It has to stay editable. A studio that outlined every headline on the way in would make tracking impossible and would make "change the date" a redraw. Convert to path exists, and it is explicit, because flip and some reshapes need outlines. The Type tool's own life cycle keeps the words.

Undo is one step. The first keystroke, a line break, a finished edit, a pasted sentence: each change you commit has to be walkable with Ctrl+Z. A placeholder that survives into the real string would mean your first undo removes the last letter of the headline and leaves the word Type glued to the front. Replacing the placeholder on the first keystroke keeps that history honest.

There is no area-text ritual in this tool's description. You click to place. You type on the canvas. Enter is how a line happens. A drag-out text frame with auto wrap is a different product decision, and this one does not pretend to be that frame. Posters and marks are mostly point type. The key is T. The click is the origin.

Five personas share the document. Design is where you draw the mark and the poster, and T is one of the four tools Design puts in your hand first, with Move, Pen, and Rectangle. Layout uses T as well, on frames. The text object is still text. You do not export to a second app to change a word.

## What landed

Press T. Click the canvas. A text object appears with the placeholder Type. The first keystroke replaces that word. You are writing the headline immediately. There is nothing to select-all away.

Enter inserts a new line. Esc finishes the edit. A click away finishes the edit. The object stays on the canvas as type. Double-click it when you need the caret back. That is the whole loop.

While the caret is up, the usual typing happens in the object. Paste inserts into that text. You can drop a sentence from another program into the headline you are already editing. If you are not editing text, Ctrl+V of plain text from outside Omadesign creates an editable text layer. External content lands in the center of the visible canvas. Images in that same paste become pixel layers, and SVG becomes vectors. Words become type. The status of the caret decides which of those two text results you get.

Character studio sits with the selection. Font, size, tracking, leading, and OpenType. The OpenType row covers kerning, ligatures, tabular figures, and small caps. You set them on the text you just typed. The font picker also lists Project fonts when a brand kit is loaded, so a face that lives in the project shows up here. The kit itself is Brand → Typography. The type tool is where the face gets used.

Free transform, Ctrl+T, keeps live text editable. You can scale and rotate the headline and still double-click to change a word. Move, V, drags it, scales from the eight handles, and rotates from the top handle. Shift constrains the move. The letters stay letters through those gestures.

Object → Convert to path is the exit. It keeps letter outlines and the holes inside them, and it replaces editable text. Undo restores the text. Flip asks you to take that exit first. Reshape converts on the first handle you actually move, and undo restores the original form. Until you take one of those exits, T still edits the words.

Project-font text stays editable in the `.oma` after the project moves, including new characters. SVG export of those faces draws outlines so the picture survives on a machine that does not have the kit. The source file keeps the text. That split is the kit's export rule. The type tool's rule is simpler: what you see on the canvas is still editable type.

## In the hand

Press T. Click under the poster title. The word Type is sitting there. Type the real title. The placeholder is gone on the first character. Press Enter for the second line. Press Esc. The caret leaves. The object remains.

Press V if you need to move it. Drag. Hold Shift for a horizontal move. Double-click to fix a typo. Esc again when the word is right.

Open Character studio. Set the font and the size. Add tracking if the headline is loose. Set leading if the two lines are colliding or drifting apart. Turn on tabular figures if the line is a price. Turn on ligatures if the wordmark has an fi or a fl that should be one drawing. Small caps for a short label. Kerning for a pair that clashes. Those four OpenType controls are the row. Use the ones the typeface actually contains.

Copy a sentence from a brief. Double-click the text object. Put the caret where the sentence belongs. Ctrl+V. The words insert. Click away first if you wanted a new text object from that paste, then Ctrl+V. The new layer appears at the center of the view. Move it with V.

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

Ctrl+Z walks the last change off. A bad line break, a bad paste, a bad size. One step each time you committed one.

Save with Ctrl+S. The words are in the `.oma`. Tomorrow you double-click and keep typing.

## The edge

The first keystroke refuses to append. The placeholder Type is replaced. You start the headline clean.

Paste refuses to guess. A caret inside text inserts. A paste while you are not editing text creates an editable text layer at the center of the visible canvas. Click away, or press Esc, before you paste if the words should be their own object.

Press T, click, and type the first letter of the real headline.
