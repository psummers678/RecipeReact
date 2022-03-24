import React from 'react';
import RecipeTable from './RecipeTable';

class RecipeListView extends React.Component<{}, {}>{


    render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <h1> All Recipes</h1>
                <RecipeTable />
                <ul>
                    <li>Listed Ingredients</li>
                    <li>Filters?</li>
                    <li>Examples?</li>
                </ul>
            </div>
        )
    }
}
export default RecipeListView;