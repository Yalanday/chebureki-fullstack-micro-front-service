<script setup lang="ts">
import {ItemsType} from "@/types/types";


defineProps<{
  items: ItemsType[]; // Обязательное свойство типа ItemsType[]
}>();

</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <img class="item__image" :src="`http://localhost:3002${item.image}`" width="250" height="250" :alt="item.name"/>
      <h3 class="item__title">{{ item.name }}</h3>
      <p class="item__price">Цена: {{ item.price }}</p>
      <p class="item__quantity"> Остаток: {{ item.quantity }}</p>
      <p class="item__description">{{ item.description }}</p>
    </li>
  </ul>
</template>

<style scoped>

</style>
