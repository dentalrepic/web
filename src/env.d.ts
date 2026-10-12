/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Cloudflare Turnstile site key. Shows the human check on the contact form when set. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}
