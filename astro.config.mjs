import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  // Turn off SSR
  output: 'static',
  integrations: [svelte()],
});
