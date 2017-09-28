import React from 'react';
import "whatwg-fetch";

class PokemonList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			pokemonList: []
		}
	}

componentWillMount() {
	fetch('http://pokeapi.co/api/v2/pokemon')
		.then((response) => {
			return response.json();
		}).then(({results}) => {
			this.setState({pokemonList: results})
		})
}
	render(){
		console.log(this.state);
		return (
			<div>
				<h1>Pokemons will be displayed here</h1>
				<div>
					{this.state.pokemonList.map((el, key) => (
						<div key={`pokemon-${key}`}>
							<a href={el.url}>{el.name}</a>
						</div>
					)
				)}
				</div>

			</div>
		);
	}
}

export default PokemonList;
