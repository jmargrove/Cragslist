import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Maps from './Maps';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import CameraComp from './CameraComp.js'
import addLocation from './AddLocation.js'

export const TabNavigation = TabNavigator({
  //if not logged in:
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person-add' : 'ios-person-add-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  },

  Map: {
    screen: Maps,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-map' : 'ios-map-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  // CameraComp: {
  //   screen: CameraComp,
  //   navigationOptions: {
  //     tabBarLabel: 'Camera',
  //     tabBarIcon: ({ tintColor, focused }) => (
  //       <Ionicons
  //         name={focused ? 'ios-camera' : 'ios-camera-outline'}
  //         size={27}
  //         style={{ color: tintColor }}
  //       />
  //     ),
  //   },
  // },
  addNewCrag: {
    screen: addLocation,
    navigationOptions: {
      tabBarLabel: 'Add Location',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-pin' : 'ios-pin-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

export default TabNavigation;
