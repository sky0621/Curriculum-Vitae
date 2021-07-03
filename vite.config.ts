import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Curriculum-Vitae/' : './',
  resolve: {
    alias: {
      '@': path.resolve('__dirname', '/src')
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})
