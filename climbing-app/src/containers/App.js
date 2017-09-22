import React, { Component } from 'react';
import './App.css';
import Router from '../Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// const muiTheme = getMuiTheme({
//   fontFamily: 'Oswald',
//   palette:{
//     pickerHeaderColor:"#C0CA33",
//     primary1Color: "#C0CA33",
//     primary2Color: "#C0CA33",
//   }
// })

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
        </ul>

        <hr/>

        <Router />
      </div>
    );
  }
}

export default App;
