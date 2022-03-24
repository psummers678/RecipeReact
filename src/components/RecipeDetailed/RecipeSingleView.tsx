import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetailedView from "./RecipeDetailedView";
import RecipeListSidebar from "./RecipeListSidebar";
import './RecipeDetailedView.css'

function RecipeSingleView() {
    return (
        <section className="recipe-single">
            <h2>Recipe {useParams().id} </h2>
            <RecipeDetailedView recipeId={Number(useParams().id)} />
            <RecipeListSidebar />
        </section >
    )
}

export default RecipeSingleView