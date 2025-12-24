# Paws and Claws Ormonde — Next.js content draft

Modern, pet-friendly Next.js App Router site (TypeScript) with Markdown-driven content for Paws and Claws Ormonde.

## Getting started

1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Build: `npm run build`

## Content model

- Markdown lives in `content/` and is loaded with `remark`/`gray-matter`.
- Paths are declared in `content/structure.json` (nav, SEO, hero CTAs, section markdown files, map embed).
- Pages read Markdown and render via `MarkdownBlock`.

## Pages

- `/` — Hero, value proposition, social proof.
- `/services` — Grooming, nutrition, toys, training, adoption, delivery.
- `/about` — Mission, story, community impact.
- `/contact` — Address, phone, hours, map embed snippet.

## SEO

Metadata per page is configured in `content/structure.json` under `seo`.

## Animations & styling

Simple CSS animations and playful gradients live in `app/globals.css`. Buttons and cards include hover/floating effects.
