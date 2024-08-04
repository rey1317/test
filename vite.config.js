import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/', 
  build: {
    outDir: 'docs',
  },
});