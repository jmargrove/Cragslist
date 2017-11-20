import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Profile extends React.Component {
state = {
  yourcrags: [
    {'uri': 'https://www.dropbox.com/s/ayeaxpigk4f3xf4/crags-01.jpg?dl=1', 'id': 1, },
    {'uri': 'https://www.dropbox.com/s/ayeaxpigk4f3xf4/crags-01.jpg?dl=1', 'id': 2, },
    {'uri': 'https://www.dropbox.com/s/ayeaxpigk4f3xf4/crags-01.jpg?dl=1', 'id': 3, },
    {'uri': 'https://www.dropbox.com/s/ayeaxpigk4f3xf4/crags-01.jpg?dl=1', 'id': 4, },
  ],
  dreamcrags: [
    {'uri': 'https://www.dropbox.com/s/g30yqedcj2f3hnw/dreamcrag-01-smallsize.jpg?dl=1', 'id': 1, 'name': 'Yosemite'},
    {'uri': 'https://www.dropbox.com/s/g30yqedcj2f3hnw/dreamcrag-01-smallsize.jpg?dl=1', 'id': 2, 'name': 'Yosemite' },
    {'uri': 'https://www.dropbox.com/s/g30yqedcj2f3hnw/dreamcrag-01-smallsize.jpg?dl=1', 'id': 3, 'name': 'Yosemite'},
    {'uri': 'https://www.dropbox.com/s/g30yqedcj2f3hnw/dreamcrag-01-smallsize.jpg?dl=1', 'id': 4, 'name': 'Yosemite'},
  ]
}
render() {

return (
  <View style={styles.wholepage}>

    <View style={styles.third1}>
      <View style={styles.imagediv} >
        <Image style={styles.backgroundimage} source={{
        uri: 'https://www.dropbox.com/s/lrd5he3tlyto9ef/profile-06.png?dl=1'
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
          <Text>32</Text>
          <Text>4</Text>
          <Text>120</Text>
        </View>
      </View>
  </View>

    <View style={styles.cragsdiv} >
      <Text style={styles.h1}>Your Crags</Text>
      <ScrollView style={styles.list} horizontal={true} scrollEnabled={true} >
            {this.state.yourcrags.map( (el, index) =>(
              <View  key={el.id} style={styles.backgroundimage}>
                <Image key={el.id} style={styles.backgroundimage2} source={{uri: el.uri}} />
              </View>
            ) )}

      </ScrollView>
    </View>
    <View style={styles.wishdiv} >
      <Text style={styles.h1}>Your Dream Destinations</Text>
      <ScrollView style={styles.list} horizontal={true} scrollEnabled={true} >
          {this.state.dreamcrags.map( (el, index) =>(
            <View  key={el.id} style={styles.backgroundimage}>
              <Image key={el.id} style={styles.backgroundimage2} source={{uri: el.uri}} />
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
  },
  profiledata: {
    flex: 2,
    justifyContent: 'space-around',
    marginLeft: 12
  },
  profiledata2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
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
    resizeMode: 'contain',
    flex: 1,
  },
  backgroundimage2: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


export default Profile;
