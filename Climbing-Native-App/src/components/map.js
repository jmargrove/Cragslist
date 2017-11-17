import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import MapView from 'react-native-maps';

class Maps extends React.Component {


  render () {
    return (
      <View style={styles.container}>
        <MapView
          provider={"google"}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={true}
          showsCompass={true}
          initialRegion={{
            latitude: 41.390205,
            longitude: 2.154007,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
          <MapView.Marker
            coordinate={{
              latitude: 41.390205,
              longitude: 2.154007}}>
              <View style={styles.radius}>
                <View style={styles.marker}></View>
              </View>
          </MapView.Marker>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  radius:{
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'orange',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
  },
});


export default Maps;
