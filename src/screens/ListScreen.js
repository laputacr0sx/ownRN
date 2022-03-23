import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Friend1', age: 20 },
		{ name: 'Friend2', age: 53 },
		{ name: 'Friend3', age: 33 },
		{ name: 'Friend4', age: 56 },
		{ name: 'Friend5', age: 67 },
		{ name: 'Friend6', age: 91 },
		{ name: 'Friend7', age: 21 },
		{ name: 'Friend8', age: 12 },
		{ name: 'Friend9', age: 74 },
	];

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			KeyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age{item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: { marginVertical: 15 },
});

export default ListScreen;
