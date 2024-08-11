import React from 'react';
import { View, StyleSheet } from 'react-native';

const GratitudeIcon = ({ color }) => {
  return <View style={[styles.icon, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default GratitudeIcon;
