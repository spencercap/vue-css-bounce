import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    outDir: 'docs', // easy github pages
  },
  base: './' // helps github pages
})
