import React from 'react';
import PropTypes from 'prop-types';

import AddCharacter from '../../containers/AddCharacter';

import ItemCharacter from '../../containers/ItemCharacter';

const listCharacters = ({ characters }) => {
	const renderList = () => {
		return characters.map(character => <ItemCharacter key={ character.id } character={ character } />);
	};
	return <div className='list-wrapper'>
		{ renderList() }
		<div><AddCharacter/></div>
	</div>;
};

export default listCharacters;

listCharacters.propTypes = {
	characters: PropTypes.array
};
