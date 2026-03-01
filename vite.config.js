import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/sass-modern-art-gallery/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'src/pages/location.html'),
      },
    },
  },
  server: {
    open: '/index.html',
  },
});
