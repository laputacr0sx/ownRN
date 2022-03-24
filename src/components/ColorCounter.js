import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text style={[styles.text, { color: `${color.toLowerCase()}` }]}>
				{color}
			</Text>
			<Button
				title={`Increase ${color}`}
				onPress={() => {
					onIncrease();
				}}></Button>
			<Button
				title={`Decrease ${color}`}
				onPress={() => {
					onDecrease();
				}}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	text: { textAlign: 'center', fontSize: 24, padding: 10 },
});

export default ColorCounter;
