import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	// console.log(props.navigation);
	return (
		<View>
			<Text style={styles.text}>This is the first React-native of Veilics</Text>
			<Button
				onPress={() => {
					navigation.navigate('Components');
				}}
				title='Go To Components Demo'
			/>
			<Button
				title='Go to List'
				onPress={() => {
					navigation.navigate('List');
				}}
			/>
			<Button
				title='Go to Image'
				onPress={() => {
					navigation.navigate('Image');
				}}
			/>
			<Button
				title='Go to Test'
				onPress={() => {
					navigation.navigate('Test');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
