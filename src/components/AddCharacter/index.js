import React, { Component } from 'react';
import '../../styles/add-form.css';

export default class AddCharacter extends Component {
	state={
		causeOfDeath: '',
		description: '',
		killedBy: '',
		name: '',
		takenBy: ''
	}

	handleSubmit = event => {
		event.preventDefault();
		const { causeOfDeath, description, killedBy, name, takenBy } = this.state;
		if (causeOfDeath !== '' && description !== '' && killedBy !== '' && name !== '' && takenBy !== '') {
			this.props.addCharacter({ causeOfDeath, description, killedBy, name, takenBy });
		}
		this.setState({	causeOfDeath: '',	description: '', killedBy: '',	name: '',	takenBy: ''})
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render () {
		const { causeOfDeath, description, killedBy, name, takenBy } = this.state;

		return (
			<div className='add-char-wrapper'>
				<div className='add-char__header'>Add New Character</div>
				<form className='add-character__form' onSubmit={ this.handleSubmit }>
					<input
						onChange={ this.handleChange }
						type='text' name='name'
						placeholder='name'
						value={ name }
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='description'
						value={ description }
						placeholder='description'
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='killedBy'
						value={ killedBy }
						placeholder='killed by'
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='takenBy'
						value={ takenBy }
						placeholder='taken by'
					/><br />
					<input
						onChange={ this.handleChange }
						type='text' name='causeOfDeath'
						value={ causeOfDeath }
						placeholder='cause of death'
					/><br />
					<button className='add_char__button--flat' disabled={ 0 }>Add</button>
				</form>
			</div>
		);
	}
}
