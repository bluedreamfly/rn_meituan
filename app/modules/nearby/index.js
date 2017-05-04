import React, { Component } from 'react'
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Animated
} from 'react-native'

const TABS = ['享美食', '住酒店', '爱玩乐', '全部'];
const { width, height } = Dimensions.get('window');
export default class NearBy extends Component {

  constructor(props) {
  	super(props);
  	
  	this.state = {
  		current: 0,
  		left: new Animated.Value(0)
  	}
  }
  
  changeTab(index) {
  	let cur = this.state.current;
  	this.setState({
  		current: index
  	})

  	// Animated.timing(this.state.left, {
  	// 	toValue: cur * width / 4,
  	// 	duration: 2
  	// })
  	Animated.timing(                           
		  this.state.left,                     
		  {
		    toValue: cur * width / 4,                            
		  }
		).start();  
  }

  render() {
  	const { current, left } = this.state;
  	return (
  		<View style={styles.container}>
  		  <View style={styles.tabs_wrap}>
	  			<View style={styles.tabs}>
	  			  { TABS.map((tab, index) => {
	  			  	return <TouchableOpacity onPress={() => {this.setState({current: index})}} style={[styles.tab]}>
	  			  		<View key={index} >
		  						<Text style={index == current ? [styles.tab_active]: []}>{tab}</Text>
		  					</View>	
		  				</TouchableOpacity>
	  			  })}
  			  </View>
  			  <View style={[styles.tab_line, { left: left}]}></View>
  			</View>
  		</View>
  	)
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f4',
		marginTop: 22
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
	}
})

