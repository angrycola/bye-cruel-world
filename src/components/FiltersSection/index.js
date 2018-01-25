import React from 'react';
import PropTypes from 'prop-types';

const filtersSection = ({
	characters,
	filterName,
	filterCauseOfDeath,
	filterTakenBy,
	filterKilledBy }) => {

	const handleNameFilter = event => {
		filterName(event.target.value);
	};

	const nameOptions = () => {
		return characters.map(character => <option key={ character.id }>{ character.name }</option>);
	};

	const handleCauseOfDeath = event => {
		filterCauseOfDeath(event.target.value);
	};

	const causeOfDeathOptions = () => {
		return characters.map(character => <option key={ character.id }>{ character.causeOfDeath }</option>);
	};

	const handleTakenBy = event => {
		filterTakenBy(event.target.value);
	};

	const takenByOptions = () => {
		return characters.map(character => <option key={ character.id }>{ character.takenBy }</option>);
	};

	const handleKilledBy = event => {
		filterKilledBy(event.target.value);
	};

	const killedByOptions = () => {
		return characters.map(character => <option key={ character.id }>{ character.killedBy }</option>);
	};

	return (
		<div>
			<div>
				<select onChange={ handleNameFilter }>
					<option value=''>Name</option>
					{ nameOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleCauseOfDeath }>
					<option value=''>Cause of death</option>
					{ causeOfDeathOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleTakenBy }>
					<option value=''>Taken by</option>
					{ takenByOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleKilledBy }>
					<option value=''>Killed by</option>
					{ killedByOptions() }
				</select>
			</div>
		</div>
	);
};

export default filtersSection;

filtersSection.propTypes = {
	characters: PropTypes.array
};
