import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import RecipeListView from "./RecipeList/RecipeListContainer";
import RecipeSingleView from "./RecipeDetailed/RecipeSingleView";
import { IngredientListContainer } from "./IngredientList/IngredientListContainer";
import IngredientSingleView from "./IngredientDetailed/IngredientSingleView";
import SignupForm from "./FormikTutorial/SignupForm";
import IngredientUpdate from "./IngredientForm/IngredientUpdate";

function RecipeApp() {
    return (
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Recipes" element={<RecipeListView />} />
                    <Route path="/Recipes/:id" element={<RecipeSingleView />} />
                    <Route path="/Ingredients" element={<IngredientListContainer />} />
                    <Route path="/Ingredients/:id" element={<IngredientSingleView />}/>
                    <Route path="/UpdateIngredient/:id" element={<IngredientUpdate />} />
                    <Route path="/FormikTutorial" element={<SignupForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RecipeApp;