<script setup lang="ts">
import {useAsyncComponent} from '@/hooks/useAsyncComponent';
import {onMounted} from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import LeftPanel from "@/components/LeftPanel.vue";

// Используем ключ для выбора модуля
const MicroFront2App = useAsyncComponent({
  moduleKey: 'frontend-2',
});

// onMounted(async () => {
//
//   try {
//
//     const response = await axios.get('http://localhost:3002/interfaces');
//     console.log(response.data)
//
//   } catch (e) {
//     console.error(e);
//   }
//
//
// })
</script>

<template>
  <Header/>
  <main>
    <div class="main__container container">
      <left-panel/>
      <div class="main__content">
        <router-view/>
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