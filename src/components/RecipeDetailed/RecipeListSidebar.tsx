import React from "react"
import { ReactNode } from "react"
import RecipeSummaryInterface from "../../models/RecipeSummaryInterface";
import RecipeService from "../../service/RecipeService";


class RecipeListSidebar extends React.Component<{}, { recipes: RecipeSummaryInterface[] }> {
  constructor(props:{}) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.retrieveRecipeList();
  }

  retrieveRecipeList() {
    let newRecipeList: RecipeSummaryInterface[] = [];
    RecipeService.retrieveAllRecipes().then(
      response => {
        response.data.forEach((retrievedRecipe: RecipeSummaryInterface) => {
          newRecipeList.push({
            recipeId: retrievedRecipe.recipeId,
            recipeName: retrievedRecipe.recipeName,
          })
        });
        this.setState({
          recipes: newRecipeList
        })
      }
    )
  }

  render(): ReactNode {
    let recipes: RecipeSummaryInterface[] = this.state.recipes
    return (
      <>
        <div className="recipelistsidebar">
          List Of Recipes
          {recipes.map((recipe: RecipeSummaryInterface) => {
            return (<a key={recipe.recipeId} href={"./" + recipe.recipeId}>{recipe.recipeName}</a>)
          })}
        </div>
      </>)
  }
}

export default RecipeListSidebar
