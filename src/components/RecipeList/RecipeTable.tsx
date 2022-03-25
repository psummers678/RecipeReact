import React from 'react';
import RecipeInterface from '../../models/RecipeInterface';
import RecipeService from '../../service/RecipeService';
import RecipeTableEntry from './RecipeTableEntry';
import TableComponent from '../TableComponent'

class RecipeTable extends TableComponent {
    setTableHeaders(): void {
        this.setState({
            tableHeaders: [
                "Recipe Name",
                "Recipe Duration",
                "Recipe Rating",
                "Recipe Difficulty",
                "Number of Ingredients",
            ]
        })
    }
    retrieveTableEntries(): void {
        RecipeService.retrieveAllRecipes().then(
            response => {
                //ingredientRequirements seem is {String string} still
                this.setState({
                    tableEntries: response.data
                })
            })
    }

    createTableButtons(): JSX.Element {
        return (
            <tr>
                <td><div className="btn sort">Sort by</div></td>
                <td><div className="btn sort">Sort by</div></td>
                <td><div className="btn sort">Sort by</div></td>
                <td><div className="btn sort">Sort by</div></td>
                <td><div className="btn">Create New Recipe</div></td>
            </tr>
        )
    }

    createTableEntry(tableEntry: RecipeInterface): JSX.Element {
        return (<RecipeTableEntry recipe={tableEntry} key={tableEntry.recipeId} />)
    }

}

export default RecipeTable