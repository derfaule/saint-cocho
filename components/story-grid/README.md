# story-grid

Two-column project layout: hero on top, then an intro column (sticky image + text) beside an accordion list of stories. Collapses to one column below 768px. Uses the tokens in `/theme.css`.

## Use it in a new project

1. Copy `nuevo-proyecto/` as a starting point (index.html, script.js, styles.css).
2. Link `../theme.css`, `../components/story-grid/story-grid.css` and `story-grid.js`.
3. Write content in `script.js` and call:

```js
StoryGrid.mount({
  list: '#storiesGrid',            // container with class sg-list
  parallax: '.sg-intro-image img', // optional
  stories: [{ title, subtitle, content /* string | string[] */, image, youtubeUrl }]
});
```

## Tokens (override on `.sg-wrapper` in the project's styles.css)

`--sg-gap`, `--sg-logo-height`, `--sg-parallax-width`

## Class contract

`sg-wrapper > sg-main > (sg-hero | sg-intro | sg-stories)`, `sg-footer`. Inside the panels use `sg-panel`, `sg-title`, `sg-intro-image`, `sg-intro-text`, `sg-list`.
