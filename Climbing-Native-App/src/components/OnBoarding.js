import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

class OnBoarding extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentWillMount(){
    await Font.loadAsync({
      'Pacifico-Regular': require('./../../assets/Fonts/Pacifico/Pacifico-Regular.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  onStart = ()=> {
    this.props.navigation.navigate('App')
  }

render() {
  if (this.state.fontLoaded) {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} dotColor={'#8c8c8c'} activeDotColor={'white'} autoplay={false}>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-10.jpg'
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
              uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-02.jpg'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Create your climber profile</Text>
            <Ionicons
              name={'ios-person'}
              size={50}
              style={{ color: 'white', marginTop: 20 }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-05.jpg'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Keep track of your crags climbed</Text>
            <Ionicons
              name={'ios-pin'}
              size={50}
              style={{ color: 'white', marginTop: 20 }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-04.jpg'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Add your dream locations</Text>
            <Ionicons
              name={'ios-heart'}
              size={50}
              style={{ color: 'white', marginTop: 20 }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image style={styles.backgroundimage} source={{
              uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-11.jpg'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Are you ready?</Text>
            <TouchableOpacity onPress={this.onStart} >
              <View style={styles.buttonbody}>
                 <Text style={styles.buttontext}>Get Started</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'

  },
  hometext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Helvetica',
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
  },
  buttonbody: {
    height: 60,
    width: 140,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default OnBoarding;
