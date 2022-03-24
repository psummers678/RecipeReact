import axios from "axios"

const BASE_URL: string = 'http://localhost:8090/recipe/api/v1'

class RecipeService {

    static GetRecipeById(id: any) {
        return axios.get(`${BASE_URL}/ingredient/GetIngredient/${id}`);
    }

    static retrieveAllIngredients() {
        return axios.get(`${BASE_URL}/ingredient/AllIngredients`)
    }

}

export default RecipeService;
