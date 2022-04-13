import React, { useState } from 'react'
import './Slider.css'
import arrSlider from './arrSlider.js'

function Slider() {

	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== arrSlider.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === arrSlider.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(arrSlider.length)
		}
	}

	return (
	 <div>
	 	{arrSlider.map((obj, index) => {
	 		return (
	 			<div key={obj.id}>
	 				<img src={obj.image}/>
	 			</div>
	 		);

	 	})}

	 </div>
	);

}

export default Slider