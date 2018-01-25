import { connect } from 'react-redux';
import ListCharacters from '../../components/ListCharacters';


const mapStateToProps = ({ characters, filters }) => {
	return ({ characters: characters.filter(character =>
		(filters.name === '' || character.name === filters.name) &&
		(filters.causeOfDeath === '' || character.causeOfDeath === filters.causeOfDeath) &&
		(filters.takenBy === '' || character.takenBy === filters.takenBy) &&
		(filters.killedBy === '' || character.killedBy === filters.killedBy) &&
		(filters.searchTerm === '' || [ character.description.toLowerCase(), character.name.toLowerCase()]
			.join(' ')
			.includes(filters.searchTerm.toLowerCase()))
	)});
};

export default connect(mapStateToProps)(ListCharacters);
