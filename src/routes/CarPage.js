import React from 'react';

import CARS from '../utils/cars.js';

export default ({params: {carId}, location: {query}}) => {
	return (
		<div>
			<li><img src={CARS[carId].img} /></li>
			<li><span>Name:</span>{CARS[carId].name}</li>
			<li><span>Price:</span>{CARS[carId].price}$</li>
			<li><span>Description:</span>{CARS[carId].description}</li>
			<li>{CARS[carId].transmition.includes('automat') && 'автомат'} </li>
			<li>{CARS[carId].transmition.includes('mechanic') && 'механика'} </li>
		</div>
	);
}
