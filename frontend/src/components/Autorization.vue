<script setup lang="ts">
import {ref, Ref, onMounted, computed} from 'vue';
import {authorizationAPI} from "@/api/autorization-api";
import FormPassword from "@/components/FormPassword.vue";
import { Modal } from 'ant-design-vue';

export type DataType = {
  id: number,
  label: string,
  name: string,
  lastname: string
  status: string
}

const open = ref<boolean>(false);

const visionLink: Ref<boolean> = ref(false);

const visionInputPassword: Ref<boolean> = ref(false);

const idUser = ref<number>(0);
const tableUser = ref<string>('');

const data: Ref<DataType[] | null> = ref(null);

const pageSize: Ref<number> = ref(3); // Количество элементов на странице
const currentPage: Ref<number> = ref(1); // Текущая страница

const paginatedData = computed(() => {
  if (!data.value) return [];
  const start = (currentPage.value - 1) * pageSize.value;
  const end = currentPage.value * pageSize.value;
  return data.value.slice(start, end);
});

const totalPages = computed(() => {
  if (!data.value) return 0;
  return Math.ceil(data.value.length / pageSize.value);
});

const clickHandler = async (string: string, status: string, id: number) => {
  if (status) {
    console.log(status)
    idUser.value = id;
    tableUser.value = status;
    open.value = true;
    visionInputPassword.value = true;
  } else {
    data.value = await authorizationAPI(string);
    string === 'type-users' ? visionLink.value = false : visionLink.value = true;
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(async () => {
  data.value = await authorizationAPI('type-users');
});

</script>

<template>
  <div class="container">
    <div v-if="data" class="auth">
      <ul class="list">
        <li v-for="item in paginatedData" :key="item.id" :data-label="item.label"
            @click="clickHandler(item.label, item.status, item.id)" class="list__item">
          {{ item.name }} <span v-if="item.lastname">{{ item.lastname }}</span>
        </li>
      </ul>
      <a-modal class="password-modal"
               width="800px"
               v-model:open="open"
               :footer="null"
               title="Введите цифровой код доступа">

        <form-password :v-show="open" :table="tableUser" :id="idUser"/>
      </a-modal>

      <transition name="link-fade">
        <a v-if="visionLink" @click="clickHandler('type-users','',0)" class="link">
          В начало&nbsp;&hookleftarrow;
        </a>
      </transition>
      <!-- Пагинация -->
      <transition name="fade">
        <div v-if="totalPages > 1" class="pagination">
          <button class="arrow arrow--left" @click="prevPage" :disabled="currentPage === 1"></button>
          <span>{{ currentPage }} из {{ totalPages }}</span>
          <button class="arrow" @click="nextPage" :disabled="currentPage === totalPages"></button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">

.auth {
  position: relative;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  .list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .list__item {
    font-size: 4rem;
    line-height: 1.2;
    color: red;
    padding: 2rem 1rem;
    width: 100%;
    border: 1px solid red;
    border-radius: 25px;
    text-align: center;
  }

  .link {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    margin-top: auto;
    margin-left: auto;
    width: max-content;
    font-size: 2rem;
    padding: 1rem;
    border: 3px solid red;
    border-radius: 15px;
    background-color: red;
    color: #ffffff;
    font-weight: 600;
  }

  .link:hover {
    color: red;
    background-color: #ffffff;
  }

  .pagination {
    position: absolute;
    display: flex;
    align-items: center;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    font-size: 2rem;
  }

  .pagination button {
    outline: none;
    border: none;
    background: none;
    margin: 0 10px;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination .arrow {
    width: 70px;
    height: 70px;
    border-right: 8px solid red;
    border-bottom: 8px solid red;
    transform: rotate(-45deg);
    cursor: pointer;

    &--left {
      transform: rotate(135deg);
    }
  }
}

/* Анимация для списка */
//.fade-enter-active, .fade-leave-active {
//  transition: opacity 0.5s ease;
//}
//
//.fade-enter-from, .fade-leave-to {
//  opacity: 0;
//}

/* Анимация для ссылки */
.link-fade-enter-active,
.link-fade-leave-active {
  transition: opacity 1s ease, transform 0.5s ease;
}

.link-fade-enter-from,
.link-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.ant-modal-title {
  font-size: 2rem;
}

</style>