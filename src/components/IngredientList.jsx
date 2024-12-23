import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ ingredients, addToBurger }) => {
	return (
		<div>
			<ul className="w-full h-full p-3 list-none flex flex-col justify-end gap-2">
				{ingredients.map((ingredient, index) => (
					<Ingredient
						key={index}
						ingredient={ingredient}
						index={index}
						functionName={addToBurger}
						arrow="+"
					/>
				))}
			</ul>
		</div>
	)
}

export default IngredientList
