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
    padding: 15,
    backgroundColor: '#f8f9fa',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    width: Dimensions.get('window').width - 60,
    height: 80, 
  },
  icon: {
    resizeMode: 'contain',
    marginRight: 15,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
});

export default Card;
