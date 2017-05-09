import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Animated
} from 'react-native'
import Icon from '../../components/icon'

const linkList = [
  [
    {icon: 'wallet', color: '#fd9527', title: '我的钱包', after: '办信用卡'},
    {icon: 'balance', color: '#fa9528', title: '余额', after: '0.00'},
    {icon: 'diyongquan', color: '#8b96fc', title: '抵用券', after: '0'},
    {icon: 'card-package', color: '#8b96fc', title: '卡包', after: '0'},
  ],
  [
    {icon: 'user', color: '#6bb7fb', title: '好友去哪'},
    {icon: 'evaluate', color: '#6bb7fb', title: '我的评价'},
    {icon: 'collect', color: '#fd5d6f', title: '我的收藏'},
    {icon: 'vip', color: '#fd5d6f', title: '会员中心', after: 'v1'},
    {icon: 'points-mall', color: '#fd5d6f', title: '积分商城', after: '0元礼包已上线'},
  ],
  [
    {icon: 'user', color: '#6bb7fb', title: '好友去哪'},
    {icon: 'evaluate', color: '#6bb7fb', title: '我的评价'},
    {icon: 'collect', color: '#fd5d6f', title: '我的收藏'},
    {icon: 'vip', color: '#fd5d6f', title: '会员中心', after: 'v1'},
    {icon: 'points-mall', color: '#fd5d6f', title: '积分商城', after: '0元礼包已上线'},
  ],
  [
    {icon: 'user', color: '#6bb7fb', title: '好友去哪'},
    {icon: 'evaluate', color: '#6bb7fb', title: '我的评价'},
    {icon: 'collect', color: '#fd5d6f', title: '我的收藏'},
    {icon: 'vip', color: '#fd5d6f', title: '会员中心', after: 'v1'},
    {icon: 'points-mall', color: '#fd5d6f', title: '积分商城', after: '0元礼包已上线'},
  ],
  [
    {icon: 'customer-service', color: '#86d359', title: '客服中心'},
    {icon: 'cooperation', color: '#6bb7fb', title: '我要合作'},
    {icon: 'about', color: '#21c1ab', title: '关于美团'},
  ]
]

export default class User extends Component {
  /*static navigationOptions = {
    title: 'Home',
    header: () => {
      return <View style={styles.title_header}>
        <View style={styles.title_name}>
          <Icon name="setting" style={styles.title_icon}/>
          <Icon name="notice" style={styles.title_icon}/>
        </View>
      </View>
    }
  }*/
  constructor(props) {
    super(props);
    props.navigator.toggleTabs({
      to: 'shown', 
      animated: true 
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(e) {
    console.log(e)
    if (e.id === 'willAppear') {
      this.props.navigator.toggleTabs({
        to: 'shown', 
        // animated: true 
      });
       this.props.navigator.toggleNavBar({
        to: 'hidden', 
        // animated: true 
      });
    }
    // if (e.id === 'willDisappear') {
    //   this.props.navigator.toggleTabs({
    //     to: 'hidden', 
    //     // animated: true 
    //   });
    // }
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView style={{height: 0}}>
          <View >
          <Header />
          {
            linkList.map((item, index) => {
              return <CardList key={index} list={item} navigation={this.props.navigator}/>
            })
          }
          </View>
        </ScrollView>
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
        <Text style={[styles.username]}>ajb83129066</Text>
        <Text style={[styles.tip]}>个人信息&#xe644;</Text>
      </View>
    </View>
  </TouchableOpacity>
}

const TitleHeader = () => {
  return <View><View></View></View>
}

const link = (navigator) => {
  navigator.push({ screen: 'user.mywallet', animated: true, title: '我的钱包', navigatorStyle: {drawUnderTabBar: true}});
  // navigator.toggleTabs({
  //   to: 'hidden', 
  //   // animated: true 
  // });
}


const CardItem = ({data: {icon, title, after, color}, navigation}) => {
  return <TouchableHighlight onPress={() => link(navigation)}>
    <View style={styles.card_item}>
      <Text><Icon name={icon} style={[{color: color}, {fontSize: 16, marginRight: 10}]} />{title}</Text>
      <Text style={styles.txt}>{after} <Icon name="right-arrow" /></Text>
    </View>
  </TouchableHighlight>
}

const CardList = ({list, navigation}) => {
  return <View style={styles.card_list}>
    { list.map((item, index) => {
      return <CardItem  key={index} data={item} navigation={navigation}/>
    })}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 0,
    backgroundColor: '#f4f4f4'
  },
  title_header: {
    // paddingTop: 20,
    height: 60,
    backgroundColor: '#21c0ad',
    // backgroundColor: 'red',
  },
  title_name: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    flex: 1
  },
  title_icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10
  },
  header: {
    height: 90,
    backgroundColor: '#21c0ad',
    paddingLeft: 10
  },
  header_wrap: {
    flexDirection: 'row',
    marginTop: 8,
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
  card_list: {
    marginBottom: 10
  },
  card_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15
  },
  txt: {
    fontFamily: 'iconfont'
  }
})


