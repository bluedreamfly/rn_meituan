/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  Image
} from 'react-native';

import {
  TabNavigator
} from 'react-navigation'

import Home from './app/modules/home'
import NearBy from './app/modules/nearby'
import User from './app/modules/user'

Home.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe79d;</Text>
  )
}
const MyNotificationsScreen = ({ navigation }) => {
  return <View><Text>hello world</Text></View>
}


NearBy.navigationOptions = {
  tabBarLabel: '附近',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe770;</Text>
  )
}
const Walk = ({ navigation}) => {
  return <View><Text>Walk</Text></View> 
}

Walk.navigationOptions = {
  tabBarLabel: '逛一逛',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe629;</Text>
  )
}

const Order = ({ navigation}) => {
  return <View><Text>Order</Text></View> 
}

Order.navigationOptions = {
  tabBarLabel: '订单',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe622;</Text>
  )
}



User.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe609;</Text>
  )
}

MyNotificationsScreen.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe770;</Text>
  )
}

const MyApp = TabNavigator({
  Home: {
    screen: Home
  },
  Nearby: {
    screen: NearBy
  },
  Walk: {
    screen: Walk,
  },
  Order: {
    screen: Order,
  },
  Me: {
    screen: User,
  },
}, {
  initialRouteName: 'Me',
  tabBarOptions: {
    activeTintColor: '#20C0AC',
    labelStyle: {
      fontSize: 14
    },

    style: {
      height: 50,
      paddingBottom: 2,
      borderTopWidth: 1,
      borderTopColor: '#ccc'
    }
  },
});


const styles = StyleSheet.create({
  text: {
    fontFamily: 'iconfont',
    color: '#fff'
  },
  tab_icon: {
    fontFamily: 'iconfont', 
    fontSize: 20
  }
});

AppRegistry.registerComponent('Meituan', () => MyApp);
