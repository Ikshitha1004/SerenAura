import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../configs/firebaseConfig'; // Adjust the path as needed
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import moment from 'moment'; // Import moment for date validation

const AddEventScreen = ({ route }) => {
  const { setEvents } = route.params; // Get params from navigation

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const navigation = useNavigation();

  const handleSaveEvent = async () => {
    if (!title || !description || !date || !location) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Validate date format (YYYY-MM-DD)
    if (!moment(date, 'YYYY-MM-DD', true).isValid()) {
      Alert.alert('Error', 'Please enter a valid date in the format YYYY-MM-DD');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'events'), {
        title,
        description,
        date,
        location,
        postedAt: Timestamp.now(),
      });

      // Optionally update local state (if you want immediate UI update)
      setEvents(prevEvents => [
        ...prevEvents,
        {
          id: docRef.id,
          title,
          description,
          date,
          location,
        },
      ]);

      navigation.navigate('Community');
    } catch (error) {
      Alert.alert('Error', 'Failed to save event. Please try again later.');
      console.error("Error adding document: ", error); // Log error for debugging
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Add New Event</Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveEvent}>
          <Text style={styles.saveButtonText}>Save Event</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEventScreen;
