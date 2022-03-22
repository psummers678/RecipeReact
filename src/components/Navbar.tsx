import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><p className="navbar-brand">Meal Planner</p></div>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/Recipes">Recipes</Link></li>
                    <li><Link className="nav-link" to="/Ingredients">Ingredients</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;