import { connect } from 'react-redux';
import ListCharacters from '../../components/ListCharacters';

const mapStateToProps = ({ characters }) => ({ characters });

export default connect(mapStateToProps)(ListCharacters);
