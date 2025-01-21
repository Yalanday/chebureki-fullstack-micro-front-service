<script setup lang="ts">
import {useAsyncComponent} from '@/hooks/useAsyncComponent';

// Используем ключ для выбора модуля
const MicroFrontWorkers = useAsyncComponent({
  moduleKey: 'frontend-4',
});
</script>

<template>
  <MicroFrontWorkers/>
</template>

<style scoped>

</style>