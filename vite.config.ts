import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';

/**
 * Blog routes are derived from the same posts.json the app fetches at runtime,
 * so the sitemap can no longer drift out of sync with the actual content.
 *
 * The previous config hard-coded five slugs. posts.json had grown to ten, so
 * the five newest posts — including the August 2026 rates piece — were absent
 * from the sitemap entirely.
 */
type Post = { slug: string; date: string; title: string };

const posts: Post[] = JSON.parse(
  readFileSync(fileURLToPath(new URL('./public/blog/posts.json', import.meta.url)), 'utf-8'),
);

const postRoutes = posts.map((p) => `/blog/${p.slug}`);

const postLastmod = Object.fromEntries(
  posts.map((p) => [`/blog/${p.slug}`, new Date(p.date)]),
);

const postPriority = Object.fromEntries(postRoutes.map((r) => [r, 0.6]));
const postChangefreq = Object.fromEntries(postRoutes.map((r) => [r, 'monthly']));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://hoinsurance.com',

      /**
       * Only the SPA routes need declaring. /privacy-policy,
       * /save-on-fl-home-insurance and /get-quote are derived automatically
       * from the .html files in the output, and listing them here as well
       * produced duplicate entries — the plugin normalises every route to its
       * extensionless form, so '/privacy-policy.html' and '/privacy-policy'
       * collapse to the same URL.
       *
       * That normalisation is also why .htaccess treats the extensionless URL
       * as canonical: it is the only form this sitemap can express.
       *
       * '/' is omitted for the same reason — index.html already yields it.
       */
      dynamicRoutes: ['/blog', ...postRoutes],

      /**
       * Both of these are real .html files in the output, so the plugin would
       * otherwise advertise them as indexable URLs.
       *
       * save-on-fl-home-insurance carries `<meta name="robots"
       * content="noindex, nofollow">` — it is a paid-traffic landing page.
       * Listing a noindex page in the sitemap asks Google to crawl something
       * the page itself refuses, which is a contradictory signal.
       */
      exclude: ['/404', '/save-on-fl-home-insurance'],

      /**
       * Previously every URL was priority 1.0 / changefreq daily, which tells
       * a crawler nothing about relative importance.
       */
      priority: {
        '/': 1.0,
        '/get-quote': 0.9,
        '/save-on-fl-home-insurance': 0.8,
        '/blog': 0.7,
        ...postPriority,
        '/privacy-policy': 0.1,
      },

      changefreq: {
        '/': 'weekly',
        '/get-quote': 'monthly',
        '/save-on-fl-home-insurance': 'monthly',
        '/blog': 'weekly',
        ...postChangefreq,
        '/privacy-policy': 'yearly',
      },

      lastmod: {
        ...postLastmod,
      },

      /**
       * Left off deliberately: the pretty-printer puts newlines and indentation
       * inside <loc> elements, and whitespace-padded URLs are rejected by some
       * sitemap validators.
       */
      readable: false,

      /**
       * robots.txt is maintained by hand at public/robots.txt — it carries
       * explicit allow directives for AI crawlers. The plugin overwrites that
       * file with a three-line default unless generation is disabled, which is
       * why the live robots.txt never matched the one in the repo.
       */
      generateRobotsTxt: false,
    }),
  ],
});
