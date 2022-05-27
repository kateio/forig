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
				<div className="logo"><a href="/">Forig</a></div>
				<Menu/>
				<MobileMenu/>
			</div>
        
	        <div className="footerRow2">
	        	<div >Privacy & Cookies Policy</div>
		        <ul className="social">
			     	<li><a><img src={fb}/></a></li>
			        <li><a><img src={inst}/></a></li>
			        <li><a><img src={twit} width="28px"/></a></li>
			        <li><a><img src={pin}/></a></li>
			        <li><a><img src={google}/></a></li>
		        </ul>
	        </div>
      </div>
	)
}

export default Footer