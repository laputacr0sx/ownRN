import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Veilics Ng'
  return (
    <>
      <Text style={styles.first}>Getting started with React Native!</Text>
      <Text style={styles.second}>my name is {myName}</Text>
    </>
  )
};

const styles = StyleSheet.create({
  first: {
    fontSize: 45,
  },
  second:{
    fontSize: 20
  }
});

export default ComponentsScreen;
