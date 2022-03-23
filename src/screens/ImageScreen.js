import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title='forest'
				imageSource={require('../../assets/forest.jpg')}
				imageScore={5}
			/>
			<ImageDetail
				title='sea'
				imageSource={require('../../assets/sea.jpg')}
				imageScore={9}
			/>
			<ImageDetail
				title='beach'
				imageSource={require('../../assets/beach.jpg')}
				imageScore={1}
			/>
			<ImageDetail
				title='cloud'
				imageSource={require('../../assets/cloud.jpg')}
				imageScore={8}
			/>
			<ImageDetail
				title='mountain'
				imageSource={require('../../assets/mountain.jpg')}
				imageScore={6}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default ImageScreen;
