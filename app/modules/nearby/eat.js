import {
  FlatList,
  StyleSheet,
  Image
} from 'react-native'

import ListHeader from './listHeader'

export default  ({list, cate}) => {
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
  return <View>
    <Image 
      source={{uri: 'http://p1.meituan.net/100.0/deal/caffa7440cac3a82555ec5791ace77ef21445.jpg'}} 
      style={{width: 95, height: 95, marginRight: 10}}
    />
    <View>
      <Text>正新鸡排(仓新店)</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({

})

