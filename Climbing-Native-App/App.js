import React from 'react';
import MainNavigation from './src/components/MainNavigation';
import { Provider } from 'react-redux';
import store from './store';




export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    );
  }
}
