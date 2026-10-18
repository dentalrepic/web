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
| Service detail | `/services/<slug>` (9 pages) |
| Dental tourism | `/dental-tourism` |
| Contact and booking | `/contact` |
| FAQ | `/info` |
| 404 | any unknown path |

Every page exists in four languages except the nine service detail pages, which are Croatian
and English only — see [Service detail pages](#service-detail-pages). The build produces 46
pages.

### Service detail pages

Nine treatments have their own page under `/services/`:

| Slug | Croatian | English |
| --- | --- | --- |
| `implantologija` | Implantologija | Implantology |
| `ortodoncija` | Ortodoncija | Orthodontics |
| `protetika` | Protetika | Dental prosthetics |
| `estetska-dentalna-medicina` | Estetska dentalna medicina | Aesthetic dental medicine |
| `endodoncija` | Endodoncija | Endodontics |
| `parodontologija` | Parodontologija | Periodontology |
| `oralna-kirurgija` | Oralna kirurgija | Oral surgery |
| `rtg-dijagnostika` | RTG dijagnostika | X-ray diagnostics |
| `djecja-dentalna-medicina` | Dječja dentalna medicina | Pediatric dentistry |

The copy is the clinic's own clinical prose, transferred from the old WordPress site, which
wrote it in Croatian and English only. Rather than machine-translate roughly 15,000 words of
dental terminology, these pages are **absent in German and Italian** rather than
auto-translated. That is a deliberate gap, and the code models it:

- `serviceDetails` in each locale file is a `Partial<Record<ServiceDetailSlug, ServiceDetail>>`,
  so a locale simply omits what it does not have.
- `src/i18n/services.ts` derives the routes from that record, so no empty pages are built.
- The language switcher and the `hreflang` alternates on these pages list only the languages
  that actually have them, so neither offers a link to a page that was never generated.
- The services index only shows its "individual treatments" list where the locale has pages.

To add German or Italian, put the translations in `serviceDetails` in `de.ts` or `it.ts`.
Routes, the switcher and the alternates follow automatically; nothing else needs touching.

The transferred copy was corrected rather than mirrored. The old site had run-together words
("metodomPRF", "isan", "RepićDental"), missing Croatian diacritics in the post-operative
instructions, two paragraphs about prosthetics stranded on the periodontology page (one
duplicated verbatim from the prosthetics page), a paragraph about periodontal disease on the
orthodontics page, and FAQ answers ending in bare `americanortho.com` URLs, two of which are
dead. The English pages also had a Croatian heading left on the endodontics page and a typo in
"FOR YOUR BEAUTIFUL NAD HEALTHY SMILE".

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
- [ ] **Confirm the opening hours** in `src/data/site.json` (`openingHours`). The footer
      lists them (Monday to Saturday, a missing day shown as closed) and the `Dentist`
      structured data publishes them.
- [x] **Use the clinic's own mark.** The logo is now the tooth-in-a-disc mark from the
      clinic's brand manual (`DCR_ShadesOfWhite_2025-02`), traced from its vector artwork.
      The DCR monogram drawn for this rebuild is gone.
- [x] **Adopt the full DCR lockup.** The header now carries the manual's primary logo from
      page 11: the DCR wordmark whose C is the tooth mark, traced from the same artwork.

## Branding

The header carries the manual's primary logo, the DCR wordmark whose C is the tooth mark
("odnos logotipa i znaka", page 11 of the manual), in white
(`src/assets/logo-dcr-lockup-white.svg`), since the header always sits on a photo or on the
brown ground. `src/assets/logo-dcr-lockup.svg` is the same lockup in the brand colours.

The mark on its own, `src/assets/logo-dcr.svg`, is a tooth knocked out of a PANTONE 319 C
disc. Both are traced from the vector artwork in the clinic's brand manual
(`DCR_ShadesOfWhite_2025-02`, CorelDRAW). The tooth is a cutout, so `fill-rule="evenodd"`
must stay on those paths.

The manual's colour page specifies PANTONE 319 C as R45 G204 B211, so the disc uses
`#2dccd3`, and PANTONE Cool Gray 9 C as R117 G120 B123, so the wordmark uses `#75787b`
(4.44:1 on white). The source artwork carried a slightly bluer `#3dcbeb` and a violet-leaning
`#868595`; the specified values win.

Variants:

| File | Purpose |
| --- | --- |
| `src/assets/logo-dcr-lockup-white.svg` | Full DCR lockup in white. Header |
| `src/assets/logo-dcr-lockup.svg` | Full DCR lockup, wordmark plus tooth, in the brand colours |
| `src/assets/logo-dcr.svg` | Positive mark alone, 319 C disc |
| `src/assets/logo-dcr-negative.svg` | White disc, tooth cut out, for use on colour. Not currently placed |
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
| `--color-theme-brand` | `#2dccd3` | PANTONE 319 C, decorative fills only |

Any element placed on 319 C at full strength should use `--color-theme-text-on-brand`
(`#0b3335`, the same hue and saturation at 12.5% lightness, 6.94:1) rather than white.

The 2026 web design (home, services and contact pages) sets the page chrome in warm neutrals
alongside it:

| Token | Value | Use |
| --- | --- | --- |
| `--color-theme-ink` | `#474442` | "Tamno smeđa": the header, buttons, the booking band, small labels. 9.9:1 with white |
| `--color-theme-sand` | `#ece8e3` | Footer ground |
| `--color-theme-surface-warm` | `#f8f7f6` | "White Sand" band behind section intros |

Text is set in Roboto and headings in Playfair Display, both self-hosted through Fontsource.

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
