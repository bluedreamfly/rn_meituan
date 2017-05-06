import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'

const linkList = {
  first: [
    {icon: '&#xe639;', color: '#fd9527', title: '我的钱包', after: '办信用卡'},
    {icon: '&#xe65f;', color: '#fa9528', title: '余额', after: '0.00'},
    {icon: '&#xe601;', color: '#8b96fc', title: '抵用券', after: '0'},
    {icon: '&#xe628;', color: '#8b96fc', title: '卡包', after: '0'},
  ]
}

export default class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity><Text>设置</Text></TouchableOpacity>
          <TouchableOpacity><Text>通知</Text></TouchableOpacity>
        </View>
        <Animated.ScrollView >
          <Header />
          {CardList({list: linkList.first})}
          {CardList({list: []})}
          {CardList({list: []})}
        </Animated.ScrollView>
      </View>
    )
  }
}

const Header = () => {
  return <TouchableOpacity style={styles.header}>
    <View style={styles.header_wrap}>
      <View style={styles.header_avator}>
        <Image 
          source={{uri: 'http://p1.meituan.net/100.0/deal/caffa7440cac3a82555ec5791ace77ef21445.jpg'}} 
          style={{width: 50, height: 50, borderRadius: 25}}
        />
      </View>
      <View >
        <Text style={[styles.username, styles.txt]}>ajb83129066</Text>
        <Text style={[styles.tip, styles.txt]}>个人信息&#xe644;</Text>
      </View>
    </View>
  </TouchableOpacity>
}

const CardItem = ({data: {icon, title, after, color}}) => {
  return <View>
    <Text><Text style={[{color: color}, styles.txt]}>{icon}</Text>{title}</Text>
    <Text style={styles.txt}>{after} &#xe644;</Text>
  </View>
}

const CardList = ({list}) => {
  return list.map(item => {
    return <CardItem data={item}/>
  })
}

const styles = StyleSheet.create({
  constainer: {
    // flex: 1
  },
  header: {
    height: 150,
    backgroundColor: '#21c0ad',
    paddingLeft: 10
  },
  header_wrap: {
    flexDirection: 'row',
    marginTop: 68,
    alignItems: 'center'
  },
  header_avator: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#58d2c5',
    marginRight: 10
  },
  username: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 16
  },
  tip: {
    color: '#fff',
    fontSize: 12
  },
  txt: {
    fontFamily: 'iconfont'
  }
})


