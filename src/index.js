import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/index.css';

import App from './components/App';
import { store } from './store';
import { initialData } from './actions';


store.dispatch(initialData());

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
