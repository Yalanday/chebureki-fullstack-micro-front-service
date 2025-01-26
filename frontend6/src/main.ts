import {createApp, h, provide} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import {createPinia} from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'
import './assets/base.css'; // Импортируем основной CSS файл
import './assets/main.css'; // Импортируем дополнительные стили
//добавка apollo
import {setupApolloClient} from "@/apollo";


const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(Antd);
app.use(VueSmoothScroll);
setupApolloClient()

app.mount('#app')
