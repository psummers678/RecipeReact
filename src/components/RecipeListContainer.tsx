import React from 'react';
import RecipeTable from './RecipeTable';

class RecipeListView extends React.Component<{},{}>{


    render(): React.ReactNode {
        return(
            <div className="list-view-container"> 
                <h1> All Recipes</h1>
                <div className="flexbox-item flexbox-item-1">
                    <RecipeTable />
                    
                </div>
            </div>
        )
    }
}
export default RecipeListView;