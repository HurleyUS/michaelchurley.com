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

You send a PDF when the other person doesn't have your application. Illustrator's `.ai` is usually a PDF with private data appended. With "Create PDF Compatible File" turned on, anyone can preview it. With it off, everyone else sees blank pages. Photoshop and Affinity both place and export PDF. You expect the artboards, paths, images and optional-content groups to come through. You probably already suspect that form fields, margin comments and a spot color built for a press won't survive a casual open.

The habit on export is the same. Export the PDF and keep the native file. Anyone who treats the PDF as the only master eventually finds out, at the worst time, that the type has become outlines and the shadow has become a picture.

## The constraint

PDF import and export are built into the binary. Poppler-class checks exist so a page can be compared with an independent renderer. There is no Illustrator writer, and Omadesign doesn't write or rebuild private `.ai` data. The PDF-compatible stream is the artwork. If that stream is empty, the import is empty, and the conversion note says so. Go back to Illustrator and save a PDF that contains the art, or turn compatibility on and save again.

Encrypted PDFs stay locked. The importer won't break the protection, and it won't write a decrypted file over the original. Save a copy with the password protection removed, then open the copy.

Older PostScript `.ai`, EPS and PS files go through Ghostscript, which has to be installed. The conversion runs in a private temporary directory with limits on runtime and output, and then the PDF importer does the actual read. If Ghostscript is missing, you get setup guidance. The app doesn't call a guessed path or drop a file into the source folder.

Export has to stay editable where the page is simple and be accurate where it isn't. Text becomes outlines in the PDF, because a receiving RIP shouldn't need your project fonts. The `.oma` keeps the live text. Every raster fallback writes a note. An effect never gets swapped for a single gradient color and shipped without a mention.

## What landed

PDF import creates an artboard for every page. Paths and strokes come in editable. Nested optional-content groups become layer groups. These are the PDF's OCG layers, with their names, structure and visibility, the same idea as Illustrator's top-level layers when they were written into the PDF. Embedded images become pixel layers. The importer reads supported axial gradients, blending, opacity, clipped artwork, and alpha or luminosity soft masks. Clips and soft masks become cropped pixel masks.

Straightforward text and embedded OpenType can stay editable. Embedded CFF, and text that is transformed or complex, can become editable outlines. An embedded subset may not contain the characters you need for a later edit, so you can shape the outlines but may not be able to type a new word in that subset font. Set the new word with a project font in the `.oma`.

The import reports its approximations. They cover unsupported drawing operators, radial, mesh and pattern shading, dash phases and patterns, custom miter limits, font substitutions, ICC, spot and pattern colors, overprint, and knockout. PDF transparency groups come in, and non-isolated groups are approximated as isolated ones. Annotations and form fields aren't artwork, so they don't become movable layers.

A real four-page kitchen drawing imported as 608 shapes, 48 groups and 142 layers, and I compared it visually with Poppler. A 28-artboard Illustrator document came in with blank PDF-compatible pages. An independent PDF renderer showed those pages blank too. Artwork that exists only in Illustrator's private data can't be recovered this way. The diagnostic tells you that up front, so you don't search through empty artboards hoping the private data will decode.

PDF export writes pages, paths, raster images with alpha, opacity and blending, and optional-content layer metadata, including names, order, visibility and locks. Text becomes vector outlines. Gradients, masks, effects and complex compositing render at document resolution into the affected layer or group. Vector layers the fallback didn't touch stay editable. A rendered group becomes one named PDF layer, and the objects inside it remain in the `.oma`. Hidden layers stay hidden. Backdrop-dependent pass-through effects can require rendering entire pages. The page fallback for that case kept the exact native composite and matched Poppler's Cairo backend pixel for pixel. A separate Splash-backend check covers layers and alpha. Each fallback image is capped at 64 megapixels, with a 512 MiB total pixel budget.

`.ai` import reads the PDF-compatible artwork, or older PostScript through Ghostscript and then PDF. There is no Illustrator-native writer, so export PDF or SVG when Illustrator is on the other end. Private data, live effects, symbols and appearance stacks aren't reconstructed on import or written on export.

Headless: `omadesign --convert artwork.oma --output artwork.pdf`. Notes go to stderr. The `.oma` isn't overwritten, and converting a file onto itself is refused.

## In the hand

Press Ctrl+O and choose the PDF or the `.ai`. Compare the number of artboards with the page count you expect. A 4-page PDF should give you 4 artboards, and page one shouldn't be stretched across a default canvas. Open the layer list and find the optional-content groups. Hide and show them to check they match the PDF's layers.

Open View > Document conversion notes. If the file used spot colors, overprint or mesh gradients, they are named there. The paths you can edit with the Node tool (A) are real paths, and the note describes the shading that became an approximation. Click a text line. If it is still text, you can edit it, but the subset may be missing glyphs. If it is outlines, edit the outlines or retype the line.

If an `.ai` opens blank, its PDF-compatible section is empty or blank. Check the notes, then open the same file in a PDF viewer. If the viewer is blank too, Illustrator never wrote the art into the PDF part. Save a compatible PDF from Illustrator and open that. Re-importing the private file won't give a different result.

Press Ctrl+Shift+S and save a `.oma`. Export PDF when you are ready to send pages, and read the notes after export. A group that became one pixel layer is named in the PDF and still editable in the `.oma`. Send the PDF and keep the `.oma`.

For an old EPS or PostScript `.ai`, install Ghostscript and open the file again. The temporary conversion stays in a private directory, and your EPS isn't rewritten.

For an encrypted file, use a tool that already has the password to save a copy with the protection removed. Open the copy and leave the encrypted original alone.

## The edge

Omadesign doesn't reconstruct private Illustrator data. An `.ai` contributes its PDF-compatible artwork, or its older PostScript after Ghostscript converts it to PDF. Live effects, symbols and appearance stacks that exist only in the private section don't come back. If the compatible pages are blank, the imported document is blank.

PDF export doesn't keep live project text. You deliver the outlines and edit in the `.oma`. There is no Save As `.ai`.
