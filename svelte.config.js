import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Single-page landing; no advanced routing needed.
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }),
    prerender: {
      entries: ['/']
    }
  }
};
