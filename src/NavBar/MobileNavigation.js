import React, { useState } from 'react';
import NavLinks from './NavLinks';
import burger from './icons/burger.svg';
import closeBurger from './icons/close.svg';

function MobileNavigation () {

	const [open, setOpen] = useState(false);

	const burgerIcon = <img src={burger} className="burger"
    			 			onClick={() => setOpen(!open)}
    					/>

    const closeIcon = <img src={closeBurger} className="burger"
    			 			onClick={() => setOpen(!open)}
    					/>

    const closeMobileMenu = () => setOpen(false);


	return(
    	<div className="MobileNavigation">
    		{open ? closeIcon : burgerIcon}
    		{open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    	</div>
	);
}

export default MobileNavigation