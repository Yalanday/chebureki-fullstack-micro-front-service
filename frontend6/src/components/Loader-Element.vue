<script setup lang="ts">
// Пропсы
const props = defineProps({
  size: {
    type: Number,
    default: 40, // Размер кружочка (в пикселях)
  },
  color: {
    type: String,
    default: "#3498db", // Цвет кружочка
  },
});
</script>
<template>
  <div
      class="loader"
      :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      borderTop: `4px solid ${props.color}`
    }"
  ></div>
</template>

<style scoped>
.loader {
  border: 4px solid #f3f3f3; /* Цвет фона кружочка */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Анимация */
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
