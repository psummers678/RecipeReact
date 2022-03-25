import React from 'react'
import { useParams } from 'react-router-dom'
import IngredientService from '../../service/IngredientService'
import IngredientForm from './IngredientForm'

function IngredientUpdate() {
    return (
        <section>
            <IngredientForm ingredientId={Number(useParams().id)} />
        </section>
    )
}

export default IngredientUpdate