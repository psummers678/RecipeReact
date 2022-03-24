import { Link } from "react-router-dom";
import RecipeInterface from "../../models/RecipeInterface";
interface RecipeEntry {
    recipe: RecipeInterface
}
function RecipeTableEntry(props: RecipeEntry) {
    let recipe = props.recipe;
    return (
        <>
            <tr>
                <td><Link className="nav-link" to={"/Recipes/"+ recipe.recipeId}>{recipe.recipeName}</Link></td>
                <td>{recipe.recipeDurationMins}</td>
                <td>{recipe.rating}</td>
                <td>{recipe.difficulty}</td>
                <td>{Object.keys(recipe.ingredientRequirements).length}</td>
                <td><div className="btn table-btn">Delete</div></td>
            </tr>
        </>
    )
}

export default RecipeTableEntry;