import React, { useState } from 'react'
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css'

export const availableIngredients = [
	{ name: 'Kaiser Bun', color: 'saddlebrown' },
	{ name: 'Sesame Bun', color: 'sandybrown' },
	{ name: 'Gluten Free Bun', color: 'peru' },
	{ name: 'Lettuce Wrap', color: 'olivedrab' },
	{ name: 'Beef Patty', color: '#3F250B' },
	{ name: 'Soy Patty', color: '#3F250B' },
	{ name: 'Black Bean Patty', color: '#3F250B' },
	{ name: 'Chicken Patty', color: 'burlywood' },
	{ name: 'Lettuce', color: 'lawngreen' },
	{ name: 'Tomato', color: 'tomato' },
	{ name: 'Bacon', color: 'maroon' },
	{ name: 'Onion', color: '#e9c46a' },
	{ name: 'Cheddar Cheese', color: '#FDE18B' },
	{ name: 'Swiss Cheese', color: '#F1E1A8' },
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
