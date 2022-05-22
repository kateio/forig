import React, {useState} from 'react';
import MenuLinks from './MenuLinks.js'
import arrowD from './icons/arrow-down.svg';
import arrowU from './icons/arrow-up.svg';


function MobileMenu () {

	const [open, setOpen] = useState(false);

	const ArrowDown = <img src={arrowD} className="arrowMenu" width="16px" height="16px"
    			 			onClick={() => setOpen(!open) }
    					/>

    const ArrowUp = <img src={arrowU} className="arrowMenu" width="16px" height="16px"
    			 			onClick={() => setOpen(!open)}
    					/>

    const closeMobileMenu = () => setOpen(false);

	return(
		<div className="Menu MobileMenu">
			<div className="mMenu">
				<div >menu</div>
				{open ? ArrowUp : ArrowDown}
			</div>
    		{open && <MenuLinks className="" isMobile={true} closeMobileMenu={closeMobileMenu}/>}
		</div>
	)
}

export default MobileMenu