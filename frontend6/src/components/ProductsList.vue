<script setup lang="ts">
import {ItemsType} from "@/types/types";


defineProps<{
  items: ItemsType[]; // Обязательное свойство типа ItemsType[]
}>();

</script>

<template>
  <ul class="card-list">
    <li v-for="item in items"
        :key="item.id"
        class="card-item">
      <img class="item__image" :src="`http://localhost:3002${item.image}`" width="250" height="250" :alt="item.name"/>
      <h3 class="item__title">{{ item.name }}</h3>
      <p class="item__price">Цена: {{ item.price }}</p>
      <p class="item__quantity"> Остаток: {{ item.quantity }}</p>
      <p class="item__description">{{ item.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(2, 270px);
  gap: 20px;
}

.card-item {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  box-shadow: 2px 2px 2px #ccc;
}

.card-item:hover,
.card-item:focus {
  box-shadow: 5px 5px 5px #ccc;
  scale: 1.02;
}
</style>
