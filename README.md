# MONTAN.ME

A bilingual, single-page visual portfolio for Timur Montan, built around an immersive gallery of projects. I designed and built the website myself with Codex in ChatGPT.

## Features

- A single-page composition that draws visitors into the work as they scroll.
- An immersive gallery of photography and video projects, paired with large editorial typography.
- Russian and English versions.
- Responsive layouts for desktop and mobile.
- A static site published through GitHub Pages.

## Technology

Vinext, React, TypeScript and CSS. The production build is checked before publication and deployed through GitHub Actions.

## Live website

- [Russian version](https://pxl-head.github.io/montan-me-portfolio/).
- [English version](https://pxl-head.github.io/montan-me-portfolio/en/).

## Local development

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Run the full check before deployment:

```bash
npm run check
```

This checks linting, TypeScript and media file signatures, then creates the static build for GitHub Pages. Changes to the `main` branch publish `dist/client` through GitHub Actions.

## Authorship

I designed and built this website myself with Codex in ChatGPT.
