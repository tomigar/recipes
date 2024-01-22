<template>
    <div v-for="item in store.recipes">
        <Recipe :recipe="item.recipe" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useApiCallStore } from "@/stores/apiCalls";
import Recipe from "@/components/Recipe.vue";

const store = useApiCallStore();

onMounted(async () => {
    store.recipes = await store.getRecipes("chicken potatoe cucumber");
});
</script>

<style scoped></style>
