<script setup lang="ts">
import Header from "@/components/Header.vue";
import LeftPanel from "@/components/LeftPanel.vue";

</script>

<template>
  <Header/>
  <main class="main">
    <div class="main__container container">
      <left-panel/>
      <div class="main__content">
        Контейнер для компонентов микрофронтенда
      </div>
    </div>
  </main>
</template>

<style scoped>
.main__container {
  display: flex;
  height: 100vh;
  flex-direction: row;
  align-items: flex-start;
}
.main__content {
  flex: 1;
  padding: 20px;
  background-color: antiquewhite;
  height: 100%;
}
</style>
