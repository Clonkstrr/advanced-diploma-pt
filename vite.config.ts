/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // electron:dev waits on tcp:5173; strictPort stops a silent fallback port
  // (which wait-on would mistake a foreign process for).
  server: { port: 5173, strictPort: true },
  build: { outDir: 'dist' },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
});
