import React, { Component }  from 'react';
import { TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Text, View, Image, Button } from 'react-native';
import { Navigator, NativeModules } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';
import Modal from 'react-native-modal';
import { ImagePicker } from 'expo';
import { addToCragList } from './../../action.js'
import { connect } from 'react-redux';
import randomatic from 'randomatic';
import { viewLocation } from './../../action.js'

const mapDispatchToProps = (dispatch) => ({
  addLoc: (e) => dispatch(addToCragList(e)),
  viewLoc: (id) => dispatch(viewLocation(id))
})
//

const mapStateToProps = (state) => ({
  locations: state.locations,
  newLocation: state.newLocation,
  locationToView: state.locationToView,
})


class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalVisibleView: false,
      name: 'location...',
      description: 'description...',
      image: null,
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
      filterLocationID: null,
      filterLocationObj: null,
    };
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({});
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({})
  this.setState({ image: result.uri });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleView(visible) {
    this.setState({modalVisibleView: visible});
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({
        coordinate: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          }
        })
      })
    }

  static navigationOptions = {
    title: 'Welcome',
  };

  mapLoad(theProps){
    return(<MapView
      onPress={e => {
        this.setState({coordinate: e.nativeEvent.coordinate});
        }
      }
      // provider={"google"}
      style={styles.map}
      showsUserLocation={true}
      showsMyLocati
      onButton={true}
      onMarkerPress={e => {
        const locObj = this.filterForID(theProps, e.nativeEvent.id)[0]
        this.props.viewLoc(locObj);
        this.setModalVisibleView(!this.state.modalVisibleView)
      }}
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
      {theProps.locations.map(marker => (
        <MapView.Marker
          key={Math.random()}
          identifier={marker.id}
          pinColor={'blue'}
          coordinate={marker.coordinate}>
          <View style={styles.locationPress}>
            <View style={styles.locationMarker}></View>
          </View>
        </MapView.Marker>
      ))}
    </MapView>)
  }

  filterForID(theProps, theID){
      return (theProps.locations.filter(marks => {
        return marks.id === theID
      }))
    }

  ifImage(theProps){
    return (<Image source={{uri: theProps.locationToView.image}}
    style={{ resizeMode: 'cover', flex: 1 }}/>)
  }

  ifInfo(theProps){
    console.log('the props that are usefull', theProps)
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'red'}}>
          <Text style={{fontSize: 20, fontFamily: 'Arial', fontStyle: 'italic'}}>lat:{Math.round(theProps.locationToView.coordinate.latitude*100)/100}°</Text>
          <Text style={{fontSize: 20, fontFamily: 'Arial', fontStyle: 'italic'}}>lng:{Math.round(theProps.locationToView.coordinate.longitude*100)/100}°</Text>
        </View>
        {/* <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text>{theProps.locationToView.name}</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'space-around', flexDirection: 'row'}}>
          <View>
            <Text>N: 57</Text>
          </View>
          <View> </View>
        </View> */}
        <View style={{flex: 3, backgroundColor: 'yellow'}}>

        </View>
      </View>
    )
  }

  viewLocation(theProps){
    return(
      <Modal
        animationInTiming={5000}
        animationOutTiming={5000}
        style={styles.modal}
        animationType="slide"
        visible={this.state.modalVisibleView}
        backdropOpacity={0.5}
      >
        <TouchableOpacity style={styles.locationsmodelbody}
          onPress={() => {
            this.setModalVisibleView(!this.state.modalVisibleView)
          }}>
          <View style={styles.viewLocationBox}>
            <View style={styles.imagePartition1}>
                {this.ifImage(theProps)}
            </View>
            <View style={styles.imagePartition2}>
              {this.ifInfo(theProps)}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }



  render () {
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
          {this.mapLoad(this.props)}
          {this.viewLocation(this.props)}
          <Modal
            animationInTiming={5000}
            animationOutTiming={5000}
            style={styles.modal}
            animationType="slide"
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
                      onPress={(text) => this.setState({name: ''})}
                      onChangeText={(text) => this.setState({name: text})}
                      value={this.state.name}
                      style={styles.name}/>
                  </View>
                  <View style={styles.descriptionBox}>
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      onPress={(text) => this.setState({description: ''})}
                      onChangeText={(text) => this.setState({description: text})}
                      value={this.state.description}
                      style={styles.description}/>
                  </View>
                  <View style={styles.imageBox}>
                    <View style={styles.buttonbox}>
                      <TouchableOpacity onPress={this._pickImage}>
                        <View style={styles.buttons}>
                          <Text style={styles.buttonText}>load photo</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonbox}>
                      <TouchableOpacity onPress={this._takeImage}>
                        <View style={styles.buttons}>
                          <Text style={styles.buttonText}>take photo</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                    <View style={styles.savebox}>
                    <TouchableOpacity onPress={() =>
                      {
                      this.setModalVisible(!this.state.modalVisible)
                      this.props.addLoc({
                      name: this.state.name,
                      description: this.state.description,
                      image: this.state.image,
                      coordinate: this.state.coordinate,
                      id: randomatic('aA0', 15),
                    })}}>
                        <View style={styles.savebuttons}>
                          <Text style={styles.savebuttonText}>save new location</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                </View>
            </TouchableOpacity>
          </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  imagePartition1: {
    flex: 4,
    backgroundColor: 'green',
  },
  imagePartition2: {
    flex: 6,
    backgroundColor: 'red',
  },
  viewLocationBox: {
    flex: 1/5,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  locationsmodelbody:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
  /////////////////////////
  locationPress: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationMarker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    backgroundColor: 'yellow',
  },
  savebuttons:{
    backgroundColor: "purple"
  },
  savebuttonText:{
    fontSize: 22,
  },
  savebox:{
    flex: 1.5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox:{
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
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
  imageBox:{
    flex: 3,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  buttonbox:{
    flex:1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons:{
    backgroundColor: 'orange',

  },
  buttonText: {
    fontSize: 20,
  },
  addNewLocationBox: {
    backgroundColor: 'orange',
    flex: 0.5,
    marginTop: 80,
    margin: 30,
    borderWidth: 0.5,
  },
  modelbody:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
////////////// below maybe shite
  modal: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
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
    flex: 7,
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
    flex: 3,
    backgroundColor: 'orange',
  },
  map: {
    flex: 97,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Maps);
// export default (Maps);
