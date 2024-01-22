<template>
    <div v-for="recipe in store.favourites">
        <Recipe :recipe="recipe" />
    </div>
</template>

<script setup lang="ts">
import { useApiCallStore } from "@/stores/apiCalls";
import Recipe from "@/components/Recipe.vue";

const store = useApiCallStore();
</script>

<style scoped></style>
