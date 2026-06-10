# kamo, inc. renewal — Hinomaru Minimal

A six-page editorial site for kamo, inc. with a restrained Japanese editorial aesthetic: off-white canvas, fine black typography, and a deep crimson (#BC002D) rising-sun disc used as a recurring geometric anchor.

## Design system

- **Palette**: paper off-white `#FAF7F2`, ink black `#0E0E0E`, hinomaru crimson `#BC002D`, warm grey `#8A857C`, subtle gold rule `#B89968`.
- **Typography**: display serif (Instrument Serif or Cormorant) for headings + clean sans (Inter or Work Sans) for body. Japanese characters in Noto Serif JP where used.
- **Motifs**: a single red disc that recurs at different scales as section anchor; thin gold/black hairline rules; generous whitespace; vertical Japanese tategaki labels on section openers.
- **Tokens** added to `src/styles.css` as oklch variables (`--paper`, `--ink`, `--crimson`, `--sun`, `--rule`, `--muted-warm`).

## Global shell

- Sticky top nav: kamo logo (SVG) at top-left, nav links centered, `EN / JP` switcher at top-right (toggles a simple i18n dictionary; copy stubs for JP using best-effort translations marked for review).
- Footer: small disc mark, address/established line, LinkedIn / Twitter / Facebook icon links, EN/JP switcher mirror, copyright.
- Logo: `kamo-inc-logo-2026.svg` used in nav; white outline/glow added via SVG filter so the wordmark stays legible over the 鴨 hanko.

## Page 1 — Landing (`/`)

- **Hero**: full-bleed paper canvas. Large crimson disc rises from behind the logo on load (scale + translate-y from below the fold, eased ~1.2s), then thin radiating rays fan out from the disc center (staggered stroke-dashoffset), then the logo wordmark fades in with a subtle white glow. Hero tagline (polished):
  > "A high-tech marketing catalyst — guiding multinationals, startups, and academic organizations to leverage innovative IT in the Japanese market."
- **Client marquee**: slow infinite marquee with the 20 client names rendered as fine serif text separated by red dot glyphs (the disc motif at small scale). Pauses on hover.
- **Menu cards**: 5 editorial cards (BIO / SERVICES / EXPERIENCE / RESOURCES / CONTACT) with vertical Japanese label, English label, one-line descriptor, and a hover state where a small red disc slides in.

## Page 2 — BIO `/bio`

- Section opener: small crimson disc + tategaki label "経歴 / who we are".
- Two-column editorial layout: left column = company facts (1991, ¥10M capitalization, dozens of clients, engagements 6mo–10yr). Right column = Christopher Keener bio paragraphs.
- **Videos block**: 4 video cards (Why I Do What I Do / What I Do / Most Unusual Project / Japan and Me) as 16:9 placeholders with title + caption, ready for YouTube embeds (URLs left as TODO for client).
- **Playlists**: Industry 4.0 playlist, Coffee playlist as horizontal link rows.
- LinkedIn link as a prominent inline button.

## Page 3 — SERVICES `/services`

- Section opener: disc + "業務内容 / what we do".
- Services list rendered as numbered editorial entries (01–08) with the eight bullet points from the brief, each with a short expanded blurb.
- **Resources strip**: White paper PDF (EDI/Payment Systems) card + two case-study video cards (Most Unusual Project, XML/OpenGL).

## Page 4 — EXPERIENCE `/experience`

- Section opener: disc + "実績 / how you can benefit".
- Three editorial blocks corresponding to the three paragraphs (market entry, supplying components into Japanese products, outbound APAC partnerships), each with a pull-quote stat or phrase set in serif.
- Subtle decorative rays behind one block tying back to the hero motif.

## Page 5 — RESOURCES `/resources`

- Section opener: disc + "資料 / useful links".
- Grid of resource cards grouped by type: White Papers (Doing Business in Japan, EDI/Payment Methods, Small is Beautiful philosophy), Slide decks (Robotics Dec18, Private Space Exploration, Sakaki Industry), Video playlists (Industry X.0, Value of Culture, Coffee).
- Each card: type tag, title, short description, outbound link (URLs left as TODO).

## Page 6 — CONTACT `/contact`

- Section opener: disc + "お問い合わせ / get in touch".
- Two-column: left = intro + embedded contact video placeholder + social links (LinkedIn / Twitter / Facebook). Right = contact form (name, email, organization, message) validated with Zod, plus mailing-list checkbox group (Industry X.0, Coffee, General updates).
- Form submission: client-side validation only for now; on submit it shows a success state and logs payload (no backend wired — Cloudʼs not enabled). I'll note this and recommend enabling Lovable Cloud later if real delivery is needed.

## Animation & motion

- Hero rising-sun sequence (logo + disc + rays) on landing only.
- Section openers fade-up on scroll using IntersectionObserver.
- Marquee uses CSS keyframes (no JS library).
- Restrained — no animation on body text, no parallax.

## i18n (EN/JP switcher)

- Lightweight context provider with two dictionaries; switches all nav + section labels + hero tagline. Body copy provided in EN with JP marked as `// TODO translate` where a faithful translation needs the client's voice. The switcher persists in `localStorage`.

## Technical notes

- Routes: `src/routes/index.tsx`, `bio.tsx`, `services.tsx`, `experience.tsx`, `resources.tsx`, `contact.tsx`. Each gets its own `head()` with unique title + description + og:title/og:description.
- Logos uploaded via `lovable-assets` and imported through `.asset.json` pointers (no binaries in the repo).
- Fonts loaded via `<link>` in `__root.tsx` head, declared as `--font-*` tokens in `@theme`.
- Shared `<SiteHeader />`, `<SiteFooter />`, `<SectionOpener />`, `<DiscMark />`, `<Marquee />` components in `src/components/`.

## Out of scope for this pass

- Real video URLs, real PDF assets, and final JP translations — left as TODOs with clear placeholders so the client can drop them in.
- Backend for contact form (would require enabling Lovable Cloud).
