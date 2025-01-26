<script setup lang="ts">
import {onMounted} from "vue";
import {useFilterStore} from "@/store/filter";

const store = useFilterStore();

const clickHandler = (value: string) => {
  store.setFilter(value);
};

onMounted(() => {
  console.log(store.currentFilter)
})


const filterItems = [
  {
    id: 1,
    name: 'Все',
    label: ''
  },
  {
    id: 2,
    name: 'Чебуреки',
    label: 'чебурек'
  },
  {
    id: 3,
    name: 'Пирожки',
    label: 'пирожки'
  },
  {
    id: 4,
    name: 'Напитки',
    label: 'напитки'
  }
]

</script>

<template>
  <div class="filter__list">
    <div
        v-for="item in filterItems"
        :key="item.id"
        @click="() => {clickHandler(item.label)}"
        class="filter__item">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
