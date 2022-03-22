import Navbar from "./Navbar";
import '../bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import RecipeListView from "./RecipeListContainer";


function RecipeApp() {
    return (
        <div className="recipe-app-container felxbox-container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Recipes" element={<RecipeListView/>} />
                    <Route path="/Ingredients" />
                </Routes>
            </BrowserRouter>
            <p>Hello Recipe App this is dummy text</p>
        </div>
    )
}

export default RecipeApp;