import React from 'react'
import arrProductCards from './arrProductCards.js';

import './productCard.css'


function ProductCard (props) {
    const {card} = props

	return (
    	<div className="card">
    		<div className="imgBlock"><img src={card.image}/></div>
    		<div className="title">{card.title}</div>
    		<div className="price">{card.price}</div>
    	</div>
	);

}

export default ProductCard