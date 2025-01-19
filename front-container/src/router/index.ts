import {createRouter, createWebHistory} from 'vue-router';
import InterfacePage from "@/components/InterfacePage.vue";
import LoginPage from "@/components/LoginPage.vue";

declare global {
    interface WindowEventMap {
        navigate: CustomEvent;
    }
}

window.addEventListener('navigate', (event: CustomEvent) :void => {
    const { path } = event.detail;
    // Переход через роутер контейнера
    router.push(path);
});

const routes = [
    {
        path: '/',
        component: LoginPage,  // Используем App из микрофронтенда
    },
    {
        path: '/interface',
        component: InterfacePage, // Используем App из микрофронтенда 2
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;