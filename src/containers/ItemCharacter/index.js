import { connect } from 'react-redux';
import ItemCharacter from '../../components/ItemCharacter';
import { removeCharacter }  from '../../actions';

const mapDispatchToProps = dispatch => ({	removeCharacter: id => dispatch(removeCharacter(id)) });

export default connect(null, mapDispatchToProps)(ItemCharacter);
