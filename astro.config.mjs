import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amith2208.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
