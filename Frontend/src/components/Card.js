import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Card = ({ icon, description }) => {
  return (
    <View style={styles.card}>
      <FontAwesome name={icon} size={50} color="black" style={styles.icon} />
      <Text style={styles.description}>{description}</Text>
    </View>
   
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 2,
    width: '94%', // Adjusted to fit two cards in a row
  },
  icon: {
    marginRight: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;
