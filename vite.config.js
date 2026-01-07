import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/tokens/theme.scss";
          @import "@/styles/tokens/typographies.scss";
          @import "@/styles/tokens/spacings.scss";
          @import "@/styles/tokens/borderRadius.scss";
          @import "@/styles/tokens/boxShadows.scss";
          @import "@/styles/tokens/opacities.scss";
          @import "@/styles/tokens/sizing.scss";
        `
      }
    }
  }
})
