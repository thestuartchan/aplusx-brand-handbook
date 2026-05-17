# AplusX Brand Handbook & PR Playbook

Internal reference documents for the AplusX brand portfolio. Built in React, deployed as static HTML to GitHub Pages.

## Files

- **`index.html`** — Brand Architecture Handbook (the main reference)
- **`pr-playbook.html`** — PR Playbook (companion document)

Both files are self-contained. Cross-document navigation is built into the header of each.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public or private — Pages works on both with paid plans)
2. Upload both HTML files to the root of the repo
3. Go to **Settings → Pages**
4. Under **Source**, choose **Deploy from a branch** → **main** → **/ (root)** → Save
5. Wait ~30 seconds; the site will be live at `https://<your-username>.github.io/<repo-name>/`

The handbook will load at the root URL; the PR Playbook is at `/pr-playbook.html`.

## How it works

- React 18 loaded from `esm.sh` CDN via native ES modules — no build step required
- JSX is pre-compiled to `React.createElement` calls (so the browser doesn't need Babel at runtime)
- Fonts loaded from Google Fonts and Fontshare CDNs (Cabinet Grotesk, General Sans, JetBrains Mono)
- Locked to light mode regardless of system/browser preference
- Smooth-scroll anchor navigation between sections
- Active section highlighting in the sticky nav

## Local preview

To view locally before deploying:

```bash
# In the directory containing the HTML files:
python3 -m http.server 8000
# Then open http://localhost:8000 in a browser
```

(Opening the files directly via `file://` won't work because ES module imports are blocked under that protocol.)

## Version

Brand Architecture Handbook v3.0 · 2026
