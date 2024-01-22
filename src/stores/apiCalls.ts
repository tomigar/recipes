import { defineStore } from "pinia";
import api from "@/axios";
import { recipe } from "@/types/Recipe";

export const useApiCallStore = defineStore("apiCall", {
    state: () => ({
        recipes: [] as recipe[],
        favourites: (JSON.parse(localStorage.getItem("favourites") as string) ??
            []) as recipe[],
    }),
    actions: {
        async getRecipes(ingredients: string) {
            if (this.recipes.length === 0) {
                const response = await api.get("", {
                    params: { q: ingredients },
                });
                return response.data.hits;
            }
            return this.recipes;
        },
        async getRecipeDetail(id: string) {
            const response = await api.get(`${id}`);
            return response.data[0];
        },
        addToFavourites(recipe: recipe) {
            console.log(recipe);

            const favourites = this.favourites as recipe[];
            favourites.push(recipe);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        },
    },
});
