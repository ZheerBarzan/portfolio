import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  
  build:{
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: 'assets/logos/figma.png' // Adjust output path and filename as needed
        }
      }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
