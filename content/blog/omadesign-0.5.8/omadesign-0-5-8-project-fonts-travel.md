---
id: T099
title: Project fonts travel
slug: omadesign-0-5-8-project-fonts-travel
excerpt: Move the project and native .oma text stays editable, including new characters. Saving into another folder copies the faces that artwork uses. SVG export outlines project-font text. The .oma keeps the live text.
publishedAt: 2026-09-06T10:49:01Z
tags: [omadesign, 0.0.1-alpha, typography]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-project-fonts-travel/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-project-fonts-travel/og.png
---

## The habit

Packaging is the job you do at the end, when the file has to leave your machine. Illustrator has Package, which gathers links and a Document fonts folder so the next person can open the `.ai` and still edit the type. PDF export embeds a font subset so a press can print the line without owning the face. SVG export asks a different question: keep the text as text, or convert it to curves so the logo looks right in a browser that has never heard of the family.

Photoshop either flattens the type layer or leaves it live inside the PSD, and the PSD still needs the font installed if you want to retype a word. Affinity packages fonts with the document when you export a package. In all of these tools the worrying moment is the same. You copied the artwork to a laptop, a server, or a different folder for a delivery, and the headline came back as a missing-font box or a substituted grotesque.

You want two outcomes that don't conflict. The working file stays editable after the folder moves, and the file you hand to someone who will never open the working file still looks like the headline you set.

## The constraint

Omadesign keeps the working file as one `.oma` and the faces as files in the project. `.omatype` names the roles, and `.omabrand/fonts/` holds the TTF and OTF copies. Nothing in that design contacts a font service when the file opens. Moving the project is a directory copy, whether by `rsync`, a USB stick or a tarball. The app has to resolve the kit from that folder before it shapes text, or the first open on the new machine would be a guess.

People forget about Save As into another folder. The `.oma` arrives in the new directory, but the font files are still in the old project's `.omabrand/fonts/`. A save that only wrote JSON would leave the text without its fonts. So the save copies the faces the artwork actually uses into the destination folder's `.omabrand/fonts/`. Faces the kit lists but the artwork never used are copied separately, through Save copy… on the Typography tab. This path only handles the faces on the page.

SVG has a different audience: a browser, a slide deck, a printer RIP, another editor. None of them read `.omatype` or open `.omabrand/`. If the SVG referred to a project font by name, the result would depend on a file the recipient doesn't have. So the export draws project-font text as vector outlines, and the `.oma` stays the editable source. Failed writes also have to leave the existing artwork alone. A half-copied font folder must never be how the headline disappears.

## What landed

Native `.oma` text stays editable after you move the project, including typing new characters. You aren't looking at a baked preview that lets you nudge the box but blocks the cursor. Load the project in its new place and the kit resolves before shaping. Press T, click in the line and type, and the face is the project face.

A copied project finds the same face on the other machine through portable font identities. The role in `.omatype` points at a relative path under `.omabrand/`, and the file in `fonts/` is the face. Background refresh notices new files in that folder but doesn't rewrite font choices already applied to text. A file that appears while you work becomes available, and the line you set keeps its current face until you click Apply.

Saving artwork into another folder also copies the font faces that artwork uses into that folder's `.omabrand/fonts/`. Save As, native brand assets and recovery snapshots all carry the faces their text uses, and the destination gets a brand folder if the text needs one. You don't need a second collect step after a successful save, hoping you remembered every weight.

SVG export draws project-font text as vector outlines so the appearance survives sharing. The curves are the glyphs, so the recipient sees the headline without needing your project font for a live text run. Open the `.oma` when the words have to change. The source still has editable text, with the project fonts as files beside it.

If a write fails, the existing artwork is preserved. When the destination can't take the font copy, a partial save doesn't cost you the art you already had. You still have the source folder, the `.oma` and the faces it was using.

Recovery follows the same rule. A recovery snapshot that contains text also carries the faces that text uses, so reopening the recovered document doesn't mean reinstalling the family on the system.

## In the hand

Set a headline with a project role, either by applying Heading or by picking the face under Project fonts. Type a few words so you know the line is live, then save with Ctrl+S.

Copy the whole project directory somewhere else. The copy has to include the `.oma`, the `.omatype` and `.omabrand/fonts/`. Hidden names matter. If the file manager hides dotfiles, the artboard will travel and the kit will stay behind, so show hidden files before you copy. Open the `.oma` from the new directory, click in the headline and type a character that wasn't in the line before. The new character uses the project face.

Now try Save As, or save the artwork into a different folder that doesn't have this brand yet. After the save, look in the destination's `.omabrand/fonts/`. The faces the text uses are there. Open that saved `.oma` on a machine that has never had the font installed system-wide, and the line is still editable.

Export SVG when the delivery is for a browser or for someone who won't open Omadesign. The project-font text in that SVG is outlines. Zoom in and the letterforms hold. Open the SVG in another tool and you see paths instead of a font menu entry for your kit. Keep the `.oma` as the file you edit, change the words there, and export SVG again when the updated version has to go out.

If a write fails, go back to the folder you saved from. The artwork there is intact. Fix the destination's disk space or permissions and save again. You don't need to retype the headline.

## The edge

SVG export outlines project-font text. The SVG carries the appearance but not the live text, the role name or the TTF. Recipients who need to edit the words need the `.oma` with the project fonts beside it. Recipients who only need to see the words can take the SVG.

Moving the `.oma` without `.omabrand/fonts/` is an incomplete move. The document still opens, but the face lives in the kit, so copy the whole project.
