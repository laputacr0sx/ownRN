import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
				title='Go to Counter'
				onPress={() => {
					navigation.navigate('Counter');
				}}
			/>
			<Button
				title='Go to CounterReducer'
				onPress={() => {
					navigation.navigate('CounterReducer');
				}}
			/>
			<Button
				title='Go to Color'
				onPress={() => {
					navigation.navigate('Color');
				}}
			/>
			<Button
				title='Go to Adjustable Color'
				onPress={() => {
					navigation.navigate('AdjustableColor');
				}}
			/>
			<Button
				title='Go to Square Screen Old'
				onPress={() => {
					navigation.navigate('SquareOld');
				}}
			/>
			<Button
				title='Go to Square Screen'
				onPress={() => {
					navigation.navigate('Square');
				}}
			/>
			<Button
				title='Go to Text Input'
				onPress={() => {
					navigation.navigate('Text');
				}}
			/>
			<Button
				title='Go to Box Screen'
				onPress={() => {
					navigation.navigate('Box');
				}}
			/>
			<Button
				title='Go to Test'
				disabled
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
