<template>
    <div class="card flex justify-content-center">
        <MultiSelect
            v-model="selectedIngrdients"
            :options="ingredients.meals as Ingridient[]"
            filter
            optionLabel="strIngredient"
            placeholder="Select Ingredients"
            :maxSelectedLabels="3"
            @blur="getFilteredRecipes()"
            class="w-full md:w-20rem"
        />
    </div>
    <div v-if="store.recipes.length" class="grid grid-cols-3 gap-6">
        <div v-for="item in store.recipes">
            <Recipe :recipe="item.recipe" />
        </div>
    </div>
    <div v-else class="flex justify-center">
        <Spinner />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useApiCallStore } from "@/stores/apiCalls";
import Recipe from "@/components/Recipe.vue";
import Spinner from "@/components/UI/Spinner.vue";
import { Ingridient } from "@/types/Ingredient";
import MultiSelect from "primevue/multiselect";
import ingredients from "@/ingredients.json";
import { ref } from "vue";

const selectedIngrdients = ref([]);

const store = useApiCallStore();

onMounted(async () => {
    //store.recipes = await store.getRecipes(selectedIngrdients.value);
});

const getFilteredRecipes = async () => {
    let selected = "" as string;
    selectedIngrdients.value.forEach((item: Ingridient) => {
        selected += item.strIngredient + ", ";
    });
    store.recipes = await store.getFilteredRecipes(selected);
};
</script>

<style scoped></style>
