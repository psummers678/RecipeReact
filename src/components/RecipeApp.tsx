import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import RecipeListView from "./RecipeList/RecipeListContainer";
import RecipeSingleView from "./RecipeDetailed/RecipeSingleView";


function RecipeApp() {
    return (
        <div className="recipe-app-container">
            <BrowserRouter>
                <div className="container-fluid">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Recipes" element={<RecipeListView/>} />
                    <Route path="/Recipes/:id" element={<RecipeSingleView/>} />
                    <Route path="/Ingredients" />
                </Routes>
            </BrowserRouter>
            <div className="container-fluid footer">
                <p>Hello Recipe App this is dummy text</p>
            </div>
        </div>
    )
}

export default RecipeApp;