import React from 'react';

import CarsList from '../components/CarsList';
import CarFiltersComponent from '../components/CarFiltersComponent';
import theme from './CarsPage.less'

class CarsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nameFilter: '',
			transmissions: [],
			priceFilter: 0,
			typeFilter: ''
		}
	}

	render() {

		return (
			<div className={theme.container}>
				<div className={theme.carsFilters}>
					<h1 className={theme.h1}>FILTERS</h1>

					<CarFiltersComponent
						changeTransmission={(val) => {
							this.setState({transmissions: val}); }}
						onChangeNameFilter={(value) => {
							this.setState({nameFilter: value}); }}
						onChangePriceFilter={(value) => {
							this.setState({priceFilter: value}); }}
						onChangeTypeFilter={(value) => {
							this.setState({typeFilter: value}); }}
					/>

				</div>
				<div className={theme.carsList}>
					<h1 className={theme.h1}>CARLIST</h1>
					<CarsList transmisFilter={this.state.transmissions}
										nameFilter={this.state.nameFilter}
										priceFilter={this.state.priceFilter}
										typeFilter={this.state.typeFilter}
					/>
				</div>
				<div className={theme.carsResult}>
					<h1 className={theme.h1}>SEARCH RESULT</h1>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default CarsPage;
