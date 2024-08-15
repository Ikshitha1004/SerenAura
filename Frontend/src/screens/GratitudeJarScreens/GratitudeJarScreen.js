import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const GratitudeJarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.jarContainer}>
        <Image 
          source={require('../../assets/gratitude-jar-icon.png')} // Replace with your jar image
          style={styles.jar}
        />
        <TouchableOpacity
          style={styles.jarButton}
          onPress={() => navigation.navigate('GratitudeList')}
        >
          <Text style={styles.promptText}>Enter Positive Memories</Text>
        </TouchableOpacity>
      </View>
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
  jarContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  jar: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  jarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E6E6FA',
    borderRadius: 5,
  },
  promptText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GratitudeJarScreen;
