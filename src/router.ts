import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: MainLayout,
            children: [
                {
                    path: "",
                    component: () => import("@/views/Home.vue"),
                },
                {
                    path: "/favourites",
                    component: () => import("@/views/Favourites.vue"),
                },
            ],
        },
    ],
});
