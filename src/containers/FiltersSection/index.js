import { connect } from 'react-redux';
import FiltersSection from '../../components/FiltersSection';
import { filterName, filterCauseOfDeath, filterTakenBy, filterKilledBy } from '../../actions';


const mapStateToProps = ({ characters }) => ({ characters });

const mapDispatchToProps = dispatch => ({
	filterName: name => dispatch(filterName(name)),
	filterCauseOfDeath: causeOfDeath => dispatch(filterCauseOfDeath(causeOfDeath)),
	filterTakenBy: takenBy => dispatch(filterTakenBy(takenBy)),
	filterKilledBy: killedBy => dispatch(filterKilledBy(killedBy))
});
export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
