<script setup lang="ts">
import {ref, onMounted, Ref} from 'vue';
import axios from 'axios';
import {gql} from "@apollo/client/core";
import {apolloClient} from "@/apollo";

type ItemsType = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  category: string,
  description: string,
  image: string,
  label: string,
}

const items: Ref<ItemsType[]> = ref([]);

const getProducts = async () => {
  try {
    const response = await axios.get<ItemsType[]>('http://localhost:3002/products');
    console.log(response.data);
    items.value = response.data

  } catch (error) {
    console.log(error);
  }
}

const GET_PRODUCTS = gql`
  query {
    getTableData(table: "products", columns: ["id", "name", "price", "quantity", "category", "description", "image", "label"]) {
        id,
        name,
        price,
        quantity,
        category,
        description,
        image,
        label
    }
  }
`;

const getProductsApollo = async () => {
  try {
    const response = await apolloClient.query({
      query: GET_PRODUCTS,
    });
    console.log(response.data.getTableData);
    items.value = response.data.getTableData; // Заполняем данные в items
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
  }
};

onMounted(async () => {
  // getProducts().catch()
  await getProductsApollo();
  console.log(items.value)
})
</script>


<template>
  <h1> Микрофронтенд Товары</h1>

  <ul>
    <li v-for="item in items" :key="item.id">
      <img class="item__image" :src="`http://localhost:3002${item.image}`" width="300px" :alt="item.name"/>
      <h3 class="item__title">{{ item.name }}</h3>
      <p class="item__price">Цена: {{ item.price }}</p>
      <p class="item__quantity"> Остаток: {{ item.quantity }}</p>
      <p class="item__description">{{ item.description }}</p>
    </li>
  </ul>

</template>

<style scoped>
.item__title {
  font-weight: 600;
}
</style>
