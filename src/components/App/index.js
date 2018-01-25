import React from 'react';

import AddCharacter from '../../containers/AddCharacter';
import ListCharacters from '../../containers/ListCharacters';
import FiltersSection from '../../containers/FiltersSection';

const App = () => (
	<div>
		<FiltersSection />
		<AddCharacter />
		<ListCharacters />
	</div>
);
export default App;
