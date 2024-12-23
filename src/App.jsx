import React, { useState } from 'react'
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css'

export const availableIngredients = [
	{ name: 'Kaiser Bun', color: '#bc6c25' },
	{ name: 'Sesame Bun', color: '#f4a261' },
	{ name: 'Gluten Free Bun', color: '#a98467' },
	{ name: 'Lettuce Wrap', color: '#6a994e' },
	{ name: 'Beef Patty', color: '#723d46' },
	{ name: 'Soy Patty', color: '#6a040f' },
	{ name: 'Black Bean Patty', color: '#472d30' },
	{ name: 'Chicken Patty', color: 'burlywood' },
	{ name: 'Lettuce', color: '#40916c' },
	{ name: 'Tomato', color: 'tomato' },
	{ name: 'Bacon', color: 'maroon' },
	{ name: 'Onion', color: '#e9c46a' },
	{ name: 'Cheddar Cheese', color: '#f8961e' },
	{ name: 'Swiss Cheese', color: '#faa307' },
]

const App = () => {
	const [stack, setStack] = useState([])

	const addToBurger = (e) => {
		setStack([...stack, availableIngredients[e.target.id]])
	}

	const removeFromBurger = (e) => {
		stack.splice(e.target.id, 1)
		setStack([...stack])
	}
	return (
		<main className="container mx-auto mt-24 flex flex-col items-center">
			<h1 className="text-4xl">Burger Stacker</h1>
			<section className="mt-16 flex items-center justify-between w-[80%]">
				<IngredientList
					ingredients={availableIngredients}
					addToBurger={addToBurger}
				/>
				<BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
			</section>
		</main>
	)
}

export default App
