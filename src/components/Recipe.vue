<template>
    <RouterLink
        :to="`recipe/${getRecipeId(props.recipe.uri)}`"
        class="relative"
    >
        {{ props.recipe.label }}
        {{ props.recipe.label }}
        <img :src="props.recipe.image" />
        <a :href="props.recipe.url">Link</a>
    </RouterLink>
    <div
        class="aboslute top-0 right-0"
        @click="store.addToFavourites(props.recipe as Recipe)"
    >
        fav
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useApiCallStore } from "@/stores/apiCalls";
import { Recipe } from "@/types/Recipe";

const store = useApiCallStore();

const props = defineProps({
    recipe: {
        type: Object,
        required: true,
    },
});

const getRecipeId = (recipeUri: string) => {
    const split = recipeUri.split("#");
    return split[split.length - 1];
};
</script>

<style scoped></style>
