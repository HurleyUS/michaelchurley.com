---
id: T118
title: Compete waitlist
slug: omadesign-0-5-8-compete-waitlist
excerpt: /compete lists competitions, public entries, and withdrawal. A competition stays unpublished until it has a real brief and dates. Enter with a public showcase work. /account is identity. /api/cloud is the desktop transport.
tags: [omadesign, 0.5.8, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-compete-waitlist/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-compete-waitlist/og.png
---

## The habit

Design competitions usually open with a form. You read the brief, you upload a board, you get a confirmation, you wait. Sometimes the form is a waitlist because the brief is not ready, and the site still wants your email. You have also seen the other kind, where entering is a side effect of posting to a gallery you thought was a portfolio. The work is in the show before you decided it was an entry.

Adobe's community sites and the various poster annuals train the same reflex. Read the dates. Submit the public piece. Keep the working file at home. Withdraw if the piece is wrong, before the close, using a control that is actually on the page. A waitlist you joined in May should not silently become a submission in September.

## The constraint

The short claim says `omadesign.app/compete` is rules plus a waitlist, and that entries are not required on day one. It points at `/account` for sign-in identity and `/api/cloud` for sync, publish, and the waitlist, and it calls the API last-write-wins.

The cloud guide is the current behavior, and where the short claim is older, the guide wins.

`/compete` lists competitions, the public entries, and your withdrawal controls. You are not required to enter because you installed the app, signed in, or pushed a project. A competition stays unpublished until an operator supplies a real brief and real opening and closing dates. There is no public administrator endpoint for that configuration. Until those dates exist, there is no open contest hiding behind the page.

An entry is an owned work that is already on the public showcase. You publish a flat export first. Then you enter that public work. Duplicate submissions are rejected. The server enforces the closing date. Withdrawal is a control on `/compete`, not a mail to an anonymous inbox.

The older waitlist records are still retained. They live in Convex as `waitlistSignups`, indexed by list and normalized email. Cloud and competition audiences stay separate. There is no public signup-list or lookup endpoint. That older signup never sent email. Member invitations are a different system, through Resend, and they expire in seven days. An authenticated operator can review or export retained waitlist records, or remove an address. The removal function is internal. The public API will not do it for a caller.

`/account` is the sign-in identity: the name and email, and the place you revoke a desktop credential. `/api/cloud` is the desktop transport. The guide's rule for documents is versioned pushes. Every push adds files. A local edit does not overwrite another designer's version. Comments stay on the snapshot they were written on. The older "last write wins" sentence is not the rule to follow for a project. There is no CRDT merging two live canvases, and there is no live shared canvas in this scope. Pushes add. They do not blend.

The 0.5.4 site work replaced the outdated cloud-waitlist pitch with these workflows. A waitlist record from earlier is history. It is not the front door of `/compete` now.

## What landed

Open `https://omadesign.app/compete`. You get the competition list, the public entries for competitions that are actually up, and the controls to withdraw an entry that is yours. If the operator has not published a brief with opening and closing dates, you are not late. The contest is not open. The page is not collecting a substitute entry through a side form.

To enter, when one is open, you use a showcase work you own. That means Publish selected export already happened, the image is on `/showcase/:id`, and the source file was not what you submitted. The entry stores that public work. A second submission of the same work is rejected. After the closing date, the server refuses the entry. You do not get in because your clock was behind.

Withdrawal is on `/compete`. Use it when the public image should stop being an entry. Unpublishing the showcase work also removes it from competition displays and from the image endpoint. Those are related and not identical. Withdraw addresses the entry. Unpublish addresses the public image. Read the page you are on before you assume one click did both.

`/account` remains the identity page. Match this email to the email you use in the desktop sign-in. A competition entry is not a second account.

`/api/cloud` is how the desktop talks to sync, publish, and the related cloud calls. Your script, if you are not the desktop app, is not invited to invent a private waitlist lookup. There is no public lookup endpoint. Signup, the historical one, did not send mail. If you are waiting for a confirmation message from an old waitlist, it was never going to arrive. Invitations you receive now are project invites, explicit, from Resend, to a verified email.

Operators configure a competition internally with a title, a description, opening and closing timestamps, and an active flag. That is not a screen in the drawing app. You will see the contest on `/compete` when it is published. You will not see a draft brief the operator has not turned on.

Day one of using Omadesign does not include an entry. The binary, the `.oma`, the local save, and even a private push are all usable with `/compete` left untouched. Enter when you have a public piece and an open brief. Skip it for the life of the install if that is what you want. The app does not gate the canvas on a contest.

## In the hand

Sign in if you need the account. Look at `/account` and confirm the email. Open `/compete` in the same browser. Read what is actually listed. If the list is rules and no open contest, stop. There is nothing to submit. You are not failing a required step.

When a contest is open, publish the flat export first. Confirm `/showcase/:id` shows the image you want judged, and does not show the `.oma`. Then enter from the owned public work. If the server rejects a duplicate, you already entered that work. If it rejects for the date, the contest is closed. Do not republish under a second id to sneak the same piece past a duplicate check you have not read. The rejection is the rule.

To pull an entry, use the withdrawal control on `/compete`. Then check the showcase if the image itself should also leave the public gallery. Unpublish when that is the goal. Archive the project when collaborators should lose it too. The local `.oma` stays on your disk through all of these. None of them rewrite the camera file, the brand folder, or the document you have not pushed.

Leave `OMADESIGN_CLOUD_URL` and the desktop out of this unless you are publishing from the app. Publish selected export can be done on the desktop or the web. The entry still requires the public showcase work. A file that exists only in `~/.local/share/omadesign/cloud-store.json` is not an entry.

## The edge

You cannot enter with a private file. The entry is an owned public showcase work. Duplicate submissions are rejected. The server enforces the closing date. A competition with no real brief and no dates stays unpublished.

An old waitlist signup is not an entry and never sent you mail. There is no public list to query. You are not required to enter on the day you install.

Open `/compete`, read the dates, and enter only the showcase image you already meant to show.
