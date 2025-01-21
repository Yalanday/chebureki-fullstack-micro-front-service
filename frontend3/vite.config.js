import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:4175/',
  // base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'frontend-3',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
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
    host: '0.0.0.0', // Для доступа из контейнера
    port: 4175, 
  },
})
