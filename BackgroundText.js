// components/BackgroundText.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const BackgroundText = () => {
  const textArray = Array(Math.ceil(height / 50)).fill('gotagarms');

  return (
    <View style={styles.container}>
      {textArray.map((text, index) => (
        <Text key={index} style={[styles.text, { color: getColor(index) }]}>
          {text}
        </Text>
      ))}
    </View>
  );
};

const getColor = (index) => {
  const colors = ['rgba(255, 0, 0, 0.1)', 'rgba(0, 255, 0, 0.1)', 'rgba(0, 0, 255, 0.1)', 'rgba(255, 255, 0, 0.1)'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    transform: [{ rotate: '-90deg' }],
    textAlign: 'center',
  },
});

export default BackgroundText;
