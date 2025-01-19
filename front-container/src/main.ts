import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/es/style/reset.css';
import 'ant-design-vue/es/style/index.js';
import Antd from 'ant-design-vue';


createApp(App).use(Antd).use(router).mount('#app')
