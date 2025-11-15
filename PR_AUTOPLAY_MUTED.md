# PR: Portfolio iframe — autoplay & muted

This branch documents the small portfolio change that passes `autoplay=1&muted=1` to the Battleship demo iframe and sets `allow="autoplay; fullscreen"` on the created iframe.

Changes included in this branch:

- Portfolio JS now appends `muted=1` when `muted:true` is passed to `createAndInsertIframe`.
- The demo iframe now sets `allow = 'autoplay; fullscreen'` to help the browser permit autoplay where allowed.
- The "Load & Autoplay" button now requests `{autoplay:true, muted:true}`.

This branch is ready for review and merge into `main`.
