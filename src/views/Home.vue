<template>
    <div class="card flex justify-content-center mb-6">
        <MultiSelect
            v-model="selectedIngrdients"
            :options="ingredients.meals as Ingridient[]"
            filter
            optionLabel="strIngredient"
            placeholder="Select Ingredients"
            :maxSelectedLabels="3"
            @blur="getFilteredRecipes()"
            class="w-full md:w-20rem border"
        />
    </div>
    <div v-if="store.recipes.length" class="grid grid-cols-3 gap-6">
        <div v-for="item in store.recipes">
            <Recipe :recipe="item.recipe" />
        </div>
    </div>
    <div v-else class="flex justify-center">Please Select Ingredients</div>
</template>

<script setup lang="ts">
import { useApiCallStore } from "@/stores/apiCalls";
import Recipe from "@/components/Recipe.vue";
import { Ingridient } from "@/types/Ingredient";
import MultiSelect from "primevue/multiselect";
import ingredients from "@/ingredients.json";
import { ref } from "vue";

const selectedIngrdients = ref([]);

const store = useApiCallStore();

const getFilteredRecipes = async () => {
    let selected = "" as string;
    selectedIngrdients.value.forEach((item: Ingridient) => {
        selected += item.strIngredient + ", ";
    });
    const response = await store.getFilteredRecipes(selected);
    store.recipes = response;
};
</script>

<style scoped></style>
