import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import RecipeListView from "./RecipeList/RecipeListContainer";
import RecipeSingleView from "./RecipeDetailed/RecipeSingleView";
import {IngredientListContainer} from "./IngredientList/IngredientListContainer";


function RecipeApp() {
    return (
        <div className="container">
            <BrowserRouter>
                    <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Recipes" element={<RecipeListView/>} />
                    <Route path="/Recipes/:id" element={<RecipeSingleView/>} />
                    <Route path="/Ingredients" element={<IngredientListContainer/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RecipeApp;