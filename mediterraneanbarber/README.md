# Mediterranean Barber Website

Next.js (App Router) + TypeScript site for Mediterranean Barber in Sandton. Content is stored in markdown files under `content/` with frontmatter for SEO and structured sections. Animations use Framer Motion and styling is via Tailwind CSS.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build && npm start
   ```

4. Lint:

   ```bash
   npm run lint
   ```

## Content structure

- Markdown pages: `content/home.md`, `content/services.md`, `content/about.md`, `content/contact.md`
- Structured reference map: `content/structure.json`
- Markdown is parsed via `gray-matter` + `remark` and rendered in server components.

## SEO

Page titles, meta descriptions, and keywords come from each markdown file's frontmatter and are exposed via `generateMetadata` for every route.

## Notes

- Map iframe uses a placeholder API key; replace `YOUR_GOOGLE_MAPS_API_KEY` in `content/contact.md` before deploying.
- All content is markdown-driven; adjust text in the `content/` folder to update the site.
