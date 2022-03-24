import React from 'react';
import RecipeTable from './RecipeTable';
import './RecipeList.css'

class RecipeListView extends React.Component<{}, {}>{


    render(): React.ReactNode {
        return (
                <section>
                <h2> All Recipes</h2>
                <RecipeTable />
                <ul>
                    <li>Listed Ingredients</li>
                    <li>Filters?</li>
                    <li>Examples?</li>
                </ul>
            </section>
            
        )
    }
}
export default RecipeListView;