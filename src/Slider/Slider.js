import React, { useState } from 'react';
import './Slider.css';
import arrSlider from './arrSlider.js';
import BtnSlider from './btnSlider.js';

function Slider() {

	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== arrSlider.length) {
			setSlideIndex(slideIndex + 1)
		} 
		else if (slideIndex === arrSlider.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} 
		else if (slideIndex === 1) {
			setSlideIndex(arrSlider.length)
		}
	}

	const moveDot = index => {
		setSlideIndex(index);
	}

	return (
	 <div className="container">
		 <div className="container-slider">
		 	{arrSlider.map((obj, index) => {
		 		return (
		 			<div key={obj.id} className={slideIndex === index + 1 ? "slide active" : "slide"}>
		 				<img src={obj.image}/>
		 			</div>
		 		);
		 	})}
		 	<BtnSlider moveSlide={nextSlide} direction={"next"}/>
		 	<BtnSlider moveSlide={prevSlide} direction={"prev"}/>
		 </div>

		 <div className="container-dots">
		 {Array.from({length: 5}).map((item,index) => (
		 	<div onClick={() => moveDot(index+1)} className={slideIndex === index+1 ? "dot active-dot" : "dot"}></div>

		 ))}
		 </div>
	 </div>
	);

}

export default Slider