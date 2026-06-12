# AplusX Brand Handbook & PR Playbook

Internal reference documents for the AplusX brand portfolio. Built in React, deployed as static HTML to GitHub Pages.

## Files

- **`index.html`** — Brand Architecture Handbook (the main reference)
- **`pr-playbook.html`** — PR Playbook (companion document)

Both HTML files are self-contained and deployable as-is. Cross-document navigation is built into the header of each.

### Source files (for editing)

- **`handbook.jsx`** / **`pr-playbook.jsx`** — React source. Edit these, then rebuild (see below).
- **`logos.jsx`** — shared inline-SVG brand wordmark module (`BrandWordmark` component + `LOGOS` map), imported by both documents.
- **`build-deploy.mjs`** — compiles the JSX into the deployable HTML files.
- **`logos/`** — standalone brand logo kit (SVG + transparent PNG) the inline assets were derived from.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public or private — Pages works on both with paid plans)
2. Upload both HTML files to the root of the repo
3. Go to **Settings → Pages**
4. Under **Source**, choose **Deploy from a branch** → **main** → **/ (root)** → Save
5. Wait ~30 seconds; the site will be live at `https://<your-username>.github.io/<repo-name>/`

The handbook will load at the root URL; the PR Playbook is at `/pr-playbook.html`.

## How it works

- React 18 loaded from `esm.sh` CDN via native ES modules — the browser needs no build step at runtime
- JSX source is pre-compiled to a minified `React.createElement` bundle that is inlined into each HTML file (so the browser doesn't need Babel)
- Fonts loaded from Google Fonts: **Poppins** (display and body) and **JetBrains Mono** (labels and mono accents)
- Brand wordmarks are **inline SVG**, isolated from the vector sources with brand-locked colours. Pulsar, Pulsar eS, Feinmann, and Superglide carry fixed fills; Pulsar LAB uses `currentColor` and is tinted in UI for legibility against the light surface
- Locked to light mode regardless of system/browser preference
- Smooth-scroll anchor navigation between sections
- Active section highlighting in the sticky nav

## Editing & rebuilding

The HTML files carry a pre-compiled bundle, so changing content means editing the JSX source and rebuilding:

```bash
npm install esbuild
node build-deploy.mjs
```

This recompiles `handbook.jsx` and `pr-playbook.jsx` (with their shared `logos.jsx`) and re-inlines the bundle into `index.html` and `pr-playbook.html`. Only the app bundle is swapped — the HTML shell (fonts, importmap, layout) is preserved, and `react` / `react-dom` stay external, resolved through the importmap at runtime.

## Local preview

To view locally before deploying:

```bash
# In the directory containing the HTML files:
python3 -m http.server 8000
# Then open http://localhost:8000 in a browser
```

(Opening the files directly via `file://` won't work because ES module imports are blocked under that protocol.)

## Version

Brand Architecture Handbook v3.0 · 2026 · brand wordmarks integrated as inline SVG
