import axios from 'axios';
import shortid from 'shortid';

import C from '../constants';
import data from '../data/index.json';

const URL = 'http://fakeapiwontwork.com/';

//POST REQUEST
const sendData = data => {
	axios.post(`${ URL }/api/characters`, { data })
		.then(res => console.log('Response', res))
		.catch(err => console.log('Errorss', err)
	);
}

//CHARACTERS
export const initialData = () => ({ type: C.INDEX_CHARACTERS, payload: data.characters });
export const addCharacter = (character) => {
	const payload = { ...character, id: shortid.generate() }
	sendData(payload);
	return ({ type: C.ADD_CHARACTER, payload });
};
export const removeCharacter = id => ({ type: C.REMOVE_CHARACTER, payload: id });

//FILTERS
export const filterName = name => ({ type: C.FILTER_NAME, payload: name });
export const filterCauseOfDeath = causeOfDeath => ({ type: C.FILTER_CAUSE_OF_DEATH, payload: causeOfDeath });
export const filterTakenBy = takenBy => ({ type: C.FILTER_TAKEN_BY, payload: takenBy });
export const filterKilledBy = killedBy => ({ type: C.FILTER_KILLED_BY, payload: killedBy });
export const filterByTerm = searchTerm => ({ type: C.FILTER_BY_TERM, payload: searchTerm });
