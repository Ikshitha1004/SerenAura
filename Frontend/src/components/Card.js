import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Card = ({ icon, description, size = 60 }) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={[styles.icon, { width: size, height: size }]} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f8f9fa',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: 'pink',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // For Android shadow
    width: Dimensions.get('window').width - 40, // Full width minus margin
    height: 100, // Fixed height for consistency
  },
  icon: {
    resizeMode: 'contain',
    marginRight: 15,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flex: 1, // Allows the text to take up the remaining space
  },
});

export default Card;
