---
id: T067
title: Camera RAW decoder
slug: omadesign-0-5-8-camera-raw-decoder
excerpt: LibRaw 0.22.2 is in the binary. DNG, CR2, CR3, NEF, ARW, RAF, ORF, RW2, and the rest of the recognized families decode to 16-bit linear sRGB. No converter download. The camera file stays put.
publishedAt: 2026-09-07T01:34:01Z
tags: [omadesign, 0.0.2-alpha, raw]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-camera-raw-decoder/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-camera-raw-decoder/og.png
---

## The habit

You copy a card and open the RAW. In Lightroom the develop module is where the RAW lives. In Photoshop you wait on Adobe Camera Raw, a plugin with its own update schedule, and on Linux that plugin doesn't exist. The usual workaround is a converter: darktable, RawTherapee, or a dcraw fork, then an export to TIFF, then a second app. Every one of those steps can write a new file beside the camera original, or worse, touch the original.

What you actually want is simpler. Double-click the NEF, or drop it, and see a picture made from the sensor data instead of the small JPEG the camera embedded for its rear screen. Exposure and white balance should move the linear data, meaning the numbers before the screen's curve is applied, because that is where a stop is still a stop. And the file on disk should have the same checksum after you have dragged the slider and closed the app.

You also know a file extension can mislead. `.dng` names a family. It doesn't guarantee that every opcode, every compression mode, and every phone's computational stack will decode cleanly. A decoder should say what it did and what it refused.

## The constraint

Omadesign ships as one binary, so the RAW decoder has to be inside it. The pinned source is LibRaw 0.22.2, bundled with the packages along with its license. Opening a photo doesn't download a converter or call out to an installed one. If LibRaw can read the sensor data, you get an image. If it can't, you see the failure, instead of the file being routed silently through some system library you installed last year.

The decoder outputs 16-bit linear sRGB. It subtracts black levels, demosaics supported Bayer and X-Trans sensors, applies the camera white balance and color matrix, and honors orientation. Automatic brightness is off, so the decoder doesn't stretch the file before you have touched Exposure. DNG baseline exposure is applied. Photo's Exposure and white balance edits run on that linear source, before the display transfer. You grade the sensor's range, and the screen curve only controls how it is displayed.

The original is never written to, because there is no RAW writer. Export makes a new JPEG, PNG, or TIFF. Save settings writes an `.omaphoto` next to the original. The NEF, CR3, or DNG keeps the bytes the camera wrote.

Worker threads do the decode, so the UI stays responsive. A 1600-pixel preview appears first, and full-resolution tiles follow when you zoom. The linear pixels are stored separately from the develop settings and from the preview, so if you reset the sliders you still have the same sensor data for this session.

The limits are part of the design, because a hostile or simply huge file shouldn't take the machine down. Images over 64 megapixels are rejected, and so are inputs over 512 MiB. LibRaw's unpacking buffers are capped. A progress callback asks the decode to cancel after 120 seconds. That cancel is cooperative, so it asks the decoder to stop and does not kill the process at exactly that moment. Memory for the decoded pixels and the develop buffers comes on top of those caps. Working files in the verified set fit. A stitched scientific mosaic might not, and if so, the app tells you.

## What landed

The recognized extensions are `.3fr`, `.arw`, `.bay`, `.cap`, `.cr2`, `.cr3`, `.crw`, `.dcr`, `.dcs`, `.dng`, `.drf`, `.erf`, `.fff`, `.iiq`, `.k25`, `.kdc`, `.mdc`, `.mef`, `.mos`, `.mrw`, `.nef`, `.nrw`, `.orf`, `.pef`, `.ptx`, `.pxn`, `.raf`, `.raw`, `.rw2`, `.rwl`, `.rwz`, `.sr2`, `.srf`, `.srw`, `.sti`, and `.x3f`. An extension identifies a family, which does not guarantee support for every camera body and compression mode in that family.

This build doesn't support JPEG XL-compressed DNG, GPR, EIP packages, or R3D video. A multi-image RAW develops only the first image and adds a conversion note. There is no burst editor for the later frames in that container.

You can open a RAW through File > Open, the Photo library, a folder, Open With, or a drop. When metadata exists, the header shows RAW, make, and model, plus ISO, aperture, and shutter, with lens and focal length on hover. Before shows the default camera-balanced development. It never shows the embedded JPEG. If you want the camera's JPEG look, that is a different file, the JPEG on the card. This path works from the sensor data.

The rendering does not try to match Lightroom, Capture One, or the in-camera JPEG. Proprietary looks, full Adobe camera profiles, automatic lens correction, some DNG opcodes, and multi-frame computational stacks are not implemented. A lens that needs a profile won't get one applied behind your back, so correct it yourself or accept the difference. Clipping in the sensor or a channel stays clipped, and a later Exposure move can't recover highlights that were never recorded.

I checked three real files pixel for pixel against an independent LibRaw and an sRGB transfer on the validated native build: an iPhone 16 Pro Max ProRAW DNG at 3024 × 4032, a compressed Canon EOS R6 CR3 at 3407 × 2271, and a compressed Fujifilm X-T30 II X-Trans RAF at 6246 × 4170. A sidecar round trip on the DNG restored exposure, rotation, and crop. Those checks don't certify every body in the extension list or promise bit-identical output on every architecture. They show that the bundled decoder matches a known LibRaw on those sensors.

The same reader runs headless:

```
omadesign --inspect photograph.NEF
omadesign --convert photograph.dng --output photograph.tif
```

Inspect reports camera metadata, dimensions, precision, and saved develop settings if a sidecar exists. Convert writes a new file. It refuses to convert a file onto itself, so the original can never be the destination.

## In the hand

Copy the card to a plain folder. There is no catalog import. In Photo, browse that folder or drop one NEF on the window, and wait for the preview, which should be quick. Check the make and model. If that line is missing, the file had no metadata, and the picture can still be fine.

Move Exposure, and you are moving the linear source. Move Temperature and Tint for white balance, which also work on the linear data before the display curve. Press Before to compare with the default camera-balanced develop, and press it again to return to your grade. The embedded JPEG is never part of that comparison.

Zoom in. Tiles fill in from a background develop at full resolution, and the preview stays on screen until those tiles are ready. A decode that hits the size cap or the 120 second cooperative cancel reports that it stopped, and the original file is untouched.

```
drop the .NEF
Exposure, Temperature, Tint
Before
```

Export to a new TIFF or PNG later if you need 16-bit delivery, or place the photo in Design if you need an 8-bit pixel layer in a layout. Neither writes to the RAW. If in doubt, checksum the camera file. It matches the card.

If a CR3 from a body you haven't tried opens with a note, read the note. The extension list tells you which families are supported, and the note tells you what was simplified for that specific file. Keep the RAW, because an `.oma` you place the photo into does not contain it.

## The edge

The decoder never rewrites the camera file or downloads a helper. The only reader is LibRaw 0.22.2 inside the binary, and nothing writes RAW back out.

It rejects files over 64 megapixels, inputs over 512 MiB, JPEG XL DNG, GPR, EIP, and R3D, and it develops only the first image of a multi-image RAW. Clipped channels stay clipped, and lens profiles and Adobe's full camera looks are not applied. You grade the 16-bit linear sRGB that the bundled decoder produced, with orientation honored and automatic brightness off.
