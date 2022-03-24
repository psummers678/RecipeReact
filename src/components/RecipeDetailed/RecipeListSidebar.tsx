import React from "react"
import { ReactNode } from "react"
import RecipeService from "../../service/RecipeService";
interface RecipeReducedInterface {
  recipes: { recipeId: number, recipeName: String, }[]
}

class RecipeListSidebar extends React.Component<any, RecipeReducedInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.retrieveRecipeList();
  }

  retrieveRecipeList() {
    let newRecipeList: RecipeReducedInterface = {recipes: []};
    RecipeService.retrieveAllRecipes().then(
      response => {
        response.data.map((retrievedRecipe: any) => {
          newRecipeList.recipes.push({
            recipeId: retrievedRecipe.recipeId,
            recipeName: retrievedRecipe.recipeName,
          })
        })
        this.setState(newRecipeList)
      }
    )

  }
  render(): ReactNode {
    let recipes = this.state.recipes
    return (
      <>
        <div className="recipelistsidebar">
          List Of Recipes
          {console.log(recipes)}
          {recipes.map(recipe => {
            console.log("Render Hello" + recipe.recipeId)
            return (<a key={recipe.recipeId} href={"./" + recipe.recipeId}>{recipe.recipeName}</a>)
          })}
        </div>
      </>)
  }
}

export default RecipeListSidebar
