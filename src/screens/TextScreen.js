import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const TextScreen = () => {
	return (
		<View>
			<Text style={style.text}>Text Screen</Text>
			<TextInput style={style.input} />
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
	input: { margin: 15, borderColor: 'black', borderWidth: 1 },
});

export default TextScreen;
