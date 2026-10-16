# CON Developers Portfolio

Professional portfolio for CON Developers, built with Next.js 14 (App Router) and
Tailwind CSS. Previously a Nuxt 4 site; the project was migrated and the legacy
Vue source has been removed.

Live site: https://condevelopers.netlify.app/

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production build

```powershell
npm run build
```

The site is a static export (`output: 'export'` in `next.config.js`), so the build
writes plain HTML to `out/`. Preview that export locally with:

```powershell
npm start
```

## Deploy to Netlify

`netlify.toml` builds this repository and publishes `out/`.

```powershell
npm run build
npx netlify-cli deploy --dir=out --prod
```

The Netlify project is not connected to Git, so a `git push` alone does not deploy.
The contact form is handled by Netlify Forms through the hidden form in
`components/Contact.tsx`.

## Project structure

```
├── app/                    # Routes: home, /projects/[slug], layout, 404, sitemap, robots
├── components/             # Section components (Hero, Projects, About, Contact, ...)
├── data/index.ts           # All site content, typed; feeds home grid and project pages
├── lib/icons.tsx           # Simple Icons -> lucide-react mapping
├── public/                 # Images and favicon.ico
└── .kiro/specs/            # Requirements, design and task docs for the migration
```

Node.js 18.17 or later is required.
