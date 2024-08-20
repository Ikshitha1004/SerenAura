import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import GroundingTechniqueCard from '../../components/GroundingTechniqueCard';
import groundingTechniques from '../../data/groundingTechniques';

const GroundingTechniquesScreen = () => {
  const [technique, setTechnique] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomTechnique = () => {
    if (groundingTechniques.length === 0) {
      alert('No techniques available');
      return;
    }
    setIsLoading(true);
    const shuffled = groundingTechniques.sort(() => 0.5 - Math.random());
    const randomTechnique = shuffled[0];
    setTechnique(randomTechnique);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={generateRandomTechnique}
      >
        <Text style={styles.buttonText}>Generate Technique</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fc6c85" style={styles.loadingIndicator} />
      ) : (
        technique && <GroundingTechniqueCard technique={technique} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#FFC0CB',
  },
  button: {
    backgroundColor: '#fc6c85',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default GroundingTechniquesScreen;