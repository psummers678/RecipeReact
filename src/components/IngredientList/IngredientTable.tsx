import { Link } from "react-router-dom";
import IngredientService from "../../service/IngredientService";
import TableComponent from "../TableComponent";

class IngredientTable extends TableComponent {

    setTableHeaders(): void {
        this.setState({
            tableHeaders: [
                "Ingredient Name",
                "Ingredient Price",
                "Ingredient THIS"
            ]
        })
    }

    retrieveTableEntries(): void {
        IngredientService.retrieveAllIngredients().then(
            (response) => this.setState({
                tableEntries: response.data
            })
        )
    }

    createTableEntry(tableEntry: any): JSX.Element {
        return (
        <>
            <tr>
                <td><Link className="nav-link" to={"/Ingredients/"+ tableEntry.ingredientId}>{tableEntry.ingredientName}</Link></td>
                <td>{tableEntry.price}</td>
                <td>{tableEntry.foodType}</td>
                <td>{tableEntry.shopName}</td>
                <td><div className="btn table-btn">Delete</div></td>
            </tr>
        </>
        )
    }

    createTableButtons(): JSX.Element {
        return (<></>);
    }


}

export default IngredientTable