import React, { Component } from 'react';
import './Form.css';
import Select from 'react-select';
import axios from 'axios';

export class Form extends Component {
	state = {
		countries : [],
		states    : [],
		cities    : [],
		isloaded  : false
	};

	fetchCountries = async () => {
		const url = 'https://business.tailorgang.io/clothier_apis/countries';
		let response = await axios.get(url);
		let data = response.data;

		const countries = [];
		for (let r of data) {
			countries.push({
				value : r.code,
				label : r.name
			});
		}
		this.setState({ countries, isloaded: true });
	};

	fetchStates = async (country) => {
		const url = 'https://business.tailorgang.io/clothier_apis/statesByName/' + country;
		let response = await axios.get(url);
		let data = response.data;

		const states = [];
		for (let r of data) {
			states.push({
				value : r.name,
				label : r.name
			});
		}
		this.setState({ states });
	};

	fetchLga = async (state) => {
		const url = 'https://business.tailorgang.io/clothier_apis/state_cities/' + state;
		let response = await axios.get(url);
		let data = response.data;

		let cities = [];
		for (let r of data) {
			cities.push({
				value : r.name,
				label : r.name
			});
		}
		this.setState({ cities });
	};
	async componentDidMount() {
		this.fetchCountries();
	}

	handleCountryChange = ({ value }) => {
		this.fetchStates(value);
	};

	handleStateChange = ({ value }) => {
		this.fetchLga(value);
	};

	render() {
		const { countries, states, cities } = this.state;
		return (
			<div>
				{
					this.state.isloaded ? <div>
						<form className="form">
							<Select
								id="form"
								onChange={this.handleCountryChange}
								placeholder="Country"
								options={countries}
							/>
							<Select id="form" onChange={this.handleStateChange} placeholder="State" options={states} />
							<Select id="form" placeholder="L.G.A" options={cities} />
						</form>
					</div> :
					<h1>Loading....</h1>}
			</div>
		);
	}
}

export default Form;
