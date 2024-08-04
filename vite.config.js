import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/',
  build: {
    outDir: 'docs',
    minify: false, // Отключение минификации
  },
});
