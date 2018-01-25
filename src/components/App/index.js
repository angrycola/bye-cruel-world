import React from 'react';

import ListCharacters from '../../containers/ListCharacters';
import FiltersSection from '../../containers/FiltersSection';

const App = () => (
	<div className='root-wrapper'>
		<FiltersSection />
		<ListCharacters />
	</div>
);
export default App;
