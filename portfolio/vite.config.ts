import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Force Vite to use esbuild for CSS minification instead of looking for lightningcss
    cssMinify: 'esbuild',
  },
});