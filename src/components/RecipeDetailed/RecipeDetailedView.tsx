import React from "react";
import RecipeInterface from "../../models/RecipeInterface";
import RecipeService from "../../service/RecipeService";

class RecipeDetailedView extends React.Component<{ recipeId: number }, { recipe: RecipeInterface }> {
    constructor(props: { recipeId: number }) {
        super(props);
        this.state = {
            recipe: {
                recipeId: props.recipeId,
                recipeName: "DUMMY",
                recipeBody: "LONG TESTTTTTT",
                recipeDurationMins: 75,
                rating: "FIVE",
                difficulty: "FOUR",
                ingredientRequirements: [],
            }
        }
    }

    componentDidMount() {
        this.retrieveRecipe()
    }

    retrieveRecipe() {
        RecipeService.GetRecipeById(this.state.recipe.recipeId).then(
            response => {
                this.setState({
                    recipe: response.data
                })
            }
        )
    }

    render(): React.ReactNode {
        let recipe = this.state.recipe;
        return (
            <section>
                <h2>{recipe.recipeName}</h2>
                <ul>
                    <li>Duration: {recipe.recipeDurationMins}</li>
                    <li>Rating: {recipe.rating}</li>
                    <li>Difficulty: {recipe.difficulty}</li>
                </ul>
            
            
                <ul>Ingredients
                    {Object.entries(recipe.ingredientRequirements).map(([ingredient, amount]) => {
                        let [ingredientId, ingredientName] = ingredient.replaceAll('"', '').split(",");
                        return (
                            <li key={ingredientId}>{amount} of {ingredientName}</li>
                        )
                    })}
                </ul>

                <p>{recipe.recipeBody}</p>


        </section>

        )
    }
}

export default RecipeDetailedView;