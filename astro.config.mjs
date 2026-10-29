// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
  },
  preview: {
    port: 5000,
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
