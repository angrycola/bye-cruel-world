import C from '../constants';

const filter = {
	name: '',
	takenBy: '',
	killedBy: '',
	causeOfDeath: '',
	searchTerm: ''
};

export default function(state=filter, action) {
	switch (action.type) {
	case C.FILTER_NAME:
		return { ...state, name: action.payload };
	case C.FILTER_TAKEN_BY:
		return { ...state, takenBy: action.payload };
	case C.FILTER_KILLED_BY:
		return { ...state, killedBy: action.payload };
	case C.FILTER_CAUSE_OF_DEATH:
		return { ...state, causeOfDeath: action.payload };
	case C.FILTER_BY_TERM:
		return { ...state, searchTerm: action.payload };
	default: return state;
	}
}
