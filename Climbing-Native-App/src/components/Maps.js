import React from 'react';
import { TextInput, StyleSheet, Text, View, Image, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';


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
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
      image: {uri: null}
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

  static navigationOptions = {
    title: 'Welcome',
  };

  mapLoad(nav){
    return(<MapView
      onPress={e => this.setState({coordinate: e.nativeEvent.coordinate})}
      // provider={PROVIDER_GOOGLE}
      style={styles.map}
      onMarkerPress={(e) => {
                console.log("is this working ")
                nav('CameraComp')
              }}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={{
        latitude: this.state.coordinate.latitude,
        longitude: this.state.coordinate.longitude,
        latitudeDelta: 0.0462,
        longitudeDelta: 0.0221,
      }}>
      <MapView.Marker
        coordinate={this.state.coordinate}>
          <View style={styles.marker}></View>
        </MapView.Marker>
    </MapView>)
  }




  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}/>
        {/* <View style={styles.searchBox}/> */}
        {this.mapLoad(navigate)}
      </View>
    )
  }
}





const styles = StyleSheet.create({
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: 'purple',
  },
  takePhoto: {
    flex: 0.5,
    margin: 3,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seePhoto: {
    flex: 0.5,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBox: {
    flex: 7,
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  header: {
    flex: 3,
    backgroundColor: 'white',
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
