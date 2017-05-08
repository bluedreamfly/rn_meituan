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
  Image,
  TabBarIOS
} from 'react-native';

import {
  TabNavigator
} from 'react-navigation'

import Home from './app/modules/home'
import NearBy from './app/modules/nearby'
import User from './app/modules/user'
import { UserStack } from './app/router'
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
  return <View style={{flex: 1, height: 500}}><Text>Order</Text></View> 
}

Order.navigationOptions = {
  tabBarLabel: '订单',
  tabBarIcon: ({ tintColor }) => (
    <Text style={[styles.tab_icon, { color: tintColor}]}>&#xe622;</Text>
  )
}



UserStack.navigationOptions = {
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
/*class MyApp extends Component {

  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };
  render() {
     return (<TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          badgeColor="black"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <NearBy />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          <Walk />
        </TabBarIOS.Item>
      </TabBarIOS>)
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});*/
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
    screen: UserStack,
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
