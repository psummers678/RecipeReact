import React from 'react';
import RecipeInterface from '../models/RecipeInterface';
import RecipeService from '../service/RecipeService';



interface RecipeTableState {
    recipes: RecipeInterface[],
}

const DummyRecipes: RecipeTableState = {
    recipes: [
        {
            recipeId: 1,
            recipeName: "Curry",
            recipeDurationMins: 65,
            recipeBody: "lkjsadf",
            ingredientRequirements: { ingredient: { name: "Hello" }, quantity: "tkhl" },
            difficulty: "FIVE",
            rating: "FOUR"
        }]
}

class RecipeTable extends React.Component<{}, RecipeTableState>{

    constructor(props: any) {
        super(props);
        this.state = {
            recipes: [{
                recipeId: 1,
                recipeName: "Dummy",
                recipeDurationMins: 5,
                recipeBody: "Blah",
                ingredientRequirements: { ingredient: { name: "Hello" }, quantity: "tkhl" },
                rating: "FIVE",
                difficulty: "FOUR",
            }],
        };
    }

    componentDidMount() {
        this.retrieveAllRecipes();
    }

    retrieveAllRecipes(): void {
        RecipeService.retrieveAllRecipes().then(
            response => {
                this.setState({
                    recipes: response.data
                })
            }
        )
    }

    render(): React.ReactNode {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Recipe Duration</th>
                        <th>Recipe Rating</th>
                        <th>Recipe Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.recipes.map((recipe) => {
                        return (
                        <tr>
                            <td>{recipe.recipeName}</td>
                            <td>{recipe.recipeDurationMins}</td>
                            <td>{recipe.rating}</td>
                            <td>{recipe.difficulty}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        )
    }
}
export default RecipeTable