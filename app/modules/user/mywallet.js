import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');
export default class User extends Component {
 
  constructor(props) {
    super(props);
    props.navigator.toggleTabs({
      to: 'hidden', 
      // animated: true 
    });
    // props.navigator.setTitle({
    //   title: "Dynamic Title" // the new title of the screen as appears in the nav bar
    // });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(e) {
    if (e.id === 'didAppear') {
      this.props.navigator.toggleTabs({
        to: 'hidden', 
        // animated: true 
      });
      // console.log(this.container)
      // this.container.setNativeProps({
      //   style: {height: height + 40}
      // });
    }
  }
  
  render() {
    
    return (
      <View ref={(ref) => this.container = ref } style={styles.container}>
        <Text>hello world</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: 1000
  },
  
})


