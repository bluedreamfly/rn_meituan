import React, { Component } from 'react'
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Animated,
	FlatList
} from 'react-native'

const TABS = ['享美食', '住酒店', '爱玩乐', '全部'];
const TAG_CATE = ['eat', 'live', 'play', 'all'];
const TAGS = {
	eat: ['热门', '小吃快餐', '面包甜点', '川菜', '江浙菜', '日本料理', '北京菜', '韩国料理'],
	live: ['热门', '汉庭', '素吧', '豪华大酒店', '东方明珠', '日本料理', '北京菜', '韩国料理'],
	play: ['热门', '迪士尼乐园', '太姥山一日游', '和啊哈', '玩嗨了', '日本料理', '北京菜', '韩国料理'],
	all: ['全部', '全部', '全部', '全部', '全部']
}
const { width, height } = Dimensions.get('window');
export default class NearBy extends Component {

  constructor(props) {
  	super(props);
  	
  	this.state = {
  		current: 0,
  		pos: new Animated.Value(0),
  		// list: [{key: '1'}, {key: '2'},{key: '3'},{key: '4'}],
      listData: {
        eat: {
          list: [{key: '1'}, {key: '2'},{key: '3'},{key: '4'}],
          refresh: true
        },
        live: {
          list: [{key: '1'}, {key: '2'},{key: '3'},{key: '4'}],
          refresh: true
        },
        play: {
          list: [{key: '1'}, {key: '2'},{key: '3'},{key: '4'}],
          refresh: true
        },
        all: {
          list: [{key: '1'}, {key: '2'},{key: '3'},{key: '4'}],
          refresh: true
        },
      }
  	}
  }
  
  changeTab(index) {
    let { listData } = this.state;
    listData[TAG_CATE[index]].refresh = false;
  	this.setState({
  		current: index,
      listData: listData
  	})

  	Animated.timing(                           
		  this.state.pos,                     
		  {
		    toValue: index,
		    duration: 300                            
		  }
		).start();
  }

  loadMore() {

  }

  // componentDidMount

  render() {
  	const { current, pos, listData } = this.state;
  	let lineLeft = pos.interpolate({
	    inputRange: [0, 1, 2, 3],
	    outputRange: [0, width /4, 2 * width / 4, 3* width / 4]
	  });
	  let listLeft = pos.interpolate({
	    inputRange: [0, 1, 2, 3],
	    outputRange: [0, -width, -2 * width, -3 * width]
	  });
  	return (
  		<View style={styles.container}>
  		  <View style={styles.tabs_wrap}>
	  			<View style={styles.tabs}>
	  			  { TABS.map((tab, index) => {
	  			  	return <TouchableOpacity key={index} onPress={() => {this.changeTab(index)}} style={[styles.tab]}>
	  			  		<View  >
		  						<Text style={index == current ? [styles.tab_active]: []}>{tab}</Text>
		  					</View>	
		  				</TouchableOpacity>
	  			  })}
  			  </View>
  			  <Animated.View style={[styles.tab_line, { transform: [{translateX: lineLeft}]}]}></Animated.View>
  			</View>
        
        <Animated.View style={[styles.list_wrap, {left: listLeft }]}>
          { TAG_CATE.map((cate, index) => {
          	return <View style={[styles.list]} key={index} >
	          	<List list={listData[cate]} cate={cate} />
			      </View>	
          })}
        	
        </Animated.View>
  			

  			
  		</View>
  	)
  }
}

const ListHeader = ({tags}) => {
	return (
		<View style={styles.tags}>
		  { 
		  	/*TAGS[TAG_CATE[current]]*/tags.map((tag, index) => {
			  	return <View style={styles.tag} key={index}>
			  		<Text style={styles.tag_name}>{tag}</Text>
			  	</View>
			  })
		  }
		</View>
	)
}

const List = ({list, cate}) => {
	return <FlatList
						data={list.list}
						pagingEnabled={true}
						refreshing={list.refresh}
						onEndReachedThreshold={0.5}
						onRefresh={() => console.log('refresh')}
						ListHeaderComponent={() => ListHeader({tags: TAGS[cate]})}
						ItemSeparatorComponent={ListItemSeparator}
						renderItem={ListItem}
					/>
}

const ListItem = () => {
	return (
		<View style={{height: 40}}><Text>hell world</Text></View>
	)
}

const ListItemSeparator = () => {
  return <View style={{height: 1, backgroundColor: '#ebebeb'}}></View>
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f4',
		marginTop: 22,
    overflow: 'hidden'
	},
	tabs: {
		flexDirection: 'row',
		// height: 80,
		backgroundColor: '#fff',
	},
	tabs_wrap: {
		
	},
	tab: {
		flex: 1,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tab_active: {
		color: '#fc6a80',
		borderBottomWidth: 1,
		borderColor: '#fc6a80'
	},
	tab_line: {
		position: 'absolute',
		bottom: 0,
		height: 2,
		width: width / 4,
		backgroundColor: '#fc6a80'
	},
	list_wrap: {
		flexDirection: 'row',
		width: width * 4,
		flex: 1
	},
	list: {
		// position: 'absolute',
		// zIndex: 1,

		width: width,
		// flex: 1
	},
	tags: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		padding: 10
	},
	tag: {
		width: 87,
		height: 27,
		borderRadius: 20,
		borderColor: '#e8e8e9',
		alignItems: 'center',
		marginBottom: 10,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	tag_name: {
		color: '#9e9e9e'
	}
})

