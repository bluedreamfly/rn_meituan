import { View, StyleSheet } from 'react-native'

export default ({tags}) => {
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

const styles = StyleSheet.create({
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