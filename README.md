# Personal site — starter

Four pages, plain HTML/CSS/JS, no build step: `index.html` (Home), `about.html`, `cv.html`, `projects.html`. Shared styles in `style.css`, shared behavior (scroll progress, reveal-on-scroll, hero animation) in `script.js`.

## Deploy to Vercel

1. Create a new GitHub repo and push this folder's contents to it (the `.html`/`.css`/`.js` files should sit at the repo root, not nested).
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New Project** → import that repo.
3. Framework preset: leave as **Other** (it's static HTML, no build command needed).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in under a minute.
5. Optional: in Project Settings → Domains, add your own domain and point its DNS to Vercel.

Every future `git push` to `main` auto-redeploys.

## Editing your content

Everything is placeholder text (name: Jordan Ellis, company names, project details) — replace it directly in the HTML files:

- **index.html** — headline, intro, "what I do" list
- **about.html** — bio paragraphs and the info table (location, availability, etc.)
- **cv.html** — experience, education, skills. The "Download PDF" button currently links to `#` — point it at a real PDF once you have one, or remove it
- **projects.html** — one `<article class="project">` block per project; duplicate the block to add more

Sidebar contact links (email, GitHub, LinkedIn) are set at the top of each file inside `.sidebar__footer` — update all four files if you change them.

## Design notes

- Fonts: Space Grotesk (headings), Lora (body text), IBM Plex Mono (labels/dates) — loaded from Google Fonts in `style.css`.
- Colors and spacing are defined as CSS variables at the top of `style.css` under `:root` — change the palette there and it updates everywhere.
- The vertical line beside the nav fills in as you scroll down a page — that's in `script.js` (`initProgressRail`).
- Animations respect `prefers-reduced-motion`.
