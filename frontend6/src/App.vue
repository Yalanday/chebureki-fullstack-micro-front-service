<script setup lang="ts">
import {ref, onMounted, watch, Ref, computed} from 'vue';
import {GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_WITH_FILTERS} from "@/graphql/products";
import {getProductsApollo} from "@/graphql/api-methods";
import {ItemsType} from "@/types/types";
import ProductsList from "@/components/ProductsList.vue";
import Filter from "@/components/Filter.vue";
import {useQuery} from '@vue/apollo-composable';
import {useFilterStore} from "@/store/filter";
import LoaderElement from "@/components/Loader-Element.vue";

const items: Ref<ItemsType[]> = ref([]);
const filterStore = useFilterStore()

// Создаем реактивное свойство для фильтров
const filters = ref<{ column: string, operator: string, value: string }[]>([]);


const {result, loading, error, refetch} = useQuery(GET_PRODUCTS_LIST_WITH_FILTERS, () => ({
  filters: filters.value, // Передаём фильтры в запрос
}));

const handleRefetch = async () => {
  try {
    await refetch(); // Повторно выполняем запрос
  } catch (err) {
    console.error("Ошибка при повторном запросе:", err);
  }
};

watch(
    () => filterStore.currentFilter, // Следим за изменениями в фильтре
    (newFilterValue) => {
      // Автоматически обновляем фильтры
      filters.value = newFilterValue === '' ? [] : [{
        column: 'category',
        operator: 'LIKE',
        value: `%${newFilterValue}%`
      }];
      // После обновления фильтров, можно делать refetch, если необходимо
    },
    {immediate: true} // Сразу запускаем, чтобы синхронизировать с начальным значением
);

watch(
    result,
    (newResult) => {
      if (newResult) {
        items.value = newResult.getTableData || []; // Обновляем items данными из результата
      }
    },
    {immediate: true} // Сразу синхронизируем, если результат есть при монтировании
);


</script>


<template>
  <main class="main">
    <h1> Микрофронтенд Товары</h1>
    <Filter/>
    <loader-element v-if="loading" :size="50" color="#ff5722"/>
    <products-list v-if="result" :items="items"/>
    <div v-if="error">
      <p>Произошла ошибка: {{ error.message }}</p>
      <button @click="handleRefetch">Попробовать снова</button>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 0 20px;
}
</style>
