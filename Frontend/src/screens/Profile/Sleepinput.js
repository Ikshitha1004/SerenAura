import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';

const SleepDataInputScreen = ({ navigation }) => {
  const [newSleepHours, setNewSleepHours] = useState('');

  const handleSave = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      Alert.alert('Error', 'You are not authorized');
      return;
    }

    if (!newSleepHours) {
      Alert.alert('Error', 'Please enter the number of sleep hours');
      return;
    }

    const sleepDataRef = doc(db, 'users', currentUser.uid, 'sleepData', 'dailySleepData');

    try {
      const docSnap = await getDoc(sleepDataRef);
      let sleepData = [];

      if (docSnap.exists()) {
        const data = docSnap.data();
        sleepData = data.sleepData || [];
      }

      // Add new sleep hours entry and manage array size
      sleepData.push(parseFloat(newSleepHours));

      if (sleepData.length > 7) {
        sleepData.shift(); // Remove the oldest entry
      }

      await setDoc(sleepDataRef, { sleepData });

      Alert.alert('Success', 'Sleep data saved successfully');
      setNewSleepHours('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save sleep data');
      console.error('Error saving sleep data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Sleep Data</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter hours"
        value={newSleepHours}
        onChangeText={setNewSleepHours}
      />
      <Button title="Save" onPress={handleSave} />
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => navigation.navigate('Sleep')}
      >
        <Text style={styles.trackButtonText}>Track Sleep Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#282C34',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
  trackButton: {
    marginTop: 20,
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SleepDataInputScreen;
