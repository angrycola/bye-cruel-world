import C from '../constants';

export default function(state=[], action) {
	switch (action.type) {
	case C.INDEX_CHARACTERS:
		return action.payload;
	case C.ADD_CHARACTER:
		return [...state, action.payload ];
	default: return state;
	}
}
