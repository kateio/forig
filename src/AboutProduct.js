import React from 'react';
import './AboutProduct.css';

import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js';

import arrProductCards from './arrProductCards.js';

import { useParams } from "react-router-dom";


function AboutProduct (props) { 
	const { id } = useParams();
	const card = arrProductCards[id];
	return (
		<div className="AboutProduct">
			<div className="header"><NavBar/></div>
			<div className="main container">
				<div className="ProductTitle">
					<h2 className="titleProducts titleSection">Products</h2>
					<h3>{card.title} </h3>
				</div>
				<div className="Product">
					<div className="picProduct"><img src={card.image}/></div>
					<div className="info">
						<div className="titleAndPrice">
							<div className="title">{card.title}</div>
							<div className="price">{card.price}</div>
						</div>
						<div className="text">
							{card.text.split('\n').map(cnt => <p>{cnt}</p>)}
						</div>
						<div className="picProduct2"><img src={card.image}/></div>
					</div>
				</div>
			</div>
			<Footer/>
			
		</div>
	)
}

export default AboutProduct;