import { defineStore } from "pinia";
import api from "@/axios";
import { Recipe } from "@/types/Recipe";

export const useApiCallStore = defineStore("apiCall", {
    state: () => ({
        recipes: [] as Recipe[],
        favourites: (JSON.parse(localStorage.getItem("favourites") as string) ??
            []) as Recipe[],
    }),
    actions: {
        async getFilteredRecipes(ingredients: string) {
            const response = await api.get("", {
                params: { q: ingredients },
            });
            return response.data.hits;
        },
        async getRecipeDetail(id: string) {
            const response = await api.get(`${id}`);
            return response.data;
        },
        addToFavourites(recipe: Recipe["recipe"]) {
            const favourites = this.favourites as Recipe[];
            favourites.push({ recipe: recipe });
            localStorage.setItem("favourites", JSON.stringify(favourites));
        },
        deleteFromFavourites(uri: string) {
            const favourites = this.favourites as Recipe[];
            const index = favourites.findIndex(
                (favourite) => favourite.recipe.uri === uri
            );
            favourites.splice(index, 1);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        },
    },
});
