import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigation from './src/components/Navigation';


export default class App extends React.Component {
  render() {
    return (
            <Navigation />
    );
  }
}

//ADDED BACKGROUND IMAGE AND CONTAINERS TO REGULATE THE BEHAVIOR OF IT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    overflow: 'visible',
    backgroundColor: 'powderblue',

  }
});
