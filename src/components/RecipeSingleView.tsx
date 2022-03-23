import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetailedView from "./RecipeDetailedView";

function RecipeSingleView() {
    return (
        <>
            <h1>THIS IS A SINGLE RECIPE VIEW</h1>
            <h2>The id passed is {useParams().id} </h2>
            <RecipeDetailedView recipeId={Number(useParams().id)} />
            <div><p>This will eventually be a sidebar with a list of all recipes for easy switching</p></div>
        </>
    )
}

export default RecipeSingleView