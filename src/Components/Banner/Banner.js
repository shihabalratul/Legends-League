import React from 'react';
import stadium from '../../Photo/stadium.jpg'

const Banner = () => {
	return (
		<div className="position-relative">
			<img className="w-100" src={stadium} alt="" />
			<h1 style={{ color: "navy" }} className="position-absolute top-50 start-50 translate-middle fw-bold">Legends League</h1>
		</div>
	);
};

export default Banner;