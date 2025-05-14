import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/retrovis_industry",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
