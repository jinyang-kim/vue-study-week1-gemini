import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // SCSS 전역 설정
  css: {
    preprocessorOptions: {
      scss: {
        // 모든 컴포넌트에 이 파일들을 자동으로 import 해줍니다.
        // (주의: 실제 파일이 존재해야 에러가 안 납니다. 경로 확인 필수!)
        // additionalData: `@import "@/assets/variables.scss";`
      },
    },
  },
})
