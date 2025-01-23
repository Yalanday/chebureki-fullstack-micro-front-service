<script setup lang="ts">
import {useAsyncComponent} from '@/hooks/useAsyncComponent';

// Используем ключ для выбора модуля
const MicroFrontProducts = useAsyncComponent({
  moduleKey: 'frontend-6',
});
</script>

<template>
  <MicroFrontProducts/>
</template>

<style scoped>

</style>