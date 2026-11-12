# Amith HB — Data Engineer Portfolio

A statically generated personal portfolio built with Astro, TypeScript, and Tailwind CSS. It is designed for GitHub Pages and uses small Astro scripts for the mobile navigation and reveal-on-scroll behavior.

## Requirements

- Node.js 24 or newer
- npm

## Local development

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run check
npm run build
npm run validate
npm run preview
```

The generated site is written to `dist/`. The build optimizes the profile and certificate images, and `npm run validate` checks required sections, internal anchors, and local asset paths in the generated output.

## GitHub Pages

`.github/workflows/deploy.yml` builds and validates the site, then deploys the static artifact when a commit reaches `main` or the workflow is run manually. The repository is `amith2208.github.io`, so it is served from the root of `https://amith2208.github.io/` and does not need a non-root Astro `base` path. In repository settings, select **GitHub Actions** as the Pages source before enabling deployment.

The resume is served from `public/assets/Amith_HB.pdf`; keep that path and filename in sync with the portfolio download links.
