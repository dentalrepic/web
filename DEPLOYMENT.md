# Deploying to Cloudflare Pages

The site is fully static, and the booking form is handled by a Cloudflare Pages
Function, so no adapter or server runtime is needed.

## 1. Create the Pages project

In the Cloudflare dashboard: **Workers & Pages > Create > Pages > Connect to Git**,
then pick the `dentalrepic/web` repository and set:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22.12.0` |

`NODE_VERSION` matters: Astro 7 requires Node ≥ 22.12 and Pages defaults to an
older release.

## 2. Point the site at its real domain

`site` in `astro.config.mjs` is currently `https://example.com`. Every `hreflang`
URL and the `Dentist` structured data is built from it, so set it to the
production domain before the first real deploy:

```js
site: 'https://dentalrepic.com.hr',
```

Then add the custom domain under **Pages > your project > Custom domains**.

## 3. Configure the booking form

`functions/api/contact.ts` becomes `POST /api/contact` automatically. It needs
these variables under **Pages > Settings > Variables and secrets**:

| Variable | Type | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret | API key from [resend.com](https://resend.com) |
| `MAIL_TO` | Plaintext | Where enquiries are delivered, e.g. the clinic inbox |
| `MAIL_FROM` | Plaintext | Verified sender on your domain, e.g. `web@dentalrepic.com.hr` |
| `TURNSTILE_SECRET` | Secret | Optional. Enables spam checking when set |

The sending domain has to be verified with the email provider (SPF/DKIM records),
otherwise messages will be rejected or land in spam.

**Why not MailChannels?** It was the standard free option for Cloudflare Workers
until the free tier was withdrawn in 2024. Any provider with an HTTP API works —
to switch, change the `sendEmail()` body in `functions/api/contact.ts`.

### Spam protection

Two layers are in place:

- A honeypot field, which needs no configuration.
- Optional [Turnstile](https://developers.cloudflare.com/turnstile/): create a
  widget, set `TURNSTILE_SECRET`, and add the widget markup to the form. The
  Function enforces the token only when the secret is present, so setting it up
  in the dashboard is the switch that turns it on.

## 4. Headers

`public/_headers` is copied into `dist/` and applied by Pages automatically. It
sets `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy` and HSTS, plus immutable caching for `/_astro/*`.

A Content-Security-Policy is intentionally not set: the contact page embeds a
Google Maps iframe that redirects across several Google hosts, so an untested
policy risks silently breaking the map. See the comment in `_headers` for a
report-only starting point.

## Local development

```bash
npm run dev      # site only; /api/contact is not served
npm test         # astro check + functions typecheck + build
```

`wrangler pages dev`, which would serve the Function locally, requires GLIBC
≥ 2.29 and does not run on RHEL 8 (GLIBC 2.28). The Function's logic is covered
by the checks in `npm test` plus manual testing against a deployed preview.

Every push to `main` produces a production deploy; pull requests get preview
URLs with their own environment variables.
