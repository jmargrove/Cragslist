import React, { Component }  from 'react';
import { TouchableHighlight,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View, Image, Button, Switch } from 'react-native';
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
import uploadImageAsync from './../functions/aws.js'
import postToMong from './../functions/postToMong.js'
import getDBData from './../functions/getDBData.js'
import { onInitDBrequest } from './../../action.js'
import uuid from 'uuid/v4';
import AWS from 'aws-sdk';

const mapDispatchToProps = (dispatch) => ({
  addLoc: (e) => dispatch(addToCragList(e)),
  viewLoc: (id) => dispatch(viewLocation(id)),
  initLoc: (obj) => dispatch(onInitDBrequest(obj)),
})

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
      imageB64: null,
      imageUri: null,
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
      filterLocationID: null,
      filterLocationObj: null,
      scend: false,
    };
  }

  _takeImage = async () => {
    let takeResult = await ImagePicker.launchCameraAsync({
      base64: true
    });
    if (!takeResult.cancelled) {
      this.setState({ imageB64: takeResult.base64 });
      this.setState({ imageUri: takeResult.uri });
    }
  };

  _pickImage = async (name) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true
    })

    if (!result.cancelled) {
      this.setState({ imageB64: result.base64 });
      this.setState({ imageUri: result.uri });
    }
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

      getDBData()
      .then(resp => resp.json())
      .then(r => this.props.initLoc(r))
       //.then(res => console.log("get request:", res)).catch(e => console.log(e))
    // uploadImageAsync('/Users/jamesmargrove/Desktop/Screen Shot 2017-11-10 at 12.14.55.png')
    // this._pickImage();

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
        <View style={styles.marker}><Ionicons
          name={'ios-pin'}
          size={50}
          style={{color: '#0076ff'}}
        /></View>
      </MapView.Marker>
      {theProps.locations.map(marker => (
        <MapView.Marker
          key={Math.random()}
          identifier={marker.id}
          coordinate={marker.coordinate}>
          <View style={styles.locationPress}>
            <View style={styles.locationMarker}>
              <Ionicons
              name={'ios-ribbon'}
              size={35}
              style={{color: '#0076ff'}}
            /></View>
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
    return (<Image source={{uri: theProps.locationToView.imageUri}}
    style={{ resizeMode: 'cover', flex: 1 }}/>)
  }

  ifInfo(theProps){
    // console.log('the props that are usefull', theProps)
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'white', alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontFamily: 'Helvetica' }}>lat:</Text>
          <Text style={{fontSize: 13, fontFamily: 'Helvetica' }}>long:</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'white', alignItems: 'flex-start'}}>
          <Text style={{fontSize: 30, fontFamily: 'Helvetica', fontWeight: 'normal' }}>{Math.round(theProps.locationToView.coordinate.latitude*100)/100}°</Text>
          <Text style={{fontSize: 30, fontFamily: 'Helvetica', fontWeight: 'normal'}}>{Math.round(theProps.locationToView.coordinate.longitude*100)/100}°</Text>
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
        <TouchableOpacity style={styles.locationsmodalbody}
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
        <View style={styles.statusbar}/>
        <View style={styles.header}>
          <View style={styles.headerbutton}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Ionicons
                name={'ios-add-outline'}
                size={35}
                style={{color: '#0076ff', marginLeft: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 105}}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={styles.addbutton}>  Add Location</Text>
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
            <TouchableOpacity style={styles.modalbody}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <View style={styles.addNewLocationBox}>
                  <View style={styles.statusbar}/>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>Add New Location</Text>
                  </View>
                  <View style={styles.nameBox}>
                    <TextInput
                      onFocus={(text) => this.setState({name: ''})}
                      onChangeText={(text) => this.setState({name: text})}
                      value={this.state.name}
                      style={styles.name}/>
                  </View>
                  <View style={styles.descriptionBox}>
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      onFocus={(text) => this.setState({description: ''})}
                      onChangeText={(text) => this.setState({description: text})}
                      value={this.state.description}
                      style={styles.description}/>
                  </View>
                  <View style={styles.imageBox}>
                    <View style={styles.buttonbox}>
                      <TouchableOpacity onPress={this._pickImage}>
                        <View style={styles.buttons}>
                          <Ionicons name={'ios-images-outline'} size={30} style={{color: '#0076ff', marginRight: 10}} />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonbox}>
                      <TouchableOpacity onPress={this._takeImage}>
                        <View style={styles.buttons}>
                          <Ionicons name={'ios-camera-outline'} size={35} style={{color: '#0076ff', marginRight: 10}} />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Switch value={this.state.scend} onValueChange={() => this.setState({scend: !this.state.scend})}/>
                    </View>
                    <TouchableOpacity onPress={() =>
                      {

                      /// uploading the image to aws s3
                      const ident = randomatic('aA0', 15)
                      uploadImageAsync(this.state.imageB64, ident)
                      .then(e => e.json())
                      .then(url => {
                        const newLoc = {
                          name: this.state.name,
                          description: this.state.description,
                          imageUri: url.imageUri,
                          doneWish: true,
                          coordinate: this.state.coordinate,
                          id: ident,
                          scend: this.state.scend,
                        }

                        postToMong(newLoc).then(e => console.log(e.json()))
                        .catch(e => {console.log(e)});

                        this.setModalVisible(!this.state.modalVisible)
                        /// adding new location to the reducer for rendering
                        this.props.addLoc(newLoc)

                        this.setState({scend: false, name: 'name...', description: 'description...'})

                      })
                      .catch(e => {console.log(e)});
                      /// posting the image info to mongo db
                    }}>
                        <View style={styles.savebuttons}>
                          <Text style={styles.savebuttonText}> Save </Text>
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
  map: {
    flex: 1,
  },
  locationMarker: {
    borderRadius: 20/2,
  },
  modalbody:{
    flex: 1,
  },
  modal: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
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
  locationsmodalbody:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  locationPress: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameBox: {
    height: 51,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#525252',
    backgroundColor: 'white',
    height: 50,
    padding: 10,
  },
  descriptionBox:{
    height: 250,
  },
  description: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#525252',
    height: 230,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageBox:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  addNewLocationBox: {
    backgroundColor: '#e9e9e9',
    flex: 1,
  },
  headerbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0076ff',
    borderRadius: 8,
    height: 60,
    width: 140,
  },
  header: {
    height: 64,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  statusbar: {
    height: 20,
    backgroundColor: 'white',
  },
  addbutton: {
    color: '#0076ff',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  buttonbox: {
    height: 40,
    width: 40,
  },
  savebuttonText: {
    fontWeight: 'bold',
    color: '#0076ff',
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Maps);
