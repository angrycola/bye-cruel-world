import C from '../constants';
import data from '../data/index.json';
// import shortid from 'shortid';

export const initialData = () => dispatch => {
	return dispatch({ type: C.INDEX_CHARACTERS, payload: data.characters });
};
