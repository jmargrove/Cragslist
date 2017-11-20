import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OnBoarding from './OnBoarding';
import Maps from './Maps';
import Login from '../containers/Login'
import CameraComp from './CameraComp.js'
import addLocation from './AddLocation.js';
import TabNavigation from './TabNavigation';


export const MainNavigation = StackNavigator(
  {
  Home: { screen: OnBoarding },
  App: { screen: TabNavigation },
  },
  {
    headerMode: 'none',
  },

);

export default MainNavigation;
