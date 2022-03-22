import React from 'react';

interface Recipe {
    recipeName: string,
    duration: number,
    difficulty: string,
    rating: string
}

interface RecipeTableState {
    recipes: Recipe[],
}

const DummyRecipes: RecipeTableState = { recipes: [
    {
        recipeName: "Curry",
        duration: 65,
        difficulty: "FIVE",
        rating: "FOUR"
    }]
}

class RecipeTable extends React.Component<{}, RecipeTableState>{
    constructor(props: any) {
        super(props);
        this.state = {
            recipes: Array(1).fill({
                recipeName:"Dummy",
                duration: 5,
                difficulty: "FOUR",
                rating: "FIVE"
        })};
    }

    componentDidMount() {
        const newRecipes: RecipeTableState = DummyRecipes;
        this.setState(newRecipes);
    }

    render(): React.ReactNode {
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Recipe Name
                        </th>
                        <th>
                            Recipe Difficulty
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.recipes[0].recipeName}</td>
                        <td>{this.state.recipes[0].difficulty}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default RecipeTable