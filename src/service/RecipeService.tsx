import axios from "axios"

const BASE_URL: string = 'http://localhost:8090/recipe/api/v1'

class RecipeService {
    static GetRecipeById(id: any) {
        return axios.get(`${BASE_URL}/recipe/GetRecipe/${id}`);
    }

    static retrieveAllRecipes() {
        return axios.get(`${BASE_URL}/recipe/AllRecipes`)
    }

}

export default RecipeService;