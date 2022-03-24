import React from 'react';
import RecipeInterface from '../../models/RecipeInterface';
import RecipeService from '../../service/RecipeService';
import RecipeTableEntry from './RecipeTableEntry';



interface RecipeTableState {
    recipes: RecipeInterface[],
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
                ingredientRequirements: [],
                rating: "FIVE",
                difficulty: "FOUR",
            }],
        };
    }

    componentDidMount(): void {
        this.retrieveAllRecipes();
    }

    retrieveAllRecipes(): void {
        RecipeService.retrieveAllRecipes().then(
            response => {
                //ingredientRequirements seem is {String string} still
                this.setState({
                    recipes: response.data
                })
            })
    }

    render(): React.ReactNode {
        return (
            <table className='.col-md'>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Recipe Duration</th>
                        <th>Recipe Rating</th>
                        <th>Recipe Difficulty</th>
                        <th>Number of Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.recipes.map((recipe) => {
                        return (<RecipeTableEntry recipe={recipe} key={recipe.recipeId} />)
                    })}
                </tbody>
            </table >
        )
    }
}
export default RecipeTable