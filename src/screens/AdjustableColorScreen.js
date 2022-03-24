import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

const AdjustableColorScreen = () => {
	const [red, setRed] = useState(randomRGB()[0]);
	const [green, setGreen] = useState(randomRGB()[1]);
	const [blue, setBlue] = useState(randomRGB()[2]);

	return (
		<View>
			<Button title='Hello World!' color='black'></Button>
			<Text
				style={{
					height: 50,
					borderRadius: 15,
					width: '100%',
					textAlign: 'center',
					fontSize: 30,
					backgroundColor: `rgb(${red},${green},${blue})`,
				}}>
				R{red} G{green} B{blue}
			</Text>

			<View>
				<Text style={styles.text}>Red</Text>
				<Button
					title='More Red'
					onPress={() => {
						setRed(red + 1);
					}}></Button>
				<Button
					title='Less Red'
					onPress={() => {
						setRed(red - 1);
					}}></Button>
			</View>

			<View>
				<Text style={[styles.text]}>Green</Text>
				<Button
					title='More Green'
					onPress={() => {
						setGreen(green + 1);
					}}></Button>
				<Button
					title='Less green'
					onPress={() => {
						setGreen(green - 1);
					}}></Button>
			</View>

			<View>
				<Text style={styles.text}>Blue</Text>
				<Button
					title='More Blue'
					onPress={() => {
						setBlue(blue + 1);
					}}></Button>
				<Button
					title='Less blue'
					onPress={() => {
						setBlue(blue - 1);
					}}></Button>
			</View>
		</View>
	);
};

const randomRGB = () => {
	const red = Math.floor(Math.random() * 255) + 1;
	const green = Math.floor(Math.random() * 255) + 1;
	const blue = Math.floor(Math.random() * 255) + 1;

	return [red, green, blue];
};

const styles = StyleSheet.create({
	title: {
		fontSize: 36,
		fontWeight: 'bold',
		width: '100%',
		textAlign: 'center',
		marginVertical: 20,
	},
	text: {
		fontSize: 24,
		width: '100%',
		textAlign: 'center',
	},
});

export default AdjustableColorScreen;
