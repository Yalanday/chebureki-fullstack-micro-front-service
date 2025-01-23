import {createRouter, createWebHistory} from 'vue-router';
import InterfacePage from "@/components/InterfacePage.vue";
import LoginPage from "@/components/LoginPage.vue";
import MicroFrontDesktop from "@/components/Microfront-desktop.vue";
import MicroFrontSales from "@/components/Microfront-sales.vue";
import MicroFrontWorkers from "@/components/Microfront-workers.vue";
import MicroFrontProducts from "@/components/Microfront-products.vue";

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
        component: InterfacePage,

        children: [
            {
                path: '', // Пустой путь — будет загружаться по умолчанию
                component: MicroFrontDesktop, // Ваш дочерний компонент
            },
            {
                path: 'sale', // Пример другого дочернего маршрута
                component: MicroFrontSales,
            },
            {
                path: 'workers', // Пример другого дочернего маршрута
                component: MicroFrontWorkers,
            },
            {
                path: 'products', // Пример другого дочернего маршрута
                component: MicroFrontProducts,
            }
        ],// Используем App из микрофронтенда 2
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;