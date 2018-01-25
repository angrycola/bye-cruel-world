import C from '../constants';
import data from '../data/index.json';
import shortid from 'shortid';

//CHARACTERS
export const initialData = () => ({ type: C.INDEX_CHARACTERS, payload: data.characters });
export const addCharacter = character => {
	return ({ type: C.ADD_CHARACTER, payload: { ...character, id: shortid.generate() } });
};
export const removeCharacter = id => ({ type: C.REMOVE_CHARACTER, payload: id });

//FILTERS
export const filterName = name => ({ type: C.FILTER_NAME, payload: name });
export const filterCauseOfDeath = causeOfDeath => ({ type: C.FILTER_CAUSE_OF_DEATH, payload: causeOfDeath });
export const filterTakenBy = takenBy => ({ type: C.FILTER_TAKEN_BY, payload: takenBy });
export const filterKilledBy = killedBy => ({ type: C.FILTER_KILLED_BY, payload: killedBy });
