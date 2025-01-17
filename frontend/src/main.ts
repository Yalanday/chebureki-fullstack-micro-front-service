import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from "@/router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import {createPinia} from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'
import {useCaptchaStore} from "@/store/cur-catpcha";
import {useMiddleware} from "@/store/middleware";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const captchaStore = useCaptchaStore();

useMiddleware(captchaStore, 'captchaStore');

app.use(router);
app.use(Antd);
app.use(VueSmoothScroll);

app.mount('#app')
