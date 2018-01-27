import React, { Component } from 'react';
import '../../styles/add-form.css';

export default class AddCharacter extends Component {
	state={
		causeOfDeath: '',
		description: '',
		killedBy: '',
		name: '',
		takenBy: '',
		errors: {}
	}

	handleSubmit = event => {
		event.preventDefault();
		const { causeOfDeath, description, killedBy, name, takenBy } = this.state;
		let errors = {};
		const message = 'this field is required';

		if (causeOfDeath === '') errors.causeOfDeath = message;
		if (description === '') errors.description = message;
		if (killedBy === '') errors.killedBy = message;
		if (name === '') errors.name = message;
		if (takenBy === '') errors.takenBy = message;

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;
		if (isValid) {
			this.props.addCharacter({ causeOfDeath, description, killedBy, name, takenBy });
			this.setState({causeOfDeath: '',	description: '', killedBy: '',	name: '',	takenBy: ''})
		}
	}

	handleChange = event => {
		if (!!this.state.errors[event.target.name]) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[event.target.name];
			this.setState({
				[event.target.name]: event.target.value,
				errors
			});
		} else {
			this.setState({ [event.target.name]: event.target.value});
		}
	}

	render () {
		const { causeOfDeath, description, killedBy, name, takenBy, errors } = this.state;
		
		return (
			<div className='add-char-wrapper'>
				<div className='add-char__header'>Add New Character</div>
				<form className='add-character__form' onSubmit={ this.handleSubmit }>
					<input
						onChange={ this.handleChange }
						type='text' name='name'
						className = { errors.name ? 'add_char__input--error' : '' }
						placeholder={errors.name ? errors.name : 'name' }
						value={ name }
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='description'
						value={ description }
						className = { errors.description ? 'add_char__input--error' : '' }
						placeholder={errors.description ? errors.description : 'description' }
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='killedBy'
						value={ killedBy }
						className = { errors.killedBy ? 'add_char__input--error' : '' }
						placeholder={errors.killedBy ? errors.killedBy : 'killed by' }
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='takenBy'
						value={ takenBy }
						className = { errors.takenBy ? 'add_char__input--error' : '' }
						placeholder={errors.takenBy ? errors.takenBy : 'taken by' }
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='causeOfDeath'
						value={ causeOfDeath }
						className = { errors.causeOfDeath ? 'add_char__input--error' : '' }
						placeholder={errors.causeOfDeath ? errors.causeOfDeath : 'cause of death' }
					/><br />
					<button className='add_char__button--flat'>Add</button>
				</form>
			</div>
		);
	}
}
