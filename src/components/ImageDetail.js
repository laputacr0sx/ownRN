import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
	return (
		<View>
			<Image style={styles.image} source={imageSource} />
			<Text>The above is an image of {title}</Text>
			<Text>Image Score - {imageScore}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 100,
		width: 200,
	},
});

export default ImageDetail;
