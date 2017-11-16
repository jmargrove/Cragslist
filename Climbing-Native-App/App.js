import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInComponent from './containers/SignInComponent.js'


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
