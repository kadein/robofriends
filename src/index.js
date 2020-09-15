import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root')
                );
registerServiceWorker();
