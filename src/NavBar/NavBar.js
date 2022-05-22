import React from 'react';
import NavLinks from './NavLinks'
import './NavBar.css'
import Navigation from './Navigation.js'
import MobileNavigation from './MobileNavigation.js'

function NavBar () {
	return(
    	<div className="navBar">
    		<div className="nav">
	    		<div className="logo">Forig</div>
	    		<MobileNavigation/>
	    		<Navigation/>
    		</div>
    		
    	</div>
	);
}

export default NavBar