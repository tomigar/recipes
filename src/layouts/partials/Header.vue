<template>
    <div class="w-full h-14 items-center flex justify-center gap-8 bg-primary">
        <div v-for="item in items">
            <RouterLink
                :to="(item.route as string)"
                class="flex gap-2 items-center justify-center"
                :class="{
                    'text-white': selected === item.route,
                }"
                @click="selected = item.route"
            >
                <i :class="item.icon"></i>
                <span>
                    {{ item.label }}
                </span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const selected = ref(window.location.pathname);

interface HeaderItem {
    label: string;
    icon: string;
    route: string;
}
const items = ref([
    {
        label: "Recipes",
        icon: "pi pi-home",
        route: "/",
    },
    {
        label: "Favourites",
        icon: "pi pi-star",
        name: "favourites",
        route: "/favourites",
    },
] as HeaderItem[]);

console.log(selected.value === items.value[0].route);
</script>
