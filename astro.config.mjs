// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { defaultLocale, locales } from './src/i18n/config.ts';

// https://astro.build/config
export default defineConfig({
  // Absolute URLs are needed for hreflang alternates. Update before deploying.
  site: 'https://example.com',
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      // The default locale is served from the site root without a prefix.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
