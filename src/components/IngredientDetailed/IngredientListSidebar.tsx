import React from "react";
import { ReactNode } from "react";
import IngredientService from "../../service/IngredientService";

interface IngredientSummary {
    ingredientId: number,
    ingredientName: string,
}

class IngredientListSidebar extends React.Component<{}, { sidebar: IngredientSummary[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            sidebar: []
        }
    }

    componentDidMount() {
        this.retrieveSidebarList();
    }

    displaySidebarEntry(entry: IngredientSummary): JSX.Element {
        return (<a key={entry.ingredientId} href={"./" + entry.ingredientId}>{entry.ingredientName}</a>)
    }
    retrieveSidebarList(): void {
        let sidebarList: any = { sidebar: [] };
        IngredientService.retrieveAllIngredients().then(
            response => {
                response.data.forEach((retrievedIngredient: IngredientSummary) => {
                    sidebarList.sidebar.push({
                        ingredientId: retrievedIngredient.ingredientId,
                        ingredientName: retrievedIngredient.ingredientName,
                    })
                });

                this.setState(sidebarList)
            }
        )
    }

    render(): ReactNode {
        return (
            <>
                <div className="recipelistsidebar">
                    List Of Ingredients
                    {this.state.sidebar.map((entry: IngredientSummary) => {
                        return (this.displaySidebarEntry(entry))
                    })}
                </div>
            </>)
    }
}

export default IngredientListSidebar