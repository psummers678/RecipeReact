import IngredientRequirementInterface from "./IngredientRequirementInterface"


interface RecipeInterface {
    recipeId: number,
    recipeName: string,
    recipeDurationMins: number,
    recipeBody: string,
    ingredientRequirements: IngredientRequirementInterface[]
    difficulty: string,
    rating: string
}

export default RecipeInterface