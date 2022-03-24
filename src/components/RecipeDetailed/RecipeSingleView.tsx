import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetailedView from "./RecipeDetailedView";

function RecipeSingleView() {
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <h1>THIS IS A SINGLE RECIPE VIEW</h1>
                        <h2>The id passed is {useParams().id} </h2>
                    </div>
                    <div className="row">
                        <RecipeDetailedView recipeId={Number(useParams().id)} />
                    </div>
                </div>
                <div className="col sidebar">
                    <ul>This will eventually be a sidebar with a list of all recipes for easy switching like
                        <li>Mac</li>
                        <li>And</li>
                        <li>Cheese</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RecipeSingleView