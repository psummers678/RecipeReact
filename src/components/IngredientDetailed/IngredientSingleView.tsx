import React from 'react'
import { useParams } from 'react-router-dom'
import IngredientDetailedView from './IngredientDetailedView'
import IngredientListSidebar from './IngredientListSidebar'

function IngredientSingleView() {
  return (
      <section>
          <h2>Ingredient {useParams().id}</h2>
          <IngredientDetailedView ingredientId={Number(useParams().id)}/>
          <IngredientListSidebar />
      </section>
    
  )
}

export default IngredientSingleView