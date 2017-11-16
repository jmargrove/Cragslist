import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInComponent from './src/containers/SignInComponent.js'
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: "lightblue",
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    button: {
    },
};


export default class App extends React.Component {
  render() {
    return (

        <SignInComponent/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
