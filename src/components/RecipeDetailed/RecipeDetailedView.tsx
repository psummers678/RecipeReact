import React from "react";
import RecipeInterface from "../../models/RecipeInterface";
import RecipeService from "../../service/RecipeService";

class RecipeDetailedView extends React.Component<{ recipeId: number }, { recipe: RecipeInterface }> {
    constructor(props: { recipeId: number }) {
        super(props);
        this.state = {
            recipe: {
                recipeId: props.recipeId,
                recipeName: "DUMMY",
                recipeBody: "LONG TESTTTTTT",
                recipeDurationMins: 75,
                rating: "FIVE",
                difficulty: "FOUR",
                ingredientRequirements: [],
            }
        }
    }

    componentDidMount(): void {
        this.retrieveRecipe()
    }

    retrieveRecipe() {
        RecipeService.GetRecipeById(this.state.recipe.recipeId).then(
            response => {
                this.setState({
                    recipe: response.data
                })
            }
        )
    }

    parseIngredient(stringIngredient: string) {
        let recipeIngredient: {ingredientId:number, ingredientName:string} = {
            ingredientId: 0,
            ingredientName: ""
        };
        let adjustedString = stringIngredient.replace("{", "").replace("}", "")
        adjustedString.split(",").map((ingredientField) => {
            let [key, value] = ingredientField.replaceAll('"', '').split(':')
            Object.assign(recipeIngredient, { [key]: value })
        })
        return recipeIngredient;
    }

    render(): React.ReactNode {
        let recipe = this.state.recipe;
        return (<>
            <div className="recipe-block">
                <section className="recipe-title">
                    <h2>{recipe.recipeName}</h2>
                    <div className="summary-block">
                        <div className="summary-field">Duration: {recipe.recipeDurationMins}</div>
                        <div className="summary-field">Rating: {recipe.rating.slice(0, 1) + recipe.rating.slice(1,).toLowerCase()}</div>
                        <div className="summary-field">Difficulty: {recipe.difficulty.slice(0, 1) + recipe.difficulty.slice(1,).toLowerCase()}</div>
                    </div>
                </section>
                <ul className="ingredient-list">Ingredients
                    {Object.entries(recipe.ingredientRequirements).map(([ingredient, amount]) => {
                        let parsedIngredient = this.parseIngredient(ingredient);
                        console.log(parsedIngredient)
                        return (
                            <li key={parsedIngredient.ingredientId}>{amount} of {parsedIngredient.ingredientName}</li>
                        )
                    })}
                </ul> </div>
            <div className="recipe-steps">
                <p>{recipe.recipeBody}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sodales neque. Phasellus vel felis dictum, laoreet orci nec, ornare sapien. Nam feugiat elementum luctus. Etiam sit amet condimentum magna. In venenatis lacus eget mi varius maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sagittis nibh fermentum maximus efficitur. Phasellus faucibus enim sed bibendum vestibulum. Fusce at mi ex. Aliquam dictum enim est, ut fringilla mauris fringilla nec. Mauris nisi quam, commodo ac molestie quis, faucibus ac ante. Vivamus eu neque id nunc cursus maximus vitae vitae lorem. Nullam non condimentum lectus. Nulla facilisi.In vel pellentesque nisl. In sed neque et lectus sollicitudin vestibulum. Phasellus gravida, augue ac tristique scelerisque, turpis felis ullamcorper risus, in sodales ligula mi in ligula. Morbi sollicitudin dui vel tellus ullamcorper, nec convallis massa blandit. Proin eu erat non nulla lobortis hendrerit a ut turpis. Aliquam laoreet arcu cursus lectus suscipit rutrum. In dignissim nec ex nec facilisis. Nulla posuere pulvinar laoreet. Proin aliquam magna et eros luctus, sed laoreet neque facilisis. Aliquam laoreet fringilla auctor. Duis in lectus ex. Pellentesque ac faucibus tortor. Phasellus rhoncus gravida mauris, a imperdiet dui tincidunt vitae. Curabitur eleifend hendrerit accumsan.
                </p>
            </div>
        </>
        )
    }
}

export default RecipeDetailedView;