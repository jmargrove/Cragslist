import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  locations: state.locations,
  newLocation: state.newLocation,
  locationToView: state.locationToView,
})


class Profile extends React.Component {
state = {
  yourcrags: [
    {'uri': 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/crags-01.jpg?dl=1', 'id': 1, },
    {'uri': 'https://www.dropbox.com/s/ji7zagapczrvtzs/crags-02.jpg?dl=1', 'id': 2, },
    {'uri': 'https://www.dropbox.com/s/5y5sgps2z5x3nr2/crags-03.jpg?dl=1', 'id': 3, },
    {'uri': 'https://www.dropbox.com/s/q2veumxjvupf6o0/crags-04.jpg?dl=1', 'id': 4, },
    {'uri': 'https://www.dropbox.com/s/0sn1hbsj3hthvrn/crags-05.jpg?dl=1', 'id': 5, },
  ],
  dreamcrags: [
    {'uri': 'https://www.dropbox.com/s/g30yqedcj2f3hnw/dreamcrag-01-smallsize.jpg?dl=1', 'id': 1, 'name': 'Yosemite'},
    {'uri': 'https://www.dropbox.com/s/1ylk60rmlu2j173/dreamcrag-03.jpg?dl=1', 'id': 2, 'name': 'Yosemite' },
    {'uri': 'https://www.dropbox.com/s/e9tpj7lvino4z1f/dreamcrag-02.jpg?dl=1', 'id': 3, 'name': 'Yosemite'},
    {'uri': 'https://www.dropbox.com/s/vzp6g86ckprgbhu/dreamcrag-04.jpg?dl=1', 'id': 4, 'name': 'Yosemite'},
    {'uri': 'https://www.dropbox.com/s/soqgmvzzpw3sg7m/dreamcrag-05.jpg?dl=1', 'id': 5, 'name': 'Yosemite'},
  ]
}

render() {
  console.log("the props.........", (this.props.locations.filter(el => {
    return el.scend === true
  })))
return (
  <View style={styles.wholepage}>

    <View style={styles.third1}>
      <View style={styles.imagediv} >
        <Image style={styles.backgroundimage} source={{
        uri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/static-photos/profile-06.png'
      }}/>
      </View>
      <View style={styles.profiledata} >
        <View>
          <Text style={styles.h1} >Your Profile</Text>
          <Text style={styles.h2}>@hillaryjakes</Text>
        </View>
        <View style={styles.profiledata2}>
          <Ionicons
            name={ 'ios-pin' }
            size={22}
            style={{ color: 'black' }}
          />
          <Ionicons
            name={'ios-heart'}
            size={22}
            style={{ color: 'black' }}
          />
          <Ionicons
            name={'ios-people'}
            size={22}
            style={{ color: 'black' }}
          />

        </View>
        <View style={styles.profiledata2}>
          <Text>{(this.props.locations.filter(el => {
            return el.scend === true
          })).length}</Text>
          <Text style={{textAlign: 'center'}}>{(this.props.locations.filter(el => {
            return el.scend === false
          })).length}</Text>
          <Text>120</Text>
        </View>

      </View>
  </View>

  <View style={styles.line}>
  </View>

    <View style={styles.cragsdiv} >
      <Text style={styles.h1}> Scend </Text>
      <ScrollView style={styles.list} horizontal={true} scrollEnabled={true} >
            {(this.props.locations.filter(el => {
              return el.scend === true
              })).map( (el, index) =>(

              <View  key={el.id} style={styles.backgroundimage}>
                <Image key={el.id} style={styles.backgroundimage2} source={{uri: el.imageUri}} />
              </View>
            ) )}

      </ScrollView>
    </View>

    <View style={styles.wishdiv} >
      <Text style={styles.h1}>Wish List</Text>
      <ScrollView style={styles.list} horizontal={true} scrollEnabled={true} >
          {(this.props.locations.filter(el => {
              return el.scend === false
              })).map( (el, index) =>(
            <View  key={el.id} style={styles.backgroundimage}>
              <Image key={el.id} style={styles.backgroundimage2} source={{uri: el.imageUri}} />
            </View>
          ) )}
      </ScrollView>
    </View>

  </View>

  )

}
}

const styles = StyleSheet.create({
  wholepage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  third1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingLeft: 10,

  },
  imagediv: {
    flex: 1,
    width: 120,
    height: 120,
  },
  profiledata: {
    flex: 2,
    justifyContent: 'space-around',
    marginLeft: 12
  },
  profiledata2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  cragsdiv: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 12,
  },
  wishdiv: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 12,
  },
  backgroundimage: {
    flex: 1,
  },
  backgroundimage2: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginRight: 10
  },
  h1 : {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6
  },
  h2 : {
    fontSize: 14,
    marginBottom: 12
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  line : {
    height: 1,
    backgroundColor: '#e9e9e9',
    width:'100%',
    margin: 'auto',
    marginBottom: 30,
  }
});


export default connect(mapStateToProps, null)(Profile);
