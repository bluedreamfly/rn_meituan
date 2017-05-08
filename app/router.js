import React from 'react'
import {
  Text
} from 'react-native'

import {
  StackNavigator
} from 'react-navigation'

import User from './modules/user'


const MyWallet = () => {
  return <Text>my MyWallet</Text>
}

MyWallet.navigationOptions = {
  tabBarVisible: false,
  title: '我的钱包'
}

export const UserStack = StackNavigator({
  User: {
    screen: User,
    // navigationOptions: {
    //   header: null
    // }
  },
  MyWallet: {
    path: 'mywallet',
    screen: MyWallet,
    
  },
});



