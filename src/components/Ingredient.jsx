import React from 'react'

const Ingredient = ({ ingredient, index, functionName, arrow }) => {
	return (
		<div>
			<li
				className="p-2 rounded-lg font-bold flex items-center justify-between gap-4"
				style={{ backgroundColor: ingredient.color }}
			>
				{ingredient.name}
				<button
					id={index}
					onClick={functionName}
					className="bg-[#1a1a1a] cursor-pointer w-8 p-1 rounded-md text-base"
				>
					{arrow}
				</button>
			</li>
		</div>
	)
}

export default Ingredient
