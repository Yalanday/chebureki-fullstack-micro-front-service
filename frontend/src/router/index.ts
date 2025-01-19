import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import HomePage from "@/pages/HomePage.vue";
import InterfacePage from "@/pages/InterfacePage.vue";


export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/interface',
        component: InterfacePage,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;