import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

const AdjustableColorScreen = () => {
	const [red, setRed] = useState(randomRGB()[0]);
	const [green, setGreen] = useState(randomRGB()[1]);
	const [blue, setBlue] = useState(randomRGB()[2]);

	return (
		<View>
			<Button
				title='Hello World!'
				color={`rgb(${red},${green},${blue})`}></Button>
			<Text
				style={{
					height: 50,
					width: '100%',
					textAlign: 'center',
					fontSize: 30,
					backgroundColor: `rgb(${red},${green},${blue})`,
				}}>
				R{red} G{green} B{blue}
			</Text>

			<View>
				<Text
					style={[
						styles.text,
						{ color: 'white', backgroundColor: `rgb(${red},0,0)` },
					]}>
					Red
				</Text>
				<Button
					title='More Red'
					color='red'
					onPress={() => {
						setRed(red + 1);
					}}></Button>
				<Button
					title='Less Red'
					color='red'
					onPress={() => {
						setRed(red - 1);
					}}></Button>
			</View>

			<View>
				<Text
					style={[
						styles.text,
						{ color: 'white', backgroundColor: `rgb(0,${green},0)` },
					]}>
					Green
				</Text>
				<Button
					title='More Green'
					color='green'
					onPress={() => {
						setGreen(green + 1);
					}}></Button>
				<Button
					title='Less green'
					color='green'
					onPress={() => {
						setGreen(green - 1);
					}}></Button>
			</View>

			<View>
				<Text
					style={[
						styles.text,
						{ color: 'white', backgroundColor: `rgb(0,0,${blue})` },
					]}>
					Blue
				</Text>
				<Button
					title='More Blue'
					color='blue'
					onPress={() => {
						setBlue(blue + 1);
					}}></Button>
				<Button
					title='Less blue'
					color='blue'
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
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10,
	},
});

export default AdjustableColorScreen;
