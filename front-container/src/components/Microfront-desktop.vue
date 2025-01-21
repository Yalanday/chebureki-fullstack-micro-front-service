<script setup lang="ts">
import {useAsyncComponent} from '@/hooks/useAsyncComponent';

// Используем ключ для выбора модуля
const MicroFrontDesktop = useAsyncComponent({
  moduleKey: 'frontend-2',
});
</script>

<template>
  <MicroFrontDesktop/>
</template>

<style scoped>

</style>