<script setup lang="ts">
import {useAsyncComponent} from '@/hooks/useAsyncComponent';

// Используем ключ для выбора модуля
const MicroFrontSales = useAsyncComponent({
  moduleKey: 'frontend-3',
});
</script>

<template>
  <MicroFrontSales/>
</template>

<style scoped>

</style>