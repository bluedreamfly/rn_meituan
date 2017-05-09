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
import { Navigation } from 'react-native-navigation';
import iconMap from './fonts/map'
import Home from './app/modules/home'
import NearBy from './app/modules/nearby'
import User from './app/modules/user'
import MyWallet from './app/modules/user/mywallet'

const Walk = ({ navigation}) => {
  return <View style={{flex: 1}}><Text>Walk</Text></View> 
}
const Order = ({ navigation}) => {
  return <View><Text>Walk</Text></View> 
}

function registerScreens() {
	Navigation.registerComponent('meituan.Home', () => Home);
	Navigation.registerComponent('meituan.NearBy', () => NearBy);
	Navigation.registerComponent('meituan.Walk', () => Walk);
	Navigation.registerComponent('meituan.Order', () => Order);
	Navigation.registerComponent('meituan.User', () => User);
  Navigation.registerComponent('user.mywallet', () => MyWallet)
}
registerScreens();
const navigatorStyle = {
	navBarTranslucent: false,
	drawUnderNavBar: false,
	navBarTextColor: '#000',
	navBarButtonColor: '#000',
	statusBarTextColorScheme: 'light',
	// drawUnderTabBar: false,
  drawUnderTabBar: true,
  navBarBackgroundColor: '#f7f7f7',
  // navBarHideOnScroll: true,
  navBarHidden: true,
  // height: 0
};

class App extends Component {
	constructor(props) {
		super(props);
		// iconsLoaded.then(() => {
		// 	this.startApp();
		// });
    this.startApp();
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: '首页',
					screen: 'meituan.Home',
					// icon: iconMap['home'],
					// selectedIcon: iconsMap['ios-film'],
          navigatorStyle
				},
				{
					label: '附近',
					screen: 'meituan.NearBy',
          navigatorStyle
					// icon: iconMap['nearby'],
					// selectedIcon: iconsMap['ios-desktop'],
				},
        {
					label: '我的',
					screen: 'meituan.User',
          style: {
            flex: 1
          },
          navigatorStyle: {
            drawUnderTabBar: true,
          },
					// icon: iconMap['nearby'],
					// selectedIcon: iconsMap['ios-desktop'],
					
				}
			],
      // appStyle: {
      //   tabBarBackgroundColor: '#0f2362',
      //   tabBarButtonColor: '#ffffff',
      //   tabBarSelectedButtonColor: '#63d7cc',
      //   tabFontFamily: 'BioRhyme-Bold',
      //   forceTitlesDisplay: true
      // },
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: '#ccc',
        tabBarTranslucent: false
			}
		});
	}
}
new App()