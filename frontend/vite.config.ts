import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:4173/',
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'frontend-1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
        './Header': './src/components/layouts/Header.vue',
        './Footer': './src/components/layouts/Footer.vue',
        './HomePage': './src/pages/HomePage.vue',
        './Autorization': './src/components/Autorization.vue',
        './FormPassword': './src/components/FormPassword.vue',
        './InterfacePage': './src/pages/InterfacePage.vue',
        './NotFound': './src/pages/NotFound.vue',
      },
      shared: {
        vue: { singleton: true },
        'ant-design-vue': { singleton: true }, // Явно указываем
      },
    })
  ],
  build: {
    target: 'esnext', // Устанавливаем современную цель
    rollupOptions: {
      external: ['ant-design-vue/dist/antd.css'],
      output: {
        format: 'es', // Используем модульный формат
        assetFileNames: 'assets/[name].[ext]', // Обеспечивает сборку CSS
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    cors: true, // Разрешить доступ для всех доменов
  },
})
