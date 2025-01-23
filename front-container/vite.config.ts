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
        'frontend-1': 'http://localhost:4173/assets/remoteEntry.js',
        'frontend-2': 'http://localhost:4174/assets/remoteEntry.js',
        'frontend-3': 'http://localhost:4175/assets/remoteEntry.js',
        'frontend-4': 'http://localhost:4176/assets/remoteEntry.js',
        'frontend-5': 'http://localhost:4177/assets/remoteEntry.js',
        'frontend-6': 'http://localhost:4178/assets/remoteEntry.js', // Товары
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