<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import {useAsyncComponent} from "@/hooks/useAsyncComponent";

const MicroFront1App = useAsyncComponent({
  moduleKey: 'frontend-1',
});

</script>

<template>
  <MicroFront1App/>
</template>

<style scoped>

</style>