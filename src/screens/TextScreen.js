import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text style={style.title}>Text Screen</Text>
			<Text>Enter Password bellow:</Text>
			<TextInput
				style={style.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => {
					setPassword(newValue);
				}}
			/>
			{password.length < 5 ? (
				<Text>password must be longer than 5 characters</Text>
			) : null}
		</View>
	);
};

const style = StyleSheet.create({
	title: {
		width: '100%',
		textAlign: 'center',
		fontSize: 36,
		fontWeight: 'bold',
	},
	input: { margin: 15, borderWidth: 1, color: 'black' },
	text: {
		fontSize: 20,
		margin: 20,
		textAlign: 'left',
	},
});

export default TextScreen;
