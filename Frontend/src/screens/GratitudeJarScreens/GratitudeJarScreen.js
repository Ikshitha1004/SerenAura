import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const GratitudeJarScreen = () => {
  const [gratitudeList, setGratitudeList] = useState([]);
  const [newGratitude, setNewGratitude] = useState('');

  const addGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeList([...gratitudeList, newGratitude.trim()]);
      setNewGratitude('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.jarsContainer}>
        <View style={styles.jar}>
          {/* Simulated jar */}
          <View style={styles.jarBody} />
          <View style={styles.jarLid} />
        </View>
        <Text style={styles.title}>Your Gratitude Jar</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add something you're grateful for..."
          value={newGratitude}
          onChangeText={setNewGratitude}
        />
        <Button title="Add" onPress={addGratitude} />
      </View>

      <View style={styles.list}>
        {gratitudeList.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Light background color
  },
  jarsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  jar: {
    width: 100,
    height: 150,
    position: 'relative',
    alignItems: 'center',
  },
  jarBody: {
    width: '80%',
    height: '80%',
    backgroundColor: '#FADADD', // Light pink color
    borderRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  jarLid: {
    width: '90%',
    height: 30,
    backgroundColor: '#FADADD', // Same light pink color
    borderRadius: 15,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default GratitudeJarScreen;
