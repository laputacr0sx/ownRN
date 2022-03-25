import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		switch (color) {
			case 'red':
				return red + change > 255 || red + change < 0
					? null
					: setRed(red + change);

			case 'green':
				return green + change > 255 || green + change < 0
					? null
					: setGreen(green + change);

			case 'blue':
				return blue + change > 255 || blue + change < 0
					? null
					: setBlue(blue + change);
			default:
				return;
		}
	};

	return (
		<View>
			<Text
				style={[
					styles.title,
					{ color: 'white', backgroundColor: `rgb(${red},${green},${blue})` },
				]}>
				Change me {`R${red}G${green}B${blue}`}
			</Text>
			<ColorCounter
				onIncrease={() => {
					setColor('red', COLOR_INCREMENT);
				}}
				onDecrease={() => {
					setColor('red', -1 * COLOR_INCREMENT);
				}}
				color='Red'
			/>
			<ColorCounter
				onIncrease={() => {
					setColor('green', COLOR_INCREMENT);
				}}
				onDecrease={() => {
					setColor('green', -1 * COLOR_INCREMENT);
				}}
				color='Green'
			/>
			<ColorCounter
				onIncrease={() => {
					setColor('blue', COLOR_INCREMENT);
				}}
				onDecrease={() => {
					setColor('blue', -1 * COLOR_INCREMENT);
				}}
				color='Blue'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		width: '100%',
		textAlign: 'center',
	},
});

export default SquareScreen;
