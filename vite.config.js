import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_APP_API, // process.env o‘rniga import.meta.env
        changeOrigin: true,
        secure: false, // Agar HTTPS sertifikati noto‘g‘ri bo‘lsa, false qilib qo'yish kerak
        rewrite: (path) => path.replace(/^\/api/, '') // `/api` ni olib tashlaydi
      }
    }
  }
})
