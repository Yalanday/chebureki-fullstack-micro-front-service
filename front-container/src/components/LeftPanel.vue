<script setup lang="ts">

</script>

<template>
  <div class="left-panel">
    <ul class="left-panel__list">
      <li class="left-panel__item">
        <router-link to="/interface">
          Рабочий стол
        </router-link>
      </li>
      <li class="left-panel__item">
        <router-link to="/interface/sale">
          Продажи
        </router-link>
      </li>
      <li class="left-panel__item">
        <router-link to="/interface/products">
          Товары
        </router-link>
      </li>
      <li class="left-panel__item">
        <router-link to="/interface/workers">
          Сотрудники
        </router-link>
      </li>
      <li class="left-panel__item">
        Объявления
      </li>
      <li class="left-panel__item">
        Настройки
      </li>
    </ul>
  </div>
</template>

<style scoped>
.left-panel {
  max-width: 250px;
  height: 100vh;
  width: 100%;
  border-left: 1px solid #eeeeee;

  .left-panel__list {
    width: 100%;
  }

  .left-panel__item {
    font-size: 1.5rem;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-bottom: 1px solid #eeeeee;
  }

  .left-panel__item:hover {
    background-color: #ffffff;
  }

}
</style>