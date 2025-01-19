import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: 'http://localhost:4173/',
  plugins: [
    vue(),
    federation({
      name: 'containerApp',
      remotes: {
        'frontend-1': 'http://localhost:4173/assets/remoteEntry.js', // Путь к файлу remoteEntry.js
        'frontend-2': 'http://localhost:4177/assets/remoteEntry.js', // Путь к файлу remoteEntry.js

      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',

  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    cors: true, // Разрешить доступ для всех доменов
  },
});