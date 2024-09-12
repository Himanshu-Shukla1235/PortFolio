// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PortFolio/', // Make sure this matches your GitHub Pages repository
  build: {
    outDir: 'build', // Output directory for build
  },
});
