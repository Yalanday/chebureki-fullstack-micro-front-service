<script setup lang="ts">
import {ModalProps} from "@/types/types";

const props = defineProps<ModalProps>()

</script>

<template>
  <a-modal
      :title="props.selectedItem?.name"
      :okText="'Добавить в продажу'"
      :cancelText="'Отмена'"
      width="600px"
  >
    <div v-if="selectedItem" class="modal-content">
      <div class="product-details">
        <p><strong>Описание:</strong> {{ props.selectedItem?.description }}</p>
        <p><strong>Цена:</strong> {{ props.selectedItem?.price }} руб.</p>
        <p><strong>Остаток:</strong> {{ props.selectedItem?.quantity }}</p>
      </div>
    </div>
  </a-modal>
</template>

<style scoped>

</style>
