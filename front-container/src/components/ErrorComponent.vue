<template>
  <div class="error-container">
    <p class="error-message">Ошибка загрузки компонента.</p>
    <p class="error-description">Попробуйте обновить страницу или повторить попытку позже.</p>
  </div>
</template>

<script setup>
// Логика обработки ошибок, если нужно.
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #d9534f;
}

.error-message {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.error-description {
  font-size: 1.2rem;
  color: #999;
}
</style>