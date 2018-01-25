import { connect } from 'react-redux';
import ListCharacters from '../../components/ListCharacters';


const mapStateToProps = ({ characters, filters }) => {
	return ({ characters: characters.filter(character =>
		(filters.name === '' || character.name === filters.name) &&
		(filters.causeOfDeath === '' || character.causeOfDeath === filters.causeOfDeath) &&
		(filters.takenBy === '' || character.takenBy === filters.takenBy) &&
		(filters.killedBy === '' || character.killedBy === filters.killedBy)
	)});
};

export default connect(mapStateToProps)(ListCharacters);
