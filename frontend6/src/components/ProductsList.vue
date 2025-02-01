<script setup lang="ts">
import {ItemsType} from "@/types/types";
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import ModalCard from "@/components/ModalCard.vue";

defineProps<{
  items: ItemsType[];
}>();

const open = ref<boolean>(false);
const selectedItem = ref<ItemsType | null>(null);

const showModal = (item: any) => {
  selectedItem.value = item;
  console.log(selectedItem.value);
  open.value = true;
};

const handleOk = () => {
  message.success('Модальное окно закрыто');
  open.value = false;
};

// Обработчик кнопки "Cancel"
const handleCancel = () => {
  message.info('Закрытие модального окна');
  open.value = false;
};


</script>

<template>
<ul class="card-list">
<li
    v-for="item in items"
    :key="item.id"
    class="card-item"
    @click="showModal(item)"
>
  <img
      class="item__image"
      :src="`http://localhost:3002${item.image}`"
      width="250"
      height="250"
      :alt="item.name"
  />
  <h3 class="item__title">{{ item.name }}</h3>
  <p class="item__description">{{ item.description }}</p>
  <div class="item__info">
    <span class="item__price">Цена: {{ item.price }} руб.</span>
    <span class="item__quantity"> Остаток: {{ item.quantity }}</span>
  </div>
</li>
</ul>
  <modal-card v-model:open="open"  :selectedItem="selectedItem" @ok="handleOk" @cancel="handleCancel"/>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(2, 270px);
  gap: 20px;
}

.card-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
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

.item__price,
.item__title{
  font-weight: bold;
  font-size: 1.1em;
}

.item__title {
  text-align: center;
}

.item__description {
  line-height: 1.2;
  display: -webkit-box; /* Включаем flexbox для старых браузеров */
  -webkit-line-clamp: 4; /* Ограничиваем количество строк */
  -webkit-box-orient: vertical; /* Вертикальное направление */
  overflow: hidden; /* Скрываем переполнение */
  text-overflow: ellipsis; /* Добавляем многоточие */
}

.item__info {
  display: flex;
  margin-top: auto;
  justify-content: space-between;
}

</style>
