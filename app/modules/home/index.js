import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  Image,
  FlatList,
  Animated
} from 'react-native';

import data from '../../../data/home.json'
let {data: {homepage, activity, likes}} = data
const { width, height } = Dimensions.get('window');

likes = likes.map(like => {
  like.key = like.id;
  return like;
})
export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      y: new Animated.Value(0)
    }
  }   

	render() {
    return (
      <View style={styles.container}>
        <HomeHeader y={this.state.y}/>
        <Animated.ScrollView 
          scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.y } } }],
              
            )
          }
        > 
          <View style={{height: 100, backgroundColor: 'green'}}></View>
          <Slider />
          <Activity />
          <FlatList
            data={likes}
            ListHeaderComponent={ListHeader}
          	renderItem={thinkYouLike}
          />
        </Animated.ScrollView>
      </View>
    );
  }

  _onScroll() {
    
  }
}

const HomeHeader = ({y}) => {
  let opacity = y.interpolate({
    inputRange: [0, 200, 300],
    outputRange: ['rgba(0, 0, 0, 0)', '#20c0ad', '#20c0ad'],
  });
  console.log('aaaaa', y)
	return (
		<Animated.View style={[styles.header, {backgroundColor: opacity}]}>
      <View style={styles.header_wrap}>
        <Text style={[styles.text, styles.address]}>杭州&#xe632;</Text>
        <View style={styles.search}><Text style={[styles.text, styles.search_txt]}>&#xe630;火锅</Text></View>
        <Text style={[styles.text, styles.code]}>&#xe770;</Text>
        <View style={styles.header_wrap}><Text style={[styles.text, styles.notice]}>&#xe6c4;</Text></View>
      </View>
    </Animated.View>
	)
}

const Slider = () => {
	return (
		<View style={[styles.slider, {width}]}>
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.slide}>
          
          { homepage.slice(0, 10).map((item, index) => {

            return <View style={[styles.type, {width: width / 5}]} key={index}>
              <Image 
                source={{uri: item.iconUrl}} 
                style={{width: 45, height: 45, marginBottom: 5}}/>
              <Text style={styles.type_name}>{item.name}</Text>
            </View>
          })}
          
        </View>
        <View style={styles.slide}>
          { homepage.slice(10, 20).map((item, index) => {

            return <View style={[styles.type, {width: width / 5}]} key={index}>
              <Image 
                source={{uri: item.iconUrl}} 
                style={{width: 45, height: 45, marginBottom: 5}}/>
              <Text style={styles.type_name}>{item.name}</Text>
            </View>
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const Activity = () => {
	return (
    <View style={styles.activity}>
      {
        activity.map((item, index) => {
          return <View key={index} style={[styles.activity_item, {width: index < 3 ? width / 3 : width / 4}]}>
            <Text style={styles.sup_title}>{item.supTitle}</Text>
            <Text style={[{color: item.titleColor}, styles.title]}>{item.title}</Text>
            <Image 
              source={{uri: item.iconUrl}} 
              style={{width: 45, height: 45}}
            />
          </View>
        })
      }
    </View>
  )
} 

const thinkYouLike = ({item}) => {
	return (
		<View style={styles.like_list_item}>
			<Image 
				source={{uri: 'http://p1.meituan.net/100.0/deal/caffa7440cac3a82555ec5791ace77ef21445.jpg'}} 
				style={{width: 95, height: 95, marginRight: 10}}
			/>
			<View style={styles.like_info}>
				<View style={styles.like_title}>
					<Text style={styles.like_name}>{item.name}</Text>
					<Text >{item.dist}km</Text>
				</View>
        
				<Text style={styles.like_des}>{item.des}</Text>
        
				<View style={styles.like_footer}>
					<View style={styles.like_price}>
            <Text style={styles.like_now_price}>{item.price}</Text>
            <Text style={styles.retail_price}>门市价：{item.retailPrice}</Text>
          </View>
					<Text>已售{item.sold}</Text>
				</View>
			</View>
		</View>
  )
} 

const ListHeader = () => {
  return (
    <View style={styles.list_header}>
      <View style={styles.list_title_line}>
        <Text style={styles.list_title_name}>猜你喜欢</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: width,
    height: 60,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 8,
    // backgroundColor: '#21c0ad',
  },
  header_wrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'iconfont',
    color: '#fff',
    
  },
  address: {
    marginRight: 14
  },
  search: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 28,
    marginRight: 10
  },
  search_txt: {
    color: '#b1b0b1'
  },
  code: {
    padding: 0,
    fontSize: 20,
    // marginTop: 5,
    marginRight: 14
  },
  notice: {
    padding: 0,
    fontSize: 20,
    fontWeight: '700'
  },
  slider: {
    flexDirection: 'row',
    height: 195
  },
  slide: {
    flexDirection: 'row',
    width: width,
    paddingTop: 20,
    flexWrap: 'wrap',
    backgroundColor: '#fff'
    // backgroundColor: 'red'
  }, 
  type: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 64,
    marginBottom: 18
    // justifyContent: 'center'
  },
  type_name: {
    
  },
  activity: {

    flexDirection: 'row',
    width: width,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    marginTop: 9,
    marginBottom: 10
  },
  activity_item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 125,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ebebeb'  

  },
  sup_title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  },
  title: {
    fontSize: 12,
    marginBottom: 14,
    fontWeight: "600"
  },
  tab_icon: {
    fontFamily: 'iconfont', 
    fontSize: 20
  },
  like_list_item: {
    flex: 1,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: '#ebebeb',
		padding: 10,
		backgroundColor: '#fff'
  },
  like_info: {
  	flex: 1,
    // alignItems: 'center',
		justifyContent: 'center',
		
  },
  like_title: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	// alignItems: 'center',
    marginBottom: 6
  	//textAlignVertical: 'bottom'
  },
  like_name: {
		fontSize: 18,
		// lineHeight: 36
  },
  like_des: {

		fontSize: 14,
		lineHeight: 20,
    marginBottom: 5
  },
  like_footer: {
  	flexDirection: 'row',
		justifyContent: 'space-between',
    alignItems: 'center'
  },
  like_price: {
  	flexDirection: 'row',
    alignItems: 'center'
  },
  like_now_price: {
    fontSize: 24,
    color: '#20c0ad',
    fontWeight: '700',
    marginRight: 5,
    // lineHeight: 24,
    textAlignVertical: 'bottom'
  },
  retail_price: {
    // position: 'absolute',
    // bottom: 0,
    // left: 60,
    // textAlignVertical: 'bottom'
  },
  list_header: {
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list_title_line: {
    width: 92,
    borderTopWidth: 1,
    borderColor: '#c4c4c4',
    alignItems: 'center'
  },
  list_title_name: {
    position: 'absolute',
    top: -8,
    width: 70,
    textAlign: 'center',
    backgroundColor: '#fff'
  }
});
