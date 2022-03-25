import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Value } from 'react-native-reanimated';

const COUNT_CHANGE = 1;

const reducer = (state, action) => {
	// state === {counter: number}
	// action === {type: 'increment' || 'decrement', payload: 1}

	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.payload };
		case 'decrement':
			return state.count + action.payload < 0
				? state
				: { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};

const CounterScreenReducer = () => {
	const [state, dispatch] = useReducer(reducer, {
		count: Math.floor(Math.random() * 10),
	});
	const { count } = state;

	return (
		<View>
			<Button
				title={`Increase by ${COUNT_CHANGE}`}
				color={'green'}
				onPress={() =>
					dispatch({ type: 'increment', payload: COUNT_CHANGE })
				}></Button>

			<Button
				title={`Decrease by ${COUNT_CHANGE}`}
				color={'red'}
				onPress={() =>
					dispatch({ type: 'decrement', payload: COUNT_CHANGE })
				}></Button>

			<Text style={style.text}>Current Count {count} </Text>
		</View>
	);
};

const style = StyleSheet.create({
	text: {
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
		width: '100%',
	},
});

export default CounterScreenReducer;
