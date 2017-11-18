import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';




class Login extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage} source={{uri: "https://s3-eu-west-1.amazonaws.com/climbing-kd/custom/rocks.png"}}>
          <View style={styles.boxes}>
            <View style={styles.TitleBox}>
              <Text style={styles.Title}>Login</Text>
            </View>
          </View>
          <View style={styles.boxes}>
            <TextInput style={styles.inputBox}/>
            <TextInput style={styles.inputBox}/>
          </View>
          <View style={styles.buttoncontainer}>
            <Button
              onPress={e=> console.log(e)}
              title="Login"
              style={styles.button}
            />
            <Button
              onPress={e=> console.log(e)}
              title="Signup"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    color: 'pink',
    fontSize: 30,
  },
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
  boxes: {
    backgroundColor: 'transparent',
    width: 300,
    height: 100,
    borderColor: 'lightblue',
    justifyContent: 'space-around',
  },
  TitleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  Title: {
    fontSize: 50,
    color: 'darkblue'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 25,
  },
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
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});


export default Login;
