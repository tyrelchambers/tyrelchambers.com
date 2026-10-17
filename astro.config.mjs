import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tyrelchambers.com',
  redirects: {
    '/projects': '/#projects',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
