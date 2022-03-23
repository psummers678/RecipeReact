import React from 'react';
import RecipeTable from './RecipeTable';

class RecipeListView extends React.Component<{}, {}>{


    render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1> All Recipes</h1>
                </div>
                <div className="row">
                    <div className="col-md-8 col">
                        <RecipeTable />
                    </div>
                    <div className="col-sm">
                        <ul>
                            <li>Listed Ingredients</li>
                            <li>Filters?</li>
                            <li>Examples?</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default RecipeListView;