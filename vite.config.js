import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_APP_API || 'http://localhost:5000', // .env fayldan URL ni oladi
        changeOrigin: true,
        secure: true, // HTTPS bo‘lsa true, HTTP bo‘lsa false
        rewrite: (path) => path.replace(/^\/api/, ''), // `/api` ni o‘chirib tashlaydi
      },
    },
  },
});
