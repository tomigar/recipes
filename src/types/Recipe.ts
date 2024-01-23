export interface Recipe {
    recipe: {
        label: string;
        image: string;
        uri: string;
        ingredientLines: string[];
        mealType: string[];
    };
}
