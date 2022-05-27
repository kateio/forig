import React, {useState} from 'react';
import MenuLinks from './MenuLinks.js'
import arrowD from './icons/arrow-down.svg';
import arrowU from './icons/arrow-up.svg';


function MobileMenu () {

	const [open, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false);

	return(
		<div className="Menu MobileMenu">
			<div className="mMenu" onClick={() => setOpen(!open)}>
				<div >menu</div>
				<img src={arrowD} className={open ? "arrowMenuU" : "arrowMenuD"}/>
			</div>
    		{open && <MenuLinks className="" isMobile={true} closeMobileMenu={closeMobileMenu}/>}
		</div>
	)
}

export default MobileMenu