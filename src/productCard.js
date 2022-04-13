import React from 'react'


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