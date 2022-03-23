import RecipeInterface from "../models/RecipeInterface";
interface RecipeEntry {
    recipe: RecipeInterface
}
function RecipeTableEntry(props: RecipeEntry) {
    let recipe = props.recipe;
    return (
        <>
            <tr>
                <td><a href={"http://172.19.145.115:3000/Recipes/"+recipe.recipeId} >{recipe.recipeName} </a></td>
                <td>{recipe.recipeDurationMins}</td>
                <td>{recipe.rating}</td>
                <td>{recipe.difficulty}</td>
                <td>{Object.keys(recipe.ingredientRequirements).length}</td>
                <td><button>Delete</button></td>
            </tr>
        </>
    )
}

export default RecipeTableEntry;