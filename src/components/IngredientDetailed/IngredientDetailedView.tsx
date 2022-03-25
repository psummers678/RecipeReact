import { Component } from "react"
import IngredientInterface from "../../models/IngredientInterface";
import IngredientService from "../../service/IngredientService";

class IngredientDetailedView extends Component <{ingredientId:number}, {ingredient:IngredientInterface}> {
  constructor(props: any) {
    super(props);
    this.state = {
        ingredient: {
            ingredientId: this.props.ingredientId,
            ingredientName: "hello",
            price: 5,
            shopName: "Tescos",
            foodType: "MEAT",
            shelfLife: 5,
            shelfLifeUnit: "DAYS",
            storageType: "FRIDGE",
        }
    }
  }

  componentDidMount(): void{
      this.retrieveIngredient();
  }

  retrieveIngredient():void {
        let ingredientService = new IngredientService();
        ingredientService.GetIngredientById(this.state.ingredient.ingredientId).then(
            (response) =>{
                this.setState({
                    ingredient: response.data
                })
            }
        )
  }

  render() {
    let ingredient =this.state.ingredient ;
    return (
        <>
            <div className="detailed-block">
                <section className="detail-title">
                    <h2>{ingredient.ingredientName}</h2>
                    <div className="summary-block">
                        <div className="summary-field">{ingredient.shopName}</div>
                        <div className="summary-field">{ingredient.price}</div>
                        <div className="summary-field">{ingredient.foodType}</div>
                        <div className="summary-field">{ingredient.shelfLife} {ingredient.shelfLifeUnit}</div>
                        <div className="summary-field">{ingredient.storageType}</div>
                    </div>
                </section>
            </div>
            <div className="detailed-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sodales neque. Phasellus vel felis dictum, laoreet orci nec, ornare sapien. Nam feugiat elementum luctus. Etiam sit amet condimentum magna. In venenatis lacus eget mi varius maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sagittis nibh fermentum maximus efficitur. Phasellus faucibus enim sed bibendum vestibulum. Fusce at mi ex. Aliquam dictum enim est, ut fringilla mauris fringilla nec. Mauris nisi quam, commodo ac molestie quis, faucibus ac ante. Vivamus eu neque id nunc cursus maximus vitae vitae lorem. Nullam non condimentum lectus. Nulla facilisi.In vel pellentesque nisl. In sed neque et lectus sollicitudin vestibulum. Phasellus gravida, augue ac tristique scelerisque, turpis felis ullamcorper risus, in sodales ligula mi in ligula. Morbi sollicitudin dui vel tellus ullamcorper, nec convallis massa blandit. Proin eu erat non nulla lobortis hendrerit a ut turpis. Aliquam laoreet arcu cursus lectus suscipit rutrum. In dignissim nec ex nec facilisis. Nulla posuere pulvinar laoreet. Proin aliquam magna et eros luctus, sed laoreet neque facilisis. Aliquam laoreet fringilla auctor. Duis in lectus ex. Pellentesque ac faucibus tortor. Phasellus rhoncus gravida mauris, a imperdiet dui tincidunt vitae. Curabitur eleifend hendrerit accumsan.
                </p>
            </div>
        </>
      
    )
  }
}


export default IngredientDetailedView