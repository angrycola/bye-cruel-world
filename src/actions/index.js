import C from '../constants';
import data from '../data/index.json';
import shortid from 'shortid';

//CHARACTERS
export const initialData = () => ({ type: C.INDEX_CHARACTERS, payload: data.characters });
export const addCharacter = character => {
	return ({ type: C.ADD_CHARACTER, payload: { ...character, id: shortid.generate() } });
};
export const removeCharacter = id => ({ type: C.REMOVE_CHARACTER, payload: id });
