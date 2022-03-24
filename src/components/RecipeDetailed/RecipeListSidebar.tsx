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
      recipes: [
        {
          recipeId: 1,
          recipeName: "Hello",
        },
        {
          recipeId: 2,
          recipeName: "moto",
        },
        {
          recipeId: 3,
          recipeName: "phillip",
        }
      ]
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
        // console.log(response.data);
        // console.log("NEW RECIPE LIST:");
        // console.log(newRecipeList);
        // let newthing = [ response.data[0], response.data[1]];
        // newthing.forEach(thing => {
        //   console.log(thing)
        // });

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
