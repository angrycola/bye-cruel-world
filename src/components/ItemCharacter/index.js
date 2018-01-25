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
				{ description }<br />
				Life was taken by <span className='item__details'>{ takenBy }</span> who murderered <span className='item__details'>{ name }</span> by <span className='item__details'>{ killedBy }</span> which cause the death by <span className='item__details'>{ causeOfDeath }</span>.
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
