import React from 'react';
import { TextInput, StyleSheet, Text, View, Image, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import MapView from 'react-native-maps';

var markers = [
  {
    latitude: 41.390205,
    longitude: 2.154007,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Climb where?',
      coordinate: {latitude: 41.390205, longitude: 2.154007 }
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( (position) => {
      console.log(position)
      this.setState({
        coordinate: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    })
  }

  mapLoad(){
    return(<MapView
      onPress={e => this.setState({coordinate: e.nativeEvent.coordinate})}
      provider={"google"}
      style={styles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={{
        latitude: this.state.coordinate.latitude,
        longitude: this.state.coordinate.longitude,
        latitudeDelta: 0.0462,
        longitudeDelta: 0.0221,
      }}>
      <MapView.Marker
        // onPress={e => console.log(e.nativeEvent)}
        coordinate={this.state.coordinate}/>
    </MapView>)
  }


  openPhoto(){

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}/>
        <View style={styles.searchBox}>
          <View style={styles.menu}/>
          <View style={styles.go}>
            <Button
              style={styles.button}
              onPress={e => console.log(e)}
              title="TAKE PHOTO"
              color="black"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        {this.mapLoad()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  go: {
    flex: 2,
    margin: 3,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: 'yellow',
  },
  searchBox: {
    flex: 7,
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  header: {
    flex: 3,
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    // flexDirection: 'column',
  },
  map: {
    flex: 90,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',
  },
});


export default Maps;
