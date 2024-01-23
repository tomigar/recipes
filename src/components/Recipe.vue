<template>
    <RouterLink
        :to="`recipe/${getRecipeId(props.recipe.uri)}`"
        class="relative flex flex-col justify-start items-center rounded-lg border h-full shadow-lg bg-gray-200"
    >
        <img
            class="h-36 w-full object-cover rounded-t"
            :src="props.recipe.image"
        />
        <h2 class="text-center">
            {{ props.recipe.label }}
        </h2>
    </RouterLink>
    <div
        v-if="store.favourites.includes(props.recipe as Recipe)"
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
