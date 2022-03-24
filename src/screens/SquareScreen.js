import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	return (
		<View>
			<Text style={[styles.text, { color: 'white' }]}>Change me</Text>
			<ColorCounter
				onIncrease={() => {
					setRed(red + 1);
				}}
				onDecrease={() => {
					setRed(red - 1);
				}}
				color='Red'
			/>
			<ColorCounter
				onIncrease={() => {
					setGreen(green + 1);
				}}
				onDecrease={() => {
					setGreen(green - 1);
				}}
				color='Green'
			/>
			<ColorCounter
				onIncrease={() => {
					setBlue(blue + 1);
				}}
				onDecrease={() => {
					setBlue(blue - 1);
				}}
				color='Blue'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 48,
		fontWeight: 'bold',
		width: '100%',
		textAlign: 'center',
		backgroundColor: `rgb(${red},${green},${blue})`,
	},
});

export default SquareScreen;
