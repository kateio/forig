import React from 'react';
import './Footer.css'
import NavLinks from '../NavBar/NavLinks.js'
import Menu from './Menu.js'
import MobileMenu from './MobileMenu.js'

import fb from '../social/fb.svg';
import inst from '../social/inst.svg';
import twit from '../social/twit.svg';
import pin from '../social/pin.svg';
import google from '../social/google.svg';



function Footer ()  {
	return(
		<div className="footer container">
			<div className="footerRow1">
				<div className="logo">Forig</div>
				<Menu/>
				<MobileMenu/>
			</div>
        
	        <div className="footerRow2">
	        	<div >Privacy & Cookies Policy</div>
		        <ul className="social">
			     	<li><img src={fb}/></li>
			        <li><img src={inst}/></li>
			        <li><img src={twit}/></li>
			        <li><img src={pin}/></li>
			        <li><img src={google}/></li>
		        </ul>
	        </div>
      </div>
	)
}

export default Footer