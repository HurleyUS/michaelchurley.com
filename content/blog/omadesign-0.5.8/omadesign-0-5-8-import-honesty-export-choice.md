---
id: T142
title: Import honesty export choice
slug: omadesign-0-5-8-import-honesty-export-choice
excerpt: Open PSD, PDF, SVG, ORA, XCF, Affinity through the bridge, and RAW. Conversion notes stay in the .oma. Export PNG at 1× 2× 3×, SVG, Lottie, PSD, PDF, and ORA. There is no native AI or Affinity writer.
tags: [omadesign, 0.5.8, files]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-import-honesty-export-choice/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-import-honesty-export-choice/og.png
---

## The habit

You open a PSD and you know the live text may arrive as pixels. You open an AI file and you know the private Illustrator data may not be in the PDF-compatible stream. You open an Affinity document and you know the adjustments and the history are not a promise. The honest apps tell you what changed. The other kind of import succeeds silently and you discover the missing effect at the client review.

Export is the other half. You want PNG at 1×, 2×, and 3×, an SVG, a Lottie, a layered PSD, a PDF, an OpenRaster. You want to pick the one the next person can open. You do not want a button that claims to write a native `.ai` or `.af` when the writer does not exist. You keep the `.oma` as the editable file and you keep the source you imported when the notes say something was lost.

## The constraint

One document format is the master. Importers have to land in the native layer tree, record what they could not carry, and leave the source file untouched. **Save** writes `.oma`. If an importer rewrote the PSD or the RAW in place, the round trip would be a destructive save with a friendly name.

Notes have to live in the `.oma`, not only in a dialog you dismiss. **View → Document conversion notes** shows them again later. A format that appears in the Open dialog is not a promise of complete compatibility. The format guide says that in the first paragraph, and the exporters have to obey it. Where a feature cannot travel, the note says so. PDF export's rule is that effects are not silently dropped or replaced with a single gradient color. Fallback images are capped. Same-file conversion is refused so a headless `--convert` cannot clobber the path you passed as input.

There is no native `.ai` writer and no native `.af` writer. Interchange for those sources is PDF, SVG, PSD, or ORA, plus the `.oma` you actually continue in.

## What landed

**File → Open** reads layered PSD and PSB, GIMP `.xcf`, every page of PDF and PDF-compatible AI, OpenRaster, SVG and SVGZ, and supported Affinity documents through the optional bridge. EPS and PostScript go through Ghostscript if it is installed, then through the PDF importer. Each import opens in its own tab at the original dimensions. The source file stays where it was.

PSD and PSB keep groups, names, placement, visibility, opacity, blends, pixel masks, and supported Normal color overlays. Text and smart objects arrive as their saved pixels. Other effects, fills, and adjustments produce notes. Export writes RGB 8-bit layered PSD or PSB. Vectors and live text render into pixel layers on the way out.

PDF import builds artboards per page, paths, supported text, images, and optional-content groups. Complex text can become editable outlines. Illustrator's private data, symbols, and live effects are not reconstructed. `.ai` means the PDF-compatible part, or older PostScript via Ghostscript. PDF export writes pages, paths, images, opacity, and optional-content layers. Text becomes outlines in the PDF. The `.oma` still has the live text. Backdrop-dependent blending can rasterize a page, with a note.

SVG import keeps objects, hierarchy, names, transforms, text, images, and supported masks. Scripts, animation, and foreign content do not come in. SVG export keeps vectors. Shape and conic gradients become image patterns, capped at 4096 pixels on a side. Linear and radial gradients keep stops. Project fonts export as outlines. The source text stays editable in the `.oma`.

OpenRaster round-trips pixel layers and groups. Vectors and text become pixels per layer on export. Unsupported Porter-Duff modes are rejected rather than quietly mapped to Normal. GIMP `.xcf` imports pixels, groups, masks, and supported blends. Live text, effects, and paths are not reconstructed. There is no XCF writer. Send GIMP an ORA or a PSD. High bit depth becomes 8-bit RGBA, with a note.

Affinity import is the optional bridge, `./scripts/setup-affinity-import.sh`, run once. It does not download during import. Legacy and newer containers are partial. Adjustments, live effects, publishing structure, and history do not come across as native edits. There is no `.afdesign` or `.afphoto` writer.

RAW opens in Photo. `.omaphoto` is settings beside the camera file. Export from Photo is JPEG, PNG, or TIFF. Placement into Design is 8-bit.

**View → Document conversion notes** lists the unsupported and converted features. The same notes stay in the `.oma`.

Export from the File menu and from `Ctrl+E`: PNG at 1×, 2×, and 3×, JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster. Layers a format cannot carry may become individual pixel layers. The notes describe that. Lottie wants shape animation. Pixel layers, masks, and effects error out of Lottie. Use animated SVG when you need them. Static PNG, JPEG, and SVG are the rest pose. The clip stays in the `.oma`.

Headless, the same readers:

```sh
omadesign --inspect artwork.psd
omadesign --convert artwork.oma --output artwork.pdf
omadesign --convert artwork.oma --output artwork.ora
```

Output suffixes include `.oma`, `.svg`, `.png`, `.jpg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Notes go to stderr. The destination is a different path.

## In the hand

Press `Ctrl+O`. Choose a PSD you know has live type. It opens at its pixel size. Read **View → Document conversion notes**. The type layers that arrived as pixels are named there. Save a `.oma`. The PSD on disk is unchanged. Edit what you can edit. `Ctrl+E` and write a PDF or an ORA for the next tool. Open the `.oma` tomorrow. The notes are still in the file.

Open a PDF with several pages. You get an artboard per page. Text you can edit is text. Text that had to be outlined is paths, and the note says so. Export SVG for the logo page. Export PNG at 2× for a preview.

Open an SVG. Drag a node with `A`. Export SVG again. Compare. If a mask became pixels, the note told you before the client did.

For Affinity, run the setup script once on a machine that has the pinned converter's dependencies. Open the `.afdesign`. Read the notes. Save `.oma`. Export PDF or SVG. Leave the Affinity file as the Affinity file.

For a camera file, stay in Photo. Do not expect **Save** to produce a layered document. Place or export when you need pixels. `--inspect photograph.NEF` prints metadata without writing a sibling unless you convert on purpose.

Drop a file on the welcome screen if you do not want the dialog. Layered documents open. Ordinary images place. `.oma` opens.

## The edge

Open does not mean the proprietary effect survived. There is no writer for native Illustrator or native Affinity. GIMP does not get an XCF back. Conversion notes stay in the `.oma` because the dialog is easy to close. Same-file conversion is refused. The source you opened is still the source. The file you continue in is the `.oma`.

Open the PSD, then open **View → Document conversion notes** before you trust the layer list.
