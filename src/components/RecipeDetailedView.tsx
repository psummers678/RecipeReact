import React from "react";
import RecipeInterface from "../models/RecipeInterface";
import RecipeService from "../service/RecipeService";

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
            <>
                <h1>{recipe.recipeName}</h1>
                <h3>{recipe.recipeDurationMins}</h3>
                <h3>{recipe.rating}</h3>
                <h3>{recipe.difficulty}</h3>
                <p>{recipe.recipeBody}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.entries(recipe.ingredientRequirements).map( ([ingredient, amount]) => {
                            // ingredient: "1,Steak" 
                            // amount: "5tsp"#
                            console.log("SPLIT");
                            let [ingredientId, ingredientName] = ingredient.replaceAll('"','').split(",");
                            return (
                                <tr key={ingredientId}>
                                    <td>{ingredientName}</td>
                                    <td>{amount}</td>
                                </tr>
                            )
                        })}
                
                    </tbody>
                </table>
                
            </>
        )
    }
}

export default RecipeDetailedView;