import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SerenAura</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('GratitudeJar')}
      >
        <Image 
          source={require('../assets/gratitude-jar-icon.png')} // Replace with your icon path
          style={styles.icon}
        />
        <Text style={styles.iconText}>Gratitude Jar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#E6E6FA', // Light lavender color for the button
  },
  icon: {
    width: 100,
    height: 100,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
