import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/filters.css';

const filtersSection = ({
	characters,
	filterName,
	filterCauseOfDeath,
	filterTakenBy,
	filterKilledBy,
	filterByTerm }) => {

	const uniqueValues = (value, index, self) => {
		return self.indexOf(value) === index;
	};

	const handleNameFilter = event => {
		filterName(event.target.value);
	};

	const nameOptions = () => {
		const names = [];
		characters.map(character => names.push(character.name));
		return names.filter(uniqueValues).map(name => <option key={ name }>{ name }</option>);
	};

	const handleCauseOfDeath = event => {
		filterCauseOfDeath(event.target.value);
	};

	const causeOfDeathOptions = () => {
		const causeOfDeath = [];
		characters.map(character => causeOfDeath.push(character.causeOfDeath));
		return causeOfDeath.filter(uniqueValues).map(causeOfDeath => <option key={ causeOfDeath }>{ causeOfDeath }</option>);
	};

	const handleTakenBy = event => {
		filterTakenBy(event.target.value);
	};

	const takenByOptions = () => {
		const takenBy = [];
		characters.map(character => takenBy.push(character.takenBy));
		return takenBy.filter(uniqueValues).map(takenBy => <option key={ takenBy }>{ takenBy }</option>);
	};

	const handleKilledBy = event => {
		filterKilledBy(event.target.value);
	};

	const killedByOptions = () => {
		const killedBy = [];
		characters.map(character => killedBy.push(character.killedBy));
		return killedBy.filter(uniqueValues).map(killedBy => <option key={ killedBy }>{ killedBy }</option>);
	};

	const handleSearhTerm = event => {
		filterByTerm(event.target.value);
	};

	return (
		<div className='filters-wrapper'>
			<div>
				<select onChange={ handleNameFilter }>
					<option value=''>&#9660; Name</option>
					{ nameOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleCauseOfDeath }>
					<option value=''> &#9660; Cause of death</option>
					{ causeOfDeathOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleTakenBy }>
					<option value=''> &#9660; Taken by</option>
					{ takenByOptions() }
				</select>
			</div>
			<div>
				<select onChange={ handleKilledBy }>
					<option value=''>&#9660; Killed by</option>
					{ killedByOptions() }
				</select>
			</div>
			<div>
				<input
					type="text"
					onChange={ handleSearhTerm }
					className='searchTerm'
					placeholder="name & description"
				/>
			</div>
		</div>
	);
};

export default filtersSection;

filtersSection.propTypes = {
	characters: PropTypes.array,
	filterName: PropTypes.func,
	filterCauseOfDeath: PropTypes.func,
	filterTakenBy: PropTypes.func,
	filterKilledBy: PropTypes.func,
	filterByTerm: PropTypes.func
};
