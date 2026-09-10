# MONTAN.ME

Personal bilingual portfolio for Timur Montan, built with Vinext and React.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Run the complete validation before publishing:

```bash
npm run check
```

The check covers linting, TypeScript, binary media signatures, and the static
GitHub Pages build. Pushing `main` deploys `dist/client` through GitHub Actions.

- Russian: https://pxl-head.github.io/montan-me-portfolio/
- English: https://pxl-head.github.io/montan-me-portfolio/en/
