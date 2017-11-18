import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Maps from './Maps';
import Login from '../containers/Login'
import CameraComp from './CameraComp.js'


export const Navigation = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Login: {
    screen: Login,
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
          name={focused ? 'ios-locate' : 'ios-locate-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  CameraComp: {
    screen: CameraComp,
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-camera' : 'ios-camera-outline'}
          size={27}
          style={{ color: tintColor }}
        />
      ),
    },
  }


});

export default Navigation;
