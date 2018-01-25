import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/item.css';

const itemCharacter = ({ character, removeCharacter }) => {
	const { causeOfDeath, description, killedBy, name, takenBy, id } = character;

	return (
		<div className='item-wrapper'>
			<div className='item__header'>
				{ name }
			</div>
			<div className="item__body">
				Description: { description }<br />
				Life was taken by { takenBy } who murderered { name } by { killedBy } which cause { causeOfDeath }
			</div>
			<button className='item__button--flat'
				onClick={  () => removeCharacter(id) }>Remove</button>
		</div>
	);
};

itemCharacter.propTypes = {
	character: PropTypes.shape({
		causeOfDeath: PropTypes.string,
		description: PropTypes.string,
		killedBy: PropTypes.string,
		name: PropTypes.string,
		takenBy: PropTypes.string,
	})
};

export default itemCharacter;
