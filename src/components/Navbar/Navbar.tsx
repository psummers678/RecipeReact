import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import {MdOutlineLocalCafe} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <Link className="nav-link active" to="/"><GoHome />Home</Link>
            <Link className="nav-link" to="/Recipes"><MdOutlineLocalCafe/>Recipes</Link>
            <Link className="nav-link" to="/Ingredients"><AiOutlineShop/>Ingredients</Link>
            <Link className="nav-link" to="#"><BsPerson/>About</Link>
        </nav>
    )
}

export default Navbar;