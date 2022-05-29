import React from 'react'
import arrProductCards from './arrProductCards.js';
import { Link } from "react-router-dom";

import './productCard.css'


function ProductCard (props) {
    const { card } = props;

	return (
    	<div className="card">
    		<Link to={{ pathname: `/page/${card.id}` }} >
    		    <div className="imgBlock"><a className="imgLink"><img src={card.image}/></a></div>
    		</Link>

            <Link to={{ pathname: `/page/${card.id}` }} >
    			<div className="title"><a className="titleLink">{card.title}</a></div>
    		</Link>

    		<div className="price">{card.price}</div>
    	</div>
	);

}

export default ProductCard;