import React, { Component } from 'react';
import './App.css';
import Router from '../Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontFamily: 'Exo 2',
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <div className="App">
          <Router />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
