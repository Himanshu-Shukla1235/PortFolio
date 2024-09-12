// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PortFolio/', // Ensure this matches your GitHub repo name
  build: {
    outDir: 'build', // Change this to use 'build' folder instead of 'dist'
  },
});
