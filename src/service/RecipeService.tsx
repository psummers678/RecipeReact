import axios from "axios"
import RecipeInterface from "../models/RecipeInterface";

const BASE_URL: string = 'http://localhost:8090/recipe/api/v1'

class RecipeService {

    static retrieveAllRecipes() {
        return axios.get(`${BASE_URL}/recipe/AllRecipes`)
    }

}

export default RecipeService;