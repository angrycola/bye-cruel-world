import { connect } from 'react-redux';
import AddCharacter from '../../components/AddCharacter';
import { addCharacter } from '../../actions';

const mapDispatchToProps = dispatch => ({	addCharacter: character => dispatch(addCharacter(character)) });
export default connect(null, mapDispatchToProps)(AddCharacter);
