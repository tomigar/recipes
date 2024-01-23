<template>
    <div class="grid grid-cols-3 gap-6">
        <div v-for="recipe in store.favourites">
            <Recipe :recipe="recipe" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApiCallStore } from "@/stores/apiCalls";
import Recipe from "@/components/Recipe.vue";

const store = useApiCallStore();
</script>

<style scoped></style>
