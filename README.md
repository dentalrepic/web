# Dental Centar Repić

Multilingual website for [Dental Centar Repić](https://dentalrepic.com), a dental clinic in
Trogir, Croatia. Built with Astro 7, Tailwind CSS v4 and TypeScript, and deployed as a fully
static site.

This is a rebuild of the clinic's earlier WordPress site, which ran on `dentalrepic.com.hr`.
Copy, contact details, opening hours and the logo are taken from that site.

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

For hosting, see [DEPLOYMENT.md](DEPLOYMENT.md) (Cloudflare Pages).

## Before Going Live

- [x] **Confirm the booking form is live.** The form posts to `/api/contact`, a Cloudflare
      Pages Function in `functions/api/contact.ts`. It answers on the live site (an empty
      POST returns `400 bad_request` rather than a 404), which confirms the hosting is a
      **Pages** project and not a Worker. `RESEND_API_KEY`, `MAIL_TO` and `MAIL_FROM` are
      set and the sending domain is verified in Resend. Send one real enquiry through the
      form to confirm delivery.
- [x] **Set the real domain.** `site` in `astro.config.mjs` is `https://dentalrepic.com`,
      and the site is live there with matching `hreflang` URLs.
- [ ] **Retire the old WordPress site.** `dentalrepic.com.hr` still serves the old
      WordPress 4.9 site, so the clinic has two live sites competing for the same
      searches. Redirect it to `dentalrepic.com` with a 301.
- [ ] **Have a native speaker review the German and Italian copy.**
- [ ] **Replace the stock photography** in `src/assets/`. The images ship with the original
      theme and do not show the actual clinic; confirm licensing or swap in the clinic's own
      photos.
- [ ] **Confirm the opening hours** in `src/data/site.json` (`openingHours`). They are no
      longer shown on the page, but they are published as `Dentist` structured data.
- [x] **Use the clinic's own mark.** The logo is now the tooth-in-a-disc mark from the
      clinic's brand manual (`DCR_ShadesOfWhite_2025-02`), traced from its vector artwork.
      The DCR monogram drawn for this rebuild is gone.
- [ ] **Consider the full DCR lockup.** The manual's primary logo is a grey "DCR" wordmark
      whose C is the tooth mark, with "DENTAL CENTAR REPIĆ" beneath. The site uses the mark
      on its own next to live text instead, which suits a header better; adopting the lockup
      would need the manual's typeface and a wider header slot.

## Branding

The logo is the clinic's own mark, `src/assets/logo-dcr.svg`: a tooth knocked out of a
PANTONE 319 C disc, traced from the vector artwork in the clinic's brand manual
(`DCR_ShadesOfWhite_2025-02`, CorelDRAW). The tooth is a cutout, so the path's
`fill-rule="evenodd"` must stay.

The manual's own colour page specifies PANTONE 319 C as R45 G204 B211, so the disc uses
`#2dccd3`. The source artwork carried a slightly bluer `#3dcbeb`; the specified value wins.

Variants:

| File | Purpose |
| --- | --- |
| `src/assets/logo-dcr.svg` | Positive mark, 319 C disc. Header |
| `src/assets/logo-dcr-negative.svg` | White disc, tooth cut out. Footer, where the positive mark would vanish into the 319 C ground. The manual sanctions this for use on colour |
| `public/favicon.svg` | Browser tab. A solid tooth silhouette, because the manual's thin outline closes up at 16px |
| `public/apple-touch-icon.png` | iOS home screen, 180px. iOS ignores SVG favicons and composites transparency onto black, so this one is full-bleed 319 C |
| `public/logo-dcr-512.png` | Raster logo for the `Dentist` structured data |

The two PNGs are generated from opaque SVG sources kept in `src/assets/brand/`, not from
the header logo, which is transparent. Regenerate them after any logo change:

```bash
rsvg-convert -w 180 -h 180 src/assets/brand/apple-touch-icon-src.svg -o public/apple-touch-icon.png
rsvg-convert -w 512 -h 512 src/assets/brand/logo-512-src.svg -o public/logo-dcr-512.png
```

The colour palette is built on **PANTONE 319 C**, the clinic's brand colour, which converts
to `#2dccd3` in sRGB. That value only reaches 1.96:1 contrast against white, which fails
WCAG AA for text, so the text and UI shades in `src/styles/tailwind.css` hold its hue
(182.5°) and saturation (65%) and vary only lightness:

| Token | Value | Contrast on white |
| --- | --- | --- |
| `--color-theme-primary` | `#1b7f83` | 4.76:1 |
| `--color-theme-primary-dark` | `#166669` | 6.69:1 |
| `--color-theme-primary-darker` | `#104a4c` | 9.97:1 |
| `--color-theme-primary-light` | `#23a3a9` | 3.05:1, large text and UI only |
| `--color-theme-primary-lighter` | `#5fd8dd` | 1.70:1, decorative only |
| `--color-theme-brand` | `#2dccd3` | PANTONE 319 C, used as the footer ground |

The footer is 319 C at full strength. Because white text on it would only reach 1.96:1, the
footer sets its text to `--color-theme-text-on-brand` (`#0b3335`, the same hue and saturation
at 12.5% lightness), which gives 6.94:1. Any element placed on the brand colour should use
that ink rather than white.

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
