import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import throttle from 'lodash/throttle';

import { loadState, saveState } from './LocalStorage';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
   document.getElementById('root')
 );

 registerServiceWorker();
