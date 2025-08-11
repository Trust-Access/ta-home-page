import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    include: ['**/*.{test,spec}.tsx'],
    coverage: {
      provider: 'v8',
      thresholds: {
        statements: 0.8,
        branches: 0.8,
        functions: 0.8,
        lines: 0.8,
      },
    },
  },
});
