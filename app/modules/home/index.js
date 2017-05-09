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
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let {data: {homepage, activity, likes}} = data
const { width, height } = Dimensions.get('window');



// newlikes = likes.slice().map(like => {
//   like.key = like.id;
//   return like;
// })

const addLike = () => {
  let result = [];
  for(let i = 0; i < 10; i++) {
    let obj = {
      "name": "汇合国际影城",
      "dist": "10.5",
      "des": "[宋城] 杭州宋城景区门票+19:20贵宾席成人票，请至少当天9点前购买",
      "price": 290,
      "retailPrice": 310,
      "sold": 1022
    }
    let id = parseInt(Math.random() * 1000000);
    
    // obj.key = id;
    obj.id = id; 

    result.push(obj)
  }

  return result
}

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      y: new Animated.Value(0),
      list: likes
    }
    // props.navigator.toggleNavBar({
    //   to: 'hidden'
    // });
  }   
  
  loadMore(info) {

    let list = this.state.list.slice(0);
    let nowList = addLike(list);
    list.push(...nowList);
    console.log(list)
    if (list.length > 20) return;
    this.setState({
      list: list
    })

    // this.setState((prevState, props) => {
    //   let { list }  = prevState;
    //   console.log(list);
    //   let newList = list.slice();
    //   let nowList = addLike(newList);
    //   console.log(list.push(nowList))
    //   return {list: list};
    // })
  }

	render() {
    return (
      <View style={styles.container}>
        <HomeHeader y={this.state.y}/>
        <AnimatedFlatList
          data={this.state.list}
          scrollEventThrottle={1}
          style={{height: 0, marginBottom: 50}}
          onScroll = {
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.y } } }],
              {useNativeDriver: true}
            )
          }
          keyExtractor={item => item.id}
          refreshing={false}
          onEndReachedThreshold={0.5}
          onRefresh={() => console.log('refresh')}
          onEndReached={this.loadMore.bind(this)}
          ListHeaderComponent={ListHeader}
          ItemSeparatorComponent={ListItemSeparator}
        	renderItem={thinkYouLike}
        />
      </View>
    );
  }

  _onScroll() {
    
  }
}

const HomeHeader = ({y}) => {
  // let opacity = y.interpolate({
  //   inputRange: [0, 200, 300],
  //   outputRange: ['rgba(0, 0, 0, 0)', '#20c0ad', '#20c0ad'],
  // });
  let opacity = y.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1]
  });
  console.log('aaaaa', y)
	return (
		<Animated.View style={[styles.header]}>
      <Animated.View style={[styles.header_layer, { opacity: opacity}]}></Animated.View>
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
    <View>
      <Image 
        source={{uri: 'http://p1.meituan.net/codeman/b7241aa85b613bdcc77c1b9b1592b7ed477488.png'}}
        style={{width: width, height: 180}}
      />
      <Slider />
      <Activity />
      <View style={styles.list_header}>
        <View style={styles.list_title_line}>
          <Text style={styles.list_title_name}>猜你喜欢</Text>
        </View>
      </View>
    </View>
  )
}

const ListItemSeparator = () => {
  return <View style={{height: 1, backgroundColor: '#ebebeb'}}></View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 200,
    flex: 1,
    height: height,
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
    backgroundColor: 'transparent'
  },
  header_layer: {
    height: 60,
    position: 'absolute',
    width: width,
    backgroundColor: '#21c0ad',
    opacity: 0
  },
  header_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
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
		// borderTopWidth: 1,
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
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
