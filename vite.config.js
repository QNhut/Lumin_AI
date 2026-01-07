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
          @use "@/styles/tokens/theme.scss" as *;
          @use "@/styles/tokens/typographies.scss" as *;
          @use "@/styles/tokens/spacings.scss" as *;
          @use "@/styles/tokens/borderRadius.scss" as *;
          @use "@/styles/tokens/boxShadows.scss" as *;
          @use "@/styles/tokens/opacities.scss" as *;
          @use "@/styles/tokens/sizing.scss" as *;
        `
      }
    }
  }
})
