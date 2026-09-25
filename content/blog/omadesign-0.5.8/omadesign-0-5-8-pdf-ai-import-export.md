---
id: T109
title: PDF AI import export
slug: omadesign-0-5-8-pdf-ai-import-export
excerpt: PDF pages open as artboards with paths, supported text, images, and optional-content layers. Export writes pages, vectors, and that layer metadata. An .ai contributes its PDF-compatible artwork. Private Illustrator data stays unrebuilt.
publishedAt: 2026-09-07T01:44:01Z
tags: [omadesign, 0.0.2-alpha, pdf]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pdf-ai-import-export/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pdf-ai-import-export/og.png
---

## The habit

PDF is the file you send when the other person does not have your application. Illustrator’s `.ai` is usually a PDF with a private tail. You turn on "Create PDF Compatible File" and the world can preview it. You turn it off and the world sees blank pages. Photoshop and Affinity both place PDF and both export PDF. The artboards, the paths, the images, and the optional-content groups are the part you expect to see. Form fields, comments stuck in the margin, and a spot color you built for a press are the part you already suspect will not survive a casual open.

The habit on the way out is the same. Export PDF. Keep the native file. Anyone who treats the PDF as the only master finds out, at the worst time, that the type has become outlines and the shadow has become a picture.

## The constraint

PDF import and export are in the binary. Poppler-class checks exist so a page can be compared with an independent renderer. There is no Illustrator writer. Private `.ai` data is not a format this app emits or rebuilds. The PDF-compatible stream is the artwork. If that stream is empty, the import is empty. The note says so. You go back to Illustrator and save a PDF that contains the art, or you turn compatibility on and save again.

Encrypted PDFs are locked on purpose. The importer will not break that protection, and it will not write a decrypted file over the original. You save a copy with the password protection removed, then open that copy.

Ghostscript is the door for older PostScript `.ai`, EPS, and PS. It has to be installed. The conversion runs in a private temporary directory with a bounded runtime and output, then the PDF importer does the real read. A missing Ghostscript produces setup guidance. It does not shell out to a guessed path and dump a file into the source folder.

Export has to stay editable where the page is simple, and honest where it is not. Text becomes outlines in the PDF, because a receiving RIP should not need your project fonts. The `.oma` keeps the live text. Every raster fallback writes a note. An effect is not replaced with a single gradient color and shipped as if nothing happened.

## What landed

PDF import creates an artboard for every page. Paths and strokes come in editable. Nested optional-content groups become layer groups. Those are the PDF’s OCG layers: names, structure, and visibility, the same idea as Illustrator’s top-level layers when they were written into the PDF. Embedded images become pixel layers. Supported axial gradients, blending, opacity, clipped artwork, and alpha or luminosity soft masks are read. Clips and soft masks become cropped pixel masks.

Straightforward text, and embedded OpenType, can stay editable. Embedded CFF, and text that is transformed or complex, can become editable outlines. An embedded subset may not contain the characters you need for a later edit. You can shape the outlines. You may not be able to type a new word in that subset font. Set the new word with a project font in the `.oma`.

The import reports approximations. Unsupported drawing operators, radial and mesh and pattern shading, dash phases and patterns, custom miter limits, font substitutions, ICC and spot and pattern colors, overprint, and knockout. PDF transparency groups come in. Non-isolated groups are approximated as isolated groups. Annotations and form fields are not artwork. They do not become layers you can move.

A real four-page kitchen drawing imported as 608 shapes, 48 groups, and 142 layers, and it was compared visually with Poppler. A 28-artboard Illustrator document exposed blank PDF-compatible pages. An independent PDF renderer showed those pages blank as well. Artwork that exists only in Illustrator’s private data cannot be recovered on this path. The diagnostic is the point. You do not hunt through empty artboards hoping the private tail will decode.

PDF export writes pages, paths, raster images with alpha, opacity and blending, and optional-content layer metadata. That metadata includes names, order, visibility, and locks. Text becomes vector outlines. Gradients, masks, effects, and complex compositing render at document resolution into the affected layer or group. Vector layers the fallback did not touch stay editable. A rendered group becomes one named PDF layer. The objects inside that group remain in the `.oma`. Hidden layers keep their hidden state. Backdrop-dependent pass-through effects can require rendering entire pages. The page fallback for that case retained the exact native composite and matched Poppler’s Cairo backend pixel for pixel. A separate Splash-backend check covers layers and alpha. Fallback images stop at 64 megapixels each and a 512 MiB total pixel budget.

`.ai` import is the PDF-compatible artwork, or older PostScript through Ghostscript and then PDF. There is no Illustrator-native writer. Export PDF or SVG when Illustrator is the other end. Private data, live effects, symbols, and appearance stacks are not reconstructed on import, and they are not written on export.

Headless: `omadesign --convert artwork.oma --output artwork.pdf`. Notes go to stderr. The `.oma` is not overwritten. Same-file conversion is refused.

## In the hand

Press Ctrl+O. Choose the PDF or the `.ai`. Count the artboards against the page count you expect. A 4-page PDF should give you 4 artboards, not page one stretched across a default canvas. Open the layer list and look for the optional-content groups. Hide and show them. They should match the PDF’s layers.

Open View → Document conversion notes. Spot colors, overprint, and mesh gradients will be named there when the file used them. The paths you can edit with the Node tool, A, are real paths. The shading that became an approximation is what the note describes. Click a text line. If it is still text, edit it and remember the subset may be missing glyphs. If it is outlines, edit the outlines or retype.

For an `.ai` that opens blank, the PDF-compatible section is empty or blank. Check the notes. Open the same file in a PDF viewer. If the viewer is blank too, Illustrator never wrote the art into the PDF part. Save a compatible PDF from Illustrator and open that. Do not keep re-importing the private file and hoping for a different decoder.

Press Ctrl+Shift+S and save a `.oma`. Export PDF when you are ready to send pages. Read the notes after export. A group that became one pixel layer is named in the PDF and still editable in the `.oma`. Send the PDF. Keep the `.oma`.

Old EPS or PostScript `.ai`: install Ghostscript, then Open again. The temporary conversion stays in a private directory. Your EPS is not rewritten.

Encrypted file: save a copy with the password protection removed, from a tool that already has the password. Open the copy. Leave the encrypted original alone.

## The edge

Private Illustrator data is not reconstructed. An `.ai` contributes its PDF-compatible artwork, or its older PostScript after Ghostscript turns that into a PDF. Live effects, symbols, and appearance stacks that live only in the private section do not come back. If the compatible pages are blank, the tab is blank.

PDF export does not keep live project text. The outlines are the delivery. The `.oma` is the edit. There is no Save As `.ai`.

Press Ctrl+O on the PDF, check every artboard, then save the `.oma` and export PDF when the pages have to travel.
