<script lang="ts" setup>
import {reactive, ref, watch} from 'vue';
import {loginAPI} from "@/api/autorization-api";
import {useRouter} from 'vue-router';
import {message} from "ant-design-vue";
import {UserContent} from "@/types/api-types";
import {FormStatePassword} from "@/types/types";

const router = useRouter();

const props = defineProps({
  id: {
    type: Number,
  },
  table: {
    type: String,
  }
})

const formState = reactive<FormStatePassword>({
  password: '',
  id: props.id,
  table: props.table
});

const isDisabled = ref(true)

const userContent = ref<UserContent | undefined>(undefined);

message.config({
  top: '30%',
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: 'ant-message',
  transitionName: 'move-up',
});

const handleChanges = (e: any) => {
  console.log(e.target.value.length);
  isDisabled.value = e.target.value.length < 6;
};

const numberClick = (index: number) => {
  console.log(index);
  formState.password += index;
  isDisabled.value = formState.password.length < 6;
};

const backspaceHandler = () => {
  formState.password = formState.password.slice(0, -1);
  isDisabled.value = formState.password.length < 6;
};

const onFinish = async (values: any) => {
  userContent.value = await loginAPI(values)

  if (userContent.value?.status) {
    setTimeout(() => {
          router.push('/interface');
        }, 3000
    )
  } else {
    message.error('Неверный пароль!');
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

<template>

  <h1 v-if="userContent?.status" style="text-align: center; font-size: 3.5rem; margin-top: 80px;">
    Добро пожаловать {{ userContent.name }} {{ userContent.lastname }}!
  </h1>

  <a-form
      v-else
      class="form-password"
      :model="formState"
      name="basic"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item name="table">
      <input type="hidden" v-model="formState.table"/>
    </a-form-item>

    <a-form-item name="id">
      <input type="hidden" v-model="formState.id"/>
    </a-form-item>

    <a-form-item
        name="password"
        :rules="[
                  { required: true, message: 'Введите шестизначный код!' },
                  { min: 6, message: 'Введите 6 цифр!' },
                ]"
    >

      <a-input-password
          :maxlength="6"
          v-model:value="formState.password"
          @input="handleChanges"/>
    </a-form-item>

    <div class="number-input">
      <ul class="number-list" :class="!isDisabled ? 'disabled' : ''">
        <li v-for="(n, index) in 10"
            :key="n"
            @click="numberClick(index)"
        >
          {{ index }}
        </li>
      </ul>
      <button @click="backspaceHandler" class="number-backspace">&nbsp;<span>&#8592;</span></button>
    </div>
    <a-form-item :wrapper-col="{ offset: 3, span: 18 }">
      <a-button :disabled="isDisabled" type="primary" :danger="true" html-type="submit">Войти</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="scss">

.number-input {
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  user-select: none;

  .number-backspace {
    position: relative;
    width: calc(100% / 8);
    height: 100%;
    margin-left: 2px;
    text-align: center;
    background-color: black;
    font-size: 3rem;
    color: white;
    border: 1px solid #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      display: block;
      font-size: 3rem;
      top: 50%;
      transform: translateY(-53%);
    }
  }
}


.number-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  li {
    flex: 1;
    text-align: center;
    background-color: red;
    color: white;
    font-size: 3rem;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
}
</style>
