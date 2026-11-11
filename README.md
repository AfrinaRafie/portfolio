# Nor Afrina Rafie · Data Analyst Portfolio

A responsive portfolio website with **Home, About Me, Projects and Contact** sections, plus a case-study page for every project.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Geist fonts**, in a minimal, Vercel-inspired style with light and dark themes.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build`, then `npm start`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Fonts, page metadata, theme script, navbar + footer
│   ├── page.tsx                # Home page: Hero, About, Projects, Contact
│   ├── projects/[slug]/page.tsx# Case-study page, one per project (pre-built at build time)
│   ├── not-found.tsx           # 404 page
│   ├── icon.svg                # "NA" monogram favicon
│   └── globals.css             # Colour tokens for light/dark, grid + glow effects
├── components/
│   ├── Navbar.tsx              # Sticky nav with mobile menu (client component)
│   ├── Hero.tsx                # Headline, call-to-action buttons, projects panel, stats strip
│   ├── About.tsx               # Bio, experience timeline, skills, education, certifications
│   ├── Projects.tsx            # Project grid with category filter (client component)
│   ├── ProjectCard.tsx         # One project card
│   ├── ProjectArt.tsx          # Drawn chart previews for each card
│   ├── Contact.tsx             # Email, LinkedIn, GitHub
│   ├── CopyEmail.tsx           # Copy-email button (client component)
│   ├── Theme.tsx               # Light / dark / system theme switchers (client component)
│   ├── Footer.tsx
│   ├── Icons.tsx               # Inline SVG icons
│   └── ui.tsx                  # Section heading, status badge, tag
└── content/
    ├── site.ts                 # Profile, experience, skills, education, certifications
    └── projects.ts             # All project and case-study text
```

**To update the text, edit only the two files in `src/content/`.** The components handle layout.

## Responsive design

- Mobile-first Tailwind classes, with layouts that change at the `sm` (640px), `md` (768px) and `lg` (1024px) breakpoints.
- The navbar collapses into a menu button on phones; project cards go from 3 columns to 2 to 1.
- Checked at 1440px desktop and iPhone 13 widths, in both themes, with no horizontal scrolling.

## Deploy on Vercel (free)

1. Create a new **public** GitHub repository (e.g. `portfolio`) and upload this folder. Leave out `node_modules` and `.next`.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import the repository and click **Deploy**. No settings need changing.
4. Your site goes live at `https://<project-name>.vercel.app`. Every push to GitHub redeploys it automatically.
