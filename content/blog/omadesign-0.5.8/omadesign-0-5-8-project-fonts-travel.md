---
id: T099
title: Project fonts travel
slug: omadesign-0-5-8-project-fonts-travel
excerpt: Move the project and native .oma text stays editable, including new characters. Saving into another folder copies the faces that artwork uses. SVG export outlines project-font text. The .oma keeps the live text.
publishedAt: 2026-09-06T10:49:01Z
tags: [omadesign, 0.5.8, typography]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-project-fonts-travel/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-project-fonts-travel/og.png
---

## The habit

Packaging is the job you do at the end, when the file has to leave your machine. Illustrator has Package. It gathers links and a Document fonts folder so the next person can open the `.ai` and still edit the type. PDF export embeds a subset so a press can print the line even when they do not have the face. SVG export asks a different question: keep the text as text, or convert it to curves so the logo looks right in a browser that has never heard of the family.

Photoshop flattens or leaves the type layer live inside the PSD. The PSD still needs the font installed if you want to retype a word. Affinity packages fonts with the document when you export a package. In every one of those tools the scary moment is the same. You copied the artwork to a laptop, or to a server, or into a different folder for a delivery, and the headline came back as a missing-font box or a substituted grotesque.

The hand wants two outcomes that do not fight. The working file stays editable after the folder moves. The file you hand to someone who will never open the working file still looks like the headline you set.

## The constraint

Omadesign keeps the working file as one `.oma` and the faces as files in the project. `.omatype` names the roles. `.omabrand/fonts/` holds the TTF and OTF copies. Nothing in that design reaches out to a font service when the file opens. If you move the project, the move is a directory copy. `rsync`, a USB stick, a tarball. The app has to resolve the kit from that folder before it shapes text, or the first open on the new machine is a guess.

Save As into another folder is the case people forget. The `.oma` arrives in the new directory. The font files are still in the old project's `.omabrand/fonts/`. A save that only writes JSON would strand the text. The save has to copy the faces the artwork actually uses into the destination folder's `.omabrand/fonts/`. Faces the kit lists and the artwork never used are a separate copy, through Save copy… on the Typography tab. This path is the faces on the page.

SVG is the other audience. A browser, a slide deck, a printer RIP, another editor. They do not read `.omatype`. They do not open `.omabrand/`. If the SVG referenced a project font by name, the outline would depend on a file the recipient does not have. The export draws project-font text as vector outlines. The `.oma` stays the editable source. Two files, two jobs. Failed writes have to leave the existing artwork alone. A half-copied font folder must not be the moment the headline disappears.

## What landed

Native `.oma` text stays editable after you move the project. That includes typing new characters. You are not looking at a baked preview that lets you nudge the box and then blocks the cursor. Load the project in the new place. The kit resolves before shaping. Press T, click in the line, and type. The face is the project face.

Portable font identities are how a copied project finds the same face on the other machine. The role in `.omatype` points at a relative path under `.omabrand/`. The file in `fonts/` is the face. Background refresh can see new files appear in that folder. It does not rewrite font choices already applied to text. A file that shows up while you work is available. The line you set keeps the face it has until you click Apply.

Saving artwork into another folder also copies the font faces that artwork uses into that folder's `.omabrand/fonts/`. Save As, native brand assets, and recovery snapshots carry the faces their text uses. The destination grows a brand folder if that is what the text needs. You do not run a second collect step after a successful save and hope you remembered every weight.

SVG export draws project-font text as vector outlines so the appearance survives sharing. The curves are the glyphs. The recipient sees the headline. They do not get a live text run that depends on your project font. Open the `.oma` when the words have to change. The source still has editable text, and the project fonts are still files beside it.

Failed writes preserve existing artwork. If the destination cannot take the font copy, the art you already had is not the thing that gets sacrificed to a partial save. You still have the source folder, the `.oma`, and the faces it was using.

Recovery follows the same rule. A recovery snapshot that contains text also carries the faces that text uses. Reopening the recovered document is not a missing-font puzzle you solve by reinstalling the family on the system. The snapshot brought the files.

## In the hand

Set a headline with a project role. Apply Heading, or pick the face under Project fonts. Type a few words so you know the line is live. Save with Ctrl+S.

Copy the whole project directory to another place. The copy has to include the `.oma`, the `.omatype`, and `.omabrand/fonts/`. Hidden names matter. If the file manager hides dotfiles, the artboard will travel and the kit will stay behind. Show hidden files, then copy. Open the `.oma` from the new directory. Click in the headline. Type a character that was not in the line before. The new character uses the project face. That is the move working.

Now try Save As, or save the artwork into a different folder that does not yet have this brand. After the save, look in the destination `.omabrand/fonts/`. The faces the text uses are there. Open that saved `.oma` on a machine that has never had the font installed system-wide. The line is still editable.

Export SVG when the delivery is for a browser or for someone who will not open Omadesign. The project-font text in that SVG is outlines. Zoom in. The letterforms hold. Open the SVG in another tool and you will see paths, not a font menu entry for your kit. Keep the `.oma` as the file you edit. Change the word there. Export SVG again when the appearance has to go back out.

If a write fails, go back to the folder you saved from. The artwork there is intact. Fix the destination, disk space, or permissions, and save again. Do not retype the headline to recover from a failed copy.

## The edge

SVG export outlines project-font text. The SVG carries the appearance. It does not carry the live run, the role name, or the TTF. Recipients who need to edit the words need the `.oma` and the project fonts beside it. Recipients who need to see the words can take the SVG.

Moving the `.oma` alone, without `.omabrand/fonts/`, is not a completed move. The document stays a document. The face is the file in the kit. Copy the project, then click in the line and type the next character.
