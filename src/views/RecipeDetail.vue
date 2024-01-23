<template>
    <div v-if="!recipeDetail">
        <Spinner />
    </div>
    <div v-else class="flex justify-center gap-16">
        <div>
            <h1 class="text-xl font-bold">{{ recipeDetail.label }}</h1>
            <div
                v-if="imageLoader"
                class="flex justify-center items-center w-40 h-40"
            >
                <Spinner />
            </div>
            <img :src="recipeDetail.image" />
        </div>
        <div class="flex flex-col gap-5">
            <h2 class="text-lg font-bold">Ingredients</h2>
            <ul>
                <li v-for="item in recipeDetail.ingredientLines">{{ item }}</li>
            </ul>
            <div>
                <Chip v-for="mType in recipeDetail.mealType" :label="mType" />
            </div>
            <button
                v-if="isFavourite"
                @click="store.addToFavourites(recipeDetail)"
                class="border bg-yellow-400 rounded-full px-4 py-2"
            >
                Add To Favourites
            </button>
            <button
                v-else
                @click="store.deleteFromFavourites(recipeDetail)"
                class="border bg-yellow-400 rounded-full px-4 py-2"
            >
                Remove From Favourites
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useApiCallStore } from "@/stores/apiCalls";
import { useRouter } from "vue-router";
import { Recipe } from "@/types/Recipe";

import Spinner from "@/components/UI/Spinner.vue";
import Chip from "primevue/chip";

const router = useRouter();
const store = useApiCallStore();

const recipeDetail = ref({} as Recipe["recipe"]);

const myImage = new Image();
const imageLoader = ref(true);

myImage.onload = () => {
    imageLoader.value = false;
};

const isFavourite = computed(() => {
    const favourites = store.favourites as Recipe[];
    return favourites.some(
        (favourite) => favourite.recipe?.uri === recipeDetail.value?.uri
    );
});

onMounted(async () => {
    const id: string = router.currentRoute.value.params.id.toString();
    const response = await store.getRecipeDetail(id);
    recipeDetail.value = response.recipe;

    myImage.src = recipeDetail.value.image;
});
</script>
