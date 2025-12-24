Plaza Pets is a Next.js (App Router) site tailored for a local pet store in Fordsburg, Johannesburg. All copy is stored in Markdown and rendered through reusable section components for a playful, animated experience.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Content model

- Markdown lives in `content/` (`home.md`, `services.md`, `about.md`, `contact.md`) with frontmatter for metadata, CTAs, and section text.
- `content/sections.json` lists section IDs per page for reference.
- Rendering is handled in `src/app/*/page.tsx` via helpers in `src/lib/content.ts` and presentation components in `src/components/`.

## Pages

- Home: hero, value prop, social proof, service highlights, CTA.
- Services: grooming, supplies, adoption help, delivery, FAQs.
- About: mission, story, and community impact.
- Contact: phone/WhatsApp, address, hours, and map suggestion.

## Deployment

Standard Next.js build commands apply:

```bash
npm run build
npm start
```

Deploy to your preferred host (e.g., Vercel) after running `npm run build`.
