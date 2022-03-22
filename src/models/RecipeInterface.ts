interface RecipeInterface {
    recipeId: number,
    recipeName: string,
    recipeDurationMins: number,
    recipeBody: string,
    ingredientRequirements: {
        ingredient: any,
        quantity: string
    }
    difficulty: string,
    rating: string
}

export default RecipeInterface