
import React, { Component } from 'react'
import IngredientService from '../../service/IngredientService';
interface IngredientInterface {
    ingredientId : number,
    ingredientName : string,
    price: number,
    shopName: string,
    shelfLife: number,
    shelfLifeUnit: string,
    storageType: string,
    foodType: string,
}
export default class IngredientListContainer extends Component <any, {ingredients: IngredientInterface[]}> {

    constructor(props: any) {
      super(props);
      this.state = {
          ingredients: [
              {ingredientId:1,ingredientName:"Apple",price:0.5,shopName:"Tescos",shelfLife:14,shelfLifeUnit:"DAYS",storageType:"NORMAL",foodType:"FRUIT"},
          ]
      }
    }

    componentDidMount(): void {
        IngredientService.retrieveAllIngredients().then(
            (response) => {
                this.setState({
                    ingredients:response.data
                })
                
            }
        )

    }
    render() {
    return (
        <section>
            {this.state.ingredients.map((ingredient) => {
                return ( <>
                    <p key={ingredient.ingredientId}> {ingredient.ingredientName}</p>
                    <p>{ingredient.foodType}</p>
                    </>
                )
            })}

        </section>
    )
  }
}
