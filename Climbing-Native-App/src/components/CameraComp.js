import React, { Component } from 'react';
import { AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  View} from 'react-native';

import { ImagePicker } from 'expo';



export default class CameraComp extends React.Component {
  state = {
    image: null,
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  //
  componentShouldUpdate(){
    this._takeImage()
  }

  render() {
    let { image } = this.state;

    return (

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/* 
      <Button
        title="take a photo"
        onPress={this._takeImage}
      />
      {image &&
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
    );
  }


}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    }
  });
