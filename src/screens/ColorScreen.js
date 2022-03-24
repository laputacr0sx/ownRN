import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View style={{ display: 'flex' }}>
			<Text style={styles.title}>Color</Text>
			<Button
				title='Add a color'
				onPress={() => {
					setColors([randomRGB(), ...colors]);
				}}
			/>
			<Button
				title='Reset colors'
				onPress={() => {
					setColors([]);
				}}
			/>
			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								height: 64,
								width: '100%',
								backgroundColor: item,
							}}
						/>
					);
				}}
			/>
		</View>
	);
};

const randomRGB = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		width: '100%',
		textAlign: 'center',
	},
	text: {},
});

export default ColorScreen;
