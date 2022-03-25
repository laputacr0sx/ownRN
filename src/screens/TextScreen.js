import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
	return (
		<View>
			<Text style={style.text}>Text Screen</Text>
		</View>
	);
};

const style = StyleSheet.create({
	text: {
		width: '100%',
		textAlign: 'center',
		fontSize: 36,
		fontWeight: 'bold',
	},
});

export default TextScreen;
