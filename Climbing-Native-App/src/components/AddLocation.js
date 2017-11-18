import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';




class Login extends React.Component {

  render () {
    return (
      <View style={styles.body}>
        <View style={styles.header}></View>
        <View style={styles.container}>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    backgroundColor: 'purple',
    flex: 93,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 7,
    backgroundColor: 'transparent',
  },
});


export default Login;
