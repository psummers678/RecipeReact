import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RecipeApp from './components/RecipeApp';
import ReactDOM from 'react-dom';
import RecipeListView from './components/RecipeList/RecipeListContainer';
import RecipeDetailedView from './components/RecipeDetailed/RecipeDetailedView';

    const div = document.createElement('div')
it("runs without crashing", () => {
    ReactDOM.render(<RecipeApp />, div);
})
describe('Component: RecipeDetailedView', () => { 
    it("Renders Without Crashing", () => {
        ReactDOM.render(<RecipeDetailedView recipeId={1}/>, div)
    })
})
describe("Component: RecipeListView", () => {
    it( "Runs without crashing", () => {
        ReactDOM.render(<RecipeListView />, div);
    })
})