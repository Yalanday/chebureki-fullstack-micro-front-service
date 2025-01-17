import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import HomePage from "@/pages/HomePage.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: "/",
        component: HomePage
    },

];

export const router = createRouter({
    history: createWebHistory(),
    routes
})