# her little universe 💜

A private digital love letter — a cinematic, interactive website built for one
person. Deep midnight black and royal purple, starlight, her real photos, an
unfolding letter, a faith corner for her matric finals, an R&B soundtrack, and a
surprise of eighty purple roses.

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

## Run it locally

```bash
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run typecheck # TypeScript check
```

The first screen is a cinematic intro you can skip. Audio never autoplays.

## Where everything lives

All editable content is in `src/data/` — change the words there, not the
components.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Her name, hero titles, signature, date line, the roses wording |
| `src/data/messages.ts` | Intro lines, the love letter, the secret envelope, "pick what you need", the "things I adore" cards, the final reveal, the roses copy |
| `src/data/verses.ts` | The seven Bible verses + reflections + the prayer (World English Bible) |
| `src/data/songs.ts` | The playlist (Drake & Brent Faiyaz) with verified Spotify IDs + your own captions |
| `src/data/photos.ts` | The hero photo and gallery (her real photos) |
| `src/data/destinations.ts` | The adventure destination cards |
| `src/data/examDates.ts` | Her exam dates/times, official links, study encouragements, timer lengths |

Components are in `src/components/`; the whole experience is composed in
`src/App.tsx`.

## Changing her photos

1. Drop new image files into `public/assets/her/` (e.g. `hero.jpg`,
   `gallery-1.jpg`).
2. Update the paths and captions in `src/data/photos.ts`.
3. Rebuild / redeploy.

The current photos were processed from the originals with
`scripts/process-photos.mjs` (strips EXIF/location metadata for privacy, trims
obvious watermark corners, and optimises for the web — it never alters her
appearance). To re-run it you need the original uploads in the project root and
`npm install` completed. Scenery and floral images were fetched with
`scripts/fetch-images.mjs` (freely-licensed, credited in
`public/assets/IMAGE_CREDITS.json`).

## Important content notes

- **Exam dates** (`src/data/examDates.ts`): the two Physical Sciences papers are
  set to the national NSC timetable pattern (Physics P1 — Fri 30 Oct 2026,
  09:00, 3h; Chemistry P2 — Mon 2 Nov 2026, 09:00, 3h). **Confirm these against
  her own exam admission letter / school timetable** and edit if they differ. The
  site links to the official DBE timetable and past papers.
- **Roses wording** (`site.roseDeliveryNote`): it currently says the roses are
  "still on their way." Only keep that if it is true — otherwise switch to
  `site.roseDeliveryFallback` ("a little purple surprise is on its way"). No
  price, cart, order number, or address is shown anywhere.
- **Scripture**: every verse is quoted from the **World English Bible (WEB)**,
  which is public domain and freely quotable; each was verified against Bible
  Gateway. Reflections are original.
- **Music**: nothing is streamed or redistributed here. Playback uses Spotify's
  official embed player and links out to Spotify / YouTube Music. No lyrics are
  reproduced; the short notes beside each song are original.

## Deploying (get her a real link)

The build output in `dist/` is a fully static site. Easiest reliable option:
**GitHub Pages** (already configured via `.github/workflows/deploy.yml`).

1. Create a new GitHub repository (e.g. `her-purple-universe`). Note: **GitHub
   Pages on a free account requires the repo to be public.** If you'd rather keep
   it private, use **Vercel** or **Netlify** below — they deploy private repos
   and still give you a shareable link.
2. Push:
   ```bash
   git remote add origin https://github.com/<your-username>/her-purple-universe.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub
   Actions**. The workflow builds and deploys automatically; the live URL appears
   in the Actions run and under Settings → Pages (usually
   `https://<your-username>.github.io/her-purple-universe/`).

**Vercel:** `npm i -g vercel`, then `vercel` (import the repo on vercel.com and
it auto-detects Vite; `vercel.json` is already set). **Netlify:** import the repo
on netlify.com — `netlify.toml` already sets the build command and `dist/`
publish folder.

### Redeploying after a change

```bash
npm run build     # optional local check
git add .
git commit -m "update ..."
git push
```

GitHub Pages redeploys automatically on every push to `main`. Vercel/Netlify
redeploy on push too.

## Accessibility, performance & privacy

- Respects `prefers-reduced-motion` (animations and parallax switch off).
- No autoplay audio; the soundtrack is opt-in via the floating control.
- Images are lazy-loaded with graceful fallbacks; no horizontal scroll; mobile
  first (built to be opened from a messaging app on a phone).
- Her photos have EXIF/location metadata stripped; no personal order details or
  secrets are stored in the code.

