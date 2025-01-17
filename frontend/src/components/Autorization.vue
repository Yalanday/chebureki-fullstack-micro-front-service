<script setup lang="ts">
import {ref, Ref, onMounted} from 'vue';
import {authorizationAPI} from "@/api/autorization-api";

export type DataType = {
  id: number,
  label: string,
  name: string
}

const visionLink: Ref<boolean> = ref(false)

const data: Ref<DataType[] | null> = ref(null)

const clickHandler = async (string: string) => {
  data.value = await authorizationAPI(string);
  string === 'type-users' ? visionLink.value = false : visionLink.value = true;
}

onMounted(
    async () => {
      data.value = await authorizationAPI('type-users');
    })
</script>


<template>
  <div class="container">
    <div v-if="data"
         class="auth">
      <transition-group name="fade" tag="ul" class="list">
        <li v-for="item in data"
            :key="item.id"
            :data-label="item.label"
            @click="clickHandler(item.label)"
            class="list__item">
          {{ item.name }}
        </li>
      </transition-group>
      <transition name="link-fade">
        <a
            v-if="visionLink"
            @click="clickHandler('type-users')"
            class="link"
        >
          В начало&nbsp;&hookleftarrow;
        </a>
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
    border: 1px solid red;
    border-radius: 15px;
  }
}

/* Анимация для списка */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

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


</style>