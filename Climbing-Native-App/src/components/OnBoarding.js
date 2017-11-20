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
              uri: 'https://www.dropbox.com/s/yfhslq1yyt0i70n/cragslist-homescreen-05.jpg?dl=1'
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
              uri: 'https://www.dropbox.com/s/qwi9vorzwx3t0bb/cragslist-homescreen-04.jpg?dl=1'
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
              uri: 'https://www.dropbox.com/s/elti0x8l994cxzu/cragslist-homescreen-01.jpg?dl=1'
            }}/>
          </View>
          <View style={styles.home}>
            <Text style={styles.hometext}>Are you ready?</Text>
            <TouchableOpacity onPress={this.onStart}>
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
    overflow: 'visible',
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'

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
  },
  buttonbody: {
    height: 60,
    width: 160,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    border: 'none',
    borderRadius: 8
  },
  buttontext: {
    textAlign: 'center',
    color: '#4b3dcf',
    fontSize: 20,

  }
})

export default OnBoarding;
