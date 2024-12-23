import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = ({ ingredients, removeFromBurger }) => {
	return (
		<div>
			<ul className="w-full h-full p-4 list-none flex flex-col justify-end gap-2">
				{ingredients.length ? '' : 'No Ingredients'}
				{ingredients.map((ingredient, index) => (
					<Ingredient
						key={index}
						ingredient={ingredient}
						index={index}
						functionName={removeFromBurger}
						arrow="-"
					/>
				))}
			</ul>
		</div>
	)
}

export default BurgerStack
