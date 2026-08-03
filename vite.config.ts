/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // electron:dev waits on tcp:5600; strictPort stops a silent fallback port
  // (which wait-on would mistake a foreign process for). 5600 rather than
  // Vite's default 5173 because Windows reserves 5157-5256 (Hyper-V excluded
  // port range) on the dev machine — 5173 fails with listen EACCES there.
  server: { port: 5600, strictPort: true },
  build: { outDir: 'dist' },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
});
