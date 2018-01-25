import { combineReducers } from 'redux';
import characters from './characters';
import filters from './filters';

export default combineReducers({
	characters, filters
});
