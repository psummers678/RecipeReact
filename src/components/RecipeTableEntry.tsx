import RecipeInterface from "../models/RecipeInterface";
interface RecipeEntry {
    recipe: RecipeInterface
}
function RecipeTableEntry(props: RecipeEntry) {
    let recipe = props.recipe;
    return (
        <>
            <tr>
                <td>{recipe.recipeName}</td>
                <td>{recipe.recipeDurationMins}</td>
                <td>{recipe.rating}</td>
                <td>{recipe.difficulty}</td>
            </tr>
        </>
    )
}

export default RecipeTableEntry;