import React from 'react';

function NavLinks (props) {
	return(
    	<div className="navLinks">
    		<ul className="Menu headerMenu">
		        <li onClick={() => props.isMobile() && props.closeMobileMenu()}>
		        	<a href="#">products</a>
		        </li>
		        <li onClick={() => props.isMobile() && props.closeMobileMenu()}>
		        	<a href="#">new</a>
		        </li>
		        <li onClick={() => props.isMobile() && props.closeMobileMenu()}>
		        	<a href="#">about us</a>
		        </li>
		        <li onClick={() => props.isMobile() && props.closeMobileMenu()}>
		        	<a href="#">gallery</a>
		        </li>
        	</ul>
    	</div>
	);
}

export default NavLinks