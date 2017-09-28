import React from 'react';
import intersection from 'lodash/intersection';

import LinkComponent from '../LinkComponent';

import CARS from '../../utils/cars.js';

const CarsList = ({nameFilter, transmisFilter, priceFilter, typeFilter}) => {
	const carsFiltredByName = Object.keys(CARS)
									.map((key) => ({...CARS[key], key}))
									.filter(({transmition}) => intersection(transmition, transmisFilter).length > 0)
									.filter(({type}) =>
										{	if (typeFilter !== ''){
												return type === typeFilter;}
											else {return type;}})
									.filter(({name}) =>
										{	if (nameFilter !== ''){
											return name.toLowerCase().includes(nameFilter.toLowerCase())}
											else{return name;}})
									.filter(({price}) =>
										{	if (parseInt(priceFilter) !== 0){
											return price <= priceFilter}
											else {return price;}});

	return (
		<div>
			{carsFiltredByName.map(({name, key}) => (
				<div key={`car-${key}`} >
					<LinkComponent name={name} value={`/carspage/${key}`} />
				</div>
			))}
		</div>
	);
};

export default CarsList;
