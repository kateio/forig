import React from 'react';
import './Slider.css';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';


function BtnSlider ({direction, moveSlide}) {
	console.log(direction, moveSlide);
	return (
    	<div onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
    		<img src={direction === "next" ? rightArrow : leftArrow}/>	
    	</div>
	)
}

export default BtnSlider