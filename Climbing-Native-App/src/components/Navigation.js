import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Login from '../containers/Login';
// import Maps from './Maps';

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
  }
  // Maps: {
  //   screen: Maps,
  //   navigationOptions: {
  //     tabBarLabel: 'Maps',
  //     tabBarIcon: ({ tintColor, focused }) => (
  //       <Ionicons
  //         name={focused ? 'ios-pin' : 'ios-pin-outline'}
  //         size={27}
  //         style={{ color: tintColor }}
  //       />
  //     ),
  //   },
  // }

});

export default Navigation;
