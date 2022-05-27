import React from 'react';

function MenuLinks (props) {
	return(
    	<div className="MenuLinks">
    		<ul className="footerMenu">
		        <li onClick={() => props.isMobile() && props.closeMobileMenu()}>
		        	<a href="/products">products</a>
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

export default MenuLinks