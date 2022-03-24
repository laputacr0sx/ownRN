import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button
				title='Increase'
				color={'green'}
				onPress={() => {
					setCounter(counter + 1);
				}}></Button>
			<Button
				title='Decrease'
				color={'red'}
				onPress={() => {
					setCounter(counter - 1);
				}}></Button>
			<Text style={style.text}>Current Count {counter} </Text>
		</View>
	);
};

const style = StyleSheet.create({
	text: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		width: '100%',
	},
});

export default CounterScreen;
