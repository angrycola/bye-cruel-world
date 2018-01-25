import React, { Component } from 'react';

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
			<div>
				<form onSubmit={ this.handleSubmit }>
					Name:
					<input
						onChange={ this.handleChange }
						type='text' name='name'
						value={ name }
					/><br />
					Description:
					<input
						onChange={ this.handleChange }
						type='text' name='description'
						value={ description }
					/><br />
					Killed by:
					<input
						onChange={ this.handleChange }
						type='text' name='killedBy'
						value={ killedBy }
					/><br />
					Taken by:
					<input
						onChange={ this.handleChange }
						type='text' name='takenBy'
						value={ takenBy }
					/><br />
					Cause of death:
					<input
						onChange={ this.handleChange }
						type='text' name='causeOfDeath'
						value={ causeOfDeath }
					/>
					<button disabled={ 0 }>Send</button>
				</form>
			</div>
		);
	}
}
