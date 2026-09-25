---
id: T067
title: Camera RAW decoder
slug: omadesign-0-5-8-camera-raw-decoder
excerpt: LibRaw 0.22.2 is in the binary. DNG, CR2, CR3, NEF, ARW, RAF, ORF, RW2, and the rest of the recognized families decode to 16-bit linear sRGB. No converter download. The camera file stays put.
publishedAt: 2026-09-07T01:34:01Z
tags: [omadesign, 0.5.8, raw]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-camera-raw-decoder/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-camera-raw-decoder/og.png
---

## The habit

You copy a card and you open the RAW. In Lightroom the develop module is the RAW. In Photoshop you wait on Adobe Camera Raw, a plugin that has its own update train. On Linux that plugin is the thing you do not have. The usual workaround is a converter: darktable, RawTherapee, a dcraw fork, an export to TIFF, then a second app. Every one of those steps can write a new file beside the camera original, or worse, touch the original.

The habit you want is smaller. Double-click the NEF, or drop it, and see a picture made from the sensor, not from the tiny JPEG the camera embedded for the back of the LCD. Exposure and white balance should move the linear data, the numbers before the screen's curve, because that is where a stop still means a stop. The file on disk should checksum the same after you have dragged the slider and closed the app.

You also know the lie of a file extension. `.dng` means a family. It does not mean every opcode, every compression, and every phone's computational stack will come apart cleanly. A honest decoder says what it did and what it refused.

## The constraint

Omadesign ships one binary. The RAW decoder has to be inside it. LibRaw 0.22.2 is the pinned source, bundled with the packages, license and all. Opening a photo does not download a converter, and it does not shell out to an installed one. If LibRaw can read the sensor, you get an image. If it cannot, you get the failure, not a silent trip through a system library you happened to apt-install last year.

The output of that decode is 16-bit linear sRGB. Black levels come off. Supported Bayer and X-Trans sensors are demosaiced. The camera white balance and the color matrix are applied. Orientation is honored. Automatic brightness is off, so the decoder does not "help" by stretching the file before you have touched Exposure. DNG baseline exposure is applied, and Photo's Exposure and white-balance edits run on that linear source, before the display transfer. You grade the sensor's range. The screen curve is how it is shown.

The original is never the write target. There is no RAW writer. Export makes a new JPEG, PNG, or TIFF. Save settings makes an `.omaphoto` next to the original. The NEF, CR3, or DNG stays the bytes the camera wrote.

Workers do the decode. The UI stays up. A 1600-pixel preview appears, and full-resolution tiles follow when you zoom. The linear pixels are kept separate from the develop settings and from that preview. You can reset the sliders and the sensor data is still the sensor data from this session.

Limits are part of the contract, because a hostile or merely huge file should not take the machine down with it. Images over 64 megapixels are rejected. Inputs over 512 MiB are rejected. LibRaw's unpacking buffers are limited. A progress callback asks the decode to cancel after 120 seconds. That callback is cooperative. It is not a hard kill of the process at 120.000. Memory for the decoded pixels and the develop buffers sits on top of those caps. Working files in the verified set fit. A stitched scientific mosaic might not. You will hear about it.

## What landed

Recognized extensions are `.3fr`, `.arw`, `.bay`, `.cap`, `.cr2`, `.cr3`, `.crw`, `.dcr`, `.dcs`, `.dng`, `.drf`, `.erf`, `.fff`, `.iiq`, `.k25`, `.kdc`, `.mdc`, `.mef`, `.mos`, `.mrw`, `.nef`, `.nrw`, `.orf`, `.pef`, `.ptx`, `.pxn`, `.raf`, `.raw`, `.rw2`, `.rwl`, `.rwz`, `.sr2`, `.srf`, `.srw`, `.sti`, and `.x3f`. An extension identifies a family. It does not promise every camera body and every compression mode inside that family.

Not in this build: JPEG XL-compressed DNG, GPR, EIP packages, and R3D video. A multi-image RAW develops the first image only, and you get a conversion note. Later frames in that container are not a burst editor.

Open through File → Open, the Photo library, a folder, Open With, or a drop. The header reads RAW, make, and model when metadata exists, plus ISO, aperture, shutter, and on hover the lens and focal length. Before shows the default camera-balanced development. It does not show the embedded JPEG. If you wanted the camera's JPEG look, that look is a different file, the JPEG on the card. This path is the sensor.

The rendering is not a clone of Lightroom, Capture One, or the in-camera JPEG. Proprietary looks, full Adobe camera profiles, automatic lens correction, some DNG opcodes, and multi-frame computational stacks are not implemented. A lens that needs a profile will not get one quietly. Correct it yourself, or accept the difference. Clipping in the sensor or the channel stays clipped. A later Exposure move cannot invent the highlights that were never recorded.

Three real files were checked against an independent LibRaw and an sRGB transfer, pixel for pixel, on the validated native build: an iPhone 16 Pro Max ProRAW DNG at 3024 × 4032, a compressed Canon EOS R6 CR3 at 3407 × 2271, and a compressed Fujifilm X-T30 II X-Trans RAF at 6246 × 4170. A sidecar round trip on the DNG restored exposure, rotation, and crop. Those checks do not certify every body in the extension list, and they do not promise bit-identical output on every architecture. They are the proof that the bundled decoder matches a known LibRaw on those sensors.

Headless, the same reader runs:

```
omadesign --inspect photograph.NEF
omadesign --convert photograph.dng --output photograph.tif
```

Inspect reports camera metadata, dimensions, precision, and saved develop settings if a sidecar is in play. Convert writes a new file. Same-file conversion is refused, so the original cannot be the destination.

## In the hand

Copy the card to a folder. Do not "import" it into a catalog. In Photo, browse that folder, or drop one NEF on the window. Wait for the preview, which should be short. Read the make and model. If the line is missing, the metadata was not in the file. The picture can still be real.

Move Exposure. You are moving the linear source. Move Temperature and Tint for white balance. They are on that same linear data, before the display curve. Press Before to compare with the default camera-balanced develop. Press it again to return to your grade. The embedded JPEG never entered that comparison.

Zoom in. Tiles fill in from a background develop of the full resolution. The preview you had stays on screen until those tiles exist. A decode that fails the size cap or the 120 second cooperative cancel does not pretend to finish. You still have the original file, untouched.

```
drop the .NEF
Exposure, Temperature, Tint
Before
```

Export later, to a new TIFF or PNG, if you need 16-bit delivery. Place in Design if you need an 8-bit pixel layer in a layout. Neither writes the RAW. Checksum the camera file when you are doubtful. It matches the card.

If a CR3 from a body you have not tried opens with a note, read the note. Family support is the extension list. A note is the specific file telling you what was simplified. Keep the RAW. The `.oma` you might place into does not contain it.

## The edge

The decoder refuses to rewrite the camera file, and it refuses to download a helper. LibRaw 0.22.2 in the binary is the reader. There is no RAW writer at the end of the slider.

It also refuses files over 64 megapixels, inputs over 512 MiB, JPEG XL DNG, GPR, EIP, and R3D, and it develops only the first image of a multi-image RAW. Clipped channels stay clipped. Lens profiles and Adobe's full camera looks are not applied. What you grade is the linear sRGB the bundled decoder produced, 16-bit, orientation honored, automatic brightness left off.
