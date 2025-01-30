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
.filter__list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter__item {
  grid-column: 2 span;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.filter__item:hover {
  scale: 1.05;
  box-shadow: 5px 5px 5px #888888;
}

</style>
