import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/',

  server: {
    host: "localhost",
    port: 5173,
    proxy: {
        '/api': {
            target: 'http://localhost:8000/',
            changeOrigin: true,
            ws: false,
            rewrite: (pathStr) => pathStr.replace('/api', ''),
            timeout: 5000,
        },
        '/upload': {
            target: 'http://localhost:8000/',
            changeOrigin: true,
            ws: false,
            rewrite: (pathStr) => pathStr.replace('/api', ''),
            timeout: 5000,
        },
    },
  }
})
