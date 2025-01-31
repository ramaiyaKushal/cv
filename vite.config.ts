import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
