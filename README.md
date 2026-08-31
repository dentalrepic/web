# Dental Centar Repić

Multilingual website for [Dental Centar Repić](https://dentalrepic.com.hr), a dental clinic in
Trogir, Croatia. Built with Astro 7, Tailwind CSS v4 and TypeScript, and deployed as a fully
static site.

This is a rebuild of the clinic's existing WordPress site. Copy, contact details, opening hours
and the logo are taken from `dentalrepic.com.hr`.

![Astro](https://img.shields.io/badge/Astro-7%2B-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css)

## Pages

| Page | Route (Croatian) |
| --- | --- |
| Home | `/` |
| About / team | `/about` |
| Services | `/services` |
| Dental tourism | `/dental-tourism` |
| Contact and booking | `/contact` |
| FAQ | `/info` |
| 404 | any unknown path |

Every page exists in four languages, so the build produces 28 pages.

## Languages

| Language | Code | URL prefix |
| --- | --- | --- |
| Croatian (default) | `hr` | none, served from `/` |
| English | `en` | `/en/` |
| German | `de` | `/de/` |
| Italian | `it` | `/it/` |

Croatian and English copy comes from the clinic's own site. German and Italian were translated
from those two and **should be reviewed by a native speaker before launch**, particularly the
clinical terminology.

All translatable copy lives in `src/i18n/locales/<code>.ts`. Each file satisfies the
`Translation` interface in `src/i18n/types.ts`, so a missing or misspelled key is a compile-time
error rather than a silent gap on the page — run `npm run check` to catch it.

Content that does not change per language (address, phone, email, map embed) lives in
`src/data/site.json`.

### Adding a language

1. Add the code to `locales` in `src/i18n/config.ts`, plus entries in `localeNames`,
   `localeShortNames`, and `localeHtmlLang`
2. Create `src/i18n/locales/<code>.ts` and satisfy the `Translation` interface
3. Register it in `src/i18n/translations.ts`
4. Run `npm run check`

Routing, `hreflang` tags and the language switcher pick the new language up automatically.

## Getting Started

Requires Node.js `22.12.0` or later (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Production build

```bash
npm run check
npm run build
```

Output is written to `dist/`.

## Before Going Live

- [ ] **Connect the booking form.** `src/components/pages/ContactPage.astro` contains a
      front-end demo only — submissions go nowhere. Wire it to a form provider or a backend
      endpoint.
- [ ] **Set the real domain.** `site` in `astro.config.mjs` is currently
      `https://example.com`; `hreflang` URLs and structured data are built from it.
- [ ] **Have a native speaker review the German and Italian copy.**
- [ ] **Replace the stock photography** in `src/assets/`. The images ship with the original
      theme and do not show the actual clinic; confirm licensing or swap in the clinic's own
      photos.
- [ ] **Confirm the opening hours** in `src/i18n/locales/*.ts` (`common.openingHoursRows`).
- [ ] **Confirm the DCR monogram** is acceptable as the clinic's mark. It was drawn for this
      rebuild and is not the clinic's existing tooth logo; if the clinic has brand artwork,
      swap it into `src/assets/logo-dcr.svg` and regenerate the PNG icons.

## Branding

The logo is a "DCR" monogram, `src/assets/logo-dcr.svg`, shown in the header and footer.
It is drawn as SVG paths rather than set in a font, so it needs no webfont and stays crisp
at any size. Glyphs are positioned from measured ink extents, with 2.4px of clear space
between letters and 6px side margins in a 64px box, which keeps all three letters readable
down to roughly 32px.

Icons:

| File | Purpose |
| --- | --- |
| `public/favicon.svg` | Browser tab. A single **D**, because three letters merge into a smudge at 16px |
| `public/apple-touch-icon.png` | iOS home screen, 180px. iOS ignores SVG favicons |
| `public/logo-dcr-512.png` | Raster logo referenced by the `Dentist` structured data |

Regenerate the PNGs from the SVG after any logo change:

```bash
rsvg-convert -w 180 -h 180 src/assets/logo-dcr.svg -o public/apple-touch-icon.png
rsvg-convert -w 512 -h 512 src/assets/logo-dcr.svg -o public/logo-dcr-512.png
```

In the footer the mark sits on a white tile, since its own dark teal ground would otherwise
disappear against the dark footer background.

The colour palette is turquoise, matched to the logo. Note that the raw logo colour
(`#2dccd2`) only reaches 1.97:1 contrast against white, which fails WCAG AA for text, so
the text and UI shades in `src/styles/tailwind.css` are darkened versions of the same hue:

| Token | Value | Contrast on white |
| --- | --- | --- |
| `--color-theme-primary` | `#1c7f82` | 4.76:1 |
| `--color-theme-primary-dark` | `#166669` | 6.69:1 |
| `--color-theme-primary-darker` | `#104a4c` | 9.97:1 |
| `--color-theme-brand` | `#2dccd2` | decorative fills only |

## SEO

- Per-locale `<html lang>`, `hreflang` alternates and `og:locale`
- `Dentist` structured data (address, phone, opening hours) in `src/layouts/Layout.astro`
- Localized `FAQPage` structured data on the FAQ page

## Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── pages/        # locale-driven page bodies
│   ├── data/             # locale-independent data (contact, map)
│   ├── i18n/             # locale config, types, translations
│   │   └── locales/      # one file per language
│   ├── layouts/
│   ├── pages/            # routes: default locale at root, others under [locale]/
│   ├── styles/
│   └── types/
├── astro.config.mjs
└── package.json
```

Routes are thin wrappers: each one renders a body component from
`src/components/pages/` and passes the active locale.

## Customization

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for a fuller walkthrough of the design system
and components.

## Credits

Built on the [healthcare-astro-theme](https://github.com/web-stacked/healthcare-astro-theme)
by TechStacked (MIT). See [LICENSE](LICENSE).
