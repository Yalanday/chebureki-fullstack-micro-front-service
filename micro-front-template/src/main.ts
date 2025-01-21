import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import {createPinia} from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'
import './assets/base.css'; // Импортируем основной CSS файл
import './assets/main.css'; // Импортируем дополнительные стили

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Antd);
app.use(VueSmoothScroll);

app.mount('#app')
