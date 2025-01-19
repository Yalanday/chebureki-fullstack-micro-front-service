<script setup lang="ts">
import { useAsyncComponent } from '@/hooks/useAsyncComponent';
import {onMounted} from "vue";
import axios from "axios";

// Используем ключ для выбора модуля
const MicroFront2App = useAsyncComponent({
  moduleKey: 'frontend-2',
});

onMounted(async () => {

  try {

    const response = await axios.get('http://localhost:3002/interfaces');
    console.log(response.data)

  } catch (e) {
    console.error(e);
  }

})
</script>

<template>
  <MicroFront2App />
</template>