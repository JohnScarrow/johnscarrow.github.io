This folder is a scaffold for a GitHub "user site" repository named `johnscarrow.github.io`.

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://johnscarrow.github.io/)  
[![pages build and deployment status](https://github.com/JohnScarrow/johnscarrow.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/JohnScarrow/johnscarrow.github.io/actions)

If you create a repository on GitHub with that exact name and push the contents of this folder to its `main` branch, GitHub will serve the site at:

  https://johnscarrow.github.io/

Resume / downloadable CV
 - To add a downloadable resume, place `resume.pdf` in this repository root (or `docs/`) and link to it from `index.html` (header or contact section). Example link: `/resume.pdf`.

Analytics (optional)
 - Plausible (privacy-friendly): add this snippet inside the `<head>` of `index.html` (replace `your-domain.com`):

```html
<!-- Plausible -->
<script async defer data-domain="johnscarrow.github.io" src="https://plausible.io/js/plausible.js"></script>
```

 - Google Analytics (if you prefer): add the GA4 snippet with your measurement ID.

CNAME / Custom domain
 - To use a custom domain, add a `CNAME` file at the repository root containing your domain (e.g. `example.com`) and configure DNS accordingly.

Quick steps (recommended, using the GitHub CLI `gh`):

```bash
# from this folder
cd /home/john/projects/personal/johnscarrow.github.io
# Create the repo on GitHub (public). The command will prompt to set up the remote and push.
gh repo create johnscarrow.github.io --public --source=. --remote=origin --push
```

Manual steps if you don't use `gh`:

```bash
cd /home/john/projects/personal/johnscarrow.github.io
git init
git add -A
git commit -m "chore: initial user site (Battleship-ML iframe)"
# Create a new empty repository on GitHub named 'johnscarrow.github.io' via the website
# Then add the remote and push (replace <URL> with the repo URL shown by GitHub)
git remote add origin https://github.com/JohnScarrow/johnscarrow.github.io.git
git branch -M main
git push -u origin main
```

Notes & Caveats

- GitHub Pages serves user sites from the `main` branch of a repository named `<username>.github.io`.
- The demo here uses an iframe to embed `https://johnscarrow.github.io/battleship-ml/`. If the external demo blocks framing, visitors should use the direct demo URL.
- After pushing, allow a minute for GitHub Pages to publish; the site will be reachable at `https://johnscarrow.github.io/`.
