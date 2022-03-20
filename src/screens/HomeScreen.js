import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={styles.text}>This is the first React-native of Veilics</Text>
			<Button
				onPress={() => {
					console.log('Button Pressed');
				}}
				title='Go To Components Demo'
			/>
			<TouchableOpacity
				onPress={() => {
					console.log('List Pressed');
				}}>
				<Text>Go To List Demo</Text>
				<Text>Go To List Demo</Text>
				<Text>Go To List Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
