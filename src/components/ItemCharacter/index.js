import React from 'react';
import PropTypes from 'prop-types';

const itemCharacter = ({ character, removeCharacter }) => {
	const { causeOfDeath, description, killedBy, name, takenBy, id } = character;

	return (
		<div>
			Name: { name }<br />
			Description: { description }<br />
			Life was taken by { takenBy } who murderered { name } by { killedBy } which cause { causeOfDeath }
			<button onClick={  () => removeCharacter(id) }>Remove</button>
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
