import React from 'react';
import './ProductsPage.css'

import NavBar from './NavBar/NavBar.js'

import arrProductCards from './arrProductCards.js';
import ProductCard from './productCard.js';

import Footer from './Footer/Footer.js'


function ProductsPage () { 

	return (
		<div>
			<div className="header"><NavBar/></div>
			<div className="main container">
				<h2 className="titleProducts titleSection">Products</h2>
			    <ul className="cards">
					{arrProductCards.map(card => <li className="card"><ProductCard card={card} /></li>)}
				</ul>

			</div>
			<Footer/>
			
		</div>
	)
}

export default ProductsPage