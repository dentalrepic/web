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

`site` in `astro.config.mjs` is `https://dentalrepic.com`. Every `hreflang` URL
and the `Dentist` structured data is built from it, so it must match the domain
the site is actually served from.

Add the custom domain under **Pages > your project > Custom domains**.

## 3. Configure the booking form

`functions/api/contact.ts` becomes `POST /api/contact` automatically. It needs
these variables under **Pages > Settings > Variables and secrets**:

| Variable | Type | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret | Send-only API key from [resend.com](https://resend.com) |
| `MAIL_TO` | Plaintext | Where enquiries are delivered, e.g. `info@dentalrepic.com` |
| `MAIL_FROM` | Plaintext | Verified sender on your domain, e.g. `web@dentalrepic.com` |
| `TURNSTILE_SECRET` | Secret | Optional. Enables spam checking when set |

### Verify the sending domain first

`MAIL_FROM` must use a domain verified at [resend.com/domains](https://resend.com/domains).
Resend gives you DKIM and SPF records to add to DNS; until they resolve, sending
returns **403 "domain is not verified"** and no mail goes out.

`dentalrepic.com` is verified. The records now live in Cloudflare DNS and resolve:

```bash
# DKIM public key
host -t TXT resend._domainkey.dentalrepic.com
# SPF for the sending subdomain, plus its bounce-handling MX
host -t TXT send.dentalrepic.com
host -t MX  send.dentalrepic.com
```

A negative answer can be a stale NXDOMAIN cache rather than a missing record —
retry, or query a different resolver, before concluding anything is wrong.

While DNS is still propagating you can set `MAIL_FROM=onboarding@resend.dev`,
Resend's sandbox sender, to prove the wiring end to end. It only delivers to the
account owner's own address, so swap it for the real domain before launch.

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

## 5. Confirm the deploy serves the Function

Setting the variables is not enough on its own: the Function only exists in
deployments built from a commit that contains `functions/api/contact.ts`. If the
Pages project is not connected to the repository, or its last build predates that
commit, the endpoint is simply absent.

```bash
curl -i -X POST https://dentalrepic.com/api/contact \
  -F name=Test -F email=test@example.com -F message=smoke -F locale=hr
```

Read the status code as follows:

| Status | Meaning |
| --- | --- |
| `404`, empty body | No Function in this deployment. Check that Pages is connected to Git and has built the current `main`. |
| `500 not_configured` | Function is live but `RESEND_API_KEY`, `MAIL_TO` or `MAIL_FROM` is unset. |
| `502 send_failed` | Function reached Resend and was refused. Check the real reason in the Pages logs. |
| `200 {"ok":true}` | Mail accepted by Resend. |

A quick way to tell which build is live is to view source on `/contact/` and look
at the `<form>` tag: it must carry `action="/api/contact"`. If the tag has no
`action`, the deployment predates the Function.

Function logs are under **Pages > your project > deployment > Functions**, or
`npx wrangler pages deployment tail`. The endpoint deliberately returns generic
errors to the browser and logs the provider's reason server-side, so the logs are
the only place the real cause appears.

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
