import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.js',
    include: ['src/components/test/**/*.test.{js,jsx,ts,tsx}'],
    deps: {
      // Inline react packages so Vitest/Vite transform them correctly and avoid SSR export errors
      inline: ['react', 'react-dom', 'react/jsx-runtime']
    },
    css: true
  }
});
