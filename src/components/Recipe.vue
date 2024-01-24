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
</template>

<script setup lang="ts">
import { defineProps } from "vue";

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
