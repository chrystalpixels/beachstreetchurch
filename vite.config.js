import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        ['index', 'worship', 'donate', 'about', 'contact', 'news', 'support']
          .map(page => [page, resolve(import.meta.dirname, `${page}.html`)]),
      ),
    },
  },
});
