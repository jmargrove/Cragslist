import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Welcome from './Welcome';
import Intro from './Intro';
import {Font} from 'expo';




export default class HomeScreen extends React.Component {
   componentDidMount() {
     Font.loadAsync({
      'satisfy': require('../../assets/fonts/Satisfy-Regular.ttf'),
    });
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {/* <View style={styles.slide1}> */}
        <Welcome />
        <Intro />
        <Text color={'black'} fontFamily={'pacifico'}>Hello</Text>
        {/* </View> */}
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'satisfy',
  }
})
