<script setup lang="ts">
import { useAsyncComponent } from '@/hooks/useAsyncComponent';

// Используем ключ для выбора модуля
const MicroFront2App = useAsyncComponent({
  moduleKey: 'frontend-2',
});
</script>

<template>
  <MicroFront2App />
</template>