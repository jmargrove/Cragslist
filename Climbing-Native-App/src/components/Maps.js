import React from 'react';
import { TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Text, View, Image, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';
import Modal from 'react-native-modal';
import { ImagePicker } from 'expo';
import { Font } from 'expo';

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
      modalVisible: false,
      newLocation: {
        name: 'location...',
        description: 'description...',
        image: {uri: null},
      }
    };
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({newLocation: { image: result.uri }});
    }
  };

  _pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
  })};

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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

    Font.loadAsync({
      'Pacifico-Regular': require('./../../assets/Fonts/Pacifico/Pacifico-Regular.ttf'),
    });
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
        <View style={styles.addNewCragBox}>
          <View style={styles.addNewCragButton}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={styles.button}> ADD NEW LOCATION </Text>
            </TouchableOpacity>
          </View>
        </View>
          {this.mapLoad(navigate)}
          <Modal
            animationInTiming={5000}
            animationOutTiming={5000}
            style={styles.modal}
            animationType="slide"
            // transparent={false}
            visible={this.state.modalVisible}
            backdropOpacity={0.5}
          >
            <TouchableOpacity style={styles.modelbody}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <View style={styles.addNewLocationBox}>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}> ADD NEW LOCATION </Text>
                  </View>
                  <View style={styles.nameBox}>
                    <TextInput
                      onChangeText={(text) => this.setState({newLocation: {name: text}})}
                      value={this.state.newLocation.name}
                      style={styles.name}/>
                  </View>
                  <View style={styles.descriptionBox}>
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      onChangeText={(text) => this.setState({newLocation: {description: text}})}
                      value={this.state.newLocation.description}
                      style={styles.description}/>
                  </View>
                  <View style={styles.imageSaveBox}></View>
                  {/* <Text style={styles.backfrom}> ADD NEW LOCATION </Text>
                  <TextInput style={styles.locationName}/>
                  <Text style={styles.backfrom}> DESCRIPTION </Text>
                  <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    style={styles.locatinDescription}
                  />
                  <View style={styles.photoBox}>
                    <TouchableOpacity onPress={e => this._pickImage()}>
                      <View style={styles.photoButton}>
                        <Text style={styles.textForButton}>add photo</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={e => this._takeImage()}>
                      <View style={styles.photoButton}>
                        <Text style={styles.textForButton}>take photo</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.photoButton}>
                        <Text style={styles.textForButton}>save</Text>
                      </View>
                    </TouchableOpacity>
                  </View> */}
              </View>
            </TouchableOpacity>
          </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  titleBox:{
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
    backgroundColor: 'yellow',
  },
  nameBox:{
    flex: 2,
    justifyContent: 'center',
  },
  name:{
    fontSize: 20,
    backgroundColor: 'white',
    margin: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  descriptionBox:{
    flex: 6,
    backgroundColor: 'blue',
  },
  description: {
    flex: 1.5,
    fontSize: 20,
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  imageSaveBox:{
    flex: 3,
    backgroundColor: 'pink',
  },
  addNewLocationBox: {
    backgroundColor: 'orange',
    flex: 1/2,
    marginTop: 80,
    margin: 30,
  },
  modelbody:{
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'column'
  },
////////////// below maybe shite
  backfrom:{
    fontSize: 20,
    textAlign: 'center',
  },
  textForButton:{
    fontSize: 18,
  },
  photoButton: {
    backgroundColor: 'green',
    width: 100,
    alignItems: 'center',
  },
  locatinDescription: {
    flex: 1.5,
    fontSize: 20,
    backgroundColor: 'white',
    margin: 10,

  },
  photoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.5
  },
  locationName:{
    fontSize: 20,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    margin: 5,
  },
  back: {
    flex: 0.5,
    marginBottom: 30,
    backgroundColor: "orange",
  },

  modal: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    margin: 0,
  },
  button: {
    fontSize: 15,
    margin: 0,
  },
  addNewCragButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    flex: .5,
    marginTop: 5,
    marginBottom: 5,
  },
  addNewCragBox: {
    flex: 5,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: 'purple',
  },

  header: {
    flex: 7,
    backgroundColor: 'transparent',
  },
  map: {
    flex: 88,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});


export default Maps;
