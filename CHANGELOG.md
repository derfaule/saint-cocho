# Changelog

Notes on the story-grid componentization work, across the related repos.

## 2026-11-10

### derfaule/saint-cocho
Merged to `main` via PRs #3, #4 and #5.

- **Add story-grid component** (`782b6c2`, #3): new `components/story-grid/` with CSS, classic JS and a README. Hero, intro column (sticky image + text) and accordion story list; collapses to one column below 768px.
- **Rebuild Sancocho Vallenato on the story-grid component** (`0011adb`, #4): Sancocho keeps only its content (intro text, 10 stories) and a 3-line `styles.css`. Unused CSS removed; story field `artist` renamed `subtitle`. Before/after screenshots matched at desktop and mobile widths.
- **Add nuevo-proyecto starter** (`2d08f72`, #5): empty `nuevo-proyecto/` with placeholder hero, intro and stories. Not linked from the home page.
- The Mixtape was not touched.

### derfaule/catalogo-discos-fuentes-1997
Merged to `main` via PR #1.

- **Use story-grid accordion for the album tracklist** (`b17b388`): the `<ol>` tracklist in `web/index.html` is now an accordion (`web/components/story-grid/`, accordion only). Tracks with media expand to a play button; tracks without stay static. Video plays inside its own track and stops when the track closes. `server.js` serves `/components/*`; `.gitignore` allow-lists it. `web/original.html` untouched. Tested with a mock catalogue only.

### derfaule/saint-cocho-theme
Pushed to `main`.

- **Initial release** (`a2c7470`): `theme.css` (copied unchanged from saint-cocho), accordion CSS, full-page layout CSS, and `story-grid.js` with `StoryGrid.accordion()` and `StoryGrid.mount()`, plus a README. The `v1.0.0` tag/release is not created yet.

### Open
- Create the `v1.0.0` release on saint-cocho-theme.
- Switch saint-cocho and the catalogue to load theme + component from saint-cocho-theme.
