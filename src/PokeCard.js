import React, { Component } from 'react';
import './Pokecard.css';

const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// const poke_api = 'https://assests.pokemon.com/assests/cms2/img/pokedex/detail/';

// let padToThree = (number) =>

// 		number <= 999 ? `00${number}`.slice(-3) :
// 		number;

export class PokeCard extends Component {
	render() {
		let imgSrc = `${poke_api}${this.props.id}.png`;
		// let imgSrc = `${poke_api}${padToThree(this.props.id)}.png`;
		return (
			<div className="PokeCard">
				<h1 className="PokeCard-title">{this.props.name}</h1>
				<div className="PokeCard-img">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="PokeCard-data">Type: {this.props.type}</div>
				<div className="PokeCard-data">Exp: {this.props.exp}</div>
			</div>
		);
	}
}

export default PokeCard;
