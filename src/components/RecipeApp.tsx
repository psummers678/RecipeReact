import Navbar from "./Navbar";
import '../bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";


function RecipeApp() {
    return (
        <div className="recipe-app-container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Recipes" />
                    <Route path="/Ingredients" />
                </Routes>
            </BrowserRouter>
            <p>Hello Recipe App this is dummy text</p>
        </div>
    )
}

export default RecipeApp;