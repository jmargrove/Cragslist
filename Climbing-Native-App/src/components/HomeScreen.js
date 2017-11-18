import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
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
  if (this.state.fontLoaded) {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} buttonColor={'white'} dotColor={'white'} activeDotColor={'pink'} autoplay={true}>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://www.dropbox.com/s/2xub9ntzzraayt8/cragslist-homescreen-10.jpg?dl=1'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Welcome to</Text>
            <Text style={styles.logo}>Cragslist</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://www.dropbox.com/s/ljjx7wzy4cpptg7/cragslist-homescreen-02.jpg?dl=1'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Create your climber profile</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://www.dropbox.com/s/yfhslq1yyt0i70n/cragslist-homescreen-05.jpg?dl=1'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Mark your favorite locations</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://www.dropbox.com/s/qwi9vorzwx3t0bb/cragslist-homescreen-04.jpg?dl=1'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Add your dream locations</Text>
          </View>
        </View>
      </Swiper>
    )
  } else {
    return (<View/>)
  }
}
}

const styles = StyleSheet.create({
  wrapper: {
  },
  home: {
    overflow: 'visible',
    backgroundColor: 'transparent',

  },
  hometext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Helvetica',
    textAlign: 'center'
  },
  logo: {
    fontSize: 38,
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Pacifico-Regular',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    backgroundColor: 'transparent',
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
  }
})

export default HomeScreen;
