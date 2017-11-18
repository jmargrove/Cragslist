import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Welcome from './Welcome';
import Intro from './Intro';
import { Font } from 'expo';




class HomeScreen extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentWillMount(){
    await Font.loadAsync({
      'Pacifico-Regular': require('./../../assets/Fonts/Pacifico/Pacifico-Regular.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  render() {
    if(this.state.fontLoaded){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {/* <View style={styles.slide1}> */}
        <Welcome />
        <Intro />
        {/* </View> */}
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={{fontFamily:'Pacifico-Regular'}}>And simple</Text>
        </View>
      </Swiper>
    )
  }
  else {
    return (<View/>)
  }}
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
  }
})

export default HomeScreen
