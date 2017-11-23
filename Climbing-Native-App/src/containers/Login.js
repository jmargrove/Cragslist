import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import { Font } from 'expo';




class Login extends React.Component {
  state = {
    fontLoaded: false,
  };

  onLogin = ()=> {
    this.props.navigation.navigate('Profile')
  }

  async componentWillMount(){
    await Font.loadAsync({
      'Pacifico-Regular': require('./../../assets/Fonts/Pacifico/Pacifico-Regular.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  render () {
    if (this.state.fontLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image style={styles.backgroundimage} source={{
            uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/cragslist-homescreen-06.jpg?dl=1'
          }}/>
        </View>
        <View style={styles.home}>
        <Text style={styles.logo}>Cragslist</Text>
        <View style={styles.boxes}>
          <TextInput style={styles.inputBox}/>
          <TextInput secureTextEntry={true} style={styles.inputBox}/>
        </View>
        </View>
        <View style={styles.buttonscontainer}>
          <TouchableOpacity style={styles.firstbutton} onPress={this.onLogin}>
            <View style={styles.buttonbody}>
               <Text style={styles.buttontext} onPress={this.onLogin}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={e=> console.log(e)}>
            <View style={styles.buttonbody}>
               <Text style={styles.buttontext}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return (<View/>)
  }
  }
}

const styles = StyleSheet.create({
  wrapper: {},
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
    justifyContent: 'center'
  },
  imagecontainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
    justifyContent: 'center',
    padding: 10
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
  inputBox: {
    backgroundColor: 'white',
    height: 37,
    borderRadius: 8,
    fontSize: 18
  },
  boxes: {
    backgroundColor: 'transparent',
    width: 300,
    height: 100,
    justifyContent: 'space-around'
  },
  buttonscontainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});


export default Login;
