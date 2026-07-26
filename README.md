# CalcHub

A modern calculator platform built with **Vite + React + TypeScript**, pre-configured for **GitHub Pages** deployment.

## Live site

Once deployed: `https://YOUR_USERNAME.github.io/calchub-website-/`

## Project structure

```
calchub-website-/
├── .github/workflows/deploy.yml   # GitHub Actions: build & deploy on push to main
├── public/                        # Static assets copied as-is to dist/
│   ├── favicon.svg
│   ├── 404.html                   # SPA fallback for deep links
│   └── robots.txt
├── src/                           # Application source
│   ├── App.tsx                    # Main app with routes
│   ├── main.tsx                   # Entry point (BrowserRouter)
│   └── index.css                  # Tailwind + theme tokens
├── index.html                     # Vite entry HTML
├── vite.config.ts                 # base: '/calchub-website-/' for GitHub Pages
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── .gitignore
```

## Deploy to GitHub Pages

### Step 1 — Create the GitHub repository

Create a repository named `calchub-website-` under your GitHub account.

### Step 2 — Set the base path

The base path defaults to `/calchub-website-/` in `vite.config.ts`, which is correct for a project site at `https://YOUR_USERNAME.github.io/calchub-website-/`.

If your repo is named differently, edit **two** files:

1. `vite.config.ts` → change `base: '/calchub-website-/'` to `/your-repo-name/`
2. `package.json` → change `"homepage": ".../calchub-website-"` to match

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/calchub-website-.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
3. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

### Step 5 — Verify

After ~1-2 minutes, your site is live at:
**`https://YOUR_USERNAME.github.io/calchub-website-/`**

## Local development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # produce production build in dist/
npm run preview  # preview the production build
```

## How the deployment works

1. **Push to `main`** → GitHub Actions triggers the `deploy.yml` workflow.
2. **Install** → `npm ci` installs dependencies from `package-lock.json`.
3. **Build** → `npm run build` runs `tsc -b && vite build`, producing optimized static files in `dist/`.
4. **Upload** → The `dist/` folder is uploaded as a GitHub Pages artifact.
5. **Deploy** → GitHub Pages serves the artifact at your project URL.

## SPA routing on GitHub Pages

GitHub Pages doesn't natively support SPA routing (refresh on `/about` returns 404). The included `public/404.html` solves this:

- When a user visits a deep link like `/about` directly, GitHub Pages serves `404.html`.
- `404.html` saves the path to `sessionStorage` and redirects to `/`.
- The redirect-restore script at the top of `index.html` reads that path and calls `history.replaceState` so React Router sees the correct URL.

This means **all deep links work** without any custom server config.

## Customizing

- **Theme**: edit CSS variables in `src/index.css` (`--bg`, `--text-primary`, etc.)
- **Routes**: add a `<Route>` in `src/App.tsx`
- **Calculator data**: replace the sample array in the `Calculators` component with real calculator components
- **Meta tags**: edit `index.html` for SEO updates

## Build output

```
dist/
├── index.html              # entry HTML with asset paths prefixed by base
├── 404.html                # SPA fallback
├── favicon.svg
├── robots.txt
└── assets/
    ├── index-[hash].js     # main bundle
    ├── index-[hash].css    # Tailwind output
    └── [icons,react].js    # vendored chunks
```

After `npm run build`, the entire `dist/` folder is what gets deployed.
